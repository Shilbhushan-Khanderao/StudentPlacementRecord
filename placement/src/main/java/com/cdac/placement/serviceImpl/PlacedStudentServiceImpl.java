package com.cdac.placement.serviceImpl;

import com.cdac.placement.helper.PlacedStudentHelper;
import com.cdac.placement.model.Company;
import com.cdac.placement.model.PlacedStudent;
import com.cdac.placement.repository.CompanyRepository;
import com.cdac.placement.repository.PlacedStudentRepository;
import com.cdac.placement.service.PlacedStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlacedStudentServiceImpl implements PlacedStudentService{

    @Autowired
    private PlacedStudentRepository placedStudentRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<PlacedStudent> getAllPlacedStudents() {
        return placedStudentRepository.findAll() ;
    }

    @Override
    public PlacedStudent getPlacedStudent(Long studentId) {
        try {
            Optional<PlacedStudent> opt = placedStudentRepository.findById(studentId);
            return opt.orElse(null);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean addPlacedStudent(PlacedStudent placedStudent) {
        try {
            Optional<PlacedStudent> opt = placedStudentRepository.findById(placedStudent.getId());
            if (opt.isPresent())
                return false;
            else{
                placedStudent.setCompany(PlacedStudentHelper.getOrCreateCompanyForPlacedStudent(placedStudent.getCompany(), companyRepository));
                placedStudentRepository.save(placedStudent);
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updatePlacedStudent(PlacedStudent placedStudent) {
        try {
            Optional<PlacedStudent> opt = placedStudentRepository.findById(placedStudent.getId());
            if (opt.isPresent()){
                placedStudentRepository.save(placedStudent);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deletePlacedStudent(Long id) {
        try {
            Optional<PlacedStudent> opt = placedStudentRepository.findById(id);
            if (opt.isPresent()){
                placedStudentRepository.deleteById(id);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
