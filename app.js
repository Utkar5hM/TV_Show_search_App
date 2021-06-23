const form= document.querySelector("#searchForm");
const resultdiv=document.querySelector(".searchresults");
form.addEventListener('submit',async function (e){
    e.preventDefault();
    const searchTerm =form.elements.query.value;
    form.elements.query.value="";
    const res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    await removePrev(); 
    addresults(res.data);
})

function addresults(sr){
    for(let i of  sr){
    let elem= document.createElement("div");
    elem.classList.add("resultobj")
    let elemtitle= document.createElement("h2");
    let elemimg= document.createElement("img");
    elemimg.src= i.show.image.medium;
    elemtitle.innerText=`${i.show.name}`
    elem.appendChild(elemimg);
    elem.appendChild(elemtitle);
    resultdiv.appendChild(elem);
    }

}
 function removePrev(){
    while (resultdiv.firstChild) {
        resultdiv.removeChild(resultdiv.lastChild);
      }
} 