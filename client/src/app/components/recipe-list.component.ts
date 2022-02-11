import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeSummary } from '../models';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes : RecipeSummary[] = []

  constructor(private recipeSvc : RecipeService) { }

  ngOnInit() {
    this.recipeSvc.getAllRecipes()
      .then (r => this.recipes = r)
      .catch(error => {
        alert('An error has ocurred')
        console.error('>>> error: ', error)
      })
  }
}
