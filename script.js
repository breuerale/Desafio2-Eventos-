//Desafio incorporar Eventos
//Cambiar los promp por input, que tenga las mismas funciones pero que haya eventos.


class Club {
    constructor( id, nombre, creacion, liga, titulos, goleador) {
        this.id = id
        this.nombre = nombre
        this.creacion = creacion
        this.liga = liga
        this.titulos = titulos
        this.goleador = goleador
    }
}


let  id = 0, nombre, creacion, liga, titulos, goleador, continuar, respuesta

const clubes = []

const form = document.getElementById("idForm")

const divClubes = document.getElementById("divClubes")
const botonClubes = document.getElementById("botonClubes")



form.addEventListener("submit",(event) => {
    event.preventDefault() 

    nombre = document.getElementById("idNombreClub").value 
    creacion = parseInt(document.getElementById("idCreacion").value)
    liga = document.getElementById("idLiga").value
    titulos = parseInt(document.getElementById("idTitulos").value)
    goleador = document.getElementById("idGoleador").value
    

    const club = new Club(id,nombre, creacion, liga, titulos, goleador)

    clubes.push(club)

    form.reset()
})

botonClubes.addEventListener("click", () => {
    clubes.forEach(club => {
        divClubes.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Club: ${club.nombre}</h5>
                <p class="card-text">Fundacion: ${club.creacion}</p>
                <p class="card-text">Liga: ${club.liga}</p>
                <p class="card-text">Titulos Totales: ${club.titulos}</p>
                <p class="card-text">Goleador: ${club.goleador}</p>
            </div>
        </div>`
    })
})




const divRespuesta1 = document.getElementById("respuesta1") 

function buscarClub(clubes) {
    let clubBuscado = clubes.find(clubes => clubes.nombre == inputBuscarClub.value)

    if(clubBuscado == undefined) {
        divRespuesta1.innerHTML += `
        <div>
        <p> Club Inexistente en la base de Datos </p>
        </div>`
    } else {
        divRespuesta1.innerHTML += `
        <div>
        <p> El Club Buscado ${clubBuscado.nombre} </p>
        </div>`
    }
}


function buscarAntiguedad(clubes) {
    let clubesBuscados = clubes.filter(clubes => clubes.creacion >= inputAñoClub.value) 
    console.log(clubesBuscados)

    if(clubesBuscados.length == 0) {
        divRespuesta1.innerHTML += `
        <div>
        <p>No existen clubes con dichas caracteristicas   </p>
        </div>
        `
    } else {
        const divRespuesta1 = document.getElementById("respuesta1")
        for(let x = 0; x < clubesBuscados.length; x++) {
            divRespuesta1.innerHTML += `
            <div>
            <p> ${clubesBuscados[x].nombre} se creo despues de ${inputAñoClub.value}  </p>
            </div>`
        }

    }
}



function buscarGoleador(clubes) {

    let clubBuscado = clubes.find(clubes => clubes.goleador == inputMaxGoleador.value)

    if(clubBuscado == undefined) {
        divRespuesta1.innerHTML += `
        <div>
        <p>Goleador inexistente en la base de datos</p>
        </div>
        `
    } else {
        divRespuesta1.innerHTML += `
        <div>
        <p> ${inputMaxGoleador.value} juega en ${clubBuscado.nombre} </p>
        </div>`
    }
}

function sumarTitulos(clubes) {
    let acumulador = 0
    let titulos = clubes.map(clubes => clubes.titulos) 
    titulos.forEach(titulo => acumulador += titulo ) 

    divRespuesta1.innerHTML += `
    <div>
    <p> Titulos totales: ${acumulador} </p>
    </div>`
    
}


//Primera Funcion
const inputBuscarClub = document.getElementById("idBuscarClub")
const botonBuscarClub = document.getElementById("botonBuscarClub")

botonBuscarClub.addEventListener("click", () => {
    buscarClub(clubes)
})

//Segunda Funcion
const inputAñoClub = document.getElementById("añoClub") 
//const inputAñoClub = parseInt(document.getElementById("añoClub")) Si hago asi no anda la funcion(pense que era asi)
const botonAñoClub = document.getElementById("botonAñoClub")

botonAñoClub.addEventListener("click",() => {
    buscarAntiguedad(clubes)
})

//Tercer Funcion:
const inputMaxGoleador = document.getElementById("inputMaxGoleador")
const botonMaxGoleador = document.getElementById("botonMaxGoleador")

botonMaxGoleador.addEventListener("click", () => {
    buscarGoleador(clubes)
})

//Cuarta Funcion:
const botonSumar = document.getElementById("botonSumar")

botonSumar.addEventListener("click", () => {
    sumarTitulos(clubes)
})
















