import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre_persona="nombre_persona"

  setName(){
    this.nombre_persona="nombre_persona"
  }
}
