let a = 'Peter';
greeting(a);

function greeting(name = 'Anonymous') {
    // name = name || 'Anonymous';
    // name = name ?? 'Anonymous';
    console.log(`Hello ${name}`);
}