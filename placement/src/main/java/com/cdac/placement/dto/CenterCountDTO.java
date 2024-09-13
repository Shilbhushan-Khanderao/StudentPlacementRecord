package com.cdac.placement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CenterCountDTO {
    private String centre;
    private Integer totalCount;
    private Integer placedCount;
    private Double placedPercentage;
}
