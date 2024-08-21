package com.cdac.placement.controller;

import com.cdac.placement.model.Mentor;
import com.cdac.placement.response.Response;
import com.cdac.placement.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class MentorController {
    @Autowired
    private MentorService mentorService;

    //http://localhost:8080/mentors
    @GetMapping(value = "/mentors")
    public ResponseEntity<List<Mentor>> getAllMentors(){
        try {
            List<Mentor> mentors = mentorService.getAllMentors();
            if(mentors.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return  new ResponseEntity<>(mentors, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getMentor/1
    @GetMapping(value = "/getMentor/{mentorid}")
    public ResponseEntity<?> getMentor(@PathVariable("mentorid") int mentorid){
        try {
            Mentor mentor = mentorService.getMentor(mentorid);

            if (mentor == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(mentor,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addMentor
    @PostMapping(value = "/addMentor")
    public ResponseEntity<?> addMentor(@RequestBody Mentor mentor){
        if(mentorService.addMentor(mentor))
            return Response.success(mentor);
        return Response.error("Mentor addition failed.");
    }
    //http://localhost:8080/updateMentor
    @PutMapping(value = "/updateMentor")
    public ResponseEntity<?> updateMentor(@RequestBody Mentor mentor){
        if(mentorService.updateMentor(mentor))
            return Response.success(mentor);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deleteMentor?mentorid=1
    @DeleteMapping(value = "/deleteMentor")
    public ResponseEntity<Map<String,String>> deleteMentor(@RequestParam("mentorid") Integer id){
        HashMap<String, String> hmap = new HashMap<>();

        if(mentorService.deleteMentor(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
