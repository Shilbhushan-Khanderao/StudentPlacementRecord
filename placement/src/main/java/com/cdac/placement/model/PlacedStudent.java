package com.cdac.placement.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "placed_student")
public class PlacedStudent {

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
    private String faculty;

    @Column(name = "mentor")
    private String mentor;

    @Column(name = "company")
    private String company;

    @Column(name = "posterCreated")
    private boolean posterCreated;
}
