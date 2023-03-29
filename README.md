Virtual Store
Contents
Virtual Store	1
Diagrama de arquitectura	1
Base de datos	1
Backend	2
Front End	6
Control de versiones	9
Conclusiones	13


Diagrama de arquitectura

La solución al problema esta desarrollada de la siguiente manera
![image](https://user-images.githubusercontent.com/40804118/228421389-46c1e5a6-06b9-4f8c-bb42-c9ddc7bfe300.png)

 
Base de datos
Base de datos no relacional (MongoDB) montando un clúster en Docker.
Instalar Docker, ejecutar el comando Docker pull mongo y cuando tengamos la imagen corres el comando docker run -d --rm -p 27017:27017 --name mongo1 --network mongoCluster mongo:latest mongod --replSet myReplicaSet --bind_ip localhost,mongo1 para crear el clúster
 
Se puede abrir desde visual studio code
 
Se adopto la base de datos NoSQL ya que los productos provenían de diferente Apis y la base de datos de documento como mongo permite almacenar y obtener esa estructura fácilmente.
Backend
Para correr el api es necesario descargarlo de GitHub (ir a la sección GitHub en este manual para el código fuente) y ejecutarlo con visual studio 2022 o con vscode con: dotnet run --project=Api
Para el backend se usa un API con el framework de .Net Core en su versión, una arquitectura limpia en capas donde separamos la lógica del negocio, los repositorios de información, la capa de presentación y los servicios externos. Donde todos sus componentes se acceden por medio de una interfaz inyectada como dependencia.
 
 
 
Para el repositorio en mongo se usó de forma genérica para la cual las entidades únicamente tiene que heredar de TDocument para poder usarlo
 

Como se muestra acá la entidad producto
 
Para visualizar los endpoints disponibles cuando se ejecute el proyecto se abre automáticamente el swagger
 
Cadena de conexión
  "MongoDb": {
    "ConnectionString": "mongodb://localhost:27017",
    "Database": "virtualstore"
  },
Front End
Para ejecutar el proyecto es necesario descargarlo de GitHub (ir a la sección GitHub en este manual para el código fuente) instalar los módulos con: npm install --save y para correrlo npm start 
En el front end se usa la librería react, axios para consumir los servicios, junto con redux/toolkit para manejar el state, @mui/material para la facilidad en los diseños, react-router-dom para el redireccionamiento en la url.
La estructura del proyecto esta implementada con una arquitectura limpia donde se tiene separado temas como las vistas, componentes, hooks, models, services entre otros.
 
Para el manejo del ciclo de vida de la aplicación se usan los UseEffect
 
Para el manejo de los estados globales se usa redux/toolkit
 
Para el enrutamiento se usa react-router-dom

 
Se usa los siguientes componentes componentes 
 
Vistas
 
Servicios para conectarse al api
 
 
Modelos
 
Control de versiones
Se usa la plataforma GitHub para alojar el código tanto del api como de la aplicación en react en dos repositorios diferentes ubicados en la siguiente ruta

React Application
jamendieta/virtual-store (github.com)
Api
jamendieta/VirtualStore (github.com)

la idea es tener un flujo de ramas así para soportar toda la carga de trabajo a la solución
 

Aplicación
Hay una vista home donde están todos los productos ordenados de AZ y por mayor precio con la posibilidad de visualizar las otras imágenes
 
con la posibilidad de filtrar por producto, precio mínimo y precio máximo
 
Visualizar un producto en especifico
 
Añadir al carrito
 
En la barra superior la cantidad de productos en el carrito 
 
Si se da clic en este icono se puede ver los productos del carrito
 
Con la posibilidad de eliminar productos uno a uno

 
Cuando se presiona el botón checkout se guarda la venta en base de datos y elimina los elementos del carrito así como el contador del header con el icono del carrito
 

Para así iniciar una nueva compra
 

Conclusiones
•	Inicialmente pensé manejar los filtros desde componentes diferentes y estar a la escucha de los cambios del teclado con Redux, sin embargo el rendimiento no fue el mejor por ello opte por un formulario con todos los filtros.
•	El cambio de las imágenes en modo autoplay con el carrusel es poco optimo, fue necesario dejar a eventos del usuario.
•	Si tuviera más tiempo yo mejoraría algunos diseños de la plataforma.
•	A nivel de arquitectura tiene sólidas bases escalables, mantenibles y buenas prácticas.

