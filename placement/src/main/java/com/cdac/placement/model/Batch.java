package com.cdac.placement.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "batch")
public class Batch {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "batch_name")
    private String BatchName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "batch", cascade = CascadeType.ALL)
    private List<Student> studentList;

    public Batch(String name, String batchName) {
        this.name = name;
        BatchName = batchName;
    }
}
