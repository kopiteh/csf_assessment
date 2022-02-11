import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Recipe, RecipeSummary } from './models';

@Injectable()
export class RecipeService {

  constructor(private http : HttpClient) {}

  getAllRecipes(): Promise<RecipeSummary[]> {
    return lastValueFrom(
      this.http.get<RecipeSummary[]>(`http://localhost:8080/api/recipes`)
    ).then (r =>
      r.map(r2 => ({id : r2.id, title: r2.title} as RecipeSummary)))
  }


  getRecipe(recipeId : string) : Promise<Recipe>{
    console.info ( 'Query URL >>> http://localhost:8080/api/recipe/${recipeId}')
    return lastValueFrom(
      this.http.get<Recipe>(`http://localhost:8080/api/recipe/${recipeId}`)
    ).then (r =>({id : r.id,
                  title: r.title,
                  image: r.image,
                  ingredients: r.ingredients,
                  instruction: r.instruction} as Recipe))
  }


}

