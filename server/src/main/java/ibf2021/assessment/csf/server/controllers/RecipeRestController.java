package ibf2021.assessment.csf.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;


/* Write your request hander in this file */


@RestController
@RequestMapping(path = "/api/recipe", produces = MediaType.APPLICATION_JSON_VALUE)

public class RecipeRestController { 
    
    @Autowired
    private RecipeService recipeSvc; 

    @GetMapping(path="{id}")
    public ResponseEntity<Optional <Recipe>> getRecipe(@PathVariable String id){
        Optional <Recipe> recipe = recipeSvc.getRecipeById(id);
        
        return ResponseEntity.ok(recipe); 
        
    }
}