package com.cdac.placement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "batch_name")
    private String BatchName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "batch", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Student> studentList;

    public Batch(String name, String batchName) {
        this.name = name;
        BatchName = batchName;
    }
}
