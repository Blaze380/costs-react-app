package com.blazeland.costserverapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blazeland.costserverapi.models.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
