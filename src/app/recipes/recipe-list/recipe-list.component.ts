import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'Test Recipe Description', 'http://images.indianexpress.com/2017/05/zomato_big_1.jpg'),
  new Recipe('Test Recipe2', 'Test Recipe Description2', 'http://images.indianexpress.com/2017/05/zomato_big_1.jpg')
];
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
}
  constructor() { }

  ngOnInit() {
  }

}
