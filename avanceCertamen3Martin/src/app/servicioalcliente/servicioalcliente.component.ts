import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Cliente,ListaClientes } from '../interfaces/cliente';
import { ClientesServiceService } from '../services/clientes-service.service';

@Component({
  selector: 'app-servicioalcliente',
  templateUrl: './servicioalcliente.component.html',
  styleUrls: ['./servicioalcliente.component.scss']
})
export class ServicioalclienteComponent implements OnInit {

  activarMsg:boolean=false;
  formulario:FormGroup;
  clientes=ListaClientes;
  constructor(public Form: FormBuilder, private clienteServicio:ClientesServiceService) {
    this.formulario=this.Form.group({
      nombre: ["", [Validators.required,Validators.maxLength(50)]],
      apellido: ["", [Validators.required,Validators.maxLength(50)]],
      pais: ["", Validators.required],
      ciudad: ["", [Validators.required,Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
  }

  mandarObjeto(){

  }

  validacion(){
    let countCheckManual=0;
    let genero:string='';
    let listaRadios:any=document.getElementsByClassName("radio-check");
    for(let i=0;i<listaRadios.length;i++){
      if(listaRadios[i].checked){
        genero=listaRadios[i].value;
        countCheckManual++;
      }
    }
    if(countCheckManual<1)alert("Selecciona una opcion en Genero");
    // console.log(this.formulario.get("nombre")?.value);

    if(countCheckManual==1){

      //agregar cliente a la lista mediante el servicio

      /*this.clienteServicio.agregarCliente(
        this.formulario.get('nombre')?.value,
        this.formulario.get('apellido')?.value,
        genero,
        this.formulario.get('ciudad')?.value,
        this.formulario.get('pais')?.value,
      );*/
      this.activarMsg=true
      let aux:Cliente={
        "id":this.clientes.length+1,
        "nombres":this.formulario.get('nombre')?.value,
        "apellidos":this.formulario.get('apellido')?.value,
        "genero":genero,
        "pais":this.formulario.get('ciudad')?.value,
        "ciudad":this.formulario.get('pais')?.value,
      }

      this.clientes.push(aux);
      console.log(aux.id,aux.nombres,aux.apellidos,aux.genero,aux.pais,aux.ciudad);
    }
  }

}
