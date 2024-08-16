package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.CsvHelper;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
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
    StudentRepository studentRepository;
    @Autowired
    MentorRepository mentorRepository;
    @Autowired
    FacultyRepository facultyRepository;

    @Override
    public void save(MultipartFile file) {
        try {
            Object[] csvObjects = CsvHelper.csvToObjects(file.getInputStream());
            List<Student> students = (List<Student>) csvObjects[0];
            Set<Mentor> mentors = (Set<Mentor>) csvObjects[1];
            Set<Faculty> faculties = (Set<Faculty>) csvObjects[2];
            studentRepository.saveAll(students); // conversion to list needed as returning an array
            mentorRepository.saveAll(mentors);
            facultyRepository.saveAll(faculties);

        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: "+e.getMessage());
        }
    }
}
