package com.cdac.placement.repository;

import com.cdac.placement.dto.PlacementStatsDTO;
import com.cdac.placement.model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
    Faculty findByName(String name);

    @Query("SELECT new com.cdac.placement.dto.PlacementStatsDTO(f.name, " +
            "COUNT(DISTINCT s.id) AS totalStudents, " +
            "COUNT(DISTINCT p.id) AS placedStudents, " +
            "ROUND((COUNT(DISTINCT p.id) * 100.0 / COUNT(DISTINCT s.id)), 2) AS percentagePlaced) " +
            "FROM Faculty f " +
            "LEFT JOIN Student s ON f.id = s.faculty.id AND s.batch.id = :batchId " +
            "LEFT JOIN PlacedStudent p ON f.id = p.faculty.id AND p.batch.id = :batchId " +
            "GROUP BY f.name")
    List<PlacementStatsDTO> getFacultiesPlacementByBatch(@Param("batchId") Long batchId);

    @Query("SELECT new com.cdac.placement.dto.PlacementStatsDTO(f.name, " +
            "COUNT(DISTINCT s.id) AS totalStudents, " +
            "COUNT(DISTINCT p.id) AS placedStudents, " +
            "ROUND((COUNT(DISTINCT p.id) * 100.0 / COUNT(DISTINCT s.id)), 2) AS percentagePlaced) " +
            "FROM Faculty f " +
            "LEFT JOIN Student s ON f.id = s.faculty.id " +
            "LEFT JOIN PlacedStudent p ON f.id = p.faculty.id " +
            "GROUP BY f.name")
    List<PlacementStatsDTO> getFacultiesPlacement();
}