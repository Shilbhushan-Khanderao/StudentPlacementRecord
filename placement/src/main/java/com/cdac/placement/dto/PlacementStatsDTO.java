package com.cdac.placement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlacementStatsDTO {
    private String name;
    private Long totalStudents;
    private Long placedStudents;
    private Double percentagePlaced;
}
