import {POTTER} from './data/potter/potter.js';
import {filterGirlsCategory, filterMenCategory} from './data.js';

(async function load (){
  async function getData(url){
     const response = await fetch (url);
     const data= await response.json()
     return data;
   }
const harryData= await getData('https://hp-api.herokuapp.com/api/characters')
const filterGriffindor = await getData('https://hp-api.herokuapp.com/api/characters/house/Gryffindor')
const filterRavenclaw = await getData('https://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
const filterhufflepuff = await getData('https://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
const filterslytherin = await getData('https://hp-api.herokuapp.com/api/characters/house/Slytherin')
const filterGirlsNames = filterGirlsCategory(POTTER);
const filterMenNames = filterMenCategory(POTTER);
const orderNames= app.orderNames(app.selectData(POTTER));
console.log(orderNames);
const  reverseZA = app.reverseNames(app.orderNames(app.selectData(POTTER)));

const characterContainer = document.getElementById('object');
const page = document.getElementById('page');
const categoryAll =document.getElementById('categoryAll');
const back = document.getElementById('back');
const orderAZ= document.getElementById('orderAZ');
const orderZA= document.getElementById('orderZA');
const arrTitle = ['Bienvenidos','Todos Los Personajes', 'Personajes Femeninos','Personajes Masculinos','Casa Griffindor','Casa Hufflepuff', 'Casa Slytherin', 'Casa Ravenclaw'];
const title = document.getElementById("title");
title.innerHTML=`${arrTitle[0]}`;
  
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const hide_modal_btn= document.getElementById('hide-modal');
const modalContent =document.getElementById('modal-content');

const featuringContainer= document.getElementById('featuring');
const featuringBtn = document.getElementById('back_featuring');
const $form= document.getElementById('form');
//-------------Botones del menú categorias---------
page.addEventListener('click', event =>{
const x = event.target.id;
document.getElementById(x).addEventListener('click', event=> {
  const IdFun = event.currentTarget.id;
  console.log(IdFun)
   page.classList.add('hide');
   categoryAll.classList.remove('hide');
   const element = createTemplateCard(IdFun);
     // title.innerHTML=`${arrTitle[1]}`;
   addEventClick(element);
   
  })
})
   back.addEventListener('click', event=> {
   page.classList.remove('hide');
   categoryAll.classList.add('hide');
   title.innerHTML=`${arrTitle[0]}`;
    });
//--------Botones ordenar alfabeticamen--------------
  orderAZ.addEventListener('click', event=> {
    const element = createTemplateCard(orderNames);
    console.log(element)
    addEventClick(element);
   });
   orderZA.addEventListener('click', event=> {
    const element = createTemplateCard(reverseZA);
    addEventClick(element);
   });
//------Funcion templates de categorias-------
const createTemplateCard = list =>{
  console.log(list);
  let strObj=[];
  let templateCard ='';
  if(list === "harryData"){
    strObj=harryData;
  } if (list ===  "page_girls"){
    strObj=filterGirlsNames;
  } if (list ===  "page_men"){
    strObj=filterMenNames;
  }if (list ===  "page_griffindor"){
    strObj=filterGriffindor;
  }if (list ===  "page_Hufflepuff"){
    strObj=filterhufflepuff;
  }if (list ===  "page_Ravenclaw"){
    strObj=filterRavenclaw;
  }if (list ===  "page_slytherin"){
    strObj=filterslytherin;
  } if (list ===  orderNames){
    strObj=orderNames;
  }if (list ===  reverseZA){
    strObj=reverseZA;
  }
  strObj.forEach(hpData => {
    const card = `
    <div class = "cards" id="${hpData.name}">
    <img class ="hp-image" src = "${hpData.image}"/>
    <p class = "hp-name">${hpData.name}</p>
    </div> `;
    templateCard += card;
  });
  characterContainer.innerHTML = templateCard;

  };
//--------Buscardor por nombre---------------
$form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const section_featuring = document.getElementById('section_featuring');
  featuringContainer.classList.add('search-active');
  page.classList.add('hide');
  section_featuring.classList.remove('hide');

  let nameValue = document.getElementById('characterSearch').value;
  function searchByName (searching){
      return  searching.name == nameValue;
    }
   let characterSearching = harryData.find(searchByName);
      if (characterSearching ===undefined){
  //featuringContainer.innerHTML = JSON.stringify(characterSearching);  
    featuringContainer.innerHTML= `<p class = "hp-name">No ha encontrado el personaje </p> `;
     } else if (characterSearching.name == nameValue){
    const charInfo= `
    <div class="cards card_center">
    <img class ="hp-image" src = "${characterSearching.image}"/>
    <p class = "info">Nombre: ${characterSearching.name}</p>
    <p class = "info"> Casa: ${characterSearching.house}</p>
    <p class = "info">Actor: ${characterSearching.actor}</p>
    <p class = "info">Descendencia: ${characterSearching.ancestry}</p>
    <p class = "info">Patronus: ${characterSearching.patronus}</p>
    </div> `;
    featuringContainer.innerHTML= charInfo;
     }
})
//---- evento regresar al menu princial----------

featuringBtn.addEventListener('click',event=> {
  page.classList.remove('hide');
  section_featuring.classList.add('hide');
})
//-----Mostar info en tarjetas-----------------
function addEventClick(){
  const cards = document.querySelectorAll('.cards');
  cards.forEach(element=>
    element.addEventListener('click', function(){
      const characterId= event.currentTarget.id;
      console.log(characterId);
      const infoHp = harryData.filter(infoEachOne=> infoEachOne.name=== characterId
        );
        infoHp.forEach(function(hpData){
          const cardInfo= `
          <img class ="hp-image" src = "${hpData.image}"/>
          <p class = "info">Nombre: ${hpData.name}</p>
          <p class = "info">Casa: ${hpData.house}</p>
          <p class = "info">Actor: ${hpData.actor}</p>
          <p class = "info">Descendencia: ${hpData.ancestry}</p>
          <p class = "info">Patronus: ${hpData.patronus}</p>
          `;
          modal.innerHTML= cardInfo;
        });
      showModal()  
    }))
}
//----Mostar y ocultar modal----------------
function showModal() {
 
  $overlay.classList.add('active');
  $modal.classList.add('modal');
  title.classList.add('overlay');  
  $modal.classList.remove('hide');
  modalContent.classList.remove('hide');
}
hide_modal_btn.addEventListener('click', hideModal)
function hideModal(){
        $modal.classList.add('hide');
        $overlay.classList.remove('active');
        title.classList.remove('overlay');
        modalContent.classList.add('hide');
       }  
})()
//------scrolling-------------------
let timer = null;
window.onscroll = function () {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  else {
    page.classList.toggle('scrolling');
  }
  timer = setTimeout(function () {
    page.classList.toggle('scrolling');
    timer = null;
  }, 150);
}