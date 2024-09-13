package com.cdac.placement.controller;

import com.cdac.placement.dto.OverallAnalysisDTO;
import com.cdac.placement.dto.PlacementStatsDTO;
import com.cdac.placement.service.PlacementStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.ls.LSInput;

import java.util.List;

@RestController
@RequestMapping("/placement-stats")
@CrossOrigin("http://localhost:5173")
public class PlacementStatsController {
    @Autowired
    private PlacementStatsService placementStatsService;

    @GetMapping("/faculties/{batchId}")
    public List<PlacementStatsDTO> getFacultiesPlacementByBatch(@PathVariable Long batchId){
        return placementStatsService.getFacultiesPlacementByBatch(batchId);
    }

    @GetMapping("/faculties/all")
    public List<PlacementStatsDTO> getFacultiesPlacement(){
        return placementStatsService.getFacultiesPlacement();
    }

    @GetMapping("/mentors/{batchId}")
    public List<PlacementStatsDTO> getMentorsPlacementByBatch(@PathVariable Long batchId){
        return placementStatsService.getMentorsPlacementByBatch(batchId);
    }

    @GetMapping("/mentors/all")
    public List<PlacementStatsDTO> getMentorsPlacement(){
        return placementStatsService.getMentorsPlacement();
    }

    @GetMapping("/overall-analysis/{batchId}")
    public ResponseEntity<OverallAnalysisDTO> getOverallAnalysisByBatch(@PathVariable("batchId") Long batchId){
        OverallAnalysisDTO overallAnalysisDTO = placementStatsService.getOverallAnalysisByBatch(batchId);
        return ResponseEntity.ok(overallAnalysisDTO);
    }

    @GetMapping("/overall-analysis")
    public ResponseEntity<OverallAnalysisDTO> getOverallAnalysis(){
        OverallAnalysisDTO overallAnalysisDTO = placementStatsService.getOverallAnalysis();
        return ResponseEntity.ok(overallAnalysisDTO);
    }
}
