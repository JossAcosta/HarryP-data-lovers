
(async function load (){
  async function getData(url){
     const response = await fetch (url);
     const data= await response.json()
     return data;
   }
     const harryData = await getData('http://hp-api.herokuapp.com/api/characters')
     const nameList = await getData('http://hp-api.herokuapp.com/api/characters')
     const griffindorList = await getData('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
     const ravenclawList = await getData('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
     const HufflepuffList = await getData('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
     const SlytherinList = await getData('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
     const characterContainer = document.getElementById('filter');
     const gryffindor = document.getElementById('page_griffindor');
     const hufflepuff = document.getElementById('page_Hufflepuff');
     const ravenclaw = document.getElementById('page_Ravenclaw');
     const Slytherin = document.getElementById('page_slytherin');
     const filter_houses = document.getElementById('filter_houses');
    
     gryffindor.addEventListener('click', event=> {
        const IdFun = event.currentTarget.id;
        console.log(IdFun)
       filter_houses.classList.remove('hide');
       filter.classList.remove('hide');
         createTemplateCard(IdFun);     
        }) 
     hufflepuff.addEventListener('click', event=> {
       const IdFun = event.currentTarget.id;
       console.log(IdFun)
       // page.classList.add('hide');
        //categoryAll.classList.remove('hide');
        createTemplateCard(IdFun);     
       }) 
     ravenclaw.addEventListener('click', event=> {
      const IdFun = event.currentTarget.id;
      console.log(IdFun)
      // page.classList.add('hide');
       //categoryAll.classList.remove('hide');
       createTemplateCard(IdFun);     
      }) 
      Slytherin.addEventListener('click', event=> {
        const IdFun = event.currentTarget.id;
        console.log(IdFun)
        // page.classList.add('hide');
         //categoryAll.classList.remove('hide');
         createTemplateCard(IdFun);     
        }) 
     const createTemplateCard = list =>{
      console.log(list);
      let strObj=[];
    
      let templateCard ='';
      if (list ===  "page_griffindor"){
        strObj=griffindorList;
      }if (list ===  "page_Hufflepuff"){
        strObj=HufflepuffList;
      }if (list ===  "page_Ravenclaw"){
        strObj=ravenclawList;
      }if (list ===  "page_slytherin"){
        strObj=SlytherinList;
      }
      strObj.forEach(hpData => {
        const card = ` <div class= "cards_container flip-card">
        <div class=" flip-card-inner">
          <div class = "cards flip-card-front" id="${hpData.name}">
             <img class ="hp-image" src = "${hpData.image}"/>
             <p class = "hp-name">${hpData.name}</p>
            </div>
          <div class="flip-card-back">
             <p class = "hp-name">${hpData.name}</p>
             <p class = "info"><b>Casa:</b> </br>${hpData.house}</p>
          <p class = "info"><b>Actor:</b> </br>${hpData.actor}</p>
          <p class = "info"><b>Descendencia:</b> </br>${hpData.ancestry}</p>
          <p class = "info"><b>Patronus:</b></br> ${hpData.patronus}</p>
          </div>
       </div>
        </div> `;
        templateCard += card;
      });

      characterContainer.innerHTML = templateCard;
      
      };
      let input_search = document.getElementById('characterSearch');
      let results_container = document.getElementById('')
     
      let objetosDisponibles = harryData;
      input_search.addEventListener('keyup',function(e){
          filter_houses.classList.remove('hide');
          filter.classList.remove('hide');
          var similars = objetosDisponibles.filter(function(objeto){
          
           return objeto.name.includes(input_search.value);
          });
          console.log(similars);
          let templateCard ='';
          similars.forEach(hpData => {
            const card = ` <div class= "cards_container flip-card">
          <div class=" flip-card-inner">
            <div class = "cards flip-card-front" id="${hpData.name}">
               <img class ="hp-image" src = "${hpData.image}"/>
               <p class = "hp-name">${hpData.name}</p>
              </div>
            <div class="flip-card-back">
               <p class = "hp-name">${hpData.name}</p>
               <p class = "info"><b>Casa:</b> </br>${hpData.house}</p>
            <p class = "info"><b>Actor:</b> </br>${hpData.actor}</p>
            <p class = "info"><b>Descendencia:</b> </br>${hpData.ancestry}</p>
            <p class = "info"><b>Patronus:</b></br> ${hpData.patronus}</p>
            </div>
         </div>
          </div> `;
          templateCard += card;
        });
  
        characterContainer.innerHTML = templateCard;
        
        
        });

  
var dataHarry=harryData;
var coutnMale = 0;
var coutnFemale = 0;
for ( var i = 0; i < dataHarry.length; i++ ) {
    if ( dataHarry[i].gender =='male' ) {
      coutnMale = coutnMale + 1;
    }
    if ( dataHarry[i].gender =='female' ) {
      coutnFemale = coutnFemale + 1;
    }
}
console.log(coutnMale);
console.log(coutnFemale);

let countGryffindor=0;
let countSlytherin=0;
let countRavenclaw=0;
let countHufflepuff=0;
let countAlive=0;
let countNoAlive=0;
for ( var i = 0; i < dataHarry.length; i++ ) {
  if ( dataHarry[i].house =='Gryffindor' ) {
    countGryffindor = countGryffindor + 1;
  }
  if ( dataHarry[i].house =='Slytherin' ) {
    countSlytherin = countSlytherin + 1;
  }
  if ( dataHarry[i].house =='Ravenclaw' ) {
    countRavenclaw = countRavenclaw + 1;
  }
  if ( dataHarry[i].house =='Hufflepuff' ) {
    countHufflepuff = countHufflepuff + 1;
  }
  if(dataHarry[i].alive == true){
    countAlive+=1;
  }
  if(dataHarry[i].alive !== true){
    countNoAlive+=1;
  }
}
console.log(countGryffindor, countSlytherin,  countRavenclaw, countHufflepuff,  countAlive, countNoAlive);

   // pie chart data
    let genderData = [
      {
          value: coutnMale,
          color:"#878BB6"
      },
      
      {
          value : coutnFemale,
          color : "#FFEA88"
      }
  ];
  let housesData = [
    {
        value: countGryffindor,
        color:"#878BB6"
    },
    {
        value : countSlytherin,
        color : "#4ACAB4"
    },
    {
        value : countRavenclaw,
        color : "#FF8153"
    },
    {
        value : countHufflepuff,
        color : "#FFEA88"
    }
];
let aliveData = [
  {
      value: countAlive,
      color:"#878BB6"
  },
    {
      value : countNoAlive,
      color : "#FFEA88"
  }
];
let pieData = [
  {
      value: countAlive,
      color:"#878BB6"
  },
    {
      value : countNoAlive,
      color : "#FFEA88"
  }
];
  // pie chart options
  let pieOptions = {
       segmentShowStroke : false,
       animateScale : true
  }
  // get pie chart canvas
  let ages= document.getElementById("ages").getContext("2d");
  let gender= document.getElementById("gender").getContext("2d");
  let housesPie = document.getElementById("housesPie").getContext("2d");
  let alive= document.getElementById("alive").getContext("2d");
  // draw pie chart
  new Chart(ages).Pie(pieData, pieOptions);
  new Chart(gender).Pie(genderData, pieOptions);
  new Chart(housesPie).Pie(housesData, pieOptions);
  new Chart(alive).Pie(aliveData, pieOptions);


 
 })()
 
 
