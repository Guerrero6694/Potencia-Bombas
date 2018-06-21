import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Basica } from '/Applications/tesis/app/angular-src/src/app/basica';
import { Tuberia } from '/Applications/tesis/app/angular-src/src/app/tuberia';
import { Resultado } from '/Applications/tesis/app/angular-src/src/app/resultado';
@Component({
  selector: 'app-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css']
})
export class BasicaComponent implements OnInit {
  //variable que almacena perdidas
  perdidas:number;
  //diferentes diametros
  diametros= [
    
    '1',
    '1 1/4',
    '1 1/2',
    '2',
    '2 1/2',
    '3',
    '4',
    ];
    longitud=[];
    rugosidad=[];

//crear una instancia de la tuberia
    tuberia = new Tuberia( this.diametros[2],this.longitud[0],this.rugosidad[0]);

  model = new Basica(10,10,1);

  constructor( 
    private router: Router,
    private http: Http,) 
    { }

  ngOnInit() {
  //caudal inicial
    var caudal=0.001520125992;
  
    localStorage.setItem("caudal", JSON.stringify(caudal))
    console.log('caudal inicial',JSON.parse(localStorage.getItem("caudal")))
  }
  


  Calcular(largo,ancho,pisos,altura,diametro){
    var aux=3;
    //si la altura entre los pisos no se especifica
    if (altura==="" || altura==undefined)
  {
    var alturatotal=pisos*aux;
    var longitud=largo+ancho +alturatotal;
    localStorage.setItem("altura", JSON.stringify(alturatotal));
    
  }
  //altura de entre los pisos especificadas
         else{
        var alturatotal=pisos*altura;
        var longitud=largo+ancho+alturatotal;
        localStorage.setItem("altura", JSON.stringify(alturatotal));
         }
         console.log("altura",alturatotal,"longitud",longitud)

           //peticion del diametro retorna en metros
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:3000/caudal/diametro',{diametro}, { headers})
            .map(res => res.json())
            .subscribe(response => {

            //area de la tuberia 
              var aux=((response.data.metros/2)*(response.data.metros/2))*3.1416

             //con caudal y area calculo velocidad 
              var velocidad=0.001520125992/aux;

              localStorage.setItem("velocidad", JSON.stringify(velocidad));


                //#de reynolds para agua a temperatura de 22 gr
              var re=(velocidad*response.data.metros/0.0000010034)

              //Ecuación de Swamee-Jain
              
              var factorfriccion=0.25/(Math.pow(Math.log10(
                (0.0015/ (2.54*10)
              )/3.7)
              +
              (5.74/Math.pow(re,0.9))
              
              ,2))

              //Ecuacion de perdida por tuberia
        var perdidas=factorfriccion*longitud*velocidad*velocidad/(response.data.metros*2*9.8)
        console.log('perdidas tuberia',perdidas);
              //ecuacion accesorios
         var accesorios=pisos*1
             

              console.log("diametro",diametro)
              console.log('velocidad',velocidad);
              
             

                  
        var caudal=0.001520125992;

        console.log('caudal',caudal)
 
        // formula calculo de potencia
 
         var potencia=(((alturatotal+14+perdidas+accesorios)*caudal*9810)*0.0014)

         //chequeo de valores de cada variable
         console.log("perdida tuberia",perdidas);   
         console.log('longitud',longitud)
         console.log('accesorios',accesorios)
         console.log("la potencia es en hp",potencia);
         console.log("la potencia redondeada es en hp",this.precisionRound(potencia,3));

          this.router.navigate(['/resultado-basica'])
          localStorage.setItem("eficiencia", JSON.stringify(100));
 
     //instancia resultado en funcion de las variables     
     var aux2= new Resultado(this.precisionRound(perdidas,2),accesorios,JSON.parse(localStorage.getItem('altura')),14,100,this.precisionRound(potencia,2),this.precisionRound(JSON.parse(localStorage.getItem('caudal')),6),0)


     //busqueda de resultados anteriores
    var ResultadosActuales = JSON.parse(localStorage.getItem("ResultadosBasica"));
     console.log("acumulado",ResultadosActuales)

     //si esta vacio
     if(ResultadosActuales == null) {ResultadosActuales = [];}
     

     //si no esta vacio
     // Save allEntries back to local storage
     ResultadosActuales.push(aux2);

     //set del nuevo array a localstorage
     localStorage.setItem("ResultadosBasica", JSON.stringify(ResultadosActuales));
            }, err => {
              console.log('Error en el componente avanzada: ', err);
              return false;
            });
        




    
  }

  //funcion que redonde resultados
  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
  }

 


