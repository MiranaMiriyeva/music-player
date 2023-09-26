const prevElem = document.getElementById("prev")
const playElem = document.getElementById("play")
const nextElem = document.getElementById("next")
const audioElem = document.querySelector(".audio")
const imageElem = document.querySelector(".image")
const titleElem = document.querySelector(".title")
const artistElem = document.querySelector(".artist")
musics = [
    {
        name:"BOCA.mp3",
        title:"BOCA",
        artist:"DREAMCATCHER",
        image:"BOCA.jpg",    },

        {
        name:"CASE 143.mp3",
        title:"CASE 143",
        artist:"Stray KIds",
        image:"case 143.jpg",    } ,   

            {
        name:"CHEER UP.mp3",
        title:"CHEER UP",
        artist:"Twice",
        image:"cheer up.jpg",    },

        {
        name:"DNA.mp3",
        title:"DNA",
        artist:"BTS",
        image:"DNA.jpg",    },

        {
        name:"Hype Boy.mp3",
        title:"Hype Boy",
        artist:"New Jeans",
        image:"hype boy.jpg",    },
        {
        name:"Mary On A Cross.mp3",
        title:"Mary On A Cross",
        artist:"GHOST",
        image:"mary on a cross.jpg",    },
        {
        name:"Shut Down.mp3",
        title:"Shut Down",
        artist:"BLACKPINK",
        image:"shut down.jpg",    } ,   
   
               {
        name:"Still With You.mp3",
        title:"Still With You",
        artist:"JUNG KOOK",
        image:"still with you.jpg",    },
   
           {
        name:"Sweater Weather.mp3",
        title:"Sweater Weather",
        artist:"Neighbourhood",
        image:"sweater weather.jpg",    },
   
           {
        name:"Zitti E Buoni.mp3",
        title:"Zitti e buoni",
        artist:"Maneskin",
        image:"zitti e buoni.jpg",    },
 
]

let index = 0;
prevElem.addEventListener("click",()=>{
    index--;
    if(index===-1){
        index=9
    }
    audioElem.src=`Musics/${musics[index].name}`
    imageElem.src=`covers/${musics[index].image}`
    titleElem.textContent=musics[index].title
    artistElem.textContent=musics[index].artist
    audioElem.play()
  


});
nextElem.addEventListener("click",()=>{
    index++;
    if(index===10){
        index=0
    }
    audioElem.src=`Musics/${musics[index].name}`
    imageElem.src=`covers/${musics[index].image}`
    titleElem.textContent=musics[index].title
    artistElem.textContent=musics[index].artist
    audioElem.play()


});
let playbtn = false;
playElem.addEventListener("click",()=>{
    if(!playbtn){
      audioElem.play()   
      playbtn=true
       playElem.innerHTML=`<i class="fa-solid fa-pause"></i>`
    }else {
   audioElem.pause()
   playbtn=false 
   playElem.innerHTML=`<i class="fa-solid fa-play"></i>`
}

});