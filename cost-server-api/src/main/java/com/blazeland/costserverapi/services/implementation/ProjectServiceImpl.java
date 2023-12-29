package com.blazeland.costserverapi.services.implementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.blazeland.costserverapi.models.Project;
import com.blazeland.costserverapi.repositories.ProjectRepository;
import com.blazeland.costserverapi.services.ProjectService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    @Override
    public void createProject(Project project) {
        projectRepository.save(project);
    }

    @Override
    public void updateProject(Project project) {
        projectRepository.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

}
