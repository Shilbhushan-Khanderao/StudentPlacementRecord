package com.cdac.placement.serviceImpl;

import com.cdac.placement.dto.CenterCountDTO;
import com.cdac.placement.dto.CentreCountProjection;
import com.cdac.placement.dto.OverallAnalysisDTO;
import com.cdac.placement.dto.PlacementStatsDTO;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.repository.MentorRepository;
import com.cdac.placement.repository.PlacementStatsRepository;
import com.cdac.placement.service.FacultyService;
import com.cdac.placement.service.PlacementStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlacementStatsServiceImpl implements PlacementStatsService {

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private MentorRepository mentorRepository;

    @Autowired
    private PlacementStatsRepository placementStatsRepository;

    @Override
    public List<PlacementStatsDTO> getFacultiesPlacementByBatch(Long batchId) {
        return facultyRepository.getFacultiesPlacementByBatch(batchId);
    }

    @Override
    public List<PlacementStatsDTO> getFacultiesPlacement() {
        return facultyRepository.getFacultiesPlacement();
    }

    @Override
    public List<PlacementStatsDTO> getMentorsPlacementByBatch(Long batchId) {
        return mentorRepository.getMentorsPlacementByBatch(batchId);
    }

    @Override
    public List<PlacementStatsDTO> getMentorsPlacement() {
        return mentorRepository.getMentorPlacement();
    }

    @Override
    public OverallAnalysisDTO getOverallAnalysisByBatch(Long batchId) {
        List<CentreCountProjection> projections = placementStatsRepository.getOverallAnalysisByBatch(batchId);

        List<CenterCountDTO> centreWiseData = projections.stream()
                .map(projection -> new CenterCountDTO(
                        projection.getCentre(),
                        projection.getTotalCount(),
                        projection.getPlacedCount(),
                        calculatePercentage(projection.getPlacedCount(), projection.getTotalCount())))
                .toList();
        Integer totalStudents = centreWiseData.stream().mapToInt(CenterCountDTO :: getTotalCount).sum();
        Integer totalPlaced = centreWiseData.stream().mapToInt(CenterCountDTO :: getPlacedCount).sum();
        Double placedPercentage = calculatePercentage(totalPlaced, totalStudents);

        return new OverallAnalysisDTO(centreWiseData, totalStudents, totalPlaced, placedPercentage);
    }

    @Override
    public OverallAnalysisDTO getOverallAnalysis() {
        List<CentreCountProjection> projections = placementStatsRepository.getOverallAnalysis();

        List<CenterCountDTO> centreWiseData = projections.stream()
                .map(projection -> new CenterCountDTO(
                        projection.getCentre(),
                        projection.getTotalCount(),
                        projection.getPlacedCount(),
                        calculatePercentage(projection.getPlacedCount(), projection.getTotalCount())))
                .toList();

        Integer totalStudents = centreWiseData.stream().mapToInt(CenterCountDTO::getTotalCount).sum();
        Integer totalPlaced = centreWiseData.stream().mapToInt(CenterCountDTO::getPlacedCount).sum();
        Double placedPercentage = calculatePercentage(totalPlaced, totalStudents);

        return new OverallAnalysisDTO(centreWiseData, totalStudents, totalPlaced, placedPercentage);
    }

    private Double calculatePercentage(Integer placedCount, Integer totalCount){
        if(totalCount == null || totalCount == 0){
            return 0.0;
        }
        double percentage = (placedCount.doubleValue() / totalCount) * 100;
        return Double.parseDouble(String.format("%.2f", percentage));
    }
}
