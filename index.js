// Code your solutions in this file

// const sinon = require( 'sinon' )
// let spy = sinon.spy( console, 'log' );
// spy.restore();

const messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages
}
function countDown(){
    let countdn = 10;
    while (countdn >= 0){
        console.log(countdn--);
    }

}




