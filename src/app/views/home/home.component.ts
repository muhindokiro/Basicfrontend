import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import random from '@angular/cli'
import { CocktailService } from 'src/app/core/services/cocktail.service';
import { LocaldrinksService } from 'src/app/core/services/localdrinks.service';
// import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loadingDrinks = false;
  loadingCocktails = false;
  cocktailList: any[] = [];
  drinksList: any[] = [];
  loadingPost=false
  cockTailForm!: FormGroup;
  constructor(
    private cocktailService:CocktailService,
    private localdrinkService: LocaldrinksService,
    private router:Router,
    // private toaster:ToastrService
  ) { }

  ngOnInit(): void {
    this.getCocktails()
    this.getDrinks()

    this.cockTailForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      ingredients: new FormControl(''),

    })
  }

  //Get 5 coktails from cocktail api
  getCocktails() {
    this.loadingCocktails = true
    this.cocktailService.getCocktails().subscribe((data)=>{
      let cocktails = data.drinks;
      const size = 5
      const items = cocktails.slice(0, size)
      this.cocktailList = items
      this.loadingCocktails=false
    })
}

//Get cocktails from local database
getDrinks(){
  this.loadingDrinks = true
    this.localdrinkService.getDrinks().subscribe((data)=>{
      let drinks = data.drink;
      const size = 2
      const items = drinks.slice(0, size)
      this.drinksList = items
      this.loadingDrinks=false
    })
}

// getRandomDrink() {
//   this.cocktailService.getCocktails().subscribe((data)=>{
//       let randomdrinks = data.drinks;
//       let randomdrink = 5
//       while randomdrink > 0:
//       items = randomdrinks.random.randint(0, len(randomdrinks))
//       // this.cocktailList = items
//       print (randomdrinks[items])
//       randomdrink -= 1
//       this.loadingCocktails=false
//     })
// }

//Add cocktail,,refresh page from new data to display
addCockTail(){
const payload={
  name:this.cockTailForm.get('name')?.value,
  description:this.cockTailForm.get('description')?.value,
  ingredients:this.cockTailForm.get('ingredients')?.value
}
console.log(payload,"THE PAYLOAD WE EXPECT!!");

  this.loadingPost=true
  this.cocktailService.addCockTail(payload).subscribe(res=>{
    // this.toaster.success("You have successfully created a drink")
    this.router.navigate(['/home'])
    this.loadingPost=false
  },
  (error) => {
          // this.toaster.warning(error.error.message);
          this.loadingPost= false;
        });
}
}
function len(data: any): any {
  throw new Error('Function not implemented.');
}

