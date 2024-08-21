package com.cdac.placement.controller;

import com.cdac.placement.response.Response;
import com.cdac.placement.model.Student;
import com.cdac.placement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
//localhost:8080
public class StudentController {
    @Autowired
    private StudentService studentService;

    //http://localhost:8080/students
    @GetMapping(value = "/students")
    public ResponseEntity<List<Student>> getAllStudents(){
        try {
            List<Student> students = studentService.getAllStudents();
            if(students.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return  new ResponseEntity<>(students, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getStudent/1
    @GetMapping(value = "/getStudent/{studentid}")
    public ResponseEntity<?> getStudent(@PathVariable("studentid") int studentid){
        try {
            Student student = studentService.getStudent(studentid);

            if (student == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(student,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addStudent
    @PostMapping(value = "/addStudent")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        if(studentService.addStudent(student))
            return Response.success(student);
        return Response.error("Student addition failed.");
    }
    //http://localhost:8080/updateStudent
    @PutMapping(value = "/updateStudent")
    public ResponseEntity<?> updateStudent(@RequestBody Student student){
        if(studentService.updateStudent(student))
            return Response.success(student);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deleteStudent?studentid=1
    @DeleteMapping(value = "/deleteStudent")
    public ResponseEntity<Map<String,String>> deleteStudent(@RequestParam("studentid") Integer id){
        HashMap<String, String> hmap = new HashMap<>();

        if(studentService.deleteStudent(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
