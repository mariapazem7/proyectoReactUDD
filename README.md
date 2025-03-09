
# Proyecto 5

Este es un proyecto de ejemplo de una aplicación en React utilizando Vite, Bootstrap, React Router Dom, y el manejo de errores con `ErrorBoundary`. La aplicación consume la API de consejos  (`https://api.adviceslip.com/advice`) para obtener y mostrar un consejo aleatorio al usuario. La estructura del proyecto está organizada con componentes y páginas, y se hace uso de Hooks (useState y UseEffect) para la gestión del estado y la obtención de datos.

## Instalación
Para instalar este proyecto"
- Clona el repositorio.
- Accede a la carpeta a traves de la terminal que uses según tu preferencia.
- Realiza la isntalacion de dependencias con los comandos: npm install
- Ejecuta el proyecto con el script de dev: npm run dev
- Para este proyecto se utilizó una API Pública, por lo que no requieres de llave de acceso.

## Estructura del Proyecto

```bash
proyecto-5-react/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── Images/
│   │   │   └── react.svg
│   ├── components/
│   │   ├── Carousel/
│   │   │   ├── Carousel.css
│   │   │   └── Carousel.jsx
│   │   ├── Container/
│   │   │   ├── Container.css
│   │   │   └── Container.jsx
│   │   ├── ContainerDos/
│   │   │   ├── ContainerDos.css
│   │   │   └── ContainerDos.jsx
│   │   ├── Error/
│   │   │   └── ErrorFallback.jsx  
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Formulario/
│   │   │   ├── Formulario.css
│   │   │   └── Formulario.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── ModalAdvice/
│   │   │   ├── ModalAdvice.css
│   │   │   └── ModalAdvice.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   └── NotFound/
│   │       └── NotFound.jsx
│   ├── data/
│   │   └── imageData.js
│   ├── hooks/
│   │   └── useAdvice.js
│   ├── pages/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Advice/
│   │   │   ├── Advice.css
│   │   │   └── Advice.jsx
│   │   └── Home/
│   │       └── Home.jsx
│   ├── routes/
│   │   └── AppRouter.jsx
│   └── services/
│       └── fetchAdvice.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslintrc.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

Se destacan los siguientes puntos:

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción y empaquetado rápido.
- **Bootstrap**: Framework CSS para la creación de interfaces responsivas.
- **React Router Dom**: Librería para manejar la navegación entre páginas.
- **ErrorBoundary**: Componente utilizado para manejar errores de manera segura en React.

Realice la separación de una carpeta components y pages. En components se establece el código reutilizable que se aplicará en diferentes páginas (pages). Se enruta todo en la carpeta routes, utlizando React Router Dom.

