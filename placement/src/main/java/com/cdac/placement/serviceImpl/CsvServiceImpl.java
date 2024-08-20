package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.CsvContent;
import com.cdac.placement.helper.CsvHelper;
import com.cdac.placement.model.Batch;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
import com.cdac.placement.repository.BatchRepository;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.repository.MentorRepository;
import com.cdac.placement.repository.StudentRepository;
import com.cdac.placement.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

@Service
public class CsvServiceImpl implements CsvService {
    @Autowired
    BatchRepository batchRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    MentorRepository mentorRepository;
    @Autowired
    FacultyRepository facultyRepository;

    @Override
    public void save(MultipartFile file, String name, String batchName) {
        try {
            Batch batch;
            if(name != null && batchName != null) {
                if(batchRepository.existsByName(name))
                    batch = batchRepository.findByName(name);
                else
                    batch = batchRepository.save(new Batch(name, batchName));
            } else {
                batch = null;
            }

            CsvContent csvContent = CsvHelper.csvToContent(file.getInputStream(), mentorRepository, facultyRepository);

            List<Student> students = csvContent.getStudents();
            Set<Mentor> mentors = csvContent.getMentors();
            Set<Faculty> faculties = csvContent.getFaculties();

            CsvHelper.associateBatch(students, batch);
            studentRepository.saveAll(students);


            mentorRepository.saveAll(mentors);
            facultyRepository.saveAll(faculties);

        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: "+e.getMessage());
        }
    }
}
