const url ="https://api.agify.io/?name=";
const input = document.querySelector('input');

async function fetchUrl(inputValue) {
    const response = await fetch(url + `${inputValue}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".result").innerHTML=`<b>${data.name}</b> is <b>${data.age}</b> years old`;
}
document.querySelector('.btn').addEventListener("click",()=>{
    fetchUrl(input.value) ;
})

