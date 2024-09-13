package com.cdac.placement.serviceImpl;

import com.cdac.placement.model.Faculty;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class FacultyServiceImpl implements FacultyService {
    @Autowired
    FacultyRepository facultyRepository;

    @Override
    public List<Faculty> getAllFaculties() {
        return facultyRepository.findAll();
    }
    @Override
    public Faculty getFaculty(Long facultyId) {
        try {
            Optional<Faculty> opt = facultyRepository.findById(facultyId);
            return opt.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }



    @Override
    public boolean deleteAllFaculties() {
        try {
            facultyRepository.deleteAll();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean addFaculty(Faculty faculty) {
        try {
            Optional<Faculty> opt = facultyRepository.findById(faculty.getId());
            if (opt.isPresent())
                return false;
            facultyRepository.save(faculty);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateFaculty(Faculty faculty) {
        try {
            Optional<Faculty> opt = facultyRepository.findById(faculty.getId());

            if(opt.isPresent()){
                facultyRepository.save(faculty);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteFaculty(Long facultyId) {
        try {
            Optional<Faculty> opt = facultyRepository.findById(facultyId);
            if (opt.isPresent()){
                facultyRepository.deleteById(facultyId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
