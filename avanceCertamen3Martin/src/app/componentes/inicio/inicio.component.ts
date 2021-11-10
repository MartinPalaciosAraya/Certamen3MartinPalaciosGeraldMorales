import { Component, OnInit } from '@angular/core';
import { Cliente,ListaClientes} from 'src/app/interfaces/cliente';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';
//import {ListaNoticiasDestacadas}from '../../interfaces/noticias';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  clientes=ListaClientes;

  constructor() {

  }

  ngOnInit(): void {
  }

}
