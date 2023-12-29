package com.blazeland.costserverapi.services.implementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.blazeland.costserverapi.models.Category;
import com.blazeland.costserverapi.repositories.CategoryRepository;
import com.blazeland.costserverapi.services.CategoryService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@AllArgsConstructor
@NoArgsConstructor

public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository catRepository;

    @Override
    public List<Category> getAllCategories() {
        return catRepository.findAll();
    }

}
