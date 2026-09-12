```js
const DATA_VERSION = 4;

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
'Sábado 12 de Septiembre':{
    buses:busesDefault(),
    pasajeros: conId('sab', [
        {name:'ADELA GABRIEL',tel:'+59173158160',lug:1,ok:false,bus:null},
        {name:'Vanessa MANTILLA',tel:'+59179601709',lug:1,ok:false,bus:null},
        {name:'Glenda Dávalos Mejia',tel:'+59167596981',lug:2,ok:false,bus:null},
        {name:'David Fernando Chavez Villarroel',tel:'+59175324397',lug:2,ok:false,bus:null},
        {name:'Rosa Gonzales',tel:'+59165025941',lug:5,ok:false,bus:null},
        {name:'Ilsen Aviles',tel:'+59176114478',lug:2,ok:false,bus:null},
        {name:'Rosa Gonzales Mariscal',tel:'+59165025941',lug:1,ok:false,bus:null},
        {name:'Jorge Valda',tel:'+59176251117',lug:3,ok:false,bus:null},
        {name:'Alejandra Grájeda Gemio de Meneses',tel:'+59179776792',lug:2,ok:false,bus:null},
        {name:'Judith Castellon',tel:'+59172884812',lug:3,ok:false,bus:null},
        {name:'Jhomar Parada',tel:'+59177657797',lug:1,ok:false,bus:null},
        {name:'Juana Patricia Miranda',tel:'+59175055680',lug:3,ok:false,bus:null},
        {name:'heilen Torrez Peña',tel:'+59176695926',lug:2,ok:false,bus:null},
        {name:'Jhomar Parada macias',tel:'+59177657797',lug:1,ok:false,bus:null},
        {name:'Francis Molina Arrueta',tel:'+59164525956',lug:4,ok:false,bus:null},
        {name:'Lesly Sursi',tel:'+59163209770',lug:3,ok:false,bus:null},
        {name:'Nelsy Fabiola Mamani Ramos',tel:'+59178100532',lug:1,ok:false,bus:null},
        {name:'Dayana Ortega',tel:'+59168916261',lug:1,ok:false,bus:null},
        {name:'Aldy Bantin',tel:'+59175065816',lug:1,ok:false,bus:null},
        {name:'Mayra Zagal Bustamante',tel:'+59169002676',lug:2,ok:false,bus:null},
        {name:'Amet Del Rio',tel:'+59175338937',lug:2,ok:false,bus:null},
        {name:'Ingrid Alcey',tel:'+59173608613',lug:3,ok:false,bus:null},
        {name:'Judith Castellon',tel:'+59172884812',lug:1,ok:false,bus:null},
        {name:'Lia Beretta',tel:'+59173393770',lug:5,ok:false,bus:null}
    ])
},

'Domingo 13 de Septiembre':{
    buses:busesDefault(),
    pasajeros: conId('dom', [
        {name:'Mary Yoselin Coyani Febrero',tel:'+59178784457',lug:1,ok:false,bus:null},
        {name:'Alejandro Inchauste',tel:'+59168833628',lug:2,ok:false,bus:null},
        {name:'Juana Hinojosa',tel:'+59172876509',lug:5,ok:false,bus:null},
        {name:'Haydey Rojo',tel:'+59175306269',lug:1,ok:false,bus:null},
        {name:'Luis Albino',tel:'+59179860108',lug:2,ok:false,bus:null},
        {name:'Olma Justiniano Arroyo',tel:'+59175587307',lug:2,ok:false,bus:null},
        {name:'Lorena Dávila',tel:'+59177645344',lug:2,ok:false,bus:null},
        {name:'Patricia Alvarez',tel:'+17274152011',lug:5,ok:false,bus:null},
        {name:'Javier Terrazas',tel:'+59176355305',lug:1,ok:false,bus:null},
        {name:'Juan Daniel Aruquipa Cruz',tel:'+59170904498',lug:2,ok:false,bus:null},
        {name:'Dana Montaño Peñaranda',tel:'+59171035297',lug:1,ok:false,bus:null},
        {name:'Yoshimi Ikehara',tel:'+59163588622',lug:1,ok:false,bus:null},
        {name:'Edward Limachi',tel:'+59178676716',lug:2,ok:false,bus:null},
        {name:'Jeffer Mansilla',tel:'+59168834281',lug:2,ok:false,bus:null},
        {name:'Williams Roberto Encinas Aranda',tel:'+59163373649',lug:2,ok:false,bus:null},
        {name:'Kristen Austin',tel:'+59176679188',lug:2,ok:false,bus:null}
    ])
},
};
```js id="v8k2pm"
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

        if(i===-1) {
            i = pool.findIndex(op=>
                op.name===np.name &&
                op.tel===np.tel &&
                op.lug===np.lug
            );
        }

        if(i===-1) {
            i = pool.findIndex(op=>
                op.name===np.name &&
                op.tel===np.tel
            );
        }

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
            d[v] = {
                buses:busesDefault(),
                pasajeros:d[v]
            };
        }

        if(d[v].capacidad !== undefined && !d[v].buses){
            let b = busesDefault();
            b[0].capacidad = d[v].capacidad;
            d[v] = {
                buses:b,
                pasajeros:d[v].pasajeros
            };
        }

        if(!d[v].buses) d[v].buses = busesDefault();

        d[v].pasajeros.forEach(p=>{
            if(p.bus===undefined) p.bus=null;
        });
    });

    const versionGuardada = parseInt(
        localStorage.getItem(VERSION_KEY) || '0'
    );

    if(versionGuardada < DATA_VERSION){
        Object.keys(datosBase).forEach(v=>{
            if(d[v]){
                d[v].pasajeros = fusionarPasajeros(
                    datosBase[v].pasajeros,
                    d[v].pasajeros
                );
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
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(datos)
        );
    }catch(e){
        console.error('Error guardando en localStorage:', e);
        alert('No se pudo guardar. Puede que el almacenamiento esté lleno o bloqueado.');
    }
}

const datos = cargarDatos();
guardarDatos();

const viaje=document.getElementById('viaje');
const lista=document.getElementById('lista');
const buscar=document.getElementById('buscar');
const busesEl=document.getElementById('buses');
const progresoEl=document.getElementById('progreso');
const filtroInfoEl=document.getElementById('filtroInfo');

Object.keys(datos).forEach(v=>{
    viaje.add(new Option(v,v));
});

let filtroBus = null;

function draw(){
    let viajeData = datos[viaje.value];
    let pasajeros = viajeData.pasajeros;
    let buses = viajeData.buses;

    let arr=[...pasajeros].sort((a,b)=>a.ok-b.ok);
    let h='',r=arr.length,l=0,a=0;

    arr.forEach((p)=>{
        l+=p.lug;
        if(p.ok) a++;
    });

    reservas.textContent=r;
    lugares.textContent=l;
    abordo.textContent=a;
    faltan.textContent=r-a;

    let porcentaje = r>0 ? Math.round((a/r)*100) : 0;

    progresoEl.innerHTML=`
<div class="progreso-track">
    <div class="progreso-fill" style="width:${porcentaje}%"></div>
</div>
<div class="progreso-texto">
    ${a}/${r} abordaron (${porcentaje}%)${r-a>0 ? ' · faltan '+(r-a) : ''}
</div>`;

    let sinBusCant = pasajeros.filter(
        p=>p.bus===null || p.bus===undefined
    ).length;

    let bh='';

    buses.forEach((b,i)=>{
        let ocupado = pasajeros
            .filter(p=>p.bus===i)
            .reduce((s,p)=>s+p.lug,0);

        let sobre = ocupado>b.capacidad;

        bh+=`
<div class="bus-chip ${b.lleno?'lleno':''} ${sobre?'sobre':''} ${filtroBus===i?'activo':''}" onclick="filtrarPorBus(${i})">
    <div class="bus-nombre">${b.nombre}</div>
    <div class="bus-ocupacion">${ocupado}/${b.capacidad}</div>
    <div class="bus-actions">
        <button onclick="event.stopPropagation();editarCapacidadBus(${i})" title="Editar capacidad">
            ${ICONS.pencil}
        </button>
        <button onclick="event.stopPropagation();toggleLleno(${i})" title="Marcar lleno/libre">
            <span class="pill-estado ${b.lleno?'lleno':'libre'}">
                ${b.lleno?'Lleno':'Libre'}
            </span>
        </button>
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
        let etiqueta = filtroBus==='sinbus'
            ? 'Sin bus asignado'
            : buses[filtroBus].nombre;

        filtroInfoEl.classList.remove('oculto');

        filtroInfoEl.innerHTML=`
<span>Mostrando: ${etiqueta}</span>
<button onclick="filtrarPorBus(null)">✕ Quitar filtro</button>`;
    }

    let visibles = arr.filter(
        p=>p.name.toLowerCase().includes(
            buscar.value.toLowerCase()
        )
    );

    if(filtroBus==='sinbus'){
        visibles = visibles.filter(
            p=>p.bus===null || p.bus===undefined
        );
    }else if(filtroBus!==null){
        visibles = visibles.filter(
            p=>p.bus===filtroBus
        );
    }

    if(visibles.length===0){
        h=`
<div class="estado-vacio">
    ${ICONS.search}
    <p>No se encontraron pasajeros con este criterio.</p>
</div>`;
    }else{
        visibles.forEach(p=>{
            let idx=pasajeros.indexOf(p);

            let opciones = buses.map((b,i)=>
                `<option value="${i}" ${p.bus===i?'selected':''}>${b.nombre}${b.lleno?' (lleno)':''}</option>`
            ).join('');

            let telHtml = p.tel
                ? `<a class="tel-link" href="tel:${p.tel}">${ICONS.phone}${p.tel}</a>`
                : `<span class="dato">${ICONS.phone}-</span>`;

            h+=`
<div class="card ${p.ok ? 'ok' : ''}">
    <div class="header-card">
        <div class="nombre">
            ${p.name}
        </div>

        <div class="card-actions">
            <button class="borrar" onclick="eliminarPasajero(${idx})" title="Eliminar pasajero">
                ${ICONS.trash}
            </button>

            <button class="check" onclick="t(${idx})" title="${p.ok ? 'Marcar como no abordado' : 'Marcar como abordado'}">
                ${p.ok ? ICONS.checkOn : ICONS.checkOff}
            </button>
        </div>
    </div>

    <div class="info">
        ${telHtml}
        <span class="dato">
            ${ICONS.seat}${p.lug} ${p.lug>1 ? 'lugares' : 'lugar'}
        </span>
    </div>

    <div class="bus-row">
        ${ICONS.bus}

        <select class="bus-select" onchange="asignarBus(${idx}, this.value)">
            <option value="">Sin bus</option>
            ${opciones}
        </select>
    </div>
</div>`;
        });
    }

    lista.innerHTML=h;
}

function t(i){
    datos[viaje.value].pasajeros[i].ok =
        !datos[viaje.value].pasajeros[i].ok;

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
        if(!confirm(
            `${viajeData.buses[busIdx].nombre} está marcado como LLENO. ¿Asignar a este pasajero de todas formas?`
        )){
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

    let nueva = parseInt(
        prompt(`Capacidad de ${viajeData.buses[i].nombre}`, actual)
    );

    if(!nueva || nueva<=0) return;

    viajeData.buses[i].capacidad = nueva;

    guardarDatos();
    draw();
}

function toggleLleno(i){
    let viajeData = datos[viaje.value];

    viajeData.buses[i].lleno =
        !viajeData.buses[i].lleno;

    guardarDatos();
    draw();
}

function filtrarPorBus(valor){
    filtroBus = (filtroBus===valor) ? null : valor;
    draw();
}

viaje.onchange=()=>{
    filtroBus=null;
    draw();
};

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
        name: n,
        tel,
        lug,
        ok:false,
        bus:null
    });

    guardarDatos();

    modalNuevo.classList.add('oculto');

    draw();
};

modalNuevo.addEventListener('click',(e)=>{
    if(e.target===modalNuevo){
        modalNuevo.classList.add('oculto');
    }
});

[inputNombre,inputTelefono,inputLugares].forEach(inp=>{
    inp.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){
            guardarNuevo.click();
        }
    });
});

window.resetearDatos = function(){
    if(confirm(
        '¿Seguro que quieres borrar todo lo guardado y volver a los datos originales?'
    )){
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VERSION_KEY);
        location.reload();
    }
};
