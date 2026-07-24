alert("SCRIPT NUEVO");
const datos = {
'Sábado 25 - Las Mil y Una Noches':[
{name:'Dirlan Jhojan García Aguilera',tel:'+59177652754',lug:4,ok:false},
{name:'Mayerlin Cruz Balderrama',tel:'+59175660923',lug:1,ok:false},
{name:'Mirella Galbiatti',tel:'+59176611775',lug:2,ok:false},
{name:'Faviana Scoglio',tel:'+59178807903',lug:2,ok:false},
{name:'Alexander Delgado Castillo',tel:'+59178151588',lug:2,ok:false},
{name:'Vania Estela Bottega',tel:'+59171661981',lug:2,ok:false},
{name:'Jose hilarion Paredes bernal',tel:'+59174362011',lug:1,ok:false},
{name:'Gabriela Loayza Escalante',tel:'+59167891988',lug:6,ok:false},
{name:'Raul Montenegro',tel:'+59169028615',lug:1,ok:false},
{name:'Daniela Hernández',tel:'+59169028615',lug:1,ok:false},
{name:'Fabiola Gaspar',tel:'+59167829595',lug:2,ok:false},
{name:'Lina Marcela',tel:'+59160836345',lug:2,ok:false},
{name:'Lina Marcela',tel:'+59160836345',lug:1,ok:false},
{name:'Jairo Balcázar',tel:'+59178031068',lug:2,ok:false},
{name:'MARIA FABIOLA FARELL AREVALO',tel:'+59176651500',lug:2,ok:false},
{name:'Asheley Mariany Moreira Santana',tel:'+5575997090267',lug:2,ok:false},
{name:'Jucy Torrente',tel:'+59169190760',lug:2,ok:false},
{name:'Ana Patricia Candia cuellar',tel:'+59177665672',lug:3,ok:false},
{name:'Cindy Lopez',tel:'+59172987441',lug:8,ok:false},
{name:'MaríaLaura Sánchez Maizer',tel:'+59179802555',lug:3,ok:false},
{name:'Ana Patricia Candia cuellar',tel:'+59177665672',lug:1,ok:false},
{name:'Daniela Rodríguez',tel:'+59175777125',lug:2,ok:false},
{name:'Herlan Vargas Durán',tel:'+59178170627',lug:3,ok:false},
{name:'Tanya Imaña Serrano',tel:'+59172143797',lug:2,ok:false},
{name:'Alba Mariel Baldiviezo',tel:'+59169319838',lug:2,ok:false},
{name:'Claudia Alarcon',tel:'+59178183551',lug:8,ok:false},
{name:'Diego Romero',tel:'+59163495502',lug:2,ok:false},
{name:'Samuel Cortez',tel:'+59174965891',lug:2,ok:false},
{name:'Mishelle El Hage Aponte',tel:'+59177074349',lug:2,ok:false},
{name:'Adriana Pérez',tel:'+59171048030',lug:3,ok:false},
{name:'Noemi Coca',tel:'+59170986065',lug:2,ok:false},
{name:'Anabel Colque Cassia',tel:'+59173671261',lug:3,ok:false},
{name:'Thiago Daniel Pérez Alfaro',tel:'+59177644589',lug:4,ok:false}
],

'Domingo 26 - Las Mil y Una Noches':[
{name:'Aldrin Daniel Perez Quispe',tel:'+59178003276',lug:2,ok:false},
{name:'Alex Arancibia',tel:'+59175311628',lug:2,ok:false},
{name:'Olga Vladimirovna',tel:'+59170053976',lug:2,ok:false},
{name:'Mauricio Del Rio',tel:'+59177339818',lug:2,ok:false},
{name:'Mariela Lijeron',tel:'+59167754411',lug:2,ok:false},
{name:'EDUARDO SEBASTIAN VARGAS AQUINO',tel:'+59168867114',lug:2,ok:false},
{name:'Ariel Barrionuevo Varón',tel:'+59177982550',lug:2,ok:false},
{name:'Moira Martinez Eguez',tel:'+59167775820',lug:3,ok:false},
{name:'Luis Oscar Guzman Palenque',tel:'+59171027711',lug:2,ok:false},
{name:'Jhovana Lurici',tel:'+59175096839',lug:2,ok:false}
]
};
const viaje=document.getElementById('viaje'),lista=document.getElementById('lista'),buscar=document.getElementById('buscar');
Object.keys(datos).forEach(v=>viaje.add(new Option(v,v)));
function draw(){let arr=[...datos[viaje.value]].sort((a,b)=>a.ok-b.ok);let h='',r=arr.length,l=0,a=0;arr.forEach((p,i)=>{l+=p.lug;if(p.ok)a++;});reservas.textContent=r;lugares.textContent=l;abordo.textContent=a;faltan.textContent=r-a;arr.filter(p=>p.name.toLowerCase().includes(buscar.value.toLowerCase())).forEach(p=>{let idx=datos[viaje.value].indexOf(p);h+=`
<div class="card ${p.ok ? 'ok' : ''}">

    <div class="header-card">

        <div class="nombre">
            ${p.name}
        </div>

        <button class="check"
            onclick="t(${idx})">

            ${p.ok ? '✅' : '⬜'}

        </button>

    </div>

    <div class="info">
        📞 ${p.tel || '-'} &nbsp;&nbsp; • &nbsp;&nbsp;
        🪑 ${p.lug} ${p.lug>1 ? 'lugares' : 'lugar'}
    </div>

</div>
`;});lista.innerHTML=h}
function t(i){datos[viaje.value][i].ok=!datos[viaje.value][i].ok;draw();}
viaje.onchange=draw;buscar.oninput=draw;viaje.selectedIndex=0;draw();
nuevo.onclick=()=>{let n=prompt('Nombre');if(!n)return;let tel=prompt('Teléfono')||'';let lug=parseInt(prompt('Lugares','1'))||1;datos[viaje.value].push({name:n,tel,lug,ok:false});draw();}
