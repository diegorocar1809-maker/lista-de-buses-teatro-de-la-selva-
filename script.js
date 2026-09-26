const DATA_VERSION = 6;

function busesDefault(){
    return [
        {nombre:'Bus 1',capacidad:45,lleno:false},
        {nombre:'Bus 2',capacidad:45,lleno:false},
        {nombre:'Bus 3',capacidad:45,lleno:false}
    ];
}

function conId(prefijo, arr){
    return arr.map((p,i)=>({...p, id:`${prefijo}-${i+1}`}));
}
const datosBase = {
'Sábado 26 de Septiembre':{
buses:busesDefault(),
pasajeros: conId('sab26', [
{name:'Rolando Romero',tel:'+59167895348',lug:4,ok:false,bus:null},
{name:'Silvia Fabiola Cotjiri Daza',tel:'+59169793951',lug:2,ok:false,bus:null},
{name:'Juanali Urdininea Alvarez',tel:'+59175578536',lug:1,ok:false,bus:null},
{name:'María Belén Avila',tel:'+59175116901',lug:2,ok:false,bus:null},
{name:'Natalia Serrano Inarra',tel:'+59169755275',lug:1,ok:false,bus:null},
{name:'Tesoro Natalia Chávez Vacaguzmán',tel:'+59173695742',lug:4,ok:false,bus:null},
{name:'María Angélica Ramos',tel:'+59167865499',lug:2,ok:false,bus:null},
{name:'Nadya Borja',tel:'+59178937545',lug:1,ok:false,bus:null},
{name:'Aracely Villegas Felipez',tel:'+59171056942',lug:2,ok:false,bus:null},
{name:'Claudia Rocio Sejas Avendaño',tel:'+59170110793',lug:1,ok:false,bus:null},
{name:'Adriana Silva Siles',tel:'+59178097080',lug:1,ok:false,bus:null},
{name:'Mirtha Balcazar',tel:'+59179886838',lug:3,ok:false,bus:null},
{name:'Yackeline Escalante Roca',tel:'+59159169048835',lug:3,ok:false,bus:null},
{name:'Jessica Verastegui',tel:'+59161511829',lug:2,ok:false,bus:null},
{name:'Alisson Morón Alejandro',tel:'+59179833934',lug:3,ok:false,bus:null},
{name:'Mauricio Barrios',tel:'+59175792727',lug:2,ok:false,bus:null},
{name:'Sergio Antonio Sanchez Pedraza',tel:'+59169192055',lug:1,ok:false,bus:null},
{name:'Nataly Nanda Huanca Patzi',tel:'+59174839997',lug:1,ok:false,bus:null},
{name:'Susana Segovia',tel:'+59164539298',lug:2,ok:false,bus:null},
{name:'Susana Segovia',tel:'+59164539298',lug:2,ok:false,bus:null},
{name:'Samia Añez',tel:'+59178400178',lug:2,ok:false,bus:null}
])
},
'Domingo 27 de Septiembre':{
buses:busesDefault(),
pasajeros: conId('dom27', [
{name:'Mariana Jorge',tel:'+59176351113',lug:2,ok:false,bus:null},
{name:'Victoria Fernández',tel:'+59172472744',lug:2,ok:false,bus:null},
{name:'Scherezada Costa',tel:'+59162313342',lug:2,ok:false,bus:null},
{name:'Brandy Montalban',tel:'+59168801048',lug:2,ok:false,bus:null},
{name:'Daniela Perez',tel:'+59160352224',lug:2,ok:false,bus:null},
{name:'Laura Avalos Zapata',tel:'+59177027729',lug:2,ok:false,bus:null},
{name:'Stephanie Tapia',tel:'+59167058936',lug:2,ok:false,bus:null},
{name:'Laida Paola Arredondo',tel:'+59165022330',lug:2,ok:false,bus:null},
{name:'Gabriela Cordeiro de Oliveira',tel:'+591755257060',lug:2,ok:false,bus:null},
{name:'Luz america Perez',tel:'+59167731884',lug:1,ok:false,bus:null}
])
},
};
const ICONS = {
    phone:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c0 9 7 16 16 16 0-2 0-4-1-5-1-1-3-1-4 0l-1 1c-2-1-4-3-5-5l1-1c1-1 1-3 0-4-1-1-3-1-5-1z"/></svg>`,
    seat:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/></svg>`,
    bus:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="10" rx="2"/><line x1="3" y1="11" x2="21" y2="11"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/></svg>`,
    trash:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>`,
    pencil:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4-1 10-10-3-3L5 16l-1 4z"/></svg>`,
    checkOn:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>`,
    checkOff:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/></svg>`,
    search:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>`
};

const STORAGE_KEY = 'buses_teatro_selva_datos';
const VERSION_KEY = 'buses_teatro_selva_version';

function fusionarPasajeros(nuevos, viejos){
    let pool = [...viejos];

    let resultado = nuevos.map(np=>{
        let i = pool.findIndex(op=>op.id && op.id===np.id);
        if(i===-1) i = pool.findIndex(op=>op.name===np.name && op.tel===np.tel && op.lug===np.lug);
        if(i===-1) i = pool.findIndex(op=>op.name===np.name && op.tel===np.tel);
        if(i!==-1){
            let match = pool.splice(i,1)[0];
            return { ...np, ok: match.ok, bus: match.bus };
        }
        return { ...np, ok:false, bus:null };
    });

    resultado = resultado.concat(pool);

    return resultado;
}

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
        d = JSON.parse(JSON.stringify(datosBase));
        localStorage.setItem(VERSION_KEY, DATA_VERSION);
        return d;
    }

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

    const versionGuardada = parseInt(localStorage.getItem(VERSION_KEY) || '0');
    if(versionGuardada < DATA_VERSION){
        Object.keys(datosBase).forEach(v=>{
            if(d[v]){
                d[v].pasajeros = fusionarPasajeros(datosBase[v].pasajeros, d[v].pasajeros);
            }else{
                d[v] = JSON.parse(JSON.stringify(datosBase[v]));
            }
        });
        Object.keys(d).forEach(v=>{
            if(!datosBase[v]) delete d[v];
        });
        localStorage.setItem(VERSION_KEY, DATA_VERSION);
    }

    return d;
}

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

const viaje=document.getElementById('viaje'),lista=document.getElementById('lista'),buscar=document.getElementById('buscar'),busesEl=document.getElementById('buses'),progresoEl=document.getElementById('progreso'),filtroInfoEl=document.getElementById('filtroInfo');
Object.keys(datos).forEach(v=>viaje.add(new Option(v,v)));

let filtroBus = null;

function draw(){
    let viajeData = datos[viaje.value];
    let pasajeros = viajeData.pasajeros;
    let buses = viajeData.buses;

    let arr=[...pasajeros].sort((a,b)=>a.ok-b.ok);
    let h='',r=arr.length,l=0,a=0;
    arr.forEach((p)=>{l+=p.lug;if(p.ok)a++;});
    reservas.textContent=r;lugares.textContent=l;abordo.textContent=a;faltan.textContent=r-a;

    let porcentaje = r>0 ? Math.round((a/r)*100) : 0;
    progresoEl.innerHTML=`
<div class="progreso-track"><div class="progreso-fill" style="width:${porcentaje}%"></div></div>
<div class="progreso-texto">${a}/${r} abordaron (${porcentaje}%)${r-a>0 ? ' · faltan '+(r-a) : ''}</div>`;

    let sinBusCant = pasajeros.filter(p=>p.bus===null || p.bus===undefined).length;
    let bh='';
    buses.forEach((b,i)=>{
        let ocupado = pasajeros.filter(p=>p.bus===i).reduce((s,p)=>s+p.lug,0);
        let sobre = ocupado>b.capacidad;
        bh+=`
<div class="bus-chip ${b.lleno?'lleno':''} ${sobre?'sobre':''} ${filtroBus===i?'activo':''}" onclick="filtrarPorBus(${i})">
    <div class="bus-nombre">${b.nombre}</div>
    <div class="bus-ocupacion">${ocupado}/${b.capacidad}</div>
    <div class="bus-actions">
        <button onclick="event.stopPropagation();editarCapacidadBus(${i})" title="Editar capacidad">${ICONS.pencil}</button>
        <button onclick="event.stopPropagation();toggleLleno(${i})" title="Marcar lleno/libre"><span class="pill-estado ${b.lleno?'lleno':'libre'}">${b.lleno?'Lleno':'Libre'}</span></button>
    </div>
</div>`;
    });
    bh+=`
<div class="bus-chip sinbus-chip ${filtroBus==='sinbus'?'activo':''}" onclick="filtrarPorBus('sinbus')">
    <div class="bus-nombre">Sin bus</div>
    <div class="bus-ocupacion">${sinBusCant} pers.</div>
</div>`;
    busesEl.innerHTML=bh;

    if(filtroBus===null){
        filtroInfoEl.classList.add('oculto');
        filtroInfoEl.innerHTML='';
    }else{
        let etiqueta = filtroBus==='sinbus' ? 'Sin bus asignado' : buses[filtroBus].nombre;
        filtroInfoEl.classList.remove('oculto');
        filtroInfoEl.innerHTML=`<span>Mostrando: ${etiqueta}</span><button onclick="filtrarPorBus(null)">✕ Quitar filtro</button>`;
    }

    let visibles = arr.filter(p=>p.name.toLowerCase().includes(buscar.value.toLowerCase()));
    if(filtroBus==='sinbus') visibles = visibles.filter(p=>p.bus===null || p.bus===undefined);
    else if(filtroBus!==null) visibles = visibles.filter(p=>p.bus===filtroBus);

    if(visibles.length===0){
        h=`
<div class="estado-vacio">
    ${ICONS.search}
    <p>No se encontraron pasajeros con este criterio.</p>
</div>`;
    }else{
        visibles.forEach(p=>{
            let idx=pasajeros.indexOf(p);
            let opciones = buses.map((b,i)=>`<option value="${i}" ${p.bus===i?'selected':''}>${b.nombre}${b.lleno?' (lleno)':''}</option>`).join('');
            let telHtml = p.tel ? `<a class="tel-link" href="tel:${p.tel}">${ICONS.phone}${p.tel}</a>` : `<span class="dato">${ICONS.phone}-</span>`;
            h+=`
<div class="card ${p.ok ? 'ok' : ''}">
    <div class="header-card">
        <div class="nombre">
            ${p.name}
        </div>
        <div class="card-actions">
            <button class="borrar" onclick="eliminarPasajero(${idx})" title="Eliminar pasajero">${ICONS.trash}</button>
            <button class="check" onclick="t(${idx})" title="${p.ok ? 'Marcar como no abordado' : 'Marcar como abordado'}">
                ${p.ok ? ICONS.checkOn : ICONS.checkOff}
            </button>
        </div>
    </div>
    <div class="info">
        ${telHtml}
        <span class="dato">${ICONS.seat}${p.lug} ${p.lug>1 ? 'lugares' : 'lugar'}</span>
    </div>
    <div class="bus-row">
        ${ICONS.bus}
        <select class="bus-select" onchange="asignarBus(${idx}, this.value)">
            <option value="">Sin bus</option>
            ${opciones}
        </select>
    </div>
</div>
`;
        });
    }
    lista.innerHTML=h;
}

function t(i){
    datos[viaje.value].pasajeros[i].ok=!datos[viaje.value].pasajeros[i].ok;
    guardarDatos();
    draw();
}

function eliminarPasajero(i){
    let viajeData = datos[viaje.value];
    let p = viajeData.pasajeros[i];
    if(!p) return;
    if(confirm(`¿Eliminar a "${p.name}" de la lista? Esta acción no se puede deshacer.`)){
        viajeData.pasajeros.splice(i,1);
        guardarDatos();
        draw();
    }
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

function filtrarPorBus(valor){
    filtroBus = (filtroBus===valor) ? null : valor;
    draw();
}

viaje.onchange=()=>{ filtroBus=null; draw(); };
buscar.oninput=draw;
viaje.selectedIndex=0;
draw();

const modalNuevo = document.getElementById('modalNuevo');
const inputNombre = document.getElementById('inputNombre');
const inputTelefono = document.getElementById('inputTelefono');
const inputLugares = document.getElementById('inputLugares');
const cancelarNuevo = document.getElementById('cancelarNuevo');
const guardarNuevo = document.getElementById('guardarNuevo');

nuevo.onclick=()=>{
    inputNombre.value='';
    inputTelefono.value='';
    inputLugares.value=1;
    modalNuevo.classList.remove('oculto');
    inputNombre.focus();
};

cancelarNuevo.onclick=()=>{
    modalNuevo.classList.add('oculto');
};

guardarNuevo.onclick=()=>{
    let n = inputNombre.value.trim();
    if(!n){
        alert('Escribe un nombre.');
        inputNombre.focus();
        return;
    }
    let tel = inputTelefono.value.trim();
    let lug = parseInt(inputLugares.value) || 1;
    datos[viaje.value].pasajeros.push({
        id: 'manual-' + Date.now(),
        name: n, tel, lug, ok:false, bus:null
    });
    guardarDatos();
    modalNuevo.classList.add('oculto');
    draw();
};

modalNuevo.addEventListener('click', (e)=>{
    if(e.target===modalNuevo) modalNuevo.classList.add('oculto');
});

[inputNombre, inputTelefono, inputLugares].forEach(inp=>{
    inp.addEventListener('keydown', (e)=>{
        if(e.key==='Enter') guardarNuevo.click();
    });
});

window.resetearDatos = function(){
    if(confirm('¿Seguro que quieres borrar todo lo guardado y volver a los datos originales?')){
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VERSION_KEY);
        location.reload();
    }
}
