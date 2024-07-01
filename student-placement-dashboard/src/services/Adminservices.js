import axios from "axios";

//All Students API Endpoints
export const IMPORTCSVURI = "http://localhost:8080/admin/upload";
export const GETALLSTUDENTS = "http://localhost:8080/students";
export const GETSTUDENTBYID = "http://localhost:8080/getStudent/";
export const ADDSTUDENT = "http://localhost:8080/addStudent";
export const UPDATESTUDENT = "http://localhost:8080/updateStudent";
export const REMOVESTUDENT = "http://localhost:8080/deleteStudent?studentid=";

//Placed Students API Endpoints
export const GETALLPLACEDSTUDENTS = "http://localhost:8080/placedstudents";
export const GETPLACEDSTUDENTBYID = "http://localhost:8080/getPlacedStudent/";
export const ADDPLACEDSTUDENT = "http://localhost:8080/addPlacedStudent";
export const UPDATEPLACEDSTUDENT = "http://localhost:8080/updatePlacedStudent";
export const REMOVEPLACEDSTUDENT =
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
