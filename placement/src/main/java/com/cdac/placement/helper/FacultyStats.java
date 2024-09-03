package com.cdac.placement.helper;

import com.cdac.placement.model.Faculty;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FacultyStats extends Stats{
    private List<Faculty> facultyList;
}
