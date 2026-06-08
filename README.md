# Trabajo Práctico Nº3 – React – Parte 1 – 2 – 3 – 4

## Integrantes del Grupo 18
- Goyochea Kevin – [@KevinGoyochea](https://github.com/KevinGoyochea)
- Medina Brisa Lourdes – [@xLouux](https://github.com/usuarioGithub)
- Sivila Emilce Andrea – [@Emilce1996](https://github.com/Emilce1996)

### Descripción del proyecto
Este repositorio contiene el desarrollo del **Trabajo Práctico Nº3** de la materia *Programación Visual*.  
El objetivo es realizar una introducción al desarrollo de aplicaciones web utilizando **React + React-Router-Dom + React-Bootstrap**, conceptos clave, estructura básica, uso de componentes, estado y hooks. 

### Página de Gestión de Proyectos Educativos

La página de gestión de proyectos educativos se organiza con una estructura basada en componentes reutilizables de React:

- **Header.jsx**: Renderiza el encabezado del sitio.  
- **Nav.jsx**: Renderiza la barra de navegación. En esta etapa, los enlaces son estáticos y no redirigen a otras pestañas, ya que el contenido principal es el listado de proyectos.  
- **ListaProyectos.jsx**: Renderiza la lista de proyectos, permitiendo gestionar las acciones de agregar, eliminar y buscar.
Se actualiza para llamar a los nuevos componentes DetalleProyecto.jsx y ProyectoCard.jsx; más un formulario para agregar nuevos proyectos.
Se implementa useEffect y se refactoriza el componente para utilizar RegistroActividad.jsx y FormularioProyecto.jsx cumpliendo las condiciones solicitadas.
- **Footer.jsx**: Renderiza el pie de página.
- **DetalleProyecto.jsx**: Muestra la descripción extendida, la lista de recursos (PDF, Drive, GitHub) y la sección de equipo con nombres y roles. 
- **ProyectoCard.jsx**: Representar una tarjeta 
de proyecto individual.
- **RegistroActividad.jsx**: Muestra de forma clara al usuario cuándo ocurrió la última modificación en el arreglo de proyectos.
- **FormularioProyecto.jsx**: Representa el formulario para agregar proyectos en un componente individual.
- **Dashboard.jsx**: Incluye un título, descripción general y un par de tarjetas de React-Bootstrap (Card) que muestran métricas simuladas.
- **PerfilUsuario.jsx**: Pantalla del perfil del usuario que muestra los datos del alumno o docente (Nombre, Rol, Institución) 

### Funcionalidades implementadas
- **obtenerProyectos**: retorna una copia del arreglo actual de proyectos.  
- **agregarProyecto**: recibe un objeto y lo añade al arreglo.  
- **eliminarProyecto**: recibe un id y remueve el proyecto correspondiente.  
- **buscarProyecto**: recibe un texto y retorna los proyectos cuyo título coincida.  

El objetivo principal es mostrar el **Listado de Proyectos** como contenido central de la página, manteniendo una estructura clara y reutilizable.    

### Distribución de tareas del grupo 18

- **Goyochea Kevin**
  - **TP3 - Parte 1**
    - ListaProyectos.jsx
    - buscarProyecto
  - **TP3 - Parte 2**
    - Actualizar el archivo ListaProyectos.jsx
  - **TP3 - Parte 3**
    - Refactorizar el archivo ListaProyectos.jsx

- **Medina Brisa Lourdes**
  - **TP3 - Parte 1**
    - Header.jsx
    - eliminarProyecto
  - **TP3 - Parte 2**
    - DetalleProyecto.jsx
  - **TP3 - Parte 3**
    - RegistroActividad.jsx
  - **TP3 - Parte 4**
    - Actividad 2:  
    - Creación de la carpeta `src/views/`  
    - Separación de vistas completas y componentes secundarios  
    - Alta de nuevas vistas requeridas (`Dashboard.jsx`, `PerfilUsuario.jsx`) 

- **Sivila Emilce Andrea**
  - **TP3 - Parte 1**
    - Crear Plantilla de React
    - Nav.jsx
    - Footer.jsx
    - agregarProyecto
    - obtenerProyectos
  - **TP3 - Parte 2**
    - ProyectoCard.jsx
  - **TP3 - Parte 3**
    - FormularioProyecto.jsx
  - **TP3 - Parte 4**
    - Actividad 1: Implementación de Rutas con React Router  
    - Configuración del enrutador principal  
    - Declaración de rutas dinámicas (`/dashboard`, `/proyectos`, `/proyectos/:id`, `/perfil`)  
    - Refactorización del menú `<Nav />` con `NavLink`
    - Actividad 3: Adopción de un Framework de Componentes (React Bootstrap)  
    - Refactorización de formularios y controles con componentes de Bootstrap  
    - Uso de componentes de presentación como `Alert` para mensajes y estados

- **Tareas en común**
  - Edición de archivos de estilos en la carpeta **css**
  - Edición del archivo **proyectoService.js** en la carpeta **services**
  - Edición del archivo **App.jsx**
  - Organización de Archivos y Estructura del Proyecto
  - Instalación y uso de un Framework de Componentes (React Bootstrap)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tecnologías utilizadas
- HTML5  
- CSS3
- JavaScript
- React + Vite + Router-Dom + Bootstrap
- Git & GitHub  

## Licencia
Este proyecto se publica bajo la licencia **MIT**, lo que permite su uso, copia y modificación siempre que se mantenga la autoría original.
