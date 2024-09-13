package com.cdac.placement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Mentor")
public class Mentor {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "mentor", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Student> studentList;
    public Mentor(String mentor) {
        this.name = mentor;
    }
}
