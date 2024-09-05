let person = {
    name: 'Peter'
}

person = null;
printName(person);
console.log('==========');
try {
    let res = solution(0, 10);
    console.log(res);
} catch (error) {
    console.log(error.message);
    // console.log(error);
    
}


function solution(a, b) {
    if (a !== 0) {
        return b / a;
    }
    if (b === 0) {
        throw new Error('Solution any number');
    }
    throw new Error("no solution");
    // throw {message: 'no solution'};

}

function printName(obj) {
    try {
        console.log(obj.name);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log('Error');
    } finally {
        console.log('End of printName');
    }

}