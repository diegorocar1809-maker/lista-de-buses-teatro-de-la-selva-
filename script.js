// ===== DATOS BASE (se usan solo la primera vez, luego manda localStorage) =====
const datosBase = {
'Sábado 15 de Agosto':[
{name:'Jesús Mauricio Vidangos López',tel:'+59175565209',lug:1,ok:false},
{name:'Jose enrique Mendoza mercado',tel:'+59177065761',lug:2,ok:false},
{name:'SANDRA HERTZ',tel:'+59165569655',lug:2,ok:false},
{name:'Teresa Elvira Rodríguez Jacobo',tel:'+59177859909',lug:1,ok:false},
{name:'Nely Rocha Melgarejo',tel:'+59176447972',lug:1,ok:false},
{name:'Rafael Chipana',tel:'+59178079377',lug:2,ok:false},
{name:'Mario Perez',tel:'+59176608180',lug:3,ok:false},
{name:'Isabel Espindola',tel:'+59176996474',lug:2,ok:false},
{name:'Camila Ramos',tel:'+59175525154',lug:2,ok:false},
{name:'Cecilia Viera',tel:'+59175083796',lug:1,ok:false},
{name:'Oscar Vargas',tel:'+59175744023',lug:1,ok:false},
{name:'Mario Perez',tel:'+59176608180',lug:1,ok:false},
{name:'Erika Herrera',tel:'+59162299558',lug:2,ok:false},
{name:'Emma Castedo',tel:'+59172603024',lug:2,ok:false},
{name:'Yoissi Mejia',tel:'+59168084062',lug:3,ok:false},
{name:'Mónica Herbas Sejas',tel:'+59168915092',lug:3,ok:false},
{name:'Rian Ferreira da Silveira',tel:'+5551998211126',lug:2,ok:false},
{name:'Claudia Jacobo Guzmán',tel:'+59177859909',lug:1,ok:false},
{name:'Andrea Salome Quiroz Mendoza',tel:'+59168766370',lug:1,ok:false},
{name:'Maria Mercedes Roca',tel:'+523318508453',lug:2,ok:false},
{name:'Angela Merlo',tel:'+59178107181',lug:2,ok:false},
{name:'Vivian Velarde aramayo',tel:'+59177136066',lug:2,ok:false},
{name:'Erika Herrera',tel:'+59162299558',lug:2,ok:false},
{name:'Viviana Mamani Ramos',tel:'+59173125431',lug:4,ok:false},
{name:'Nicole Chavez',tel:'+59172149370',lug:2,ok:false},
{name:'Maria Renee Velasco',tel:'+59177664055',lug:3,ok:false},
{name:'Yessy Jimenez',tel:'+59177366618',lug:2,ok:false},
{name:'María Reneé Velasco',tel:'+59177664055',lug:3,ok:false},
{name:'Alejandro Bluske',tel:'+59179257957',lug:2,ok:false},
{name:'Juan Arturo Drew',tel:'+59172123881',lug:2,ok:false},
{name:'Diego Aranda',tel:'+59176538358',lug:2,ok:false},
{name:'Matias Gallinatti',tel:'+59177811633',lug:3,ok:false},
{name:'Carlos Iriarte',tel:'+59170080505',lug:2,ok:false}
],

'Domingo 16 de Agosto':[
{name:'Lenny veronica Cejas',tel:'+59170032978',lug:3,ok:false},
{name:'Gabriela Carrasco Terceros',tel:'+59173152980',lug:2,ok:false},
{name:'Cristian Toledo',tel:'+59177358140',lug:2,ok:false},
{name:'Sebastián Chavarría',tel:'+59168781124',lug:2,ok:false},
{name:'Maicol Suarez',tel:'+59162152992',lug:2,ok:false},
{name:'Belen Justiniano',tel:'+59107785514198',lug:1,ok:false},
{name:'Sandra Cabrera Clavijo',tel:'+59177390175',lug:4,ok:false},
{name:'Cleyton Harold Saucedo',tel:'+59167327260',lug:2,ok:false},
{name:'Víctor Fernández',tel:'+59172648436',lug:2,ok:false},
{name:'Irene Rivero',tel:'+59171345059',lug:2,ok:false},
{name:'Adaly Henry Cuchallo Mendoza',tel:'+59168911910',lug:2,ok:false},
{name:'Karen Daniela Limón Ramos',tel:'+59170880044',lug:2,ok:false},
{name:'Alejandro Ballejos',tel:'+59178499480',lug:3,ok:false},
{name:'Eduardo Vargas',tel:'+59168867114',lug:2,ok:false},
{name:'Edith Sanchez de wellz',tel:'+59177621447',lug:8,ok:false},
{name:'Tamara Inturias Bustillos',tel:'+59175055804',lug:2,ok:false},
{name:'Darinka Ruiz',tel:'+59162825852',lug:2,ok:false},
{name:'Diana Sandoval Lino',tel:'+59178507640',lug:3,ok:false}
],

'Sábado 29 de Agosto':[
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false},
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false},
{name:'Alejandro Bluske',tel:'+59179257957',lug:2,ok:false}
],

'Domingo 30 de Agosto':[
{name:'Jhonatan López Murillo',tel:'+59177244820',lug:4,ok:false},
{name:'Jucy Torrente',tel:'+59169190760',lug:1,ok:false},
{name:'Diego Aranda',tel:'+59176538358',lug:2,ok:false},
{name:'Alex Tipula Santos',tel:'+59162724455',lug:2,ok:false}
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
