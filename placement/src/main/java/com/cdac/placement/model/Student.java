package com.cdac.placement.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "prn", unique = true)
    private long prn;

    @Column(name = "name")
    private String name;

    @Column(name = "teamNumber")
    private int teamNumber;

    @Column(name = "centre")
    private String centre;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "batch_id")
    private Batch batch;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mentor_id")
    private Mentor mentor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;

    public Student(long prn, String name, int teamNumber, String centre) {
        this.prn = prn;
        this.name = name;
        this.teamNumber = teamNumber;
        this.centre = centre;
    }
}
