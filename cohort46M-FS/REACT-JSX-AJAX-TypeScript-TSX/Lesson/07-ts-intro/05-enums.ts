// enum Action {
//     CHANGE_PASSWORD,
//     EDIT_PROFILE,
//     DEFAULT
// }

// let action: Action;
// action = Action.DEFAULT;
// action = Action.CHANGE_PASSWORD;
// action = Action.EDIT_PROFILE;
// console.log(action);    // index = 1
// let value = Action[1];
// console.log(value);     // EDIT_PROFILE

enum Action {
    CHANGE_PASSWORD = 'change password',
    EDIT_PROFILE = 'edit profile',
    DEFAULT = 'default'
}

let action: Action = Action.EDIT_PROFILE;
console.log(action);
let value = Action['default'];
console.log(value);

