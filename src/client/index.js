import("./src/client/style.scss");  
import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

console.log(checkForName);


document.getElementById('name').addEventListener('blur', function() {
    const name = document.getElementById('name').value;
    checkForName(name); 
});

export { handleSubmit }; 

