// ===== DATOS BASE (se usan solo la primera vez, luego manda localStorage) =====
const datosBase = {
'Sábado 29 de Agosto':[
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false},
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false},
{name:'Alejandro Bluske',tel:'+59179257957',lug:2,ok:false},
{name:'Eliany Ugarte Salvatierra ❤️',tel:'+59176321089',lug:2,ok:false},
{name:'Liliana Taborga',tel:'+59175644226',lug:2,ok:false},
{name:'Maria José Vera',tel:'+59175644226',lug:2,ok:false},
{name:'Paola Fuentes',tel:'+59174067480',lug:2,ok:false},
{name:'Paula Pinto',tel:'+59167707587',lug:2,ok:false},
{name:'America Alvarez',tel:'+59168771544',lug:2,ok:false},
{name:'Aracely Salazar',tel:'+59174831076',lug:2,ok:false},
{name:'Aline Michele Chiodini',tel:'+59162190722',lug:2,ok:false},
{name:'Noemy Chavez',tel:'+59160997749',lug:2,ok:false},
{name:'MARICELA TORREZ',tel:'+59177372654',lug:4,ok:false},
{name:'Veronica Romero',tel:'+59177701801',lug:3,ok:false},
{name:'Monica Farias Velasco',tel:'+59176420115',lug:3,ok:false},
{name:'fernando fernandez',tel:'+59172152074',lug:4,ok:false},
{name:'Mario Del Rio',tel:'+59176856937',lug:3,ok:false},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:3,ok:false},
{name:'Cecilia Antezana',tel:'+59170909429',lug:2,ok:false},
{name:'Laura Daniela Navajas Salguero Navajas Salguero',tel:'+59175319750',lug:3,ok:false},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:1,ok:false},
{name:'Marlien Lopez',tel:'+59174603132',lug:1,ok:false},
{name:'Teresa Rayssa Castro Novaes',tel:'+59179748130',lug:3,ok:false},
{name:'Viviana Paz Bravo',tel:'+59179475434',lug:4,ok:false},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:1,ok:false},
{name:'Yarita Tarradellez',tel:'+59170123688',lug:2,ok:false},
{name:'Goldy Guzmán Melgar',tel:'+59178477452',lug:1,ok:false},
{name:'Villy Vaca',tel:'+59175309168',lug:1,ok:false},
{name:'ADELA ANGELICA GABRIEL ALANEZ',tel:'+59173158160',lug:1,ok:false},
{name:'Kleydii Barriga',tel:'+59170247305',lug:2,ok:false},
{name:'Teresa Rayssa Castro Novaes',tel:'+59179748130',lug:2,ok:false},
{name:'Verónica Vélez García',tel:'+59172614279',lug:3,ok:false},
{name:'Marcela Revilla',tel:'+59176276677',lug:2,ok:false}
],

'Domingo 30 de Agosto':[
{name:'Jhonatan López Murillo',tel:'+59177244820',lug:4,ok:false},
{name:'Jucy Torrente',tel:'+59169190760',lug:1,ok:false},
{name:'Diego Aranda',tel:'+59176538358',lug:2,ok:false},
{name:'Alex Tipula Santos',tel:'+59162724455',lug:2,ok:false},
{name:'Licette Ayala',tel:'+59169341819',lug:3,ok:false},
{name:'Karol Montenegro',tel:'+59178637698',lug:1,ok:false},
{name:'Anyaly Paredes',tel:'+59169124561',lug:1,ok:false},
{name:'Karol Montenegro',tel:'+59178637698',lug:1,ok:false},
{name:'Daniela Juchani',tel:'+59177071731',lug:2,ok:false},
{name:'Karla iracema Ruiz Viviani',tel:'+59169233841',lug:1,ok:false},
{name:'Carol Blanco Aillon',tel:'+59176026247',lug:1,ok:false},
{name:'Celena Gabriela Romero Reyes',tel:'+59173600378',lug:3,ok:false},
{name:'Sthefanny Aguilera',tel:'+59170827205',lug:1,ok:false},
{name:'Cinthya Cruz',tel:'+59178415027',lug:1,ok:false},
{name:'Libia Gabriela Diez',tel:'+59178415027',lug:1,ok:false},
{name:'Vivian Ortiz',tel:'+59170897942',lug:6,ok:false},
{name:'Aurora Gonzales',tel:'+59171346400',lug:1,ok:false},
{name:'Sebastián Arteaga Cordova',tel:'+59169074351',lug:2,ok:false},
{name:'Alessandra Tacoo leite',tel:'+59177686103',lug:3,ok:false},
{name:'Alessandra Tacoo Leite',tel:'+59177686103',lug:3,ok:false},
{name:'Alicia Rivas Romana',tel:'+59160836572',lug:4,ok:false},
{name:'Fatima Fernandez',tel:'+59178415342',lug:2,ok:false},
{name:'Paola Sarzuri Porco',tel:'+59162202064',lug:1,ok:false},
{name:'Paola Sarzuri Porco',tel:'+59162202064',lug:5,ok:false},
{name:'Leonel Herbas',tel:'+59177649163',lug:2,ok:false},
{name:'Cecilia Mendivil',tel:'+59172194667',lug:6,ok:false},
{name:'Maria Eugenia Gonzales',tel:'+59168927062',lug:3,ok:false}
]
};

// ===== CLAVE DE GUARDADO =====
const STORAGE_KEY = 'buses_teatro_selva_datos';

// ===== CARGAR DATOS: primero intenta localStorage, si no existe usa datosBase =====
function cargarDatos(){
    try{
        const guardado = localStorage.getItem(STORAGE_KEY);
        if(guardado){
            return JSON.parse(guardado);
        }
    }catch(e){
        console.error('Error leyendo localStorage:', e);
    }
    // Si no hay nada guardado, clonamos datosBase para no mutar el original
    return JSON.parse(JSON.stringify(datosBase));
}

// ===== GUARDAR DATOS =====
function guardarDatos(){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));
    }catch(e){
        console.error('Error guardando en localStorage:', e);
        alert('No se pudo guardar. Puede que el almacenamiento esté lleno o bloqueado.');
    }
}

const datos = cargarDatos();

const viaje=document.getElementById('viaje'),lista=document.getElementById('lista'),buscar=document.getElementById('buscar');
Object.keys(datos).forEach(v=>viaje.add(new Option(v,v)));

function draw(){
    let arr=[...datos[viaje.value]].sort((a,b)=>a.ok-b.ok);
    let h='',r=arr.length,l=0,a=0;
    arr.forEach((p)=>{l+=p.lug;if(p.ok)a++;});
    reservas.textContent=r;lugares.textContent=l;abordo.textContent=a;faltan.textContent=r-a;
    arr.filter(p=>p.name.toLowerCase().includes(buscar.value.toLowerCase())).forEach(p=>{
        let idx=datos[viaje.value].indexOf(p);
        h+=`
<div class="card ${p.ok ? 'ok' : ''}">
    <div class="header-card">
        <div class="nombre">
            ${p.name}
        </div>
        <button class="check" onclick="t(${idx})">
            ${p.ok ? '✅' : '⬜'}
        </button>
    </div>
    <div class="info">
        📞 ${p.tel || '-'} &nbsp;&nbsp; • &nbsp;&nbsp;
        🪑 ${p.lug} ${p.lug>1 ? 'lugares' : 'lugar'}
    </div>
</div>
`;
    });
    lista.innerHTML=h;
}

function t(i){
    datos[viaje.value][i].ok=!datos[viaje.value][i].ok;
    guardarDatos();
    draw();
}

viaje.onchange=draw;
buscar.oninput=draw;
viaje.selectedIndex=0;
draw();

nuevo.onclick=()=>{
    let n=prompt('Nombre');
    if(!n)return;
    let tel=prompt('Teléfono')||'';
    let lug=parseInt(prompt('Lugares','1'))||1;
    datos[viaje.value].push({name:n,tel,lug,ok:false});
    guardarDatos();
    draw();
}

// Botón opcional para resetear todo a los datos originales (por si algún día lo necesitas
// desde la consola del navegador: escribe resetearDatos() y Enter)
window.resetearDatos = function(){
    if(confirm('¿Seguro que quieres borrar todo lo guardado y volver a los datos originales?')){
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
}
