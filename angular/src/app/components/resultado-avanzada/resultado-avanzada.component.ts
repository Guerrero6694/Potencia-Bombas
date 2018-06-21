import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-resultado-avanzada',
  templateUrl: './resultado-avanzada.component.html',
  styleUrls: ['./resultado-avanzada.component.css']
})
export class ResultadoAvanzadaComponent implements OnInit {
  resultados: any[];


  constructor(
    private router: Router,
    private http: Http,
  ) { }

  ngOnInit() {
var data=JSON.parse(localStorage.getItem('ResultadosAvanzada'))
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
    this.router.navigate(['/caudal'])
  }
home(){
  this.router.navigate(['/'])
}
}
