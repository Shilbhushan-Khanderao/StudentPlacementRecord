package com.cdac.placement.service;

import com.cdac.placement.model.Faculty;

import java.util.List;

public interface FacultyService {
    public Faculty getFaculty(int facultyId);
    public List<Faculty> getAllFaculties();
    public boolean deleteAllFaculties();
    public boolean addFaculty(Faculty faculty);
    public boolean updateFaculty(Faculty faculty);
    public boolean deleteFaculty(Integer facultyId);
}
