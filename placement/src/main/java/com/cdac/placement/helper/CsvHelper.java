package com.cdac.placement.helper;


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
import java.util.List;

public class CsvHelper {
    private static final String TYPE = "text/csv";
    static String[] Headers = {"PRN","Name","Team No.","Mentor","Faculty","Centre"};

    public static boolean hasCsvFormat(MultipartFile file){
        return TYPE.equals(file.getContentType());
    }

    public static List<Student> csvToStudents(InputStream is){
        try(BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            CSVParser csvParser = new CSVParser(fileReader,CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());){
                List<Student> students = new ArrayList<>();

                Iterable<CSVRecord> csvRecords = csvParser.getRecords();

                for (CSVRecord csvRecord : csvRecords){
                    Student student = new Student(
                            Long.parseLong(csvRecord.get("PRN")),
                            csvRecord.get("Name"),
                            Integer.parseInt(csvRecord.get("Team No.")),
                            csvRecord.get("Mentor"),
                            csvRecord.get("Faculty"),
                            csvRecord.get("Centre")
                    );

                    students.add(student);
                }
                return students;
        } catch (IOException e) {
            throw new RuntimeException("Fail to parse CSV file: " + e.getMessage());
        }
    }
}
