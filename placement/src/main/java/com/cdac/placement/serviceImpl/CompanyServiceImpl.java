package com.cdac.placement.serviceImpl;

import com.cdac.placement.model.Company;
import com.cdac.placement.repository.CompanyRepository;
import com.cdac.placement.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
    @Override
    public Company getCompany(Long companyId) {
        try {
            Optional<Company> opt = companyRepository.findById(companyId);
            return opt.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean deleteAllCompanies() {
        try {
            companyRepository.deleteAll();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean addCompany(Company company) {
        try {
            Optional<Company> opt = companyRepository.findById(company.getId());
            if (opt.isPresent())
                return false;
            companyRepository.save(company);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateCompany(Company company) {
        try {
            Optional<Company> opt = companyRepository.findById(company.getId());

            if(opt.isPresent()){
                companyRepository.save(company);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteCompany(Long companyId) {
        try {
            Optional<Company> opt = companyRepository.findById(companyId);
            if (opt.isPresent()){
                companyRepository.deleteById(companyId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
