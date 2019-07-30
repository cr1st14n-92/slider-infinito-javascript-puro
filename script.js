let contenedor=document.getElementById("contenedor");
let btnL=document.getElementById("btnL")
let btnR=document.getElementById("btnR")

let margin=-100;

let max=margin*2;

btnR.addEventListener("click",()=>{

   let id= setInterval(()=>{
      margin--;
      contenedor.style.marginLeft=`${margin}%`;
      if(margin<=max){
          clearInterval(id);
          let hijo=contenedor.children[0];
          let clon=hijo.cloneNode(true);
          contenedor.appendChild(clon);
          contenedor.removeChild(hijo);
          margin=-100;
         contenedor.style.marginLeft=`${margin}%`;
      }
    },5)
})


btnL.addEventListener("click",()=>{

    let id= setInterval(()=>{
       margin++;
       contenedor.style.marginLeft=`${margin}%`;
       if(margin>=0){
           clearInterval(id);
           let hijo=contenedor.children[2];
           let clon=hijo.cloneNode(true);
           contenedor.insertBefore(clon,contenedor.children[0]);
           contenedor.removeChild(hijo);
           margin=-100;
          contenedor.style.marginLeft=`${margin}%`;
       }
     },5)
 })
 