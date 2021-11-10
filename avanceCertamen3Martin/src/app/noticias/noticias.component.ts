import { Component, OnInit } from '@angular/core';
import { Cliente,ListaClientes } from '../interfaces/cliente';
import { ClientesServiceService } from '../services/clientes-service.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  clientes=ListaClientes;


  constructor(private clienteservicio:ClientesServiceService) {

  }

  ngOnInit(): void {
  }

}
