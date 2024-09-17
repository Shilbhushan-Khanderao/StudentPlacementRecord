import axios from "axios";

//Batch API endpoints
const GETALLBATCHES = "http://localhost:8080/batches";
const GETBATCHBYID = "http://localhost:8080/getBatch/";
const ADDBATCH = "http://localhost:8080/addBatch";
const UPDATEBATCH = "http://localhost:8080/updateBatch";
const DELETEBATCH = "http://localhost:8080/deleteBatch?batchid=";

//Company API endpoints
const GETALLCOMPANIES = "http://localhost:8080/companies";
const GETCOMPANYBYID = "http://localhost:8080/getCompany/";
const ADDCOMPANY = "http://localhost:8080/addCompany";
const UPDATECOMPANY = "http://localhost:8080/updateCompany";
const DELETECOMPANY = "http://localhost:8080/deleteCompany?companyid=";

//Faculty API endpoints
const GETALLFACULTIES = "http://localhost:8080/faculties";
const GETFACULTYBYID = "http://localhost:8080/getFaculty/";
const ADDFACULTY = "http://localhost:8080/addFaculty";
const UPDATEFACULTY = "http://localhost:8080/updateFaculty";
const DELETEFACULTY = "http://localhost:8080/deleteFaculty?facultyid=";

//Mentor API endpoints
const GETALLMENTORS = "http://localhost:8080/mentors";
const GETMENTORBYID = "http://localhost:8080/getMentor/";
const ADDMENTOR = "http://localhost:8080/addMentor";
const UPDATEMENTOR = "http://localhost:8080/updateMentor";
const DELETEMENTOR = "http://localhost:8080/deleteMentor?mentorid=";

//Placement Stats endpoints
const GETFACULTIESPLACEMENTSTATSBYBATCH = "http://localhost:8080/placement-stats/faculties/"
const GETFACULTIESPLACEMENTSTATS = "http://localhost:8080/placement-stats/faculties/all"

const GETOVERALLPLACEMENTSTATSBYBATCH = "http://localhost:8080/placement-stats/overall-analysis/"
const GETOVERALLPLACEMENTSTATS = "http://localhost:8080/placement-stats/overall-analysis"

const GETMENTORSPLACEMENTSTATSBYBATCH = "http://localhost:8080/placement-stats/mentors/"
const GETMENTORSPLACEMENTSTATS = "http://localhost:8080/placement-stats/mentors/all"

//Batch functions
export function getAllBatches() {
  return axios.get(GETALLBATCHES);
}

export function getBatchById(batchId) {
  return axios.get(GETBATCHBYID + batchId);
}

export function addBatch(batch) {
  return axios.post(ADDBATCH, batch);
}

export function updateBatch(batch) {
  return axios.put(UPDATEBATCH, batch);
}

export function deleteBatch(batchId) {
  return axios.delete(DELETEBATCH + batchId);
}

//Company functions
export function getAllCompanies() {
  return axios.get(GETALLCOMPANIES);
}

export function getCompanyById(companyId) {
  return axios.get(GETCOMPANYBYID + companyId);
}

export function addCompany(company) {
  return axios.post(ADDCOMPANY, company);
}

export function updateCompany(company) {
  return axios.put(UPDATECOMPANY, company);
}

export function deleteCompany(companyId) {
  return axios.delete(DELETECOMPANY + companyId);
}

//Faculty functions
export function getAllFaculties() {
  return axios.get(GETALLFACULTIES);
}

export function getFacultyById(facultyId) {
  return axios.get(GETFACULTYBYID + facultyId);
}

export function addFaculty(faculty) {
  return axios.post(ADDFACULTY, faculty);
}

export function updateFaculty(faculty) {
  return axios.put(UPDATEFACULTY, faculty);
}

export function deleteFaculty(facultyId) {
  return axios.delete(DELETEFACULTY + facultyId);
}

//Mentor functions
export function getAllMentors() {
  return axios.get(GETALLMENTORS);
}

export function getMentorById(mentorId) {
  return axios.get(GETMENTORBYID + mentorId);
}

export function addMentor(mentor) {
  return axios.post(ADDMENTOR, mentor);
}

export function updateMentor(mentor) {
  return axios.put(UPDATEMENTOR, mentor);
}

export function deleteMentor(mentorId) {
  return axios.delete(DELETEMENTOR + mentorId);
}
//All required endpoints ends here...

//Faculties Placement stats functions
export function getFacultiesPlacementStatsByBatch(batchId){
  return axios.get(GETFACULTIESPLACEMENTSTATSBYBATCH + batchId);
}

export function getFacultiesPlacementStats(){
  return axios.get(GETFACULTIESPLACEMENTSTATS);
}

//Mentors placement stats functions
export function getMentorsPlacementStatsByBatch(batchId){
  return axios.get(GETMENTORSPLACEMENTSTATSBYBATCH + batchId);
}

export function getMentorsPlacementStats(){
  return axios.get(GETMENTORSPLACEMENTSTATS);
}

//Overall placement stats functions
export function getOverallPlacementStatsByBatch(batchId){
  return axios.get(GETOVERALLPLACEMENTSTATSBYBATCH + batchId);
}

export function getOverallPlacementStats(){
  return axios.get(GETOVERALLPLACEMENTSTATS);
}