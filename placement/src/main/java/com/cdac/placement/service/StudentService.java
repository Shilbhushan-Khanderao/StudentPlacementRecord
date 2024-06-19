package com.cdac.placement.service;

import com.cdac.placement.model.Student;

import java.util.List;

public interface StudentService {

    public Student getStudent(int studentId);
    public List<Student> getAllStudents();
    public boolean deleteAllStudents();
    public boolean addStudent(Student student);
    public boolean updateStudent(Student student);
    public boolean deleteStudent(Integer studentId);

}
