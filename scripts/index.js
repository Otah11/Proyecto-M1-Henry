    //  implementar la clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

    // implementar la clase Repository
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
    createActivity(id, title, description, imgUrl) {
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    // metodo extra para eliminar una actividad por su id
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
        return this.activities
    }

}

    // crear una instancia de Repository
const repository = new Repository();

    // ejemplo de uso
repository.createActivity('Practicar deportes', 'Jugar al fútbol con amigos', 'assets/soccer.jpg');
repository.createActivity('Aprender programación', 'Estudiar JavaScript y Kotlin', 'assets/coding.jpg');

console.log(repository.getAllActivities());