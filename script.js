let api_key='1aa5b873776699ad37e4c54b3f3d6898'
let difkelvin=273.15
let urlbase='https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad=document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})
function fetchDatosClima(ciudad){
    fetch (`${urlbase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))  
}

function mostrarDatosClima(data){
    console.log(data)
    const divdatosClima=document.getElementById('datosClima')
    divdatosClima.innerHTML=''

    const ciudadNombre=data.name
    const paisNombre=data.sys.country
    const temperatura=data.main.temp
    const descripcion=data.weather[0].description

    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo=document.createElement('p')
    temperaturaInfo.textContent=`la temperatura es: ${Math.floor(temperatura -difkelvin)} C`

    const descripcionInfo=document.createElement('p')
    descripcionInfo.textContent=`La descripcion metereologica es ${descripcion}`

    divdatosClima.appendChild(ciudadTitulo)
    divdatosClima.appendChild(temperaturaInfo)
    divdatosClima.appendChild(descripcionInfo)

}   