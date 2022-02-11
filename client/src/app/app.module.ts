import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail.component';
import { RecipeAddComponent } from './components/recipe-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'


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
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
