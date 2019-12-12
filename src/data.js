export const app ={
   
  selectData: (data) => {
    const arrSelectData = [];
    for (let i= 0; i<data.length; i++){
        arrSelectData.push ({
        name: data[i].name,
        image: data[i].image,
        house: data[i].house,
        actor: data[i].actor
      });
    }  
     return arrSelectData; 
  },
  orderNames:(func)=>{
    let finalArray = [];
    func.sort(function(a,b){
        if (a.name < b.name) {
        return -1;
        } else if (a.name > b.name) {
        return 1;
        }
        return 0; 
      }) 
      .forEach(function(element) {
        finalArray.push(element);
        return element;
      });
      return finalArray;
  },
  reverseNames: (func) =>{
    return func.reverse();
  },

}
window.app = app;
export  function filterGirlsCategory(data){
  const arrFilterData = [];
  for (let i= 0; i<data.length; i++){
    if (data[i].gender == 'female'){
      arrFilterData.push({
        name: POTTER[i].name,
        image: POTTER[i].image
      });
    }
  }
  return arrFilterData;
}
export function filterMenCategory(data) {
  const arrFilterData = [];
  for (let i= 0; i<data.length; i++){
    if (data[i].gender == 'male'){
      arrFilterData.push({
        name: POTTER[i].name,
        image: POTTER[i].image
      });
    }
  }
  return arrFilterData;
}
