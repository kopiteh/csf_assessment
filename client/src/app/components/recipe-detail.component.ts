import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId! : string;
  recipe! : Recipe;

  constructor(private recipeSvc:RecipeService, private activatedRoute : ActivatedRoute) { }



  ngOnInit(): void {
		this.recipeId = this.activatedRoute.snapshot.params['recipeId']
    console.info( '>>> recipeid: ', this.recipeId)

    this.recipeSvc.getRecipe(this.recipeId)
    .then (r => this.recipe = r)
    .catch(error => {
      alert('An error has ocurred while retrieving recipe.')
      console.error('>>> error: ', error)
    })
    console.info( '>>> recipe: ', this.recipe)

  }

}
