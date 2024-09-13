package com.cdac.placement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Company")
public class Company {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<PlacedStudent> placedStudentList;
    public Company(String name) {
        this.name = name;
    }
}
