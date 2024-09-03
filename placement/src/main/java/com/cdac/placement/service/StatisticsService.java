package com.cdac.placement.service;

import com.cdac.placement.helper.FacultyStats;
import com.cdac.placement.helper.StudentsStats;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface StatisticsService {
    List<FacultyStats> getFacultyStats(int batchId);

    List<StudentsStats> getStudentsStats(int batchId);
}
