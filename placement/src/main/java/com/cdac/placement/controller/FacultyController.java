package com.cdac.placement.controller;

import com.cdac.placement.model.Faculty;
import com.cdac.placement.response.Response;
import com.cdac.placement.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class FacultyController {
    @Autowired
    private FacultyService facultyService;

    //http://localhost:8080/faculties
    @GetMapping(value = "/faculties")
    public ResponseEntity<List<Faculty>> getAllFaculties(){
        try {
            List<Faculty> faculties = facultyService.getAllFaculties();
            if(faculties.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return  new ResponseEntity<>(faculties, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getFaculty/1
    @GetMapping(value = "/getFaculty/{facultyid}")
    public ResponseEntity<?> getFaculty(@PathVariable("facultyid") int facultyid){
        try {
            Faculty faculty = facultyService.getFaculty(facultyid);

            if (faculty == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(faculty,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addFaculty
    @PostMapping(value = "/addFaculty")
    public ResponseEntity<?> addFaculty(@RequestBody Faculty faculty){
        if(facultyService.addFaculty(faculty))
            return Response.success(faculty);
        return Response.error("Faculty addition failed.");
    }
    //http://localhost:8080/updateFaculty
    @PutMapping(value = "/updateFaculty")
    public ResponseEntity<?> updateFaculty(@RequestBody Faculty faculty){
        if(facultyService.updateFaculty(faculty))
            return Response.success(faculty);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deleteFaculty?facultyid=1
    @DeleteMapping(value = "/deleteFaculty")
    public ResponseEntity<Map<String,String>> deleteFaculty(@RequestParam("facultyid") Integer id){
        HashMap<String, String> hmap = new HashMap<>();

        if(facultyService.deleteFaculty(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
