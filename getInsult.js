import fetch from 'node-fetch';

async function getInsult() {
    const response = await fetch('https://shakespeare-insults-generator.herokuapp.com/getInsult');
    const data = await response.json();

    console.log(data);
    console.log("Child Process " + process.argv[2] + " executed." );  
}

getInsult();