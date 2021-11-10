export interface Cliente {
    id:number
    nombres:string;
    apellidos:string;
    genero:string;
    pais:string;
    ciudad:string;
}

export let ListaClientes:Array<Cliente>=[
    {
        id:0,
        genero:"Mujer",
        nombres:"asdf",
        apellidos:"Cruz",
        pais:"Chile",
        ciudad:"Osorno"
      },
      {
        id:1,
        genero:"Mujer",
        nombres:"Pepita",
        apellidos:"Cruz",
        pais:"Chile",
        ciudad:"Valparaiso"
      },

      {
        id:2,
        genero:"Hombre",
        nombres:"Juan",
        apellidos:"Totto",
        pais:"Chile",
        ciudad:"Metropolitana"
      },
      {
        id:3,
        genero:"Hombre",
        nombres:"Pedro",
        apellidos:"Tijuana",
        pais:"Chile",
        ciudad:"Metropolitana"
      },
      {
        id:4,
        genero:"Mujer",
        nombres:"Juana",
        apellidos:"de Arco",
        pais:"Chile",
        ciudad:"Valparaiso"
      }
];
