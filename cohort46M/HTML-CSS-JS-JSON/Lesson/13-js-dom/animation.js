const t = setInterval(move, 5);
const size = container.offsetWidth - box.offsetWidth;
let pos = 0;

// function move() {
//     pos++;
//     box.style.left = pos + 'px';
//     box.style.top = pos + 'px';
//     if(pos === size) {
//         clearInterval(t);
//     }
// }

let i = 1;

function move() {
    pos = pos + i;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if (pos === size || pos === 0) {
        i = -i;
    }
}
