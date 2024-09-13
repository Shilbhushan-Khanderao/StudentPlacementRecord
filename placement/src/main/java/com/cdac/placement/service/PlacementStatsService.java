package com.cdac.placement.service;

import com.cdac.placement.dto.CentreCountProjection;
import com.cdac.placement.dto.OverallAnalysisDTO;
import com.cdac.placement.dto.PlacementStatsDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PlacementStatsService {
    public List<PlacementStatsDTO> getFacultiesPlacementByBatch(Long batchId);
    public List<PlacementStatsDTO> getFacultiesPlacement();

    public List<PlacementStatsDTO> getMentorsPlacementByBatch(Long batchId);
    public List<PlacementStatsDTO> getMentorsPlacement();

    public OverallAnalysisDTO getOverallAnalysisByBatch(Long batchId);
    public OverallAnalysisDTO getOverallAnalysis();
}
