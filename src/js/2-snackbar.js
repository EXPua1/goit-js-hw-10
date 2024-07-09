const form = document.querySelector('form')
const btnSubmit = document.querySelector('form .btn_submit');
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const selectedState = document.querySelector('form input[name="state"]:checked');
    const delayInput = form.querySelector('input[name="delay"]');
    const delay = parseInt(delayInput.value, 10);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
      
            if (selectedState.value === 'fulfilled') {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay);
    });

   promise
        .then(message => {
            iziToast.success({
                title: 'OK',
                message: message,
               position: 'topRight',
            });
            console.log(message);
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error,
                position: 'topRight',
                
            });
            console.log(error);
        });
});
