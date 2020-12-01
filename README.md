# TP Integrador para la materia Construccion de interfaz de usuario.

## Profesor: Javier Castrillo

### Alumno: Hernán Guzmán


## Descripción

Para el dessarrollo de la APP Web se desarrollo una API que suministra los servicios necesarios para acceder a la base de datos. La APP permite listar, agregar, modificar y eliminar los registros de las entidades Marcas y Provincias.

### Base de datos
Se desarrollo en MSSQL Server. Posee dos tablas:

Tabla Marca: Campos (Id, NombreMarca, Deleted), en deleted se guarda la fecha en que se dio de baja ya que se hace una eliminación logica.

Tabla Provincias: Campos (Id, Descripcion, Deleted)

### API
La API se desarrollo en C# utilizando Entity Framework, este framework permite generar un contexto que se vincula con la base de datos y se pueden ir agregando las tablas que se deseen al proyecto. De esta forma se pueden generar consultas a la base de datos con Linq.

### APP WEB
La APP se realizó en React Native.

Para tener un mejor orden se crearon tres directorios:

Components: Donde se almacenan los componenetes que se utilizan.
Images: Se guardan las imagenes que se muestran en la APP.
Pages: Se guardan las paginas.

APP.JS

Se utilizó la libreria react-router-dom, esta nos permite generar distintas rutas para llamar a las paginas correspondientes. También se importa el componente layouts que es el que contiene el menu NavBar para la navegación en la APP.

MarcasPage.JS
En el siguiente componente definido como pagina se muestran las marcas almacenadas, para conectarse a la API se utilizo la libreria axio, esta nos permite generar un cliente de conexion con la API.
Para mostrar el listado de las marcas se utilizó el componente Grid del framework material-ui, esto nos permite que la grilla se adapte al tamaño y orientaciòn de la pantalla.
Para mostar cada Marca se utiliza el componente ChipMarca que se encuetra en la carpeta componentes. Este utiliza el componente Chip del framawork material-ui.

ProvinciasPage.JS
Utiliza el mismo formato de la pagina marcas.













In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
