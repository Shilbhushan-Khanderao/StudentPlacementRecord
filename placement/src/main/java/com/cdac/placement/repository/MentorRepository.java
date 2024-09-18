package com.cdac.placement.repository;

import com.cdac.placement.dto.PlacementStatsDTO;
import com.cdac.placement.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MentorRepository extends JpaRepository<Mentor, Long> {
    Mentor findByName(String name);

    @Query("SELECT new com.cdac.placement.dto.PlacementStatsDTO(m.name, "+
            "COUNT(DISTINCT s.id) AS totalStudents, " +
            "COUNT(DISTINCT p.id) AS placedStudents, " +
            "ROUND((COUNT(DISTINCT p.id) * 100.0 / COUNT(DISTINCT s.id)), 2) AS percentagePlaced) " +
            "FROM Mentor m " +
            "JOIN Student s ON m.id = s.mentor.id AND s.batch.id = :batchId " +
            "LEFT JOIN PlacedStudent p ON m.id = p.mentor.id AND p.batch.id = :batchId " +
            "GROUP BY m.name")
    List<PlacementStatsDTO> getMentorsPlacementByBatch(@Param("batchId") Long batchId);

    @Query("SELECT new com.cdac.placement.dto.PlacementStatsDTO(m.name, "+
            "COUNT(DISTINCT s.id) AS totalStudents, " +
            "COUNT(DISTINCT p.id) AS placedStudents, " +
            "ROUND((COUNT(DISTINCT p.id) * 100.0 / COUNT(DISTINCT s.id)), 2) AS percentagePlaced) " +
            "FROM Mentor m " +
            "LEFT JOIN Student s ON m.id = s.mentor.id " +
            "LEFT JOIN PlacedStudent p ON m.id = p.mentor.id " +
            "GROUP BY m.name")
    List<PlacementStatsDTO> getMentorPlacement();
}
