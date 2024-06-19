package com.cdac.placement.controller;

import com.cdac.placement.Response.Response;
import com.cdac.placement.model.PlacedStudent;
import com.cdac.placement.service.PlacedStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class PlacedStudentController {

    @Autowired
    private PlacedStudentService placedStudentService;

    //http://localhost:8080/placedStudents
    @GetMapping(value = "/placedStudents")
    public ResponseEntity<List<PlacedStudent>> getAllPlacedStudents(){
        try {
            List<PlacedStudent> placedStudents = placedStudentService.getAllPlacedStudents();
            if(placedStudents.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return  new ResponseEntity<>(placedStudents, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getPlacedStudent/1
    @GetMapping(value = "/getPlacedStudent/{studentid}")
    public ResponseEntity<?> getPlacedStudent(@PathVariable("studentid") int studentid){
        try {
            PlacedStudent placedStudent = placedStudentService.getPlacedStudent(studentid);

            if (placedStudent == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(placedStudent,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addPlacedStudent
    @PostMapping(value = "/addPlacedStudent")
    public ResponseEntity<?> addPlacedStudent(@RequestBody PlacedStudent placedStudent){
        if(placedStudentService.addPlacedStudent(placedStudent))
            return Response.success(placedStudent);
        return Response.error("Student addition failed.");
    }
    //http://localhost:8080/updatePlacedStudent
    @PutMapping(value = "/updatePlacedStudent")
    public ResponseEntity<?> updatePlacedStudent(@RequestBody PlacedStudent placedStudent){
        if(placedStudentService.updatePlacedStudent(placedStudent))
            return Response.success(placedStudent);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deletePlacedStudent?studentid=1
    @DeleteMapping(value = "/deletePlacedStudent")
    public ResponseEntity<Map<String,String>> deletePlacedStudent(@RequestParam("studentid") Integer id){
        HashMap<String, String> hmap = new HashMap<>();

        if(placedStudentService.deletePlacedStudent(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
