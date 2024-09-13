package com.cdac.placement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OverallAnalysisDTO {
    private List<CenterCountDTO> centreData;
    private Integer totalCount;
    private Integer placedCount;
    private Double placedPercentage;
}
