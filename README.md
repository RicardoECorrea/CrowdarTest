# CrowdarChallenge

Overview
Este proyecto utiliza Cypress para E2E y API Testing con reported de Mochawesome

#Prerequisitos
Node.js
npm
Google Chrome/Mozilla Firefox

#Instalación

Clonar el repositorio
Instalar dependencias con el comando npm install

#Corriento los Tests
Todos los tests (Navegador por defecto) en el proyecto esta confirgurado para que corra tanto con Google Chrome como con Mozilla Firefox
npm test

Headless Chrome
npm run test:chrome

Headless Firefox
npm run test:firefox

Alternativamente, se puede utilizar la GUI de Cypress
npx cypress open (Seleccionar navegador deseado entre los instalados en su dispositivo)

#Reporting
Los reportes HTML/JSON de Mochawesome se generan automáticamente luego de cada ejecución dentro de cypress/reports

Las capturas de pantalla se realizan al fallar un test y se encuentra embebido en el reporte HTML. Para ver el reporte, se debe abrir el último archivo .html en cypress/reports con el navegador deseado.

#Herramientas y Características usadas
Cypress: Testing E2E y de API
Typescript: Type safe
Reporter Mochawesome: Reportes HTML/JSON con capturas de pantalla




