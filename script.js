//Desafio incorporar Eventos


class Club {
    constructor(id, nombre, creacion, liga, titulos, goleador) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.creacion = parseInt(creacion)
        this.liga = liga.toUpperCase()
        this.titulos = titulos
        this.goleador = goleador.toUpperCase()
    }
}


let id = 0, nombre, creacion, liga, titulos, goleador, continuar, respuesta

const clubes = []

const form = document.getElementById("idForm")
const divClubes = document.getElementById("divClubes")
const botonClubes = document.getElementById("botonClubes")



form.addEventListener("submit", (event) => {
    event.preventDefault()
    nombre = document.getElementById("idNombreClub").value
    creacion = parseInt(document.getElementById("idCreacion").value)
    liga = document.getElementById("idLiga").value
    titulos = parseInt(document.getElementById("idTitulos").value)
    goleador = document.getElementById("idGoleador").value
    const club = new Club(id, nombre, creacion, liga, titulos, goleador)
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

//Buscar por club

const divRespuesta1 = document.getElementById("respuesta1")
const botonBuscarClub = document.getElementById("botonBuscarClub")

function buscarClub(busqueda) {
    let clubBuscado = clubes.find(club => club.nombre == busqueda)
    divRespuesta1.innerHTML = ""
    if (clubBuscado) {
        divRespuesta1.innerHTML += `
        <div>
        <p> El Club Buscado ${clubBuscado.nombre} </p>
        </div>`
    } else {
        divRespuesta1.innerHTML += `
        <div>
        <p> Club Inexistente en la base de Datos </p>
        </div>`
    }
}

botonBuscarClub.addEventListener("click", () => {
    const inputBuscarClub = document.getElementById("idBuscarClub").value.toUpperCase()
    buscarClub(inputBuscarClub)
})

//Buscar por antiguedad, si buscas por año, por lo general te debería devolver clubes creados en ese año.

const botonAnioClub = document.getElementById("botonAñoClub")

function buscarAntiguedad(busqueda) {
    let clubesBuscados = clubes.filter(club => club.creacion === busqueda)
    console.log(clubesBuscados)
    divRespuesta1.innerHTML = ""
    if (clubesBuscados.length == 0) {
        divRespuesta1.innerHTML += `
        <div>
        <p>No existen clubes con dichas caracteristicas   </p>
        </div>
        `
    } else {
        for (let x = 0; x < clubesBuscados.length; x++) {
            divRespuesta1.innerHTML += `
            <div>
            <p> ${clubesBuscados[x].nombre} se creó en ${busqueda}  </p>
            </div>`
        }

    }
}

botonAnioClub.addEventListener("click", () => {
    //Con getElementById estás consultando la etiqueta, no su valor
    //const inputAñoClub = parseInt(document.getElementById("añoClub")) Si hago asi no anda la funcion(pense que era asi)
    const inputAnioClub = parseInt(document.getElementById("añoClub").value)
    buscarAntiguedad(inputAnioClub)
})


function buscarGoleador(busqueda) {
    let clubBuscado = clubes.find(clubes => clubes.goleador == busqueda)
    divRespuesta1.innerHTML = ""
    if (clubBuscado == undefined) {
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
    divRespuesta1.innerHTML = ""
    titulos.forEach(titulo => acumulador += titulo)

    divRespuesta1.innerHTML += `
    <div>
    <p> Titulos totales: ${acumulador} </p>
    </div>`
}

//Tercer Funcion:

const botonMaxGoleador = document.getElementById("botonMaxGoleador")

botonMaxGoleador.addEventListener("click", () => {
    const inputMaxGoleador = document.getElementById("inputMaxGoleador").value.toUpperCase()
    buscarGoleador(inputMaxGoleador)
})

//Cuarta Funcion:
const botonSumar = document.getElementById("botonSumar")

botonSumar.addEventListener("click", () => {
    sumarTitulos(clubes)
})






