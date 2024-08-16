package com.cdac.placement.model;

import jakarta.persistence.*;
import lombok.*;

@Data
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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "batch_id")
    private Batch batch;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mentor_id")
    private Mentor mentor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    private Company company;

    @Column(name = "posterCreated")
    private boolean posterCreated;
}
