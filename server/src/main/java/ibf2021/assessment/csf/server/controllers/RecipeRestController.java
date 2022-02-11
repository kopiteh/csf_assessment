package ibf2021.assessment.csf.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObjectBuilder;


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

    @PostMapping(consumes=MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<String> postRecipe (@RequestBody MultiValueMap<String, String> form) {
        Recipe newRecipe = new Recipe(); 

        newRecipe.setTitle(form.getFirst("title"));
        newRecipe.setImage(form.getFirst("image"));
        newRecipe.setInstruction(form.getFirst("instruction"));
        
/*         List<String>  ingredients_placeholder = form.get("ingredients");
        for (String i : ingredients_placeholder){
            newRecipe.addIngredient(i);
        } */

        recipeSvc.addRecipe(newRecipe);

        JsonObjectBuilder payload = Json.createObjectBuilder();

    
        payload.add("message", 
            "Recipe for %title has been registered".formatted(newRecipe.getTitle()));

        return ResponseEntity
            .status(HttpStatus.ACCEPTED)
            .contentType(MediaType.APPLICATION_JSON)
            .body(payload.build().toString());
    }
}