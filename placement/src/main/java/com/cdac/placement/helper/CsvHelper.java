package com.cdac.placement.helper;


import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CsvHelper {
    private static final String TYPE = "text/csv";
    static String[] Headers = {"PRN","Name","Team No.","Mentor","Faculty","Centre"};

    public static boolean hasCsvFormat(MultipartFile file){
        return TYPE.equals(file.getContentType());
    }

    public static Object[] csvToObjects(InputStream is){
        try(BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            CSVParser csvParser = new CSVParser(fileReader,CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());){
                List<Student> students = new ArrayList<>();
                Set<Mentor> mentors = new HashSet<>();
                Set<Faculty> faculties = new HashSet<>();
                Object[] csvContent =  new Object[3];

                Iterable<CSVRecord> csvRecords = csvParser.getRecords();

                for (CSVRecord csvRecord : csvRecords){
                    Student student = new Student(
                            Long.parseLong(csvRecord.get("PRN")),
                            csvRecord.get("Name"),
                            Integer.parseInt(csvRecord.get("Team No.")),
                            csvRecord.get("Centre")
                    );

                    Mentor mentor = new Mentor(csvRecord.get("Mentor"));
                    Faculty faculty = new Faculty(csvRecord.get("Faculty"));

                    students.add(student);
                    mentors.add(mentor);
                    faculties.add(faculty);
                }
                csvContent[0] = students;
                csvContent[1] = mentors;
                csvContent[2] = faculties;
                return csvContent;
        } catch (IOException e) {
            throw new RuntimeException("Fail to parse CSV file: " + e.getMessage());
        }
    }
}
