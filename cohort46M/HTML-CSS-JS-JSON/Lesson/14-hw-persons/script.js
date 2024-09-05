const persons = [];

addPerson.onclick = function() {
    // TODO add person to list with buttonDel. Persons must be unique
    // If person add, total will increment
    // If person remove, total will decriment
    // functionally with remove is optional
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value.trim());
    if (findPerson(persons, person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        persons.push(person);
        const li = document.createElement('li');
        const buttonDel = createButtonDel();
        li.append(person.toString(), buttonDel);
        buttonDel.addEventListener('click', () => {
            const index = findPerson(persons, person.id);
            persons.splice(index, 1);
            showPersonsQuantity();
        });
        personsList.append(li);
        showPersonsQuantity();
    }
    personId.value = firstName.value = lastName.value = age.value = '';
}

function showPersonsQuantity() {
    totalPersons.textContent = `Total: ${persons.length}`;
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
    this.toString = function() {
        return `ID: ${this.id}, name: ${this.firstName} ${this.lastName}, age: ${this.age}`;
    }
}