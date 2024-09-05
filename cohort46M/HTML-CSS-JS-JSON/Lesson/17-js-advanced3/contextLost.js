class User {
    constructor(nickName) {
        this.nickName = nickName;
        // this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function () {
        console.log(`Nickname: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }
}

const peter = new User('Peter');
console.log(peter);
console.log('===== infoFunc =====');
peter.infoFunc();
console.log('===== infoArrow =====');
peter.infoArrow();
console.log('===== Context Lost =====');
func(peter.infoFunc.bind(peter));
const fn = peter.infoFunc.bind({nickName: 'Rabindranate'}); // lost Context
fn();

function func(callback) {
    callback();
}


