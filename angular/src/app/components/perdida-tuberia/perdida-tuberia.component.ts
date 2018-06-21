import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Tuberia } from '/Applications/tesis/app/angular-src/src/app/tuberia';

// Add the RxJS Observable operators we need in this app.
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-perdida-tuberia',
  templateUrl: './perdida-tuberia.component.html',
  styleUrls: ['./perdida-tuberia.component.css']
})
export class PerdidaTuberiaComponent implements OnInit {

  //variables utilizadas
  tuberiasSeleccionadas: any[];
  tuberias:any[];
  seleccionado:any[];
  total:number;
  diametros= [
  '1/2',
  '3/4',
  '1',
  '1 1/4',
  '1 1/2',
  '2',
  '2 1/2',
  '3',
  '4',
  '6',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16'];
  longitud=[];
  rugosidad=[];

  //instancia de la tuberia
  model = new Tuberia( this.diametros[2],this.longitud[0],this.rugosidad[0]);

  constructor(
    private router: Router,
    private http: Http,
    
  ) { }

  ngOnInit() {
   //busco resultados anteriores
    this.tuberias= [];
    this.total=JSON.parse(localStorage.getItem('perdida por tuberia'));
    var data=JSON.parse(localStorage.getItem('Tramos de tuberia'))
  if (data==undefined||data===''){
    this.tuberiasSeleccionadas=[];
  }
else {
    this.tuberiasSeleccionadas = data;
}
    console.log('resultado acumulados es',this.tuberiasSeleccionadas)
    
  }
//funcion que agrega tramos 
  agregar(diametro,longitud,rugosidad){
    

    if (rugosidad==undefined){
      console.log('entre al if con',rugosidad)
      
             rugosidad=0.0015;
             console.log('sali del al if con',rugosidad)
      }
      console.log('afuera del if rugosidad:',rugosidad)
   


//instancia de tramo
    var test=new Tuberia(diametro,longitud,rugosidad)

//se introduce en el array
       this.tuberiasSeleccionadas.push(test);

       console.log('datos tramo a agregar:',test)


//fijo encabezados de la peticion
    let headers = new Headers();
    headers.append('diametro',diametro);
    headers.append('Content-Type', 'application/json');
//busco diametro en metros
    this.http.post('http://localhost:3000/caudal/diametro',{diametro}, { headers})
      .map(res => res.json())
      .subscribe(response => {

        var caudal=JSON.parse(localStorage.getItem("caudal"));
        console.log('caudal',caudal);

  //determino el area de la tuberia
        var aux=((response.data.metros/2)*(response.data.metros/2))*3.1416
        console.log('area tuberia (mts^2)',aux);
        //determino la velocidad
        var velocidad=caudal/aux;
        console.log('velocidad',velocidad);




//nurmero de reynolds
var re=(velocidad*response.data.metros/0.0000010034)

//factor de friccion swamee
var factorfriccion=0.25/(Math.pow(Math.log10(
  (rugosidad/ (response.data.centimetros*10)
)/3.7)
+
(5.74/Math.pow(re,0.9))

,2))

//formula friccion en tuberias rectas
var perdidaxtuberia=factorfriccion*longitud*velocidad*velocidad/(response.data.metros*2*9.8)
        console.log('perdida tramo',perdidaxtuberia);

        this.total=perdidaxtuberia+this.total;
        console.log('total',this.total);
      }, err => {
        console.log('Error en el componente avanzada: ', err);
        return false;
      });



  }
  eliminar(indice){
//elimina tramo de tuberia
    let tramoAeliminar = this.tuberiasSeleccionadas[indice];
    let headers = new Headers();
    console.log('tramo a eliminar',tramoAeliminar)
    var diametro=tramoAeliminar.diametro;
    var longitud=tramoAeliminar.longitud;
    var rugosidad=tramoAeliminar.rugosidad;
    console.log("diametro",diametro,"longitud",longitud)

    headers.append('diametro',diametro);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/caudal/diametro',{diametro}, { headers})
      .map(res => res.json())
      .subscribe(response => {

        var caudal=JSON.parse(localStorage.getItem("caudal"));
       
        var aux=((response.data.metros/2)*(response.data.metros/2))*3.1416
       

       
        var velocidad=caudal/aux;
       

//formula friccion en tuberias rectas

var re=(velocidad*response.data.metros/0.0000010034)
var factorfriccion=0.25/(Math.pow(Math.log10((rugosidad/(response.data.centimetros*10))/3.7),2))


var perdidaxtuberia=factorfriccion*longitud*velocidad*velocidad/(response.data.metros*2*9.8)
        console.log('perdida tramo eliminado',perdidaxtuberia);

       

        this.total=this.total-perdidaxtuberia;
        console.log('total',this.total);
      }, err => {
        console.log('Error en el componente avanzada: ', err);
        return false;
      });

      this.tuberiasSeleccionadas.splice(indice,1)

   
  }

  

siguiente(){
  //fija los tramos de tuberia y valor de la perdida en local storage
  localStorage.setItem("perdida por tuberia", JSON.stringify(this.total));
  localStorage.setItem("Tramos de tuberia", JSON.stringify(this.tuberiasSeleccionadas));
  this.router.navigate(['/perdidas-accesorio'])
  

}
}
