import { Component, OnInit } from '@angular/core';

import{ActivatedRoute,Route} from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';
//import{ListaNoticiasDestacadas} from '../../interfaces/noticias';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  //ListaNoticiasDestacadas=ListaNoticiasDestacadas;
  //listaClientes:Cliente;

  id:number=0;

  cliente: Cliente;

  Categoria:any="";

  constructor(private ruta: ActivatedRoute, private clienteServicio:ClientesServiceService) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
      console.log(this.id);
    });
    this.cliente=clienteServicio.getCliente(this.id);
  }



  ngOnInit(): void {
    //this.Noticia=ListaNoticiasDestacadas.find(objeto=>objeto.id==this.id);

    //this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    //this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    //this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);

    // console.log(this.Categoria);

  }

}
