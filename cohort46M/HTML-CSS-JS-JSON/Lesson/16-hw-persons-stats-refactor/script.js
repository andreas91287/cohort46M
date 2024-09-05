const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value.trim());
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
    const divStats = document.createElement('div');
    if (persons.length) {
        const ages = persons.map(({age}) => age);
        const avgAge = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;

        const totalPersons = createInfoElement(`Total persons: ${persons.length}`, 'h3')
        const h3max = createInfoElement(`Max age: ${Math.max(...ages)}`, 'h3');
        const h3min = createInfoElement(`Min age: ${Math.min(...ages)}`, 'h3');
        const h3avg = createInfoElement(`Average age: ${avgAge.toFixed(1)}`, 'h3');
        
        divStats.append(totalPersons, h3max, h3min, h3avg);
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
    return arr.findIndex(p => p.id === id);
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