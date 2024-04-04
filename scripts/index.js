// Clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

// Clase Repository
class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    // metodo para obtener todas las actividades
    getAllActivities() {
        return this.activities;
    }

    // metodo para crear una nueva actividad
    createActivity(title, description, imgUrl) {
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(newActivity);
        renderActivities(); // llamar a renderActivities después de crear la actividad
        // vaciar los campos de entrada
        document.querySelector('input[name="Actividad"]').value = '';
        document.querySelector('input[name="Descripcion"]').value = '';
        document.querySelector('input[name="Imagen"]').value = '';
    }

    // metodo extra para eliminar una actividad por su id
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
        renderActivities(); // llamar a renderActivities después de eliminar la actividad
        return this.activities;
    }
}

// instancia de Repository
const repository = new Repository();

// funcion para convertir una instancia de Activity en elemento HTML
function activityToHTML(activity) {
    const { id, title, description, imgUrl } = activity;
    const activityElement = document.createElement('div');
    activityElement.classList.add('activity-card');
    activityElement.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${imgUrl}" alt="${title}">
        <button onclick="deleteActivity(${id})">Eliminar</button>
    `;
    return activityElement;
}

// modificamos la funcion para renderizar actividades
function renderActivities() {
    const activitiesContainer = document.querySelector('.activities-container');
    activitiesContainer.innerHTML = '';
    const activities = repository.getAllActivities();
    for (let i = 0; i < activities.length; i += 3) {
        const row = document.createElement('div');
        row.classList.add('activities-row');
        for (let j = i; j < i + 3 && j < activities.length; j++) {
            const activity = activities[j];
            const activityElement = activityToHTML(activity);
            row.appendChild(activityElement);
        }
        activitiesContainer.appendChild(row);
    }
}

// funcion para manejar el evento de agregar actividad
function handleAddActivity(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="Actividad"]').value;
    const description = document.querySelector('input[name="Descripcion"]').value;
    const imgUrl = document.querySelector('input[name="Imagen"]').value;
    if (title && description && imgUrl) {
        repository.createActivity(title, description, imgUrl);
    } else {
        alert('Por favor completa todos los campos.');
    }
}

// asignar evento al botón de agregar actividad
const addButton = document.querySelector('button');
addButton.addEventListener('click', handleAddActivity);

// funcion para eliminar una actividad
function deleteActivity(id) {
    repository.deleteActivity(id);
}

// eenderizar actividades al cargar la pagina
document.addEventListener('DOMContentLoaded', renderActivities);

// 7 am, despues siresuelvo el document
