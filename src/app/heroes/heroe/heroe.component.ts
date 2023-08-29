import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Iron man';
    edad: number = 33;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre() {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() {
        this.edad = 55;
    }
}