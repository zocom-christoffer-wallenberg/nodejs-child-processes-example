import { exec } from 'child_process'; 

for(let i = 0; i < 2; i++) {  
    const process = exec('node getInsult.js ' + i,  
        (error, stdout, stderr) => {  
            if (error) {  
            console.log('Error code: '+error.code);  
            }  
            console.log('stdout: ' + stdout);  
            console.log('stderr: ' + stderr);  
        });  
    process.on('exit', (code) => {  
        console.log('Child process exited with exit code ' + code);  
    });
}