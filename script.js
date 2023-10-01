const selectForm = document.querySelector(".form");

selectForm.addEventListener("submit", event => {
    //Evita los eventos por default
    event.preventDefault();

    const formData = new FormData(selectForm);

    //Convertimos formData en un objeto
    const data = Object.fromEntries(formData);
    //El fetch tiene como segundo parámetro un objeto con el formato con el cual sera enviado los datos al servidor
    fetch("https://jsonplaceholder.typicode.com/users", {
        //El método es POSt porque queremos enviar datos
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        //Se convierte el objeto de JavaScript a formato JSON
        body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => {
            console.error(error);
        });
});