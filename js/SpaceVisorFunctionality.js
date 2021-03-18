let imagenes;
let ImagenMostrar;

let descripcion;

let idTarjeta;
let idImagen;
let idDatos;
let idDescripcion;
let idTitulo;
let ArregloLinksImagenes = new Array();
let ListaTarjetas = new Array();
let arregloListo = false;
let tarjetas;




let ArregloNoticiasHubbleMostradas = new Array();
let noticiasHubble;
let tamanioNoticiasHubble;
let noticiaHubbleEscogida;
let idNoticiaHubbleEscogida;
let contadorNoticiaHubbleEscogida;
let noticiasHubbleExpandida;
let expandirReducirNoticiaHubble = 0;
let Arreglo_NoticiasAbiertas_hubbler = new Array();



let ArregloVideosMostrados = new Array();

var numeroTarjetas = 0;

let ArregloTerminoMostrados = new Array();


let ContadorNoticiasHubble = 0;
let j = 0;


let i=0;


window.onload = function(){   
    var tamanio =3;
    var post_numero;
    CrearNoticiasHubble(3);
    
    while( i < tamanio ){
        post_numero = ObtenerEnteroAleatorio(11);
        if(post_numero < 8){
            CrearTarjeta(i);
        }else{
            CrearVideo(i);
        }
        i++;
    }   
}


const onScroll = () => {
    if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
        var tamanio =3;
        var k = 0;
        var post_numero;
        
        while( k < tamanio ){
            post_numero = ObtenerEnteroAleatorio(11);
            if(post_numero < 8){
                CrearTarjeta(i);
            }else{
                CrearVideo(i);
            }
            k++;
            i++;
        }  
     }
   }
   
window.addEventListener('scroll', onScroll)

function presionarBoton(){ 
    console.log(numeroTarjetas);
    CrearNoticiasHubble(3);  
}






function CrearTermino(i){
    var terminoABuscar;
    var contador = i;
    var terminos;
    var terminoEscogido;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://hubblesite.org/api/v3/glossary?page=all', true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status == 200){
            terminos =JSON.parse(this.responseText);
            terminoABuscar = ObtenerVideoAleatorio(terminos);
            terminoEscogido = terminos[terminoABuscar];
            if(Object.keys(terminoEscogido).length == 0){
            }else{                
                CrearPartesNoticia_Termino(contador, terminoEscogido);
            } 
        }        
    }

}

function ObtenerTerminoAleatorio(){
    var terminos = vid;
    tamanioTerminos = terminos.length;
    let validado = false;
    let numeroDummy;
    while (validado==false){
        numeroDummy = ObtenerEnteroAleatorio(tamanioTerminos - 1);
        if(  ArregloTerminoMostrados.includes(numeroDummy)  ){            
        }else{
            validado=true;
        }
    }
    return numeroDummy;
}

function CrearPartesNoticia_Termino(i, terminoEscogido){
    var contador = i;
    var termino = terminoEscogido;

    if(termino.hasOwnProperty('definition')){
        
        if(termino.hasOwnProperty('name')){
            
            Noticia_Creartermino_Tarjeta(contador);
            Noticia_CrearTermino_Nombre(contador, termino.name);
            Noticia_CrearTermino_Definicion(contador, termino.definition);
            Noticia_CrearTermino_fuente(contador, termino.name);
            ContadorNoticiasHubble++
            j++;
        }
    }

}


function Noticia_Creartermino_Tarjeta(i){
    var contador = i;

    id_Termino_tarjeta = 'termino'+contador;
    var termino_Tarjeta = document.createElement('div');
    termino_Tarjeta.setAttribute('class', 'termino_Tarjeta');
    termino_Tarjeta.setAttribute('id', id_Termino_tarjeta);
    document.querySelector('.noticias').appendChild(termino_Tarjeta);
}

function Noticia_CrearTermino_Nombre(i, name){
    var contador = i;
    var nombre = name;

    id_Termino_Nombre = 'termino'+contador;
    var termino_Nombre = document.createElement('div');
    termino_Nombre.setAttribute('class', 'termino_Nombre');
    termino_Nombre.setAttribute('id', id_Termino_Nombre);
    termino_Nombre.innerHTML = nombre ;
    document.querySelector('#termino'+contador).appendChild(termino_Nombre);
}

function Noticia_CrearTermino_Definicion(i, definition){
    var contador = i;
    var definicion = definition;
    
    id_Termino_Definicion = 'termino'+contador;
    var termino_Definicion = document.createElement('div');
    termino_Definicion.setAttribute('class', 'termino_Definicion');
    termino_Definicion.setAttribute('id', id_Termino_Definicion);
    termino_Definicion.innerHTML = definition ;
    document.querySelector('#termino'+contador).appendChild(termino_Definicion);
    
}

function Noticia_CrearTermino_fuente(i, name){
    var contador = i;
    var nombre = name;
    var link = 'https://hubblesite.org';
    id_Termino_Url = 'termino'+contador;
    var termino_Url = document.createElement('a');
    termino_Url.setAttribute('class', 'termino_Url');
    termino_Url.setAttribute('id', id_Termino_Url);
    termino_Url.innerHTML = 'hubblesite.org - '+nombre;
    termino_Url.setAttribute('href', link);
    console.log(link);

    document.querySelector('#termino'+contador).appendChild(termino_Url);


    
}







function CrearVideo(i){
    var videoABuscar;
    var contador = i;
    var videos;
    var videoEscogido;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://hubblesite.org/api/v3/videos/science?page=all', true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status == 200){
            videos =JSON.parse(this.responseText);
            videoABuscar = ObtenerVideoAleatorio(videos);
            videoEscogido = videos[videoABuscar];
            var elemento = "http://hubblesite.org/api/v3/video/" + videoEscogido.id;
            if(elemento ==null){
            }else{
                CrearPostVideo(contador, elemento, videoEscogido.id);
            }
        }        
    }

}

function ObtenerVideoAleatorio(vid){
    var videos = vid;
    tamanioVideos = videos.length;
    let validado = false;
    let numeroDummy;
    while (validado==false){
        numeroDummy = ObtenerEnteroAleatorio(tamanioVideos - 1);
        if(  ArregloVideosMostrados.includes(numeroDummy)  ){            
        }else{
            validado=true;
        }
    }
    return numeroDummy;

}

function CrearPostVideo(i, elem, vid_id){
    
    var contador = i;
    var elemento = elem;
    var id = vid_id;

    post = new XMLHttpRequest();
    post.open('GET', elemento, true);
    post.send();    
    post.onreadystatechange = function (){        
        if(this.readyState ==4 && this.status == 200){
            var video =JSON.parse(this.responseText);
            if(Object.keys(video).length === 0){
            }else{                
                CrearPartesPostVideo(contador, video, id);
            } 
        }
    }
}

function CrearPartesPostVideo(i, vid, vid_id){
    var contador = i;
    var video = vid;
    var id = vid_id;

    if(video.hasOwnProperty('youtube_id')){
        if(video.hasOwnProperty('name')){
            
            Post_CrearVideo_Tarjeta(contador);
            Post_CrearVideo_Video(contador, video.youtube_id);

            Post_CrearVideo_Datos(contador);
            Post_CrearVideo_Titutlo(contador, video.name);
            Post_CrearVideo_Description(contador, video.short_description);
            Post_CrearVideo_Creditos(contador, video.credits);
            Post_CrearVideo_Mision(contador, video.mission);
            Post_CrearVideo_Boton(contador);

        }
    }

}


function Post_CrearVideo_Tarjeta(i){
    var contador = i;
    numeroTarjetas = numeroTarjetas + 1;
    CrearNoticiasHubble(3);  

    id_video_Tarjeta = 'video'+contador;
    var video = document.createElement('div');
    video.setAttribute('class', 'videoReducido');
    video.setAttribute('id', id_video_Tarjeta);
    document.querySelector('.cuerpo').appendChild(video);
}

function Post_CrearVideo_Video(i, link){
    var contador = i;
    var url = link;

    var id_video_Datos = 'video_Video'+contador;
    var video_Video = document.createElement('iframe');
    video_Video.setAttribute('class', 'video_Video');
    video_Video.setAttribute('id', id_video_Datos);
    video_Video.setAttribute('alt', 'Imagen no disponible');
    video_Video.setAttribute('src', 'https://www.youtube.com/embed/'+url);
    video_Video.setAttribute('allowfullscreen', true);
    document.querySelector('#video'+contador).appendChild(video_Video);    
}

function Post_CrearVideo_Datos(i){
    var contador = i;
    var id_Video_Datos = 'video_Datos'+contador;
    var video_Datos = document.createElement('div');
    video_Datos.setAttribute('class', 'video_Datos');
    video_Datos.setAttribute('id', id_Video_Datos);
    document.querySelector('#video'+contador).appendChild(video_Datos);

}

function Post_CrearVideo_Titutlo(i, name){
    var contador = i;
    var nombre = name;

    var id_Video_Titulo = 'titulo'+contador;
    var video_Titulo = document.createElement('div');
    video_Titulo.setAttribute('class', 'video_Titulo');
    video_Titulo.setAttribute('id', id_Video_Titulo);
    video_Titulo.innerHTML= nombre+ ' <strong>...</strong>';
    document.querySelector('#video_Datos'+contador).appendChild(video_Titulo);
}

function Post_CrearVideo_Description(i, description){
    var contador = i;
    var descripcion = description;

    var id_Video_Descripcion = 'descripcion'+contador;
    var video_Descripcion = document.createElement('div');
    video_Descripcion.setAttribute('class', 'video_Descripcion');
    video_Descripcion.setAttribute('id', id_Video_Descripcion);
    video_Descripcion.innerHTML= descripcion;
    document.querySelector('#video_Datos'+contador).appendChild(video_Descripcion);
}

function Post_CrearVideo_Creditos(i, credits){
    var contador = i;
    var creditos = credits;

    var id_Video_Creditos = 'video_Creditos'+contador;
    var video_Creditos = document.createElement('div');
    video_Creditos.setAttribute('class', 'video_Creditos');
    video_Creditos.setAttribute('id', id_Video_Creditos);
    video_Creditos.innerHTML= '<strong>Creditos: </strong>'+creditos;
    document.querySelector('#video_Datos'+contador).appendChild(video_Creditos);
}

function Post_CrearVideo_Mision(i, mission){
    var contador = i;
    var mision = mission;
    
    var id_Video_Mision = 'video_Mision'+contador;
    var video_Mision = document.createElement('div');
    video_Mision.setAttribute('class', 'video_Mision');
    video_Mision.setAttribute('id', id_Video_Mision);
    video_Mision.innerHTML= '<strong>Mission: </strong>'+mision;
    document.querySelector('#video_Datos'+contador).appendChild(video_Mision);
}

function Post_CrearVideo_Boton(i){
    var contador = i;
    
    var id_Video_Boton = 'video_boton'+contador;
    var video_Boton = document.createElement('div');
    video_Boton.setAttribute('class', 'video_Boton');
    video_Boton.setAttribute('id', id_Video_Boton);
    video_Boton.innerHTML = 'Saber mas';
    document.querySelector('#video' + contador).appendChild(video_Boton);
    document.querySelector('#'+id_Video_Boton).addEventListener('click',function(){ video_Boton_Expandir(this)});
}

function video_Boton_Expandir(id_Video_boton){
    var id =  id_Video_boton.id;
    var contador = id.slice(11);
    var video_Boton = document.querySelector('#'+id);
    var video_Datos = document.querySelector('#video_Datos' + contador);
    var video_Container = document.querySelector('#video' + contador);
    var video_Titulo = document.querySelector('#video' + contador);
    console.log()



    if(video_Boton.innerHTML=="Saber mas"){
        video_Boton.innerHTML = 'Reducir';
        video_Datos.classList.add('video_Datos_Expandido');
        video_Datos.classList.remove('video_Datos');

        video_Container.classList.add('videoExpandido');
        video_Container.classList.remove('videoReducido');
    }else{
        video_Boton.innerHTML = 'Saber mas';
        video_Datos.classList.add('video_Datos');
        video_Datos.classList.remove('video_Datos_Expandido');
        
        video_Container.classList.add('videoReducido');
        video_Container.classList.remove('videoExpandido');
    }
}


















function CrearTarjeta(i){
    var noticiaABuscar;
    var contador = i;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://hubblesite.org/api/v3/news?page=all', true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status == 200){
            tarjetas =JSON.parse(this.responseText);
            noticiaABuscar = ObtenerTarjetaAleatoria();
            noticiaHubbleEscogida = tarjetas[noticiaABuscar];
            var elemento = "http://hubblesite.org/api/v3/image/" + noticiaHubbleEscogida.news_id;
            if(elemento ==null){
            }else{
                CrearPost(contador, elemento, noticiaHubbleEscogida.news_id);
            }
        }        
    }
}

function ObtenerTarjetaAleatoria(){
    tamanioTarjetas = tarjetas.length;
    let validado = false;
    let numeroDummy;
    while (validado==false){
        numeroDummy = ObtenerEnteroAleatorio(tamanioTarjetas - 1);
        if(  ArregloNoticiasHubbleMostradas.includes(numeroDummy)  ){            
        }else{
            validado=true;
        }
    }
    return numeroDummy;

}

function CrearPost(i, elem, news_id){
    let contador = i;
    var id = news_id;
    post = new XMLHttpRequest();
    post.open('GET', elem, true);
    post.send();    
    post.onreadystatechange = function (){
        
        if(this.readyState ==4 && this.status == 200){
            elemento =JSON.parse(this.responseText); 
            if(Object.keys(elemento).length === 0){
            }else{                
                CrearPartesTarjeta(contador, elemento, id);
            } 
        }
    }
}

function CrearPartesTarjeta(cont, elem, objeto){
    var id = objeto;
    var elemento = elem;
    var contador = cont;
    if(elemento.hasOwnProperty('image_files')){
        if(elemento.hasOwnProperty('name')){
            Post_CrearTarjeta(contador, elemento);
            Post_CrearImagen(contador, elemento);
            Post_CrearDatos(contador, elemento);
            Post_CrearTitulo(contador, elemento, id);
            Post_CrearDescripcion(contador, elemento);
            Post_crearBoton(contador,elemento, elemento);  
            
            numeroTarjetas = numeroTarjetas + 1;
            
            CrearNoticiasHubble(3);  
        }
    }
}



function Post_CrearTarjeta(contador, elemento){
    idTarjeta = 'tarjeta'+contador;
    var tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta');
    tarjeta.setAttribute('id', idTarjeta);
    tarjeta.style.color = 'var(--azul-secundario)';
    document.querySelector('.cuerpo').appendChild(tarjeta);
}

function Post_CrearImagen(contador, elemento){
    idImagen = 'imagen'+contador;
    var largo = Object.keys(elemento.image_files).length;

    if(largo >0){
        var imagen = document.createElement('img');
        imagen.setAttribute('class', 'imagen');
        imagen.setAttribute('id', idImagen);
        imagen.setAttribute('alt', 'Imagen no disponible');
        imagen.setAttribute('src', 'https:'+elemento.image_files[largo-1].file_url);
        document.querySelector('#'+idTarjeta).appendChild(imagen);        
    }
}

function Post_CrearDatos(contador, elemento){
    idDatos = "datos"+contador;
    var datos = document.createElement('div');
    datos.setAttribute('id', idDatos);
    datos.setAttribute('class', 'datos');
    document.querySelector("#"+idTarjeta).appendChild(datos);

}

function Post_CrearTitulo(contador, elemento, objeto){
    if(elemento.name==null){

    }else{
        idTitulo = "titulo"+contador;
        var id = objeto;
        var titulo = document.createElement('div');
        titulo.setAttribute('class', 'titulo');
        titulo.setAttribute('id', idTitulo);
        titulo.innerHTML= '<strong>' + id + '</strong> - ' +elemento.name.slice(0,50) + ' <strong>...</strong>';
        document.querySelector("#"+idDatos).appendChild(titulo);
    }
}

function Post_CrearDescripcion(contador, elemento, ){
    idDescripcion = "datos"+contador;
    var descripcion = document.createElement('div');
    descripcion.setAttribute('class', 'descripcion');
    descripcion.setAttribute('id', idDescripcion);
    if(elemento.description ==null){
        descripcion.innerHTML= '';
    }else{
        descripcion.innerHTML=  elemento.description.slice(0,120) + '<strong> ...</strong>';
    }
    document.querySelector("#"+idDatos).appendChild(descripcion);
}

function Post_crearBoton(contador, elemento){
    idBoton = "boton"+contador;    
    var boton = document.createElement('button');
    boton.setAttribute('class', 'boton');
    boton.setAttribute('id', idBoton);
    boton.setAttribute('href','#popup');
    boton.innerHTML= 'Saber más de ' + elemento.name.slice(0,20);
    document.querySelector("#"+idDatos).appendChild(boton);
    document.querySelector('#'+idBoton).addEventListener('click',function(){ CrearModal(this.id)});
}



function CrearModal(numero){
    let id = numero.slice(5); 
    var modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'modal');
    console.log('El numero de la tarjeta es: '+id);
    document.querySelector('#container').appendChild(modal);

    ObtenerEspecificacionesTarjeta(id); 
}

function ObtenerEspecificacionesTarjeta(objeto){    
    image = new XMLHttpRequest();
    var id = objeto;
    console.log('tarjeta'+id);
    var news_id = document.querySelector("#titulo" + id).textContent.slice(0,6);  
    image.open('GET', 'http://hubblesite.org/api/v3/image/' + news_id , true);
    image.send();    

    image.onreadystatechange = function (){        
        if(this.readyState ==4 && this.status == 200){
            elemento =JSON.parse(this.responseText);
            Modal_innerModal(elemento);
            Modal_imagen(elemento);
            Modal_nombre(elemento);
            Modal_mision(elemento);
            Modal_creditos(elemento);
            Modal_descripcion(elemento);  
            Modal_botonCerrarBox();
            BotonCerrar();
        }
    }

}

function Modal_botonCerrarBox(){
    var Modal_botonCerrarBox = document.createElement('div');
    Modal_botonCerrarBox.setAttribute('class', 'boxBotonCerrado');
    Modal_botonCerrarBox.setAttribute('id', 'boxBotonCerrado');
    document.querySelector(".modal").appendChild(Modal_botonCerrarBox);
}

function BotonCerrar(){   
    var botonCerrar = document.createElement('button');
    botonCerrar.setAttribute('class', 'botonCerrado');
    botonCerrar.setAttribute('id', 'botonCerrado');
    botonCerrar.innerHTML= 'X';
    document.querySelector('#boxBotonCerrado').appendChild(botonCerrar);
    document.querySelector('#botonCerrado').addEventListener('click', function(){  CerrarModal()  });
}

function CerrarModal(){
    var containerModal = document.querySelector('#container');
    var modal = document.querySelector('#modal');
    var botonContainer = document.querySelector('#boxBotonCerrado');
    var botonCerrar = document.querySelector('#botonCerrado');
    var innerModal = document.querySelector('#innerModal');
    var modalImagen = document.querySelector('#imagenModal');
    var modalNombre = document.querySelector('#nombreModal');
    var modalMision = document.querySelector('#misionModal');
    var modalCreditos = document.querySelector('#creditosModal');
    var modalDescripcion = document.querySelector('#descripcionModal');

    
    var throwawayNode = botonContainer.removeChild(botonCerrar);
    var throwawayNode = modal.removeChild(botonContainer);
    var throwawayNode = innerModal.removeChild(modalImagen);
    var throwawayNode = innerModal.removeChild(modalNombre);
    var throwawayNode = innerModal.removeChild(modalMision);
    var throwawayNode = innerModal.removeChild(modalCreditos);
    var throwawayNode = innerModal.removeChild(modalDescripcion);
    var throwawayNode = modal.removeChild(innerModal);
    var throwawayNode = containerModal.removeChild(modal);
}

function Modal_innerModal(elemento){
    var Modal_inner = document.createElement('div');
    Modal_inner.setAttribute('class', 'innerModal');
    Modal_inner.setAttribute('id', 'innerModal');
    document.querySelector(".modal").appendChild(Modal_inner);
}

function Modal_imagen(elemento){    
    var Modal_imagen = document.createElement('img');
    Modal_imagen.setAttribute('class', 'imagenModal');
    Modal_imagen.setAttribute('id', 'imagenModal');
    Modal_imagen.setAttribute('alt', 'Imagen no disponible');
    Modal_imagen.setAttribute('src', 'https:'+elemento.image_files[0].file_url);
    document.querySelector(".innerModal").appendChild(Modal_imagen);
}

function Modal_nombre(elemento){
    var Modal_nombre = document.createElement('div');
    Modal_nombre.setAttribute('class', 'nombreModal');
    Modal_nombre.setAttribute('id', 'nombreModal');
    if(elemento.name == null){
        Modal_nombre.innerHTML='Nombre no encontrado' ;
    }else{        
        Modal_nombre.innerHTML=  elemento.name ;
    }
    document.querySelector(".innerModal").appendChild(Modal_nombre);
}

function Modal_mision(elemento){
    var Modal_mision = document.createElement('div');
    Modal_mision.setAttribute('class', 'misionModal');
    Modal_mision.setAttribute('id', 'misionModal');
    if(elemento.mission == null){
        Modal_descripcion.innerHTML='Misión no reconocida' ;
    }else{        
        Modal_mision.innerHTML='<strong>Misión: </strong>' +  elemento.mission ;
    }
    Modal_mision.innerHTML='<strong>Misión: </strong>' +  elemento.mission ;
    document.querySelector(".innerModal").appendChild(Modal_mision);
}

function Modal_creditos(elemento){
    var Modal_creditos = document.createElement('div');
    Modal_creditos.setAttribute('class', 'creditosModal');
    Modal_creditos.setAttribute('id', 'creditosModal');
    if(elemento.credits == null){
        Modal_descripcion.innerHTML='Sin créditos' ;
    }else{        
        Modal_creditos.innerHTML='<strong>Créditos: </strong>' +  elemento.credits ;
    }
    document.querySelector(".innerModal").appendChild(Modal_creditos);
}

function Modal_descripcion(elemento){
    var Modal_descripcion = document.createElement('div');
    Modal_descripcion.setAttribute('class', 'descripcionModal');
    Modal_descripcion.setAttribute('id', 'descripcionModal');
    if(elemento.description == null){
        Modal_descripcion.innerHTML='Descripción no disponible' ;
    }else{        
        Modal_descripcion.innerHTML='<strong>Descripción: </strong><br>' +  elemento.description ;
    }
    document.querySelector(".innerModal").appendChild(Modal_descripcion);
    document.querySelector("#descripcionModal").focus();  
}










function CrearNoticiasHubble(cantidad){
    var cantidadNoticias = cantidad;
    j = 0;
    while (j<cantidadNoticias) {
        var a = ObtenerEnteroAleatorio(11);
        if(a < 9){
            CrearNoticiaHubble(ContadorNoticiasHubble);
        }else{
            CrearTermino(ContadorNoticiasHubble);
        }  
        j++; 
        ContadorNoticiasHubble++;
    }
}







function ExpandirReducirNoticiaHubble(objeto){
    var id = objeto;
    var botonCerrarOAbrir = id.slice(19);

    if(Arreglo_NoticiasAbiertas_hubbler[botonCerrarOAbrir] == 0){
        ExpandirNoticiaHubble(id,botonCerrarOAbrir);
        Arreglo_NoticiasAbiertas_hubbler[botonCerrarOAbrir] = 1;
    }
    else{
        ReducirNoticiaHubble(id, botonCerrarOAbrir);
        Arreglo_NoticiasAbiertas_hubbler[botonCerrarOAbrir] = 0;
    }
}

function ExpandirNoticiaHubble(id, botonAbrir){
    var indice = botonAbrir;
    contadorNoticiaHubbleEscogida = indice;
    idNoticiaHubbleEscogida = id.slice(12,19);
    document.querySelector("#NoticiaHubble"+indice).setAttribute("class", 'NoticiaHubbleExpandida');
    ObtenerDetallesNoticias(idNoticiaHubbleEscogida, indice);
}

function ReducirNoticiaHubble(boton, botonCerrar){
    var indice = botonCerrar;
    var id = boton;
    contadorNoticiaHubbleEscogida = indice;
    idNoticiaHubbleEscogida = boton.slice(12,19);
    document.querySelector("#NoticiaHubble"+indice).setAttribute("class", 'NoticiaHubbleMiniatura');
    NoticiaHubblerExpandida_ActualizarBoton("reducir", id);
    NoticiaHubble_ElimiarDetalles(indice);
}





function CrearNoticiaHubble(i){
    var noticiaABuscar;
    var contador = i;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://hubblesite.org/api/v3/news?page=all', true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status == 200){
            noticiasHubble =JSON.parse(this.responseText);
            noticiaABuscar = ObtenerNoticiaHubbleAleatoria();
            noticiaHubbleEscogida = noticiasHubble[noticiaABuscar];

            if(Object.keys(noticiaHubbleEscogida).length === 0){
            }else{                
                MostrarNoticiaHubbleMiniatura(contador, noticiaHubbleEscogida);
            } 

        }        
    }
}

function ObtenerNoticiaHubbleAleatoria(){
    tamanioNoticiasHubble = noticiasHubble.length;
    let validado = false;
    let numeroDummy;
    while (validado==false){
        numeroDummy = ObtenerEnteroAleatorio(tamanioNoticiasHubble - 1);
        if(  ArregloNoticiasHubbleMostradas.includes(numeroDummy)  ){            
        }else{
            validado=true;
        }
    }
    return numeroDummy;

}

function MostrarNoticiaHubbleMiniatura(contador, noticia){
    NoticiaHubbleMiniatura_Crear(contador);
    NoticiaHubbleMiniatura_Fecha(contador, noticia.news_id);
    NoticiaHubbleMiniatura_Titulo(contador, noticia.name.slice(0,250));
    NoticiaHubbleMiniatura_BotonExpandir(contador, noticia.news_id);
    ContadorNoticiasHubble++
    j++;
}

function NoticiaHubbleMiniatura_Crear(contador){
    var idNoticia = 'NoticiaHubble'+contador;
    var NoticiaHubbleMiniatura = document.createElement('div');
    NoticiaHubbleMiniatura.setAttribute('class', 'NoticiaHubbleMiniatura');
    NoticiaHubbleMiniatura.setAttribute('id', idNoticia);
    document.querySelector('#noticias').appendChild(NoticiaHubbleMiniatura);
    Arreglo_NoticiasAbiertas_hubbler.push(0);
    
}

function NoticiaHubbleMiniatura_Fecha(contador, fecha){
    var noticiaHubble_Fecha = document.createElement('div');
    noticiaHubble_Fecha.setAttribute('class', 'FechaNoticiaHubbleMiniatura');
    noticiaHubble_Fecha.setAttribute('id', 'FechaNoticiaHubble');
    if(fecha == null){
        noticiaHubble_Fecha.innerHTML='Fecha desconocida' ;
    }else{        
        noticiaHubble_Fecha.innerHTML= '<strong> Fecha: </strong> ' + fecha ;
    }
    document.querySelector("#NoticiaHubble"+contador).appendChild(noticiaHubble_Fecha);    
}

function NoticiaHubbleMiniatura_Titulo(contador, nombre){
    var noticiaHubble_Nombre = document.createElement('div');
    noticiaHubble_Nombre.setAttribute('class', 'TitloNoticiaHubbleMiniatura');
    noticiaHubble_Nombre.setAttribute('id', 'TitloNoticiaHubble');
    if(nombre == null){
        noticiaHubble_Nombre.innerHTML='Titulo no encontrado' ;
    }else{        
        if(noticiaHubble_Nombre.innerHTML.length>20){
            noticiaHubble_Nombre.innerHTML= nombre.slice(0,20) + '...' ;
        }else{            
            noticiaHubble_Nombre.innerHTML= nombre.slice(0,90)  ;
        }
    }
    document.querySelector("#NoticiaHubble"+contador).appendChild(noticiaHubble_Nombre);
}

function NoticiaHubbleMiniatura_BotonExpandir(contador, id){
    var idBotonNoticia = "botonNoticia"+id+contador;    
    var boton = document.createElement('button');
    boton.setAttribute('class', 'botonNoticia');
    boton.setAttribute('id', idBotonNoticia);
    boton.innerHTML= ' Leer Abstract ';
    document.querySelector("#NoticiaHubble"+contador).appendChild(boton);

    document.querySelector('#'+idBotonNoticia).addEventListener('click',function(){ ExpandirReducirNoticiaHubble(this.id)});    
}




function NoticiaHubble_ElimiarDetalles(indice){
    var botonCerrar = indice;
    var NoticiaHubble_Padre = document.querySelector('#NoticiaHubble'+ botonCerrar);
    var NoticiaHubble_Imagen = document.querySelector('#NoticiaHubblerExpandida_Imagen'+botonCerrar);
    var NoticiaHubble_Abstract= document.querySelector('#NoticiaHubblerExpandida_Abstract'+botonCerrar);
    var NoticiaHubble_Mision = document.querySelector('#NoticiaHubblerExpandida_Mission'+botonCerrar);
    var NoticiaHubble_Link = document.querySelector('#NoticiaHubblerExpandida_Link'+botonCerrar);
    
    var throwawayNode = NoticiaHubble_Padre.removeChild(NoticiaHubble_Imagen);
    var throwawayNode = NoticiaHubble_Padre.removeChild(NoticiaHubble_Abstract);
    var throwawayNode = NoticiaHubble_Padre.removeChild(NoticiaHubble_Mision);
    var throwawayNode = NoticiaHubble_Padre.removeChild(NoticiaHubble_Link);
}


function ObtenerDetallesNoticias(id, indice){
    var iden = id;
    var indiceNoticia = indice
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://hubblesite.org/api/v3/news_release/'+iden, true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status == 200){
            noticiasHubbleExpandida =JSON.parse(this.responseText);
            NoticiaHubbleExpandida_renderizar(indiceNoticia);
        }        
    }
}

function NoticiaHubbleExpandida_renderizar(indiceNoticia){
    var indice = indiceNoticia;
    NoticiaHubblerExpandida_ObtenerImagen(noticiasHubbleExpandida, indice);
    //NoticiaHubblerExpandida_ObtenerNombre(noticiasHubbleExpandida.name);
    NoticiaHubblerExpandida_ObtenerMision(noticiasHubbleExpandida.mission, indice);
    //NoticiaHubblerExpandida_ObtenerFecha(  noticiasHubbleExpandida.publication.slice(0,0)  );
    NoticiaHubblerExpandida_ObtenerLink(noticiasHubbleExpandida.url, indice);
    NoticiaHubblerExpandida_ObtenerAbstract(noticiasHubbleExpandida.abstract, indice);
    NoticiaHubblerExpandida_ActualizarBoton("expandir", noticiasHubbleExpandida);
}

function NoticiaHubblerExpandida_ObtenerImagen(objeto, indice){
    var IndiceImagen = indice;
    var imagen = 'https:'+ objeto.thumbnail;
    var NoticiaHubblerExpandida_Imagen = document.createElement('img');
    NoticiaHubblerExpandida_Imagen.setAttribute('class', 'NoticiaHubblerExpandida_Imagen');
    NoticiaHubblerExpandida_Imagen.setAttribute('id', 'NoticiaHubblerExpandida_Imagen'+IndiceImagen);
    NoticiaHubblerExpandida_Imagen.setAttribute('alt', 'Imagen no disponible');

    if(imagen == null){
        NoticiaHubblerExpandida_Imagen.innerHTML='Imagen no disponible' ;
    }else{        
        NoticiaHubblerExpandida_Imagen.setAttribute('src', imagen);
    }
    document.querySelector("#NoticiaHubble"+contadorNoticiaHubbleEscogida).appendChild(NoticiaHubblerExpandida_Imagen); 

}

function NoticiaHubblerExpandida_ObtenerNombre(nombre){}

function NoticiaHubblerExpandida_ObtenerMision(objeto, indice){
    var indiceMision = indice;
    var mission = objeto;
    var NoticiaHubblerExpandida_Mission = document.createElement('div');
    NoticiaHubblerExpandida_Mission.setAttribute('class', 'NoticiaHubblerExpandida_Mission');
    NoticiaHubblerExpandida_Mission.setAttribute('id', 'NoticiaHubblerExpandida_Mission'+indiceMision);

    if(mission == null){
        NoticiaHubblerExpandida_Mission.innerHTML='Mision no reconocida' ;
    }else{        
        NoticiaHubblerExpandida_Mission.innerHTML='Mision: '+mission;
    }
    document.querySelector("#NoticiaHubble"+contadorNoticiaHubbleEscogida).appendChild(NoticiaHubblerExpandida_Mission); 
}

function NoticiaHubblerExpandida_ObtenerFecha(fecha){}

function NoticiaHubblerExpandida_ObtenerLink(objeto, indice){
    var indiceLink = indice;
    var link = objeto;
    var NoticiaHubblerExpandida_Link = document.createElement('a');
    NoticiaHubblerExpandida_Link.setAttribute('class', 'NoticiaHubblerExpandida_Link');
    NoticiaHubblerExpandida_Link.setAttribute('id', 'NoticiaHubblerExpandida_Link'+indiceLink);
    console.log(link);
    NoticiaHubblerExpandida_Link.setAttribute('href', link);

    if(link == null){
        NoticiaHubblerExpandida_Link.innerHTML='Fuente no disponible' ;
    }else{        
        NoticiaHubblerExpandida_Link.innerHTML='Visitar publicación original';
    }
    document.querySelector("#NoticiaHubble"+contadorNoticiaHubbleEscogida).appendChild(NoticiaHubblerExpandida_Link); 

}

function NoticiaHubblerExpandida_ObtenerAbstract(objeto, indice){
    var indiceAbstract = indice
    var abstract = objeto;
    var NoticiaHubblerExpandida_Abstract = document.createElement('div');
    NoticiaHubblerExpandida_Abstract.setAttribute('class', 'NoticiaHubblerExpandida_Abstract');
    NoticiaHubblerExpandida_Abstract.setAttribute('id', 'NoticiaHubblerExpandida_Abstract'+indiceAbstract);

    if(abstract == null){
        NoticiaHubblerExpandida_Abstract.innerHTML='Abstract no disponible' ;
    }else{        
        NoticiaHubblerExpandida_Abstract.innerHTML=abstract;
    }
    document.querySelector("#NoticiaHubble"+contadorNoticiaHubbleEscogida).appendChild(NoticiaHubblerExpandida_Abstract); 


}

function NoticiaHubblerExpandida_ActualizarBoton(texto, noticiasHubbleExpandida){
    var text = texto;
    var objeto = noticiasHubbleExpandida;
    if(text =="reducir"){
        document.querySelector("#"+objeto).innerHTML= ' Leer Abstract '; 
    }else{
        document.querySelector("#botonNoticia"+objeto.news_id+contadorNoticiaHubbleEscogida).innerHTML= ' Contraer Noticia ';   
    }

}








function ObtenerEnteroAleatorio(max) {
    var maximo = max;
    var num = Math.floor(Math.random() * Math.floor(maximo));
    return num;
  }