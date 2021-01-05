# Desafio Latam - Proyecto Front End (G3)

## Alumno: Javier Alejandro Castillo Oñatt

## Entrega 1 Maqueta
```
Se define en primera instancia, de modo de crear una aplicacion que se conecte con una API externa, 
y al mismo tiempo usar las funcionalidades de Firebase (Autentificacion, Cloud Firestore y Hosting), 
la construccion de un sitio donde los usuarios puedan guardar una lista de peliculas para ver en el futuro.

Nombre Provisorio: "Cinema Billboard"

Se dibujan maquetas de lo que serian las vistas(Login, Busqueda de Peliculas, Lista de Peliculas Guardadas)
Se define que se usara la API de The Movie Database, La cual requiere inscribirse en el el sitio para obtener 
una APIkey.

Estilo:
 Color de Fondo #1C1F40
 Fuente de logo: Pacifico (Google Fonts)
 Uso combinado de Bootstrap y Bootstrap-Vue
```

## Entrega 2 Datos y Lógica
```
Construida ya una version rudimentaria del sitio, se procede ha hacer la conexion con la API para hacer 
funcionar un buscador de peliculas, y una pagina de entrada con peliculas destacadas.
```

## Entrega 3 Firebase
```
Establecida la conexion con la API, se procede ha hacer funcional el Login y Almacenamiento de peliculas 
por usuario con Firebase. Creando una coleccion por usuario, nombrandola con el UID del usuario. Asi tambien 
como asegurar que el usuario pueda buscar, agregar peliculas y quitarlas de su coleccion. Tambien poder 
hacer Login y Logout correctamente 
```

## Entrega 4 Testing y Deploy
```
Se procede a diseñar e implementar pruebas, configuradas al comienzo del proyecto a realizarse 
en Jest y Nightwatch, respectivamente con los test Unitarios y End-to-End
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
