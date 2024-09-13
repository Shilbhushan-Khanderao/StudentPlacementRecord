package com.cdac.placement.service;

import com.cdac.placement.model.PlacedStudent;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PlacedStudentService {

    List<PlacedStudent> getAllPlacedStudents();
    PlacedStudent getPlacedStudent(Long studentId);
    boolean addPlacedStudent(PlacedStudent student);
    boolean updatePlacedStudent(PlacedStudent student);
    boolean deletePlacedStudent(Long id);

}
