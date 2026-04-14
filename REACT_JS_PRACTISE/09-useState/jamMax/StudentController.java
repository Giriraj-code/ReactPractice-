package com.example.student;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public List<Student> getStudents() {
        List<Student> list = new ArrayList<>();
        list.add(new Student(1, "Rahul", "MCA"));
        list.add(new Student(2, "Priya", "BCA"));
        list.add(new Student(3, "Amit", "BSc CS"));
        return list;
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {
        return new Student(id, "Rahul", "MCA");
    }
}
