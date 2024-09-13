package com.cdac.placement.repository;

import com.cdac.placement.model.PlacedStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlacedStudentRepository  extends JpaRepository<PlacedStudent, Long> {

}
