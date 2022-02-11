import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail.component';
import { RecipeAddComponent } from './components/recipe-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http'


const appRoutes: Routes = [
  {path: '', component: RecipeListComponent },
  {path: 'recipe/:recipeId', component: RecipeDetailComponent },
  {path: 'add', component: RecipeAddComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
