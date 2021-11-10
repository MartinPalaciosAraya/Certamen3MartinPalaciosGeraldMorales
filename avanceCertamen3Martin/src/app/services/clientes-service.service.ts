import { Injectable } from '@angular/core';
import {ListaClientes, Cliente} from '../interfaces/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {


  ListaClientes:Array<Cliente>;
  constructor() {
    this.ListaClientes=ListaClientes;
  }
  public getAllClientes(){
    //console.log(this.ListaClientes);
    return this.ListaClientes;
  }
  public getCliente(idCliente:number):any{
    return this.ListaClientes.find(obj=>obj.id==idCliente);
  }
  /*public addCliente(newCliente: Cliente):void {
    let nuevoCliente=newCliente;
    newCliente.id=this._ListaClientes.length+1;
    this._ListaClientes.push(nuevoCliente);
    // console.log(this._ListaClientes);*/

  public agregarCliente(nombre:string,apellido:string,genero:string,pais:string,ciudad:string):void{
    console.log("paso por aca");
    let newId=this.ListaClientes.length+1;
    let newCliente:Cliente={
      id:newId, nombres:nombre, apellidos:apellido, genero:genero, pais:pais, ciudad:ciudad
    };
    this.ListaClientes.push(newCliente);
  }
}



