package com.cdac.placement.repository;

import com.cdac.placement.dto.CenterCountDTO;
import com.cdac.placement.dto.CentreCountProjection;
import com.cdac.placement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlacementStatsRepository extends JpaRepository<Student, Long>{

    @Query(value = "CALL GetOverallAnalysisByBatch(:batchId)", nativeQuery = true)
    List<CentreCountProjection> getOverallAnalysisByBatch(@Param("batchId") Long batchId);

    @Query(value = "CALL GetOverallAnalysis()", nativeQuery = true)
    List<CentreCountProjection> getOverallAnalysis();
}
