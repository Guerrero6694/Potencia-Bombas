import { Component, OnInit } from '@angular/core';
import {Bomba} from '/Applications/tesis/app/angular-src/src/app/bomba';
import { Router } from '@angular/router';
import { Resultado } from '/Applications/tesis/app/angular-src/src/app/resultado';
// Add the RxJS Observable operators we need in this app.
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bomba',
  templateUrl: './bomba.component.html',
  styleUrls: ['./bomba.component.css']
})
export class BombaComponent implements OnInit {
  //eficiencias de la bomba
  eficiencia= [45,50,55,60,65,70,75,80,85,90,95,100];

  //instancia de la bomba
  model= new Bomba(this.eficiencia[3])

  constructor(
    private router: Router,

  ) { }


  ngOnInit() {
    if (JSON.parse(localStorage.getItem('eficiencia'))==undefined)
    {
      this.model.eficiencia=this.eficiencia[3]
    }
    else{
    this.model.eficiencia=JSON.parse(localStorage.getItem('eficiencia'))
    }
  }

  calcular(eficiencia){
    // variables de entrada 
    var altura=JSON.parse(localStorage.getItem('altura'));
    var perdidas=JSON.parse(localStorage.getItem('perdida por tuberia'))+JSON.parse(localStorage.getItem('perdida por accesorios'));
    var presion=JSON.parse(localStorage.getItem('presion'))
    console.log('altura ',altura,"Perdidas totaltes ",perdidas, "caudal ",caudal)
    var caudal=JSON.parse(localStorage.getItem('caudal'));
    
    // formula de potencia
    var potencia=(((altura+perdidas+presion)*caudal*9810)*0.0014)/(eficiencia/100)
    console.log("la potencia es en hp",potencia);
    this.router.navigate(['/resultado-avanzada'])
    localStorage.setItem("eficiencia", JSON.stringify(eficiencia));

    //redondeo resultado
    var potenciaredondeada=this.precisionRound(potencia,2);
    var alturatotal=perdidas+altura+presion;

    //instancia de resultado
    var aux= new Resultado(this.precisionRound(JSON.parse(localStorage.getItem('perdida por tuberia')),2),this.precisionRound(JSON.parse(localStorage.getItem('perdida por accesorios')),2),altura,presion,JSON.parse(localStorage.getItem('eficiencia')),potenciaredondeada,this.precisionRound(JSON.parse(localStorage.getItem('caudal')),4),this.precisionRound(alturatotal,2))
    this.AgregarResultados(aux);
  
  }

   AgregarResultados(resultado) {
    // busca resultados anteriores
    var ResultadosActuales = JSON.parse(localStorage.getItem("ResultadosAvanzada"));
    console.log("acumulado",ResultadosActuales)

    //si esta vacio
    if(ResultadosActuales == null) {ResultadosActuales = [];}
    
    // introduce en el array
    ResultadosActuales.push(resultado);
    localStorage.setItem("ResultadosAvanzada", JSON.stringify(ResultadosActuales));
};
  
//funcion que redonde resultado
precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
}
