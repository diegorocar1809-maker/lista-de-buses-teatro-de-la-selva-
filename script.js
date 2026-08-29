// ===== VERSIÓN DE LOS DATOS =====
// Cada vez que se actualicen las listas de pasajeros en datosBase, hay que subir este número.
// Así, todos los dispositivos (celulares, iPad, etc.) reciben la lista nueva automáticamente,
// sin perder el estado de "abordó" ni el bus asignado de los pasajeros que ya estaban marcados.
const DATA_VERSION = 2;

// ===== DATOS BASE (fuente de la verdad para las listas de pasajeros) =====
function busesDefault(){
    return [
        {nombre:'Bus 1',capacidad:45,lleno:false},
        {nombre:'Bus 2',capacidad:45,lleno:false},
        {nombre:'Bus 3',capacidad:45,lleno:false}
    ];
}

const datosBase = {
'Sábado 29 de Agosto':{
buses:busesDefault(),
pasajeros:[
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false,bus:null},
{name:'Diana Rojas',tel:'+59177884643',lug:3,ok:false,bus:null},
{name:'Alejandro Bluske',tel:'+59179257957',lug:2,ok:false,bus:null},
{name:'Eliany Ugarte Salvatierra ❤️',tel:'+59176321089',lug:2,ok:false,bus:null},
{name:'Liliana Taborga',tel:'+59175644226',lug:2,ok:false,bus:null},
{name:'Maria José Vera',tel:'+59175644226',lug:2,ok:false,bus:null},
{name:'Paola Fuentes',tel:'+59174067480',lug:2,ok:false,bus:null},
{name:'Paula Pinto',tel:'+59167707587',lug:2,ok:false,bus:null},
{name:'America Alvarez',tel:'+59168771544',lug:2,ok:false,bus:null},
{name:'Aracely Salazar',tel:'+59174831076',lug:2,ok:false,bus:null},
{name:'Aline Michele Chiodini',tel:'+59162190722',lug:2,ok:false,bus:null},
{name:'Noemy Chavez',tel:'+59160997749',lug:2,ok:false,bus:null},
{name:'MARICELA TORREZ',tel:'+59177372654',lug:4,ok:false,bus:null},
{name:'Veronica Romero',tel:'+59177701801',lug:3,ok:false,bus:null},
{name:'Monica Farias Velasco',tel:'+59176420115',lug:3,ok:false,bus:null},
{name:'fernando fernandez',tel:'+59172152074',lug:4,ok:false,bus:null},
{name:'Mario Del Rio',tel:'+59176856937',lug:3,ok:false,bus:null},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:3,ok:false,bus:null},
{name:'Cecilia Antezana',tel:'+59170909429',lug:2,ok:false,bus:null},
{name:'Laura Daniela Navajas Salguero Navajas Salguero',tel:'+59175319750',lug:3,ok:false,bus:null},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:1,ok:false,bus:null},
{name:'Marlien Lopez',tel:'+59174603132',lug:1,ok:false,bus:null},
{name:'Teresa Rayssa Castro Novaes',tel:'+59179748130',lug:3,ok:false,bus:null},
{name:'Viviana Paz Bravo',tel:'+59179475434',lug:4,ok:false,bus:null},
{name:'Luis Silvestre Villarroel',tel:'+59177670712',lug:1,ok:false,bus:null},
{name:'Yarita Tarradellez',tel:'+59170123688',lug:2,ok:false,bus:null},
{name:'Goldy Guzmán Melgar',tel:'+59178477452',lug:1,ok:false,bus:null},
{name:'Villy Vaca',tel:'+59175309168',lug:1,ok:false,bus:null},
{name:'ADELA ANGELICA GABRIEL ALANEZ',tel:'+59173158160',lug:1,ok:false,bus:null},
{name:'Kleydii Barriga',tel:'+59170247305',lug:2,ok:false,bus:null},
{name:'Teresa Rayssa Castro Novaes',tel:'+59179748130',lug:2,ok:false,bus:null},
{name:'Verónica Vélez García',tel:'+59172614279',lug:3,ok:false,bus:null},
{name:'Marcela Revilla',tel:'+59176276677',lug:2,ok:false,bus:null}
]
},

'Domingo 30 de Agosto':{
buses:busesDefault(),
pasajeros:[
{name:'Jhonatan López Murillo',tel:'+59177244820',lug:4,ok:false,bus:null},
{name:'Jucy Torrente',tel:'+59169190760',lug:1,ok:false,bus:null},
{name:'Diego Aranda',tel:'+59176538358',lug:2,ok:false,bus:null},
{name:'Alex Tipula Santos',tel:'+59162724455',lug:2,ok:false,bus:null},
{name:'Licette Ayala',tel:'+59169341819',lug:3,ok:false,bus:null},
{name:'Karol Montenegro',tel:'+59178637698',lug:1,ok:false,bus:null},
{name:'Anyaly Paredes',tel:'+59169124561',lug:1,ok:false,bus:null},
{name:'Karol Montenegro',tel:'+59178637698',lug:1,ok:false,bus:null},
{name:'Daniela Juchani',tel:'+59177071731',lug:2,ok:false,bus:null},
{name:'Karla iracema Ruiz Viviani',tel:'+59169233841',lug:1,ok:false,bus:null},
{name:'Carol Blanco Aillon',tel:'+59176026247',lug:1,ok:false,bus:null},
{name:'Celena Gabriela Romero Reyes',tel:'+59173600378',lug:3,ok:false,bus:null},
{name:'Sthefanny Aguilera',tel:'+59170827205',lug:1,ok:false,bus:null},
{name:'Cinthya Cruz',tel:'+59178415027',lug:1,ok:false,bus:null},
{name:'Libia Gabriela Diez',tel:'+59178415027',lug:1,ok:false,bus:null},
{name:'Vivian Ortiz',tel:'+59170897942',lug:6,ok:false,bus:null},
{name:'Aurora Gonzales',tel:'+59171346400',lug:1,ok:false,bus:null},
{name:'Sebastián Arteaga Cordova',tel:'+59169074351',lug:2,ok:false,bus:null},
{name:'Alessandra Tacoo leite',tel:'+59177686103',lug:3,ok:false,bus:null},
{name:'Alessandra Tacoo Leite',tel:'+59177686103',lug:3,ok:false,bus:null},
{name:'Alicia Rivas Romana',tel:'+59160836572',lug:4,ok:false,bus:null},
{name:'Fatima Fernandez',tel:'+59178415342',lug:2,ok:false,bus:null},
{name:'Paola Sarzuri Porco',tel:'+59162202064',lug:1,ok:false,bus:null},
{name:'Paola Sarzuri Porco',tel:'+59162202064',lug:5,ok:false,bus:null},
{name:'Leonel Herbas',tel:'+59177649163',lug:2,ok:false,bus:null},
{name:'Cecilia Mendivil',tel:'+59172194667',lug:6,ok:false,bus:null},
{name:'Maria Eugenia Gonzales',tel:'+59168927062',lug:3,ok:false,bus:null}
]
}
};

// ===== CLAVES DE GUARDADO =====
const STORAGE_KEY = 'buses_teatro_selva_datos';
const VERSION_KEY = 'buses_teatro_selva_version';

// ===== Combina la lista nueva de pasajeros con la guardada, =====
// conservando "ok" (abordó) y "bus" (bus asignado) de quien ya estaba marcado.
function fusionarPasajeros(nuevos, viejos){
    let pool = [...viejos]; // pasajeros que ya estaban guardados, para ir "consumiendo" coincidencias
    return nuevos.map(np=>{
        // 1) intenta encontrar coincidencia exacta (nombre + teléfono + lugares)
        let i = pool.findIndex(op=>op.name===np.name && op.tel===np.tel && op.lug===np.lug);
        // 2) si no, intenta por nombre + teléfono nada más (por si le corrigieron los lugares)
        if(i===-1) i = pool.findIndex(op=>op.name===np.name && op.tel===np.tel);
        if(i!==-1){
            let match = pool.splice(i,1)[0];
            return { ...np, ok: match.ok, bus: match.bus };
        }
        // Pasajero nuevo que no estaba antes
        return { ...np, ok:false, bus:null };
    });
}

// ===== CARGAR DATOS =====
function cargarDatos(){
    let d;
    try{
        const guardado = localStorage.getItem(STORAGE_KEY);
        d = guardado ? JSON.parse(guardado) : null;
    }catch(e){
        console.error('Error leyendo localStorage:', e);
        d = null;
    }

    if(!d){
        // Primera vez: usamos los datos base tal cual
        d = JSON.parse(JSON.stringify(datosBase));
        localStorage.setItem(VERSION_KEY, DATA_VERSION);
        return d;
    }

    // Migración de formatos viejos (antes de que existieran los buses)
    Object.keys(d).forEach(v=>{
        if(Array.isArray(d[v])){
            d[v] = { buses: busesDefault(), pasajeros: d[v] };
        }
        if(d[v].capacidad !== undefined && !d[v].buses){
            let b = busesDefault();
            b[0].capacidad = d[v].capacidad;
            d[v] = { buses: b, pasajeros: d[v].pasajeros };
        }
        if(!d[v].buses) d[v].buses = busesDefault();
        d[v].pasajeros.forEach(p=>{ if(p.bus===undefined) p.bus=null; });
    });

    // ¿Hay una versión de datos más nueva? Si es así, actualizamos las listas de pasajeros
    // (conservando quién ya abordó y en qué bus), pero respetamos la capacidad/estado de los
    // buses que Diego ya haya configurado.
    const versionGuardada = parseInt(localStorage.getItem(VERSION_KEY) || '0');
    if(versionGuardada < DATA_VERSION){
        Object.keys(datosBase).forEach(v=>{
            if(d[v]){
                // El viaje ya existía: fusionamos pasajeros, conservamos los buses guardados
                d[v].pasajeros = fusionarPasajeros(datosBase[v].pasajeros, d[v].pasajeros);
            }else{
                // Viaje nuevo que no existía antes
                d[v] = JSON.parse(JSON.stringify(datosBase[v]));
            }
        });
        // Quitamos viajes que ya no están en datosBase (fechas que ya pasaron/se quitaron)
        Object.keys(d).forEach(v=>{
            if(!datosBase[v]) delete d[v];
        });
        localStorage.setItem(VERSION_KEY, DATA_VERSION);
    }

    return d;
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
guardarDatos();

const viaje=document.getElementById('viaje'),lista=document.getElementById('lista'),buscar=document.getElementById('buscar'),busesEl=document.getElementById('buses');
Object.keys(datos).forEach(v=>viaje.add(new Option(v,v)));

function draw(){
    let viajeData = datos[viaje.value];
    let pasajeros = viajeData.pasajeros;
    let buses = viajeData.buses;

    let arr=[...pasajeros].sort((a,b)=>a.ok-b.ok);
    let h='',r=arr.length,l=0,a=0;
    arr.forEach((p)=>{l+=p.lug;if(p.ok)a++;});
    reservas.textContent=r;lugares.textContent=l;abordo.textContent=a;faltan.textContent=r-a;

    // ===== Dibujar los 3 buses con su ocupación, capacidad y estado =====
    let bh='';
    buses.forEach((b,i)=>{
        let ocupado = pasajeros.filter(p=>p.bus===i).reduce((s,p)=>s+p.lug,0);
        let sobre = ocupado>b.capacidad;
        bh+=`
<div class="bus-chip ${b.lleno?'lleno':''} ${sobre?'sobre':''}">
    <div class="bus-nombre">${b.nombre}</div>
    <div class="bus-ocupacion">${ocupado}/${b.capacidad}</div>
    <div class="bus-actions">
        <button onclick="editarCapacidadBus(${i})" title="Editar capacidad">✏️</button>
        <button onclick="toggleLleno(${i})" title="Marcar lleno/libre">${b.lleno?'🔴 Lleno':'🟢 Libre'}</button>
    </div>
</div>`;
    });
    busesEl.innerHTML=bh;

    // ===== Dibujar tarjetas de pasajeros =====
    arr.filter(p=>p.name.toLowerCase().includes(buscar.value.toLowerCase())).forEach(p=>{
        let idx=pasajeros.indexOf(p);
        let opciones = buses.map((b,i)=>`<option value="${i}" ${p.bus===i?'selected':''}>${b.nombre}${b.lleno?' (lleno)':''}</option>`).join('');
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
    <div class="bus-row">
        🚌 <select class="bus-select" onchange="asignarBus(${idx}, this.value)">
            <option value="">Sin bus</option>
            ${opciones}
        </select>
    </div>
</div>
`;
    });
    lista.innerHTML=h;
}

function t(i){
    datos[viaje.value].pasajeros[i].ok=!datos[viaje.value].pasajeros[i].ok;
    guardarDatos();
    draw();
}

function asignarBus(i, val){
    let viajeData = datos[viaje.value];
    let busIdx = val==='' ? null : parseInt(val);
    if(busIdx!==null && viajeData.buses[busIdx].lleno){
        if(!confirm(`${viajeData.buses[busIdx].nombre} está marcado como LLENO. ¿Asignar a este pasajero de todas formas?`)){
            draw();
            return;
        }
    }
    viajeData.pasajeros[i].bus = busIdx;
    guardarDatos();
    draw();
}

function editarCapacidadBus(i){
    let viajeData = datos[viaje.value];
    let actual = viajeData.buses[i].capacidad;
    let nueva = parseInt(prompt(`Capacidad de ${viajeData.buses[i].nombre}`, actual));
    if(!nueva || nueva<=0) return;
    viajeData.buses[i].capacidad = nueva;
    guardarDatos();
    draw();
}

function toggleLleno(i){
    let viajeData = datos[viaje.value];
    viajeData.buses[i].lleno = !viajeData.buses[i].lleno;
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
    datos[viaje.value].pasajeros.push({name:n,tel,lug,ok:false,bus:null});
    guardarDatos();
    draw();
}

// Botón opcional para resetear todo a los datos originales (por si algún día lo necesitas
// desde la consola del navegador: escribe resetearDatos() y Enter)
window.resetearDatos = function(){
    if(confirm('¿Seguro que quieres borrar todo lo guardado y volver a los datos originales?')){
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VERSION_KEY);
        location.reload();
    }
}
}
        location.reload();
    }
}
