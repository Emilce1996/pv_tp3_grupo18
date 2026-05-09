# Trabajo Práctico Nº3 – React – Parte 1 

## Integrantes del Grupo 18
- Goyochea Kevin – [@KevinGoyochea](https://github.com/KevinGoyochea)
- Maidana Agustin Hugo Franco – [@TellmeKubson](https://github.com/TellmeKubson)
- Medina Brisa Lourdes – [@xLouux](https://github.com/usuarioGithub)
- Sivila Emilce Andrea – [@Emilce1996](https://github.com/Emilce1996)

### Descripción del proyecto
Este repositorio contiene el desarrollo del **Trabajo Práctico Nº3** de la materia *Programación Visual*.  
El objetivo es realizar una introducción al desarrollo de aplicaciones web utilizando **React**, conceptos clave, estructura básica, uso de componentes, estado y hooks. 

### Página de Gestión de Proyectos Educativos

La página de gestión de proyectos educativos se organiza con una estructura basada en componentes reutilizables de React:

- **Header.jsx**: Renderiza el encabezado del sitio.  
- **Nav.jsx**: Renderiza la barra de navegación. En esta etapa, los enlaces son estáticos y no redirigen a otras pestañas, ya que el contenido principal es el listado de proyectos.  
- **ListaProyectos.jsx**: Renderiza la lista de proyectos, permitiendo gestionar las acciones de agregar, eliminar y buscar.  
- **Footer.jsx**: Renderiza el pie de página.  

### Funcionalidades implementadas
- **obtenerProyectos**: retorna una copia del arreglo actual de proyectos.  
- **agregarProyecto**: recibe un objeto y lo añade al arreglo.  
- **eliminarProyecto**: recibe un id y remueve el proyecto correspondiente.  
- **buscarProyecto**: recibe un texto y retorna los proyectos cuyo título coincida.  

El objetivo principal es mostrar el **Listado de Proyectos** como contenido central de la página, manteniendo una estructura clara y reutilizable.    

### Estilos aplicados
Se utilizaron las tres formas de CSS:
  - **Inline CSS**: aplicado en algunos encabezados para demostrar su uso.  
  - **Internal CSS**: pequeños bloques dentro del `<head>` de páginas específicas.  
  - **External CSS**: archivo central `css/styles.css` con la mayor parte de los estilos.  
- Uso de **Grid y Flexbox** para organizar el layout.  
- Variables CSS en `:root` para colores y tipografía.  
- Estados interactivos (`:hover`, `:focus`, `:active`) en botones y enlaces.  

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
- React + Vite 
- Git & GitHub  

## Licencia
Este proyecto se publica bajo la licencia **MIT**, lo que permite su uso, copia y modificación siempre que se mantenga la autoría original.
