import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-resultado-basica',
  templateUrl: './resultado-basica.component.html',
  styleUrls: ['./resultado-basica.component.css']
})
export class ResultadoBasicaComponent implements OnInit {

  resultados: any[];


  constructor(
    private router: Router,
    private http: Http,
  ) { }

  ngOnInit() {
var data=JSON.parse(localStorage.getItem('ResultadosBasica'))
this.resultados = data;
console.log('resultado acumulados es',this.resultados)
  }
  volver(){
     //limpia local storage menos resultados
    localStorage.removeItem('perdida por tuberia');
    localStorage.removeItem('perdida por accesorios');
    localStorage.removeItem('Tramos de tuberia');
    localStorage.removeItem('Accesorios Utilizados');
    localStorage.removeItem('caudal');
    localStorage.removeItem('presion');
    localStorage.removeItem('altura');
    this.router.navigate(['/basica'])
  }
home(){
  this.router.navigate(['/'])
}
}
