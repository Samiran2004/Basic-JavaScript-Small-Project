let grayButton = document.getElementById('gray');
let whiteButton = document.getElementById('white');
let blueButton = document.getElementById('blue');
let yellowButton = document.getElementById('yellow');
let buttons = document.querySelector('.button');
function OnClickFunction() {
    grayButton.addEventListener('click', function (e) {
        // document.body.style.backgroundColor = 'gray';
        console.log(e.target.id)
        document.body.style.backgroundColor = e.target.id;
        grayButton.addEventListener('mousedown', function(){
            grayButton.innerText = e.target.id;
            grayButton.style.display = 'flex'
            grayButton.style.justifyContent = 'center';
            grayButton.style.alignItems = 'center';
        })
    });
    whiteButton.addEventListener('click', function (e) {
        // document.body.style.backgroundColor = 'white';
        console.log(e.target.id);
        document.body.style.backgroundColor = e.target.id
        whiteButton.addEventListener('mousedown', function(){
            whiteButton.innerText = e.target.id;
            whiteButton.style.display = 'flex'
            whiteButton.style.justifyContent = 'center';
            whiteButton.style.alignItems = 'center';
        })
    });
    blueButton.addEventListener('click', function (e) {
        // document.body.style.backgroundColor = 'blue';
        console.log(e.target.id);
        document.body.style.backgroundColor = e.target.id
        blueButton.addEventListener('mousedown', function(){
            blueButton.innerText = e.target.id;
            blueButton.style.display = 'flex'
            blueButton.style.justifyContent = 'center';
            blueButton.style.alignItems = 'center';
        })
    });
    yellowButton.addEventListener('click', function (e) {
        // document.body.style.backgroundColor = 'yellow';
        console.log(e.target.id);
        document.body.style.backgroundColor = e.target.id
        yellowButton.addEventListener('mousedown', function(){
            yellowButton.innerText = e.target.id;
            yellowButton.style.display = 'flex'
            yellowButton.style.justifyContent = 'center';
            yellowButton.style.alignItems = 'center';
        })
    });

};
OnClickFunction();