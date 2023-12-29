package com.blazeland.costserverapi.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blazeland.costserverapi.models.Category;
import com.blazeland.costserverapi.services.CategoryService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/category")
@AllArgsConstructor
public class CategoryController {
    private CategoryService categoryService;

    @GetMapping("/get-all")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

}
