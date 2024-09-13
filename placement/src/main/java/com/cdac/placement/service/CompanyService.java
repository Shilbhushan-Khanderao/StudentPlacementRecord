package com.cdac.placement.service;

import com.cdac.placement.model.Company;

import java.util.List;

public interface CompanyService {

    public Company getCompany(Long companyId);
    public List<Company> getAllCompanies();
    public boolean deleteAllCompanies();
    public boolean addCompany(Company company);
    public boolean updateCompany(Company company);
    public boolean deleteCompany(Long companyId);
}
