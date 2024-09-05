let group = {
    title: 'Cohort 46M',
    students: [
        'Elzara', 'Evgenia', 'Galina', 'Hanna',
        'Inga', 'Natalia', 'Natalya', 'Oleksandra',
        'Valeriia', 'Yanina', 'Yuliia', 'Zhanna'
    ],

    // === showList Origin ===
    // showList: function () {
    //     const show = function (name) {
    //         console.log(`${this.title}: ${name}`);
    //     }
    //     this.students.forEach(show);
    // }

    // === showList Arrow ===
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }

    // === showList Func ===
    // showList: function () {
    //     const context = this;
    //     const show = function (name) {
    //         console.log(`${context.title}: ${name}`);
    //     }
    //     this.students.forEach(show);
    // }

    // === showList bind ===
    // showList: function () {
    //     const show = function (name) {
    //         console.log(`${this.title}: ${name}`);
    //     }
    //     this.students.forEach(show.bind(this));
    // }
}

console.log(group);
// Unmodified
console.log('===== Group =====');
group.showList();
const newGroup = group;
group = null;
console.log('===== New Group=====');
newGroup.showList();


