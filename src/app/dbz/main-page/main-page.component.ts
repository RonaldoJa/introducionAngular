import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 1000
  }


  // agregarNuevoPersonaje( argumento: Personaje) {
  //   this.personajes.push(argumento);
  // }

  constructor(private dbzService: DbzService){
    
  }

}
