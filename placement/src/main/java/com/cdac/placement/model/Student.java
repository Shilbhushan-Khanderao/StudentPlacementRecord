package com.cdac.placement.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private  int id;

    @Column(name = "prn", unique = true)
    private long prn;

    @Column(name = "name")
    private String name;

    @Column(name = "teamNumber")
    private int teamNumber;

    @Column(name = "centre")
    private String centre;

    @Column(name = "faculty")
    private  String faculty;

    @Column(name = "mentor")
    private  String mentor;

    public Student(long prn, String name, int teamNumber, String mentor, String faculty, String centre) {
        this.prn = prn;
        this.name = name;
        this.teamNumber = teamNumber;
        this.mentor = mentor;
        this.faculty = faculty;
        this.centre = centre;
    }
}
