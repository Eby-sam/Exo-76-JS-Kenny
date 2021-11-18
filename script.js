let t = parseInt(document.getElementById('kenny').style.top);
let l = parseInt(document.getElementById('kenny').style.left);
let kenny = document.getElementById('kenny');
let i = 0;

// pade up
document.getElementById('up').addEventListener('click',function() {
    if (t === 0){
        kenny.style.top = '0px';
    }
    else {
        t = t - 10;
        kenny.style.top = t + 'px';
    }
});

// pade down
document.getElementById('down').addEventListener('click',function() {
    if (t === 470) {
        kenny.style.top = '470px';
    }
    else {
        t = t + 10;
        kenny.style.top = t + 'px';
    }
});

// pade left
document.getElementById('left').addEventListener('click',function() {
    if (l === 60) {
        alert('Kenny est mort');
        kenny.style.top = '200px';
        kenny.style.left = '200px';
        l = 200;
        i++
        document.getElementById('i').innerText = i.toString();
    }
    else {
        l = l - 10;
        kenny.style.left = l + 'px';
    }
});

// pade right
document.getElementById('right').addEventListener('click',function() {
    if (l === 470) {
        kenny.style.left = '470px';
    }
    else {
        l = l + 10;
        kenny.style.left = l + 'px';
    }
});

// button up
function up() {
    if (t === 0){
        kenny.style.top = '0px';
    }
    else {
        t = t - 10;
        kenny.style.top = t + 'px';
    }
}

// button down
function down() {
    if (t === 470){
        kenny.style.top = '470px';
    }
    else {
        t = t + 10;
        kenny.style.top = t + 'px';
    }
}

// button left
function left() {
    if (l === 60) {
        alert('Kenny est mort');
        kenny.style.top = '200px';
        kenny.style.left = '200px';
        l = 200;
        i++
        document.getElementById('i').innerText = i.toString();
    }
    else {
        l = l - 10;
        kenny.style.left = l + 'px';
    }
}

// button right
function  right() {
    if (l === 470) {
        kenny.style.left = '470px';
    }
    else {
        l = l + 10;
        kenny.style.left = l + 'px';
    }
}

document.body.addEventListener("keydown", function (e){
    let keyPressed = e.key;
    switch (keyPressed) {
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowUp':
            up();
            break;
        case 'ArrowRight':
            right();
            break;
        case  'ArrowDown':
            down();
            break;
    }
});