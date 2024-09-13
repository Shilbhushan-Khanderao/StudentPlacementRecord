package com.cdac.placement.dto;

import jakarta.persistence.criteria.CriteriaBuilder;

public interface CentreCountProjection {
    String getCentre();
    Integer getTotalCount();
    Integer getPlacedCount();
    Double getPlacedPercentage();
}
