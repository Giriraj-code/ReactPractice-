package com.example.demo;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String department;

    public int getId() { return id; }
    public String getName() { return name; }
    public String getDepartment() { return department; }
}
