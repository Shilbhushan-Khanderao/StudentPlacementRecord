package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.StudentHelper;
import com.cdac.placement.model.Batch;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
import com.cdac.placement.repository.BatchRepository;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.repository.MentorRepository;
import com.cdac.placement.repository.StudentRepository;
import com.cdac.placement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private BatchRepository batchRepository;
    @Autowired
    private MentorRepository mentorRepository;
    @Autowired
    private FacultyRepository facultyRepository;

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    @Override
    public Student getStudent(Long studentId) {
        try {
            Optional<Student> opt = studentRepository.findById(studentId);
            return opt.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public boolean deleteAllStudents() {
        try {
            studentRepository.deleteAll();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    @Override
    public boolean addStudent(Student student) {
        try {
            Optional<Student> optionalStudent = studentRepository.findById(student.getId());
            Mentor mentor = StudentHelper.getOrCreateMentorForStudent(student.getMentor(), mentorRepository);
            Faculty faculty = StudentHelper.getOrCreateFacultyForStudent(student.getFaculty(), facultyRepository);
            Batch batch = StudentHelper.getOrCreateBatchForStudent(student.getBatch(), batchRepository);
            if (optionalStudent.isPresent())
                return false;
            student.setBatch(batch);
            student.setMentor(mentor);
            student.setFaculty(faculty);
            studentRepository.save(student);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateStudent(Student student) {
        try {
            Optional<Student> opt = studentRepository.findById(student.getId());

            if(opt.isPresent()){
                studentRepository.save(student);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteStudent(Long studentId) {
        try {
            Optional<Student> opt = studentRepository.findById(studentId);
            if (opt.isPresent()){
                studentRepository.deleteById(studentId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
