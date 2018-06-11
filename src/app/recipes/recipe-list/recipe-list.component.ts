import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'Test Recipe Description', 'http://images.indianexpress.com/2017/05/zomato_big_1.jpg'),
  new Recipe('Test Recipe', 'Test Recipe Description', 'http://images.indianexpress.com/2017/05/zomato_big_1.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
