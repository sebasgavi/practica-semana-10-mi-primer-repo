function paginaCargada(){

    var seleccionada = 0;
    var imagenes = document.querySelectorAll('.imagen-perrito');
    function cambiarPosicion(evento){
        console.log(evento.code);
        switch(evento.code){
            case "ArrowLeft":
                imagenes[seleccionada].style.marginLeft = 
                    parseInt(imagenes[seleccionada].style.marginLeft) - 30 + 'px';
                break;
            case "ArrowRight":
                imagenes[seleccionada].style.marginLeft = 
                    parseInt(imagenes[seleccionada].style.marginLeft) + 30 + 'px';
                break;
        }
    }
    window.addEventListener('keydown', cambiarPosicion);


    function recorrerPerritos(imagen, index){
        function seleccionar(){
            seleccionada = index;
        }
        imagen.addEventListener('click', seleccionar);
        imagen.style.marginLeft = '0px';
    }
    imagenes.forEach(recorrerPerritos);

}
window.addEventListener('load', paginaCargada);