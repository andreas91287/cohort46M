const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (findPerson(persons, person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDel();
        li.append(buttonDel);
        buttonDel.addEventListener('click', () => {
            const index = findPerson(persons, person.id);
            persons.splice(index, 1);
            showStats();
        });
        personsList.append(li);
        showStats();
    }
    personId.value = firstName.value = lastName.value = age.value = '';
}

function showStats() {
    // TODO Homework if persons not empty show in <div id="stats"> after h2:
    // Total persons, max age, min age, average age
    const divStats = document.createElement('div');
    if (persons.length) {
        const totalPersons = createInfoElement(`Total persons: ${persons.length}`, 'h3')
        
        const maxAge = persons.reduce((max, p) => p.age > max ? p.age : max, persons[0].age);
        const h3Max = createInfoElement(`Max age: ${maxAge}`, 'h3');
        
        const minAge = persons.reduce((min, p) => p.age < min ? p.age : min, persons[0].age);
        const h3Min = createInfoElement(`Min age: ${minAge}`, 'h3');
        
        const avgAge = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
        const h3Avg = createInfoElement(`Average age: ${avgAge.toFixed(1)}`, 'h3');
        
        divStats.append(totalPersons, h3Max, h3Min, h3Avg);
    }
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(divStats);
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}

function findPerson(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i;
        }
    }
    return -1;
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, name: ${this.firstName} ${this.lastName}, age: ${this.age}`;
    }
}