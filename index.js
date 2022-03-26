class consultaYCreacion {
    constructor(infoStatus) {
        const urlNormal = 'https://rickandmortyapi.com/api/character/?page=2'
        const url = `https://rickandmortyapi.com/api/character/?status=${infoStatus}`
        this.apiRickAndMorty(url)
    }
    apiRickAndMorty = async(url) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        try {
            const response = await (await fetch(url, requestOptions)).json()
            this.mostrarElementos(response)
        } catch (error) {
            console.log("error ", error)
        }
    }
    mostrarElementos(response) {
        const bodyT = document.querySelector('#table_container tbody');
        const characters = response.results
        console.log(characters)
        for (let i = 0; i < characters.length; i++) {
            const fila = bodyT.insertRow();
            let name = characters[i]['name']
            let status = characters[i]['status']
            let species = characters[i]['species']
            console.log(name, status, species)
            fila.insertCell().innerHTML = `<div onclick="despliegue(name, status, species)"><figure class="img_container"><img src=${characters[i]['image']}></img></figure></div>`
            fila.insertCell().innerHTML = name
            fila.insertCell().innerHTML = status
            fila.insertCell().innerHTML = species
        }
    }
}
let filtro = (ev) => {
    // let infoStatus = ev.target.value
    console.log(ev)
    let infoStatus = 'alive'
    let consulta = new consultaYCreacion(infoStatus)
}

let despliegue = (name, status, species) => {
    console.log(name, status, species)
}