// setTimeout ( ( )=> 
// {
//     preguntarN$P ( );
// },10000)


function saludar ( )
{
    const nombrePedir = String ( prompt ('Dame tu nombre'));
    const nombre = document.getElementById ('h1N');
    nombre.innerText = ` Bienvenido ${nombrePedir}`;
}
// saludar ( );


function boton8 ( ) 
{
    const boton8 = document.getElementById ('boton8')
    boton8.addEventListener ('click' ,
    ( )=>{
        Swal.fire({
            title: 'Bruja Escarlata & Visiòn ',
            imageUrl : 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BEEC79EB9BB3D140F6F90CBB1DD8431ED6DADEB19B6FA83B94463D811037FAC/scale?width=1200&aspectRatio=1.78&format=jpeg',
            showCancelButton: false,
            confirmButtonText: 'OK'
        })
    })
}
boton8 ( );

    
function preguntarN$P () 
{
    let pregunta0 = String (prompt ('¿Te gusta Marvel?'));

    let respuesta2 = pregunta0 === 'Si' ? `Busca el boton 8` : 'Vale da te una oportunidad de conocer todo este universo'
    alert (respuesta2);
}


function SuperHeroes (a, b, c, d, h, j) 
{
    this.estatura = a
    this.color = b
    this.genero = c
    this.edad = d
    this.poder = h
    this.arma = j
}
    const thorObject= new  SuperHeroes ('2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir');
    const  moonNigthObject = new SuperHeroes ('1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos');
    const capitanAmericaObject = new SuperHeroes ('1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio' );
    const lokiObject = new SuperHeroes ('2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro');
    const thanosObject = new SuperHeroes ('4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada')
    const hulkObject = new SuperHeroes ('4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas');


const  thor = ['Thor', '2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir'];
const moonNigth = ['Moon Nigth', '1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos']
const capitanAmerica = ['Capitan America','1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio']
const loki = ['Loki','2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro']
const thanos = ['Thanos','4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada']
const hulk = ['Hulk','4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas']

const listSuperHeroes = [`${thor[0]} ${moonNigth[0]} ${capitanAmerica[0]} ${loki[0]} ${thanos[0]} ${hulk[0]}`]

function mostrarSuperHeroes( ) {
    for (let i = 0; i <=6; i++) {
        const div = document.getElementById ('miContenido');
        div.innerHTML = `<button>${thor [0]}</button> <button>${moonNigth [0]}</button> <button>${capitanAmerica [0]}</button> <button>${loki [0]}</button> <button>${thanos [0]}</button> <button>${hulk  [0]}</button>`;
    }
 }
//  mostrarSuperHeroes ( );

function abrir ( ) 
{
    const boton1 = document.getElementById ('boton1')
    boton1.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'THOR',
            imageUrl : 'https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2022/05/Thor-156-1200x675.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {s
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${thor [0]}</li>
                    <li>${thor [1]}</li>
                    <li>${thor [2]}</li>
                    <li>${thor [3]}</li>
                    <li>${thor [4]}</li>
                    <li>${thor [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
    const boton2 = document.getElementById ('boton2')
    boton2.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'MOON NIGTH',
            imageUrl : 'https://www.fayerwayer.com/resizer/S1IRcsno6daad483ooLHUgyb_W8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/CCO3JKL4TRG7DDPTTENSDGY56A.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${moonNigth [0]}</li>
                    <li>${moonNigth [1]}</li>
                    <li>${moonNigth [2]}</li>
                    <li>${moonNigth [3]}</li>
                    <li>${moonNigth [4]}</li>
                    <li>${moonNigth [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
    const boton3 = document.getElementById ('boton3')
    boton3.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'CAPITAN AMERICA',
            imageUrl : 'https://dam.smashmexico.com.mx/wp-content/uploads/2020/03/avengers-infinity-war-captain-america-escudo-disenio-cover-768x512.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${capitanAmerica [0]}</li>
                    <li>${capitanAmerica [1]}</li>
                    <li>${capitanAmerica [2]}</li>
                    <li>${capitanAmerica [3]}</li>
                    <li>${capitanAmerica [4]}</li>
                    <li>${capitanAmerica [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton4 = document.getElementById ('boton4')
    boton4.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'LOKI',
            imageUrl : 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_876x493/public/media/image/2021/05/loki-tom-hiddleston-2345851.jpg?itok=RCUz1TlC',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${loki [0]}</li>
                    <li>${loki [1]}</li>
                    <li>${loki [2]}</li>
                    <li>${loki [3]}</li>
                    <li>${loki [4]}</li>
                    <li>${loki [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton5 = document.getElementById ('boton5')
    boton5.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'THANOS',
            imageUrl : 'https://e.rpp-noticias.io/normal/2018/04/21/295329_597760.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${thanos [0]}</li>
                    <li>${thanos [1]}</li>
                    <li>${thanos [2]}</li>
                    <li>${thanos [3]}</li>
                    <li>${thanos [4]}</li>
                    <li>${thanos [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton6= document.getElementById ('boton6')
     boton6.addEventListener ('click' ,
      ( ) => {
         Swal.fire({
             title: 'HULK',
             imageUrl : 'https://www.latercera.com/resizer/b5Ubecm5NT7uowqmwys03UDcelc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/QIZBK67RYFALTNBYYNGHG4IM24.jpg',
                 imageHeight: 400,
                 imageAlt: 'Adios',
                 showCancelButton: true,
                 confirmButtonText: 'Mas',
                 cancelButtonText: 'No mas'
         }).then ((resultado)=> {
             if (resultado.isConfirmed) {
                 Swal.fire ({
                     icon: 'info',
                     html: `
                     <li>${hulk [0]}</li>
                     <li>${hulk [1]}</li>
                     <li>${hulk [2]}</li>
                     <li>${hulk [3]}</li>
                     <li>${hulk [4]}</li>
                     <li>${hulk [5]}</li>`,
                 })
             }
             else {
                 Swal.fire ({
                     icon: 'error',
                     title: 'Adios'
                 })
             }
         })
      })
     
}
abrir ( );
function agregarSuperHeroe ( ) {
    const boton7= document.getElementById ('boton7')
        boton7.addEventListener ('click' ,
            ( ) => {
                const nameAgregado = String (prompt ('Dame el Nombre'));
                let nameG = (nameAgregado);
                const estaturaAgregado = String (prompt ('Dame la Estatura'));
                let estaruraG = (estaturaAgregado);
                const colorAgregado = String (prompt ('Dame un Color'));
                let colorG = (colorAgregado);
                const  generoAgregado = String (prompt ('Masculino o Femenino'));
                let generoG = (generoAgregado);
                const  edadAgregado = String (prompt ('Edad De tu Super'));
                let edadG = (edadAgregado);
                const poderAgregado = String (prompt ('Cual poder te gustaria'));
                let poderG = (poderAgregado);
                const armaAgregado = String (prompt ('Que arma tiene tu super'));
                let armaG = (armaAgregado);
                
                
                Swal.fire({
                    title: `${nameG}`,
                        imageHeight: 400,
                        imageAlt: 'Adios',
                        showCancelButton: true,
                        confirmButtonText: 'Mas',
                        cancelButtonText: 'No mas',               
                }).then ((resultado)=> {
                    if (resultado.isConfirmed) {
                        Swal.fire ({
                            icon: 'info',
                            html: `
                            <li>Tu Super Heroe ${nameG}</li>
                            <li>${estaruraG}</li>
                            <li>${colorG}</li>
                            <li>${generoG}</li>
                            <li>${edadG}</li>
                            <li>${poderG}</li>
                            <li>${armaG}</li>`,
                        })
                    }
                    else {
                        Swal.fire ({
                            icon: 'error',
                            title: 'Adios'
                        })
                    }
                })
            }
)}
agregarSuperHeroe ( );


//LLAMADOS DE API 

const url = 'https://pokeapi.co/api/v2/pokemon/1/'

fetch (url)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url1 = 'https://pokeapi.co/api/v2/pokemon/25/'

fetch (url1)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem1')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url2 = 'https://pokeapi.co/api/v2/pokemon/30/'
fetch (url2)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem2')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url3 = 'https://pokeapi.co/api/v2/pokemon/40/'
fetch (url3)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem3')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url4 = 'https://pokeapi.co/api/v2/pokemon/10/'
fetch (url4)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem4')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url5 = 'https://pokeapi.co/api/v2/pokemon/12/'
fetch (url5)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem5')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url6 = 'https://pokeapi.co/api/v2/pokemon/8/'
fetch (url6)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem6')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url7 = 'https://pokeapi.co/api/v2/pokemon/2/'
fetch (url7)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem7')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url8 = 'https://pokeapi.co/api/v2/pokemon/67/'
fetch (url8)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem8')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url9 = 'https://pokeapi.co/api/v2/pokemon/57/'
fetch (url9)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem9')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url10 = 'https://pokeapi.co/api/v2/pokemon/27/'
fetch (url10)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem10')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url11 = 'https://pokeapi.co/api/v2/pokemon/52/'
fetch (url11)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem11')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url12 = 'https://pokeapi.co/api/v2/pokemon/23/'
fetch (url12)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem12')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url13 = 'https://pokeapi.co/api/v2/pokemon/18/'
fetch (url13)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem13')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url14 = 'https://pokeapi.co/api/v2/pokemon/160/'
fetch (url14)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem14')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url15 = 'https://pokeapi.co/api/v2/pokemon/100/'
fetch (url15)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem15')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url16 = 'https://pokeapi.co/api/v2/pokemon/99/'
fetch (url16)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem16')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))

const url17= 'https://pokeapi.co/api/v2/pokemon/200/'
fetch (url17)
.then(response => response.json())
.then (data => {

    let btn = document.getElementById ('elem17')
    btn.innerHTML = `
    <h1 class="mt-4">${data.name}</h1>
    <img src='${data.sprites.front_default}'>
    `;
    console.log(data)
})
.catch(error => console.log (error))



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });