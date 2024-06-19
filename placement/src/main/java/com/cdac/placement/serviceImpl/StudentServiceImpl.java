package com.cdac.placement.serviceImpl;

import com.cdac.placement.model.Student;
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

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    @Override
    public Student getStudent(int studentId) {
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
            Optional<Student> opt = studentRepository.findById(student.getId());
            if (opt.isPresent())
                return false;
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
    public boolean deleteStudent(Integer studentId) {
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
