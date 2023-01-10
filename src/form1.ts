// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  interface iCities {
    id: number,
    title: string,
    author: string,
    url: string;
    }
    const data: iCities[] = [
    {
    id: 1,
    title: "Los pinos de Playa Pedregosa",
    author: "Paul Jarvis",
    url: "https://picsum.photos/id/13/500/300"
    },
    {
    id: 2,
    title: "Esperando a los pescadores",
    author: "Tyler Wanlass",
    url: "https://picsum.photos/id/50/500/300"
    },
    {
    id: 3,
    title: "Atarceder en la campiña",
    author: "Kenneth Thewissen",
    url: "https://picsum.photos/id/110/500/300"
    },
    ];
    