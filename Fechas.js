console.log ("Fecha de hoy:")
let hoy= new Date()

console.log ("Fecha de mi nacimiento:")
let MiNacimiento= new Date (7,10,1999)

console.log("Hoy es mas tarde que mi nacimiento")
let MasTarde= hoy> MiNacimiento

console.log ("Dia de mi nacimiento")
let DiaMiNacimiento= MiNacimiento.getDate()

console.log ("Este es el mes de mi nacimiento")
let MesDeNacimiento= MiNacimiento.getMonth()+1

console.log ("Este es el año de mi nacimiento")
let AñoMiNacimiento= MiNacimiento.getFullYear()