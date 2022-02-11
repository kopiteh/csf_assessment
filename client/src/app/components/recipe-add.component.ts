import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe, RecipeHolder } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  form! : FormGroup
 // formArray! : FormArray

  constructor(private fb: FormBuilder, private recipeSvc:RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm(): FormGroup {

    return this.fb.group({
      title: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      ingredients: this.fb.control('', [ Validators.required, Validators.minLength(3)]),
      instruction: this.fb.control('', [ Validators.required, Validators.minLength(3)]),
      image: this.fb.control('', [ Validators.required])
    })
  }



  onAdd(){
    console.log (this.form.value)

    var ingredientsArr = this.form.value.ingredients.split("\n")

    let newRecipe = new RecipeHolder(
      this.form.value.title,
      this.form.value.image,
      ingredientsArr,
      this.form.value.title,
    )
    this.recipeSvc.postRecipe(newRecipe)
    this.router.navigate(['']);
  }




}
