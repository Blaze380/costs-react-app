package com.blazeland.costserverapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blazeland.costserverapi.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}