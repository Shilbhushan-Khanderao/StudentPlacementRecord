import axios from "axios";

//All Students API Endpoints
const IMPORTCSVURI = "http://localhost:8080/admin/upload";
const GETALLSTUDENTS = "http://localhost:8080/students";
const GETSTUDENTBYID = "http://localhost:8080/getStudent/";
const ADDSTUDENT = "http://localhost:8080/addStudent";
const UPDATESTUDENT = "http://localhost:8080/updateStudent";
const REMOVESTUDENT = "http://localhost:8080/deleteStudent?studentid=";

//Placed Students API Endpoints
const GETALLPLACEDSTUDENTS = "http://localhost:8080/placedStudents";
const GETPLACEDSTUDENTBYID = "http://localhost:8080/getPlacedStudent/";
const ADDPLACEDSTUDENT = "http://localhost:8080/addPlacedStudent";
const UPDATEPLACEDSTUDENT = "http://localhost:8080/updatePlacedStudent";
const REMOVEPLACEDSTUDENT =
  "http://localhost:8080/deletePlacedStudent?studentid=";

//import data via csv to database
export function importData(formData) {
  return axios.post(IMPORTCSVURI, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

//students functions
export function getAllStudents() {
  return axios.get(GETALLSTUDENTS);
}

export function getStudentyById(studentId) {
  return axios.get(GETSTUDENTBYID + studentId);
}

export function addStudent(student) {
  return axios.post(ADDSTUDENT, student);
}

export function updateStudent(student) {
  return axios.put(UPDATESTUDENT, student);
}

export function removeStudent(studentId) {
  return axios.delete(REMOVESTUDENT + studentId);
}

//placed students functions
export function getAllPlacedStudents() {
  return axios.get(GETALLPLACEDSTUDENTS);
}

export function getPlacedStudentyById(studentId) {
  return axios.get(GETPLACEDSTUDENTBYID + studentId);
}

export function addPlacedStudent(student) {
  return axios.post(ADDPLACEDSTUDENT, student);
}

export function updatePlacedStudent(student) {
  return axios.put(UPDATEPLACEDSTUDENT, student);
}

export function removePlacedStudent(studentId) {
  return axios.delete(REMOVEPLACEDSTUDENT + studentId);
}
//CRUD Methods end here....
