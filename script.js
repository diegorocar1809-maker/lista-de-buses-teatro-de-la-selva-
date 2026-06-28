const datos={
'Sábado 27 - Las Mil y Una Noches':[
{name:'Jean-Marc Ferrer',tel:'+59176301200',lug:1,ok:false},
{name:'Daysi Rea',tel:'+59178132098',lug:3,ok:false},
{name:'Amanda Brito',tel:'+34654968097',lug:2,ok:false},
{name:'ISABEL CLAROS ZENTENO',tel:'+59172294625',lug:1,ok:false},
{name:'WINSOR RIVAS CLAROS',tel:'+59172294625',lug:1,ok:false},
{name:'Isabelle Klauck',tel:'+59178239378',lug:1,ok:false},
{name:'José Luis Rifarachi Arteaga',tel:'+59172102495',lug:2,ok:false},
{name:'Camila Ribera',tel:'+59178156875',lug:2,ok:false},
{name:'Noemi Mirely Saavedra',tel:'+59176938873',lug:2,ok:false},
{name:'Alvaro Palazuelos',tel:'+59177504799',lug:1,ok:false},
{name:'Damarit Peña Herea',tel:'+59175075223',lug:2,ok:false},
{name:'Maria Rea',tel:'+59178132098',lug:1,ok:false},
{name:'Liset Romero',tel:'+59177001182',lug:2,ok:false},
{name:'Adriana Pérez',tel:'+59171048030',lug:2,ok:false},
{name:'Samadi Hinojosa',tel:'+59176395607',lug:4,ok:false},
{name:'Angeline Contreras',tel:'+59175036369',lug:2,ok:false},
{name:'Ángela Cahuata',tel:'+59160853408',lug:2,ok:false}],
'Domingo 28 - Las Mil y Una Noches':[
{name:'LIZ KAREN MUZÑER MEJIA',tel:'+59169192371',lug:1,ok:false},
{name:'Andrea Barba',tel:'+59176327692',lug:1,ok:false},
{name:'SIN NOMBRE',tel:'',lug:2,ok:false},
{name:'Franco Yujra Gutierrez',tel:'+59167759292',lug:2,ok:false},
{name:'Sarahí Soliz Saucedo',tel:'+59160038620',lug:2,ok:false},
{name:'Diego Junior Ulloa Vedia',tel:'+59174170695',lug:1,ok:false},
{name:'Maria Fernanda Serrate',tel:'+59175552903',lug:1,ok:false},
{name:'Maria Laura Jiménez Balcázar',tel:'+5915917555290',lug:1,ok:false},
{name:'Fabiana Castaños',tel:'+59178448326',lug:1,ok:false},
{name:'Jim Mckeon',tel:'+17329915763',lug:3,ok:false},
{name:'Tatiana Fernandez Orellana',tel:'+59163480944',lug:1,ok:false},
{name:'Daniel Artero',tel:'+59172701784',lug:2,ok:false},
{name:'Gladys Jemio',tel:'+59168904589',lug:2,ok:false},
{name:'Raquel Marquez',tel:'+59175221887',lug:1,ok:false},
{name:'Maya Medina',tel:'+59169230181',lug:1,ok:false}]
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
