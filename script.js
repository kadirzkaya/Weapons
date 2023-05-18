import weaponData from './weapons.json' assert {type: 'json'};

let names;
const weapons=document.querySelector("#weapons");
const search=document.querySelector("#search-input");
let inputs;
let swordSkillNum;

const capitalize=(text)=>{
    return text.charAt(0).toUpperCase()+text.slice(1);
}


const displayPokemon=(data)=>{
    let html=`<div class="card cards">
                    <div class="card-title card-img-top img">
                        <img src=${data.img}>
                    </div>
                    <div class="card-body body">
                        <form class="input-group formInput">
                            <h5 class="names">${capitalize(data.name)} +<span class="skillNum">${0} </span></h5>
                            <input type="number" class="inputNum" min="0" max="9" value="0">
                        </form>
                        <h6>Level: ${data.id}</h6>
                        <h6>Attack Value: ${data.attack_value[0]}</h6>
                        <h6>Magical Attack Value: ${data.magical_attack_value[0]}</h6>
                        <h6>Attack Speed: ${data.attack_speed[0]}</h6>
                    </div>
                    <div class="card-footer text-center border-top-0">
                        <h6>${capitalize(data.type)}</h6>
                    </div>
                </div>`;

    weapons.innerHTML+=html;
    
}

for(let weapons in weaponData){
    displayPokemon(weaponData[weapons]);
    
}


inputs=document.querySelectorAll(".inputNum");
swordSkillNum=document.querySelectorAll(".skillNum");

search.addEventListener("keyup",(e)=>{
    e.preventDefault();
    names=document.querySelectorAll("#body .names");
    const val=e.target.value;
    Array.from(names).filter(f=>{

        if(!f.textContent.toLowerCase().includes(val)){
            f.parentElement.parentElement.parentElement.classList.add("filtered");
        }else{
            f.parentElement.parentElement.parentElement.classList.remove("filtered");
        }
    });
})


inputs.forEach(f=>{
    
    f.addEventListener("input",(e)=>{
        let val=e.target.value;
        Array.from(f.previousElementSibling.children).forEach(list=>{
            list.innerHTML=val;
        });

        let element=f.parentElement.nextElementSibling;
        let index=element.textContent.substring(element.textContent.length-2,element.textContent.length);

        let data=weaponData[index-1];
  
        element.nextElementSibling.innerHTML=`Attack Value: ${data.attack_value[val]}`
        element.nextElementSibling.nextElementSibling.innerHTML=`Magical Attack Value: ${data.magical_attack_value[val]}`;
        element.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=`Attack Speed: ${data.attack_speed[val]}`;

    })
});





