package ibf2021.assessment.csf.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;

/* Write your request hander in this file */

@RestController
@RequestMapping(path = "/api/recipes", produces = MediaType.APPLICATION_JSON_VALUE)

public class RecipesRestController { 
    
    @Autowired
    private RecipeService recipeSvc; 

/*     @GetMapping
    public ResponseEntity<String> getAllRecipes(){
        return ResponseEntity.ok(recipeSvc.getAllRecipes().toString()); 
        
    } */
    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes(){
        List<Recipe> allRecipes = recipeSvc.getAllRecipes(); 
        return ResponseEntity.ok(allRecipes); 
        
    }
}
