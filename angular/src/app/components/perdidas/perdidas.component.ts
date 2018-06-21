import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Altura } from '/Applications/tesis/app/angular-src/src/app/altura';




@Component({
  selector: 'app-perdidas',
  templateUrl: './perdidas.component.html',
  styleUrls: ['./perdidas.component.css']
})
export class PerdidasComponent implements OnInit {
  aux:number;




model= new  Altura(0,this.aux)



  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //se fija valor base de precion y se busca en de altura de haberlo
localStorage.setItem('presion',JSON.stringify(28))
    this.model.altura=JSON.parse(localStorage.getItem('altura'))
   
  }

  GuardarAltura(altura,presion){

    localStorage.setItem("altura", JSON.stringify(altura));
//si no se coloca valor de presion no se hace nada 
    if (presion==undefined||''){
    }
    //fija el valor de la presion colocada
    else{
    localStorage.setItem("presion", JSON.stringify(presion));
    }
  this.router.navigate(['/perdidas-tuberia'])

  }

  

}
  
