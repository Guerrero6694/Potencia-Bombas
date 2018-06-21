import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Caudal} from '/Applications/tesis/app/angular-src/src/app/caudal'; 
// Add the RxJS Observable operators we need in this app.
import 'rxjs/add/operator/map';





@Component({
  selector: 'app-avanzada',
  templateUrl: './avanzada.component.html',
  styleUrls: ['./avanzada.component.css']
})
export class AvanzadaComponent implements OnInit {

  dotacion:number;;
vivienda_unifamiliar:object;

  valor=1.5

  model = new Caudal(this.valor);

  submitted = false;

  onSubmit() { this.submitted = true; }

    
  get diagnostic() { return JSON.stringify(this.model); }
  constructor(
    private router: Router,
    
    
  ) 
    { 
    }

  ngOnInit() {
    //valor caudal inicial
    var caudal=0.001520125992;
    localStorage.setItem("caudal", JSON.stringify(caudal))
    
  }

 

  guardarCaudal(caudal){
//si se coloca un caudal nuevo
if (caudal==undefined){
        var aux=0.001520125992;
        localStorage.setItem("caudal", JSON.stringify(aux));
       
}

else {
localStorage.setItem("caudal", JSON.stringify(caudal/1000));
}
    this.router.navigate(['/perdidas'])
  }



}
