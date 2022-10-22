import { editProduct, getProduct } from "./api.js";
import { showAlert, validate } from "./helper.js";

(function(){
    //queryselectors 
    const inputName = document.querySelector('#name');
    const inputPrice = document.querySelector('#price');
    const inputStock = document.querySelector('#stock');
    const inputId = document.querySelector('#id');

    //add event listener for show te product selected

    document.addEventListener('DOMContentLoaded', async () =>{
        const params = new URLSearchParams(window.location.search)
        const productId = parseInt(params.get('id'))
        const product = await getProduct(productId)

        //Get te product by id
        showProduct(product)

        //Submit form
        const form = document.querySelector('#form')
        form.addEventListener('submit', validateProduct)
    })

    //function to fill the form with the product
    function showProduct(product){
        const { name, price, stock, id} = product;
        inputName.value = name;
        inputPrice.value = price;
        inputStock.value = stock;
        inputId.value = id;
    }

    //function to sent the product data
    async function validateProduct(e){
        e.preventDefault()
        const product = {
            name: inputName.value,
            price: inputPrice.value,
            stock: inputStock.value,
            id: parseInt(inputId.value) 
        }

        //validate the form
        if(validate(product)){
            showAlert('All fields are required');
            return;
        }

     //Rewrite obj in the db
     await editProduct(product);
     window.location.href = '../../index.html'
    }

})()