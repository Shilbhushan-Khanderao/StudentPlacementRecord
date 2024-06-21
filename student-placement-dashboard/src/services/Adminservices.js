import axios from "axios";

export const IMPORTCSVURI = "http://localhost:8080/admin/upload";
export const GETALLSTUDENTS = "http://localhost:8080/students";
export const GETSTUDENTBYID = "http://localhost:8080/getStudent/";
export const ADDSTUDENT = "http://localhost:8080/addStudent";
export const UPDATESTUDENT = "http://localhost:8080/updateStudent";
export const REMOVESTUDENT = "http://localhost:8080/deleteStudent?studentid=";

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
