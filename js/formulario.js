let formCliente = document.querySelector('.form')
formCliente.addEventListener('submit', event=>{
    event.preventDefault();
    const formData = new FormData(formClinente);
    const data = Object.fromEntries(formData);
    fetch('https://6513726a8e505cebc2e9db7a.mockapi.io/clientes',{
        method:'POST',
        header:{
            'Content-Type':'application/json'
        },
        boby:JSON.stringify(data),
    })
        .then((res)=>res.json())
        .then((data)=> console.log(data));
})