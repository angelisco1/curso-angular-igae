import { Component, computed, effect, inject, signal } from '@angular/core';
import { Cocktails } from '../cocktails';

@Component({
  selector: 'app-buscador-cocktails',
  imports: [],
  templateUrl: './buscador-cocktails.html',
  styleUrl: './buscador-cocktails.css',
})
export class BuscadorCocktails {

  filtro = signal<string>('')
  cocktails = signal<Array<any>>([])
  cocktailsService = inject(Cocktails)

  totalCocktails = computed(() => {
    return this.cocktails().length
  })

  constructor() {
    effect(() => {
      this.cocktailsService.getCocktailsByName(this.filtro())
        .subscribe((datos: any) => {
          const cocktails = Array.isArray(datos.drinks) ? datos.drinks : []
          this.cocktails.set(cocktails)
        })
    })
  }


  setFiltro(event: Event) {
    const nuevoFiltro = (event.target as HTMLInputElement).value
    this.filtro.set(nuevoFiltro)
    // this.cocktailsService.getCocktailsByName(nuevoFiltro)
    //   .subscribe()
  }

}
