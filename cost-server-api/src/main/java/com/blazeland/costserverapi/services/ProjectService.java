package com.blazeland.costserverapi.services;

import java.util.List;

import com.blazeland.costserverapi.models.Project;

public interface ProjectService {

    void createProject(Project project);

    void updateProject(Project project);

    List<Project> getAllProjects();

}
