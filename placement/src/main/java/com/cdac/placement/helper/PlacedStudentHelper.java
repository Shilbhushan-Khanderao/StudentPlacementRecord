package com.cdac.placement.helper;

import com.cdac.placement.model.Company;
import com.cdac.placement.repository.CompanyRepository;

public class PlacedStudentHelper {

    public static Company getOrCreateCompanyForPlacedStudent(Company company, CompanyRepository companyRepository){
        Company company1 = companyRepository.findByName(company.getName());
        if(company1 == null)
            return companyRepository.save(new Company(company.getName()));
        return company1;
    }
}
