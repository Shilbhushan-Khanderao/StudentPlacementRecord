package com.cdac.placement.helper;


import com.cdac.placement.model.Batch;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.repository.MentorRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

public class CsvHelper {
    private static final String TYPE = "text/csv";
    static String[] Headers = {"PRN","Name","Team No.","Mentor","Faculty","Centre"};

    public static boolean hasCsvFormat(MultipartFile file){
        return TYPE.equals(file.getContentType());
    }

    public static CsvContent csvToContent(InputStream is, MentorRepository mentorRepository, FacultyRepository facultyRepository){
        try(BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            CSVParser csvParser = new CSVParser(fileReader,CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());){
                List<Student> students = new ArrayList<>();
                Set<Mentor> mentors = new HashSet<>();
                Set<Faculty> faculties = new HashSet<>();

                Iterable<CSVRecord> csvRecords = csvParser.getRecords();

                for (CSVRecord csvRecord : csvRecords){
                    Student student = new Student(
                            Long.parseLong(csvRecord.get("PRN")),
                            csvRecord.get("Name"),
                            Long.parseLong(csvRecord.get("Team No.")),
                            csvRecord.get("Centre")
                    );

                    Mentor mentor = getOrCreateMentor(csvRecord.get("Mentor"), mentorRepository);
                    Faculty faculty = getOrCreateFaculty(csvRecord.get("Faculty"), facultyRepository);

                    student.setMentor(mentor);
                    student.setFaculty(faculty);

                    students.add(student);
                    mentors.add(mentor);
                    faculties.add(faculty);
                }

                return new CsvContent(students, faculties, mentors);
        } catch (IOException e) {
            throw new RuntimeException("Fail to parse CSV file: " + e.getMessage());
        }
    }

    public static void associateBatch(List<Student> students, Batch batch){
        students.forEach(student -> student.setBatch(batch));
    }

    public static Mentor getOrCreateMentor(String mentorName, MentorRepository mentorRepository) {
        Mentor mentor = mentorRepository.findByName(mentorName);
        if(mentor == null)
            return mentorRepository.save(new Mentor(mentorName));
        return mentor;
    }

    public static Faculty getOrCreateFaculty(String facultyName, FacultyRepository facultyRepository) {
        Faculty faculty = facultyRepository.findByName(facultyName);
        if (faculty == null)
            return facultyRepository.save(new Faculty(facultyName));
        return faculty;
    }
}
