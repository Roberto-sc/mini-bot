# Mini Bot Conversacional – Prueba Técnica XUMTECH

Este proyecto consiste en el desarrollo de un **Chatbot conversacional web**, capaz de responder consultas predefinidas del usuario, cumpliendo con requerimientos funcionales y no funcionales relacionados con arquitectura, persistencia, seguridad y escalabilidad.

---

## Descripción General

La solución está compuesta por una arquitectura **cliente-servidor**, donde:

- El **Frontend** es una aplicación web desarrollada en **React + Vite**, que presenta una interfaz de chat tipo WhatsApp.
- El **Backend** es una **API REST en Spring Boot (Java 21)**, responsable de procesar los mensajes del usuario y consultar las respuestas almacenadas.
- La **persistencia** se realiza en una base de datos **PostgreSQL**, accedida únicamente desde el backend.
- La comunicación entre componentes se realiza mediante **HTTP seguro siguiendo buenas prácticas REST**.

---

##  Arquitectura

[ Navegador ]
    |
    v
[ React + Vite ]
    |
    v
[ Spring Boot API ]
    |
    v
[ PostgreSQL ]


### Principios aplicados
- Separación de responsabilidades  
- Backend desacoplado del frontend  
- Persistencia centralizada  
- Comunicación vía REST  

---

## Frontend

### Tecnologías
- React
- Vite
- Tailwind CSS v4
- JavaScript (ES6+)

### Características
- Ventana de chat empotrada en la página
- Mensajes del usuario alineados a la derecha
- Respuestas del bot alineadas a la izquierda
- Auto-scroll al recibir nuevos mensajes
- Interfaz limpia y responsiva
- Comunicación asíncrona con el backend

---

## Backend

### Tecnologías
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- PostgreSQL
- Lombok

### Funcionalidad principal
- Recepción de mensajes vía endpoint REST (`POST`)
- Procesamiento del mensaje del usuario
- Búsqueda de respuestas almacenadas
- Respuesta en formato JSON
- Manejo de mensajes no reconocidos

**Comportamiento del bot**
- Si la consulta coincide con una pregunta conocida → devuelve la respuesta
- Si no → devuelve un mensaje de fallback indicando que no se comprendió la consulta

---

## Persistencia

- Las preguntas y respuestas del bot se almacenan en **PostgreSQL**
- El acceso a la base de datos se realiza **exclusivamente desde el backend**
- No se expone la base de datos al cliente

Esto permite:
- Agregar nuevas preguntas sin modificar el frontend
- Escalar el conocimiento del bot fácilmente

---

## Seguridad

Se implementaron medidas básicas de seguridad siguiendo buenas prácticas HTTP:

- **Spring Security** para control de acceso
- **CORS restringido** al origen del frontend
- Uso de **POST** para evitar exponer datos en la URL
- Endpoints limitados únicamente a los necesarios

Estas medidas protegen la API contra accesos no autorizados y dejan la solución preparada para futuras extensiones como JWT u OAuth.

---

## Ejecución del Proyecto

### Backend
1. Configurar la base de datos PostgreSQL
2. Agregar y ajustar el archivo `application.properties`
3. Ejecutar:


./mvnw spring-boot:run

### Frontend
npm install
npm run dev


# Autor

Luis Roberto Solano Centeno
Consultor / Desarrollador de Software
Prueba técnica – XUMTECH
