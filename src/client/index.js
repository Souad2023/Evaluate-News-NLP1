import './styles/base.css';
import './styles/footer.css';
import './styles/header.css'; 
import './styles/form.css';
import './styles/resets.css';

import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';


console.log(checkForName);


document.getElementById('name').addEventListener('blur', function() {
    const name = document.getElementById('name').value;
    checkForName(name); 
});

export { handleSubmit }; 

