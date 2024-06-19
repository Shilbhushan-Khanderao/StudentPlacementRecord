package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.CsvHelper;
import com.cdac.placement.model.Student;
import com.cdac.placement.repository.StudentRepository;
import com.cdac.placement.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CsvServiceImpl implements CsvService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public void save(MultipartFile file) {
        try {
            List<Student> students = CsvHelper.csvToStudents(file.getInputStream());
            studentRepository.saveAll(students);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: "+e.getMessage());
        }
    }
}
