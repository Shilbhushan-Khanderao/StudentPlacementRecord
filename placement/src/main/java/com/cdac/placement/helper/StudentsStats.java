package com.cdac.placement.helper;

import com.cdac.placement.model.Student;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class StudentsStats extends Stats{
    private List<Student> studentList;
}
