import { deleteProduct, getProducts } from './api.js'

(function () {

    //QuerySelector
    const productList = document.querySelector('#product-list')
    const total = document.querySelector('#total')

    // Listener
    document.addEventListener('DOMContentLoaded', showProduct)
    productList.addEventListener('click', confirmDelete )

    //GET PRODUCTS
    async function showProduct() {
        let totalStock = 0
        const data = await getProducts()
        data.forEach(element => {
            const row = document.createElement('tr')
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="leading-5 text-gray-700 text-lg font-bold"> ${element.name}</p>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-600">${element.price}</p>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">    
                <p class="text-gray-600">${element.stock}</p>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">    
                <p class="text-gray-600">$${element.stock * element.price}</p>
            </td>

            <td class="flex px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="./pages/edit-product.html?id=${element.id}" class="shadow-md transition duration-200 text-white py-1 px-2 rounded bg-sky-600 hover:bg-sky-900 mr-5">Edit</a>
                <a id="btn-delete" href="#" data-product="${element.id}" class="shadow-md transition duration-200 text-white py-1 px-2 rounded bg-red-600 hover:bg-red-900 delete">Delete</a>
            </td>`;

            productList.appendChild(row)
        });
        //Calculate total capital
        for (let index = 0; index < data.length; index++) {
            const element = data[index].price * data[index].stock
            totalStock += element
        } 

        total.textContent = `$${totalStock}`
    }
    //DELETE PRODUCT

    function confirmDelete(e){
        if(e.target.classList.contains('delete')){
            //get the id product
            const productID = parseInt(e.target.dataset.product);
            //confirm action
            const confirmAction = confirm('Do you want to delete this record?')
            
            if(confirmAction){
                //delete from database
                deleteProduct(productID);
                //delete from html
                e.target.parentElement.parentElement.remove();
            }
        }
   }
})()


