const filtrarPropiedades = () => {

const cant_cuartos = document.querySelector("#cuartos").value;
const cant_min = document.querySelector("#m-desde").value;
const cant_max = document.querySelector("#m-hasta").value;

if (cant_cuartos && cant_min && cant_max){
    agregar(cant_cuartos, cant_min, cant_max)
    } else{
    alert('Todos los filtros son obligatorios.')
    }

}

const agregar = (rom = '*', min2 = '*', max2 = '*') => {
    let galeria =document.querySelector('.propiedades');
    let propiedades_ = '';
    let cantidad = 0

    for(const propiedad of propiedadesJSON){
        if (
            (propiedad.rooms == rom &&
            propiedad.m >= min2 &&
            propiedad.m <= max2) ||
            (rom == '*' && min2 == '*' && max2 == '*')
            ){ 
                propiedades_ +=
                    `<div class="propiedad">
                    <div class="img" style="background-image: url('${propiedad.src}')"></div>
                    <section>
                        <h5>${propiedad.name}</h5>
                        <div class="d-flex justify-content-between">
                            <p>Cuartos: ${propiedad.rooms}</p>
                            <p>Metros: ${propiedad.m}</p>
                        </div>
                        <p class="my-3">${propiedad.description}</p>
                        <button class="btn btn-info ">Ver más</button>
                    </section>
                    </div>`
                cantidad ++;
            }
    };

    galeria.innerHTML = propiedades_; 

    document.querySelector('#resultados').innerHTML = cantidad;
    
};
    

    agregar()