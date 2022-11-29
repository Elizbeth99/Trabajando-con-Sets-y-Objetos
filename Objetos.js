let DatPersonal= 
{
    Nombre: "Elizbeth",
    Apellido: "Romero",
    Edad: 23,
    Altura: 150,
    EresDesarrollador: true
}

let Edad= DatPersonal.Edad
let ListaDatPersonal=
[
  {
    DatPersonal
  },
  {
    Nombre: "Antonio",
    Apellido: "Paleta",
    Edad: 23,
    Altura: 170,
    EresDesarrollador: false,
  },
  {
    Nombre: "Samantha",
    Apellido: "Tobon",
    Edad: 19,
    Altura: 160,
    EresDesarrollador: false,
  }
]

let ListaOrdEdad= ListaDatPersonal.sort((a,b)=>b.edad - a.edad)

console.log(ListaOrdEdad)