<h1> Filmaser </h1>

Proyecto final de la app Filmaser en Ionic para el Grado Superior de Desarrollo de Aplicaciones Multiplataforma del IES Campanillas.

![logo](./Capturas-Filmaser/logo.PNG)

<h3> Descripción </h3>

Los usuarios de Filmaser podrán añadir las series que les gusten a una lista de favoritos, de seguimiento, de finalizadas o de pendientes. Además, podrá comentar aquellas que haya terminado.

<h3> Objetivos </h3>

Filmaser es una aplicación orientada a aquellas personas que les gusten ver series y quieran tener a su disposición una lista de las que están viendo. 

<h3> Funcionalidades </h3>

Cuando el usuario inicie sesión con su cuenta o se registre, accederá a la página principal de la aplicación. Allí puede ver una lista de series y filtrar según el género que quiera para buscar las series. Aquellas series que al usuario le gusten, podrá añadirlas a una lista de seguimiento, pendientes o favoritos y en la lista de seguimiento añadirlas a vistas. Cabe destacar que cada serie tiene información como los géneros, sinopsis y año. Además, se pueden comentar aquellas series que el usuario finalice. 
La aplicación contendrá una página en la que se podrá ver una breve descripción y mi github. 
En cuanto a la parte de administración, el administrador de la aplicación podrá eliminar comentarios que no sean respetuosos.

<h3> Vídeo </h3>

Vídeo presentación de Filmaser: https://youtu.be/Q37ZfuFrsYo

<h3> ¿Qué se ha utilizado? </h3>

- Visual Studio Code para la realización de la aplicación.
- Firebase para administrar la base de datos.
- Angular.
- Ionic.
- GitHub.

<h3> Enlaces </h3>

- Hosting de Firebase de Filmaser-App: https://filmaser-app.web.app/login
- Hosting de Firebase de Filmaser-Landing-Page: https://filmaser-landing.web.app/

<h3> Tutorial de uso de la aplicación </h3>

<h4> Login </h4>

Lo primero que te encuentras en la aplicación es la pantalla de Login:

![login](./Capturas-Filmaser/login.PNG)

Puedes acceder más rápido gracias al almacenamiento local del correo:

![inicio](./Capturas-Filmaser/inicio.gif)

<h4> Registro y recuperar contraseña </h4>

Desde la pantalla de login, puedes acceder a la pantalla de registro y de recuperar contraseña:

![registro](./Capturas-Filmaser/registro.PNG) ![recuperar](./Capturas-Filmaser/recuperar.PNG)

<h4> Menú de la aplicación </h4>

De esta forma puedes acceder al menú de la aplicación y cerrar sesión:

![menú](./Capturas-Filmaser/menú.gif) ![logout](./Capturas-Filmaser/logout.gif)

Además, la aplicación cuenta con una ventana donde poder acceder a tus listas:

![modalLista](./Capturas-Filmaser/modalLista.PNG)

<h4> Filtrado de series </h4>

Puedes filtrar por género para encontrar lo que buscas de una forma más rápida:

![filtrado](./Capturas-Filmaser/filtrado.gif)

<h4> Series </h4>

Cada serie contiene distintos géneros, una sinopsis y el año de estreno:

![infoSerie](./Capturas-Filmaser/infoSerie.gif)

¿Cómo puedo añadir una serie a una lista? Es muy fácil:

![addSerie](./Capturas-Filmaser/addSerie.gif)

<h4> Listas </h4>

La aplicación tiene cuatro tipo de listas distintas: favoritos, seguimiento, pendientes y finalizadas.

![viendo](./Capturas-Filmaser/viendo.PNG) ![pendiente](./Capturas-Filmaser/pendiente.PNG)

![favoritos](./Capturas-Filmaser/favoritos.PNG) ![finalizadas](./Capturas-Filmaser/finalizadas.gif)

<h4> ¿Cómo comentar una serie? </h4>

Para comentar una serie, tienes que ir a tu lista de series finalizadas y pulsar al botón de "Añadir Comentario":

![comentar](./Capturas-Filmaser/comentar.gif)

Los comentarios se guardan en tu lista personal y en la comunidad de Filmaser:

![comunidad](./Capturas-Filmaser/comunidad.PNG)

<h4> Sobre la aplicación </h4>

En esta pantalla, se puede ver un resumen de Filmaser y un botón de contacto:

![info](./Capturas-Filmaser/info.PNG)

Tienes alguna duda, contacta conmigo a través de correo: sergiotoscano2407@outlook.es

<h3> Histórico semanal </h3>

<h5> SEMANA 1: 19/04 - 25/04 </h5>

- Creación del proyecto ionic desde cero.
- Modificación del logo en Inkscape.
- Creación del proyecto en Firebase, configuración en local y creación de la base de datos.
- Se ha creado una clase llamada Serie que alberga los campos necesarios.
- Además, se han hecho páginas como la principal, la lista de favoritos o el login y el componente menú.
- Se ha implementado dos servicios en la aplicación uno para la autenticación a la aplicación gracias a Firebase y otro para añadir series a una lista.

<h5> SEMANA 2: 26/04 - 2/05 </h5>

- Creación de la página de series pendientes, seguidas y vistas.
- Las nuevas listas se han añadido al componente del menú.
- Se ha implementado las guardas de las rutas en las nuevas páginas creadas para no poder acceder a ellas si no estás logueado.
- Uso de la ventana modal para acceder a los distintos botones de las listas.
- Se ha añadido el logo a la aplicación.
- Refactorización de algunas partes de la aplicación.

<h5> SEMANA 3: 3/05 - 9/05 </h5>

- Modificación de algunas partes del la aplicación.
- Limpieza de código.
- Creación de una nueva clase para probar una funcionalidad nueva.
- Comenzando a implementar los comentarios para las series vistas.
- Uso del Storage para recordar el último email usado en el login de Filmaser.
- Añadido un filtro por géneros para cubrir la parte del punto 3 de la Opción 2 de Sistemas de Gestión Empresarial.

<h5> Día 13/05 antes del checkpoint </h5>

- Código actualizado con lo  que se ha avanzado esta semana.
- APK generada.
- Hosting de Firebase: https://filmaser-app.web.app/login
- Bibliografía actualizada.
- Vídeo explicativo Checkpoint: https://www.youtube.com/watch?v=OITGQ7hUGYU.

<h5> SEMANA 4: 10/05 - 16/05 </h5>

- Creación de la página de comentarios y de miscomentarios.
- Implementación de un servicio nuevo para la parte de los comentarios.
- Página modal para añadir comentarios.
- Cambios en la aparencia de la aplicación.
- Generación de la primera APK para el checkpoint de esta semana.
- Modificación de código.

<h5> SEMANA 5: 17/05 - 23/05 </h5>

- Añadidos nuevos métodos para añadir, editar y borrar comentarios.
- Terminada parte de miscomentarios.
- Añadido botón de miscomentarios en la lista de botones.
- Solucionados errores de la aplicación.
- Incluido un nuevo botón para la parte de información.
- Investigando cómo empezar con la parte del administrador.

<h5> SEMANA 6: 24/05 - 30/05 </h5>

- Creación de la página de administración desde cero.
- Creación de las páginas necesarias como login o reset.
- La aplicación Filmaser está terminada. Sin embargo, se le añadirán nuevas series al JSON o pequeñas funcionalidades.
- Conexión de Filmaser-Admin con el proyecto de Firebase.
- Implementación del servicio de autenticación.
- Añadiendo las funcionalidades de los comentarios como los de la aplicación en Filmaser-Admin para que el administrador pueda eliminar comentarios.

<h5> SEMANA 7: 31/05 - 6/06 </h5>

- Implementación de un botón para acceder a la parte de comentarios en el home.
- Añadido un botón para cambiar la contraseña en el home.
- Nuevos estilos en la parte de los comentarios.
- Nuevos estilos en la parte del home.
- Nuevas series añadidas en Filmaser-App.
- Filmaser-Admin está terminada. Sin embargo, se le añadirán, posiblemente, pequeñas funcionalidades.

<h5> SEMANA 8: 7/06 - 13/06 </h5>

- Resuelto un problema con el hosting de Filmaser-App.
- Limpieza general de código.
- Comentando código.
- Terminada la Landing Page de Filmaser cubriendo todos los requisitos, pendiente de subida.
- Empezando con la presentación en PDF.
- Pendiente la grabación del vídeo descriptivo.

<h5> SEMANA 9: 14/06 - 16/06 </h5>

- Tutorial de capturas hecho.
- Presentación en PDF terminada.
- Pequeñas modificaciones en Filmaser-App y Landing Page.
- APK final generada.
- README actualizado.
- Vídeo grabado.

NOTA: En la carpeta Filmaser-Proyecto se encuentran: Filmaser-Presentación, Filmaser-Admin y Filmaser-Landing-Page.

<h3> Bibliografía </h3>

Por ahora he usado estas páginas para la realización de la aplicación:
- [Ionic Framework](https://ionicframework.com/docs)
- [Firebase](https://firebase.google.com/)
- [IonIcons](https://ionic.io/ionicons)
- [It-swarm-es.com](https://www.it-swarm-es.com/es/firebase/como-elimino-un-sitio-alojado-de-firebase/829794163/)
- [Tutorial Hosting Landing Page Firebase](https://www.youtube.com/watch?v=drvXMz75k5s&list=WL&index=1&t=436s)

<h3> Mockup </h3>

Esta es una idea principal de la aplicación. Es probable que se cambien algunos aspectos en la aplicación final.

# Login

![login_mockup](./mockup/login_mockup.PNG)

# Registro

![registro_mockup](./mockup/registro_mockup.PNG)

# Principal

![principal_mockup](./mockup/principal_mockup.PNG)

# Serie

![info_mockup](./mockup/info_mockup.PNG)

# Lista

![lista_mockup](./mockup/lista_mockup.PNG)

No olvides de dejar una estrellita si te ha gustado el repositorio :)
