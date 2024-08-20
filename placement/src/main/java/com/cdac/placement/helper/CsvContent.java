package com.cdac.placement.helper;

import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.model.Student;
import lombok.Getter;

import java.util.List;
import java.util.Set;

@Getter
public class CsvContent {
    private final List<Student> students;
    private final Set<Faculty> faculties;
    private final Set<Mentor> mentors;

    public CsvContent(List<Student> students, Set<Faculty> faculties, Set<Mentor> mentors) {
        this.students = students;
        this.faculties = faculties;
        this.mentors = mentors;
    }
}
