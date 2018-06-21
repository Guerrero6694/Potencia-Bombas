import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Accesorio } from '/Applications/tesis/app/angular-src/src/app/accesorio';

@Component({
  selector: 'app-perdida-accesorio',
  templateUrl: './perdida-accesorio.component.html',
  styleUrls: ['./perdida-accesorio.component.css']
})
export class PerdidaAccesorioComponent implements OnInit {
aux:object;
  accesoriosSeleccionados: any[];
  accesorios:any[];
  seleccionado:any[];
  //perdidas:any[];
total:number;
  tipos= [ 'valvula de compuerta', 
  'Valvula de globo', 
  'valvula de bola', 
  'valvulas mariposa', 
  'valvulas retencion (CHECK)(L/D=100)', 
  'valvula retencion  Tipo oscilante (SWING)(L/D=50)', 
  'valvulas de retencion (CHECK)(L/D=600)', 
  'valvulas de retencion tipo obturador ascendente (LIFT)(L/D=55)', 
  'Valvulas de Retencion (CHECK) 5grd', 
  'Valvulas de retencion tipo disco inclinado 15grd', 
  'T estandar flujo directo', 
  'T estandar flujo a través del brazo de intercepción', 
  'Codo estandar de 90 grd', 
  'Codo estandar de 45 grd', 
  'Codo de radio largo de 90grd'];
  diametros= [ '1/2',
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
  '16']

  cantidad=[	1	,
  	2	,
	3	,
  	4	,
  5	,
  	6	,
  	7	,
  	8	,
  	9	,
  	10	]


  model = new Accesorio( this.tipos[0],this.diametros[2],this.cantidad[0]);
  // Settear los encabezados para la petición al API


  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private http: Http,
  ) { }

  ngOnInit() {
    this.accesorios= [];
    this.accesoriosSeleccionados = [];
   // this.perdidas=[];
    this.total=JSON.parse(localStorage.getItem('perdida por accesorios'));

    var data=JSON.parse(localStorage.getItem('Accesorios Utilizados'))
    if (data==undefined||data===''){
      this.accesoriosSeleccionados=[];
    }
  else {
      this.accesoriosSeleccionados = data;
  }
  }
  agregarAccesorio(tipo,diametro,cantidad) {
var test=new Accesorio(tipo,diametro,cantidad)
   console.log('datos query:',test)
      this.accesoriosSeleccionados.push(test);
    

      let headers = new Headers();
    
      
      headers.append('Content-Type', 'application/json');
  
      this.http.post('http://localhost:3000/caudal/perdidas-accesorios',{test}, { headers})
        .map(res => res.json())
        .subscribe(response => {
          var aux=test.tipo;
          console.log('valor k',response.data[aux]);
       
          this.BuscarVelocidad(test.diametro,test.cantidad,response.data[aux])

     
        }, err => {
          console.log('Error en el componente perdida accesorios: ', err);
          return false;
        });
  }

  eliminar(indice){
    let accesorioAeliminar = this.accesoriosSeleccionados[indice];
    let headers = new Headers();
    console.log('tramo a eliminar',accesorioAeliminar)
    var diametro=accesorioAeliminar.diametro;
    var tipo=accesorioAeliminar.tipo;
    var cantidad=accesorioAeliminar.cantidad
    var test=new Accesorio(tipo,diametro,cantidad)
    headers.append('Content-Type', 'application/json');
  
    this.http.post('http://localhost:3000/caudal/perdidas-accesorios',{test}, { headers})
      .map(res => res.json())
      .subscribe(response => {
        var aux=test.tipo;
        console.log('valor k',response.data[aux]);
     
        this.restarVelocidad(test.diametro,test.cantidad,response.data[aux])

   
      }, err => {
        console.log('Error en el componente perdida accesorios: ', err);
        return false;
      });
      this.accesoriosSeleccionados.splice(indice,1)

    
  }
  siguiente(){
    console.log('perdidas prueba final ', this.total);
    this.router.navigate(['/bomba'])
    localStorage.setItem("Accesorios Utilizados", JSON.stringify(this. accesoriosSeleccionados));
  }

  BuscarVelocidad(diametro,cantidad,factor){
      
    let headers = new Headers();
    
    headers.append('diametro',diametro);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/caudal/diametro',{diametro}, { headers})
      .map(res => res.json())
      .subscribe(response => {

        var caudal=JSON.parse(localStorage.getItem("caudal"));
        console.log('caudal',caudal);
        console.log('data',response.data);
        
        var aux=((response.data.metros/2)*(response.data.metros/2))*3.1416
        console.log('area tuberia (mts^2)',aux);

        var velocidad=caudal/aux;
        console.log('velocidad',velocidad);

        // formula q calcula el k segun la velocidad 
        console.log('factor',factor)
        this.total=this.total+(factor*cantidad*velocidad*velocidad/(2*9.8));
        
          console.log('total ', this.total);
          
          localStorage.setItem("perdida por accesorios", JSON.stringify(this.total));


      }, err => {
        console.log('Error en el componente avanzada: ', err);
        return false;
      });



  }

  restarVelocidad(diametro,cantidad,factor){
      
    let headers = new Headers();
    
    headers.append('diametro',diametro);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/caudal/diametro',{diametro}, { headers})
      .map(res => res.json())
      .subscribe(response => {

        var caudal=JSON.parse(localStorage.getItem("caudal"));
        console.log('caudal',caudal);
        console.log('data',response.data);
       
        var aux=((response.data.metros/2)*(response.data.metros/2))*3.1416
        console.log('area tuberia (mts^2)',aux);

        var velocidad=caudal/aux;
        console.log('velocidad',velocidad);

        // formula q calcula el k segun la velocidad 
        console.log('factor',factor)
        this.total=this.total-(factor*cantidad*velocidad*velocidad/(2*9.8));
        
          console.log('total ', this.total);
          
          localStorage.setItem("perdida por accesorios", JSON.stringify(this.total));


      }, err => {
        console.log('Error en el componente avanzada: ', err);
        return false;
      });



  }
}