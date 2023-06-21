let paises = []
let filtro = []

async function trazerPaises() {
    const url = 'https://restcountries.com/v3.1/all'
    const dados = await fetch(url)
    paises = await dados.json()
}

function filtrarPorRegiao(regiao) {
    filtro = []
    paises.map((pais) => {
        if(pais.region === regiao){
            filtro.push(pais)
        }

    })

    console.log(filtro)
}

function filtrarPorNome(nome){
    filtro = []
    paises.map((pais) => {
        console.log(pais.name.commom.toLowerCase().includes(nome.toLowerCase()))
    })
}

function iniciar(){
    trazerPaises()

    const select = document.querySelector("#filtrar-regiao")
    select.addEventListener('change', (evento) => {
        filtrarPorRegiao(evento.target.value)
    })

    const input = document.querySelector("#filtrar-nome")
    input.addEventListener('input', (evento) => {
        filtrarPorNome(evento.target.value)
    })
}

iniciar()