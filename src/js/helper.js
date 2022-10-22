export function validate(product) {
    return !Object.values(product).every(input => input !== '')
}

//ALERT

export function showAlert(msj){
    const alert = document.querySelector('.bg-red-100')

    if(!alert){
        const text = document.createElement('p')
        text.classList.add('bg-red-100','border-red-100','px-4','py-3','rounded','mt-6',
        'mx-auto','max-w-lg','text-center','text-red-700')

        text.innerHTML = `
        <strong class="font-bold">ERROR</strong>
        <span class="block sm:inline">${msj}</span>
        `
        const form = document.querySelector('#form')
        form.appendChild(text)

        setTimeout(() => {
            text.remove()
        }, 5000);
    }
}