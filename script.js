const M={
"Starters":[["Boiled Egg",9.99],["Boiled Egg Salad",12.99],["Boiled Egg Katori",13.99],["Green Boiled Egg Fry",14.99],["Green Boiled Masala Egg",12.99],["Lemon Pepper Omelette",13.99],["Omelette",13.99],["Omelette Cutlets",13.99],["Omelette Sandwich",16.99],["Green Fry",11.99],["Tomato Fry",11.99],["Monaco Bites",12.99]],
"Main dishes":[["Egg Khima",17.99],["Egg Patodi",18.99],["Katki Egg Khima",17.99],["Kachu Paku",17.99],["Lachko",17.99],["Egg Locho",21.99,1],["Egg Gotalo",17.99],["Goti Gotalo",17.99],["Egg Khakhra",17.99],["Australian Fry",17.99],["Bhurji",17.99],["Angoor Rabdi",24.99,1],["Egg Paplet",24.99],["Mix Lahori",17.99],["Tikhari",19.99,1],["Gravy Omelette",21.99],["Laziz",21.99],["Makhan Mari",24.99],["Malai Kofta",24.99],["Ghari 4 Eggs",27.99],["Ghari 6 Eggs",33.99],["Ravaiyo",24.99],["Egg Tadka",19.99],["Gravy Lachko 2 Eggs",19.99],["Gravy Lachko 4 Eggs",24.99],["Hydrabadi Egg Gravy",24.99,1],["Russian Tikka",24.99,1]],
"Rice":[["Egg Fry Rice",17.99],["Egg Schezwan Fry Rice",17.99],["Boiled Egg Masala Rice",17.99]],
"Vegetarian":[["Paneer Gotalo",19.99],["Paneer Bhurji",19.99],["Paneer Laziz",22.99]],
"Chutney":[["Garlic Chutney",9.99],["Tomato Chutney",9.99]],
"Add ons":[["Butter Pav",3.49],["Oil Pav",2.99],["Butter Roti",5.99],["Roti",3.99],["Tomato Salad",9.99],["Red Onion Salad",9.99],["Mixed Salad",11.99],["Extra Cheese",3.99],["Extra onion (once per visit)",3.99]]};
const N={"Main dishes":"Every main is served with two buns. Items marked * contain peanuts or sesame.","Starters":"Light plates to begin with.","Rice":"Rice bowls, one price.","Chutney":"Both are spicy.","Vegetarian":"Paneer in place of egg, served with two buns.","Add ons":"Little extras."};
const tabs=document.getElementById('tabs'),list=document.getElementById('list');
function show(k){
 [...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
 list.innerHTML='<div class="note">'+N[k]+'</div>'+M[k].map((x,i)=>`<div class="it" style="animation-delay:${i*35}ms"><span>${x[0]}${x[2]?'<sup>*</sup>':''}</span><span class="d"></span><em>$${x[1].toFixed(2)}</em></div>`).join('');
}
Object.keys(M).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});
show('Starters');
const pages=[...document.querySelectorAll('.page')],links=[...document.querySelectorAll('nav a')],nv=document.getElementById('nv');
let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
function route(){
 const h=(location.hash||'#home').slice(1),id=pages.some(p=>p.id===h)?h:'home';
 pages.forEach(p=>p.classList.toggle('show',p.id===id));
 links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id));
 nv.classList.remove('open');window.scrollTo(0,0);
 document.querySelectorAll('#'+id+' .rv').forEach(el=>{el.classList.remove('in');io.observe(el)});
}
addEventListener('hashchange',route);route();
document.getElementById('bg').onclick=()=>nv.classList.toggle('open');
document.getElementById('fm').onsubmit=e=>{e.preventDefault();document.getElementById('ok').style.display='block';e.target.reset()};
