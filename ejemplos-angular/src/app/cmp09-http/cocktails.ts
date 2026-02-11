import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cocktails {
  url: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  http = inject(HttpClient)

  getCocktailsByName(name: string) {
    return this.http.get(this.url + name)
  }

}
