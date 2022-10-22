
const api = 'http://localhost:3000/products'

//API CALL GET PRODUCTS
export const getProducts = async () => {
    try {
       const res = await fetch(api)
       const resp = res.json()

       return resp
    } catch (error) {
        console.log(error.message);
    }
}

//API CALL New PRODUCTS

export const newProduct = async (product) => {
    try {
        await fetch(api,{
            method: 'POST', 
            body: JSON.stringify(product), 
            headers:{
              'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

//API CALL GET PRODUCT

export const getProduct = async (id) => {
    try {
        const res = await fetch(`${api}/${id}`)
        const resp = res.json()
 
        return resp
     } catch (error) {
         console.log(error.message);
     }
}

//API CALL EDIT PRODUCTS

export const editProduct = async (product) => {
    try {
        await fetch(`${api}/${product.id}`,{
            method: 'PUT', 
            body: JSON.stringify(product), 
            headers:{
              'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

//API CALL DELETE PRODUCTS

export const deleteProduct = async (id) => {
    try {
        await fetch(`${api}/${id}`,{
            method: 'DELETE', 
        })

    } catch (error) {
        console.log(error.message);
    }
}