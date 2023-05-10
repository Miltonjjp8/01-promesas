const resp = fetch('https://reqres.in/api/users?page=1')
resp.then(response => response.json())
.then((json)=>{
    let content = document.getElementById('container');
    let htmlx='';

    json.data.forEach(element => {
        console.log(element);
        let htmlCard =`
        <div class="card" style="width: 18rem;">
        <img src="${element.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <p>id: ${element.id}</p>
          <p>nombre:${element.first_name}</p>
          <p>apellido:${element.last_name}</p>
          <p>email:${element.email}</p>
          <a href="#" class="btn btn-primary">Detalles</a>
        </div>
    </div>`;
        htmlx = htmlx+htmlCard;
    });
    content.innerHTML=htmlx;
});



