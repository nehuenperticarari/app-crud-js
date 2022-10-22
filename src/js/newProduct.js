import { newProduct } from "./api.js";
import { showAlert, validate } from "./helper.js";


(function () {
    /* querys */
   const form = document.querySelector('.form');

   /* listener */

   form.addEventListener('submit', createProduct);

    /*functions  */

    async function createProduct(e){
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const price = document.querySelector('#price').value;
        const stock = document.querySelector('#stock').value;

        const Product = {
            name,
            price,
            stock,
        }
        if(validate(newProduct)){
            showAlert('All fields are required');
            return;
        }

        await newProduct(Product)
        window.location.href = '../../index.html'
   }

})()