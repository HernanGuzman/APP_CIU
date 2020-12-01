 # TP Integrador para la materia Construcción de interfaz de usuario.

## Profesor: Javier Castrillo

### Alumno: Hernán Guzmán

## Descripción

Para el desarrollo de la APP Web se desarrolló una API que suministra los servicios necesarios para acceder a la base de datos. La APP permite listar, agregar, modificar y eliminar los registros de las entidades Marcas y Provincias.

### Base de datos
Se desarrollo en MSSQL Server. Posee dos tablas:
Tabla Marca: Campos (Id, NombreMarca, Deleted), en deleted se guarda la fecha en que se dio de baja ya que se hace una eliminación logica.
Tabla Provincias: Campos (Id, Descripcion, Deleted)

### API

La API se desarrollo en C# utilizando Entity Framework, este framework permite generar un contexto que se vincula con la base de datos y se pueden ir agregando las tablas que se deseen al proyecto. De esta forma se pueden generar consultas a la base de datos con Linq.

### APP WEB

La APP se realizó en React Native.
Para tener un mejor orden se crearon tres directorios:
Components: Donde se almacenan los componentes que se utilizan. Images: Se guardan las imágenes que se muestran en la APP. Pages: Se guardan las páginas.

APP.JS
Se utilizó la librería react-router-dom, esta nos permite generar distintas rutas para llamar a las paginas correspondientes. También se importa el componente layouts que es el que contiene el menú NavBar para la navegación en la APP.

MarcasPage.JS 

En el siguiente componente definido como página se muestran las marcas almacenadas, para conectarse a la API se utilizó la librería axio, esta nos permite generar un cliente de conexión con la API. Para mostrar el listado de las marcas se utilizó el componente Grid del framework material-ui, esto nos permite que la grilla se adapte al tamaño y orientación de la pantalla. Para mostrar cada Marca se utiliza el componente ChipMarca que se encuentra en la carpeta componentes. Este utiliza el componente Chip del framawork material-ui.

ProvinciasPage.JS 

Utiliza el mismo formato de la página marcas.
