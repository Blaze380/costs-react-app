package com.blazeland.costserverapi.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blazeland.costserverapi.models.Project;
import com.blazeland.costserverapi.services.ProjectService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/projects")
@AllArgsConstructor
public class ProjectController {
    private ProjectService projectService;

    @PostMapping("/create")
    public boolean createProject(@RequestBody Project project) {
        projectService.createProject(project);
        return true;
    }

    @PutMapping("/update")
    public boolean updateProject(@RequestBody Project project) {
        projectService.createProject(project);
        return true;
    }

    @GetMapping("/get")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }
}
