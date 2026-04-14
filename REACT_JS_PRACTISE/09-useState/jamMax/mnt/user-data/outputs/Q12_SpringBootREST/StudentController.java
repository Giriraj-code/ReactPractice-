package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private List<Student> students = new ArrayList<>(Arrays.asList(
        new Student(1, "Rahul", "MCA"),
        new Student(2, "Priya", "BCA")
    ));

    @GetMapping
    public List<Student> getAll() {
        return students;
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable int id) {
        return students.stream().filter(s -> s.getId() == id).findFirst().orElse(null);
    }

    @PostMapping
    public Student create(@RequestBody Student student) {
        students.add(student);
        return student;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        students.removeIf(s -> s.getId() == id);
        return "Deleted student " + id;
    }
}
