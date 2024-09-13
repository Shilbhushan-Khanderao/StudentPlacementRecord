package com.cdac.placement.controller;

import com.cdac.placement.model.Company;
import com.cdac.placement.response.Response;
import com.cdac.placement.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RestController
@CrossOrigin("http://localhost:5173")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    //http://localhost:8080/companies
    @GetMapping(value = "/companies")
    public ResponseEntity<List<Company>> getAllCompanies(){
        try {
            List<Company> companies = companyService.getAllCompanies();
            if(companies.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return  new ResponseEntity<>(companies, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getCompany/1
    @GetMapping(value = "/getCompany/{companyid}")
    public ResponseEntity<?> getCompany(@PathVariable("companyid") Long companyid){
        try {
            Company company = companyService.getCompany(companyid);

            if (company == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(company,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addCompany
    @PostMapping(value = "/addCompany")
    public ResponseEntity<?> addCompany(@RequestBody Company company){
        if(companyService.addCompany(company))
            return Response.success(company);
        return Response.error("Company addition failed.");
    }
    //http://localhost:8080/updateCompany
    @PutMapping(value = "/updateCompany")
    public ResponseEntity<?> updateCompany(@RequestBody Company company){
        if(companyService.updateCompany(company))
            return Response.success(company);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deleteCompany?companyid=1
    @DeleteMapping(value = "/deleteCompany")
    public ResponseEntity<Map<String,String>> deleteCompany(@RequestParam("companyid") Long id){
        HashMap<String, String> hmap = new HashMap<>();

        if(companyService.deleteCompany(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
