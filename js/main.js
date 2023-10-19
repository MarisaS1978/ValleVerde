




let cab = `
<nav class="navbar">
            <div class="brand-title">
                <img id="logo" src="./imagenes/logo venta de plantas y macetas sencillo verde.jpg"
                    alt="Logo de la empresa">
            </div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>

            <div class="navbar-links">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="quienessomos.html">Quienes Somos</a></li>
                    <li><a href="sucursales.html">Sucursales</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="tienda.html">Tienda Online</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li> <a href="#fondo">Redes Sociales</a></li>
                </ul>
            </div>
            </div>
        </nav>
`
document.querySelector("header").innerHTML= cab;

pie=` 
<h3 class="animate__zoomIn">¡Seguinos en nuestras redes sociales!</h3>
<br>
<div id="redes">
    <a href="http://twitter.com" target="_blank"><i class="fa-brands fa-square-x-twitter fa-2xl"></i></a>

    <a href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>

    <a href="http://web.whatsapp.com" target="_blank"><i class="fa-brands fa-square-whatsapp fa-2xl"></i></a>
</div>
<br><br>
<a id="fondo" href="#">Volver</a>

<br><br>

<p>©Sitio desarrollado bajo licencia de <strong>Vivero Valle Verde</strong></p> `
document.querySelector("footer").innerHTML=pie

