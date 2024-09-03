package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.FacultyStats;
import com.cdac.placement.helper.StudentsStats;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StatisticsServiceImpl implements StatisticsService {

    @Autowired
    FacultyRepository facultyRepository;

    @Override
    public List<FacultyStats> getFacultyStats(int batchId) {
        List<Faculty> faculties = facultyRepository.findAll();

        return null;
    }

    @Override
    public List<StudentsStats> getStudentsStats(int batchId) {
        return null;
    }
}
