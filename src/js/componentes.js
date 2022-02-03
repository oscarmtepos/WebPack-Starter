// para exportar
import '../css/componentes.css';
import webpacklogo from '../assets/img/juan.png';

export const saludar = (nombre) => { // Estructura de funcion con funcion de llave
    
    console.log('Creando etiqueta h1');
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`

    document.body.append(h1); //Append encima lo que vayas creando
    //IMAGEN
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);

}