let formCliente = document.querySelector('.form');
formCliente.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formCliente);
    const data = Object.fromEntries(formData);
    fetch('https://651481ffdc3282a6a3cd4072.mockapi.io/Assinar', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
});