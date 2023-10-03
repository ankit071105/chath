console.log("Welcome to Chath Playlist");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aadit Gosaiya Dukhwa", filePath: "songs/1.mp3", coverPath: "1.jpeg"},
    {songName: "Badari Se Bahari Nikal Jaii", filePath: "songs/2.mp3", coverPath: "2.jpeg"},
    {songName: "Bahangi Lachkat Jaye", filePath: "songs/8.mp3", coverPath: "2.jpeg"},
    {songName: "Chhath Mai Ke Baratiya", filePath: "songs/4.mp3", coverPath: "3.jpeg"},
    {songName: "Chhath Maiya Ke Hota Agaman Swagatam..", filePath: "songs/5.mp3", coverPath: "1.jpeg"},
    {songName: "Hoi Patna Ke Ghaat Pa Puja", filePath: "songs/6.mp3", coverPath: "4.jpeg"},
    {songName: "Jai Chhathi Maiya", filePath: "songs/7.mp3", coverPath: "5.jpeg"},
    {songName: "Jode Jode Falwa", filePath: "songs/18.mp3", coverPath: "2.jpeg"},
    {songName: "He Chhathi Maai Ham Tohe Goharai", filePath: "songs/9.mp3", coverPath: "4.jpeg"},
    {songName: "Chhathi Maiya Bulaye", filePath: "songs/10.mp3", coverPath: "6.jpeg"},
    {songName: "Ugi Hey Dinanath", filePath: "songs/11.mp3", coverPath: "7.jpeg"},
    {songName: "Ugi Hey Dinanath (Kalpan)", filePath: "songs/12.mp3", coverPath: "8.jpeg"},
    {songName: "Uga Hai Suraj Dev", filePath: "songs/13.mp3", coverPath: "10.jpeg"},
    {songName: "Balkwa Tu Deda Chhathi Maiya", filePath: "songs/14.mp3", coverPath: "3.jpeg"},
    {songName: "Chhapra Chhat Manayenge", filePath: "songs/15.mp3", coverPath: "3.jpeg"},
    {songName: "Chhath Pooja Na Kailu ", filePath: "songs/16.mp3", coverPath: "4.jpeg"},
    {songName: "Chhathi Mai ke Mahima", filePath: "songs/17.mp3", coverPath: "1.jpeg"},
    {songName: "Dhania Haamr Naya  Badi Ho", filePath: "songs/3.mp3", coverPath: "4.jpeg"},
    {songName: "Kerawa Ka Patawa", filePath: "songs/19.mp3", coverPath: "2.jpeg"},
    {songName: "Maaf Kari Ab Galati Mor Hokhi", filePath: "songs/20.mp3", coverPath: "1.jpeg"},
    {songName: "Naiki Bhauji Shahariya Ho Mangeli Padaka", filePath: "songs/21.mp3", coverPath: "9.jpeg"},
    {songName: "Patna Ke Ghat Pe", filePath: "songs/22.mp3", coverPath: "2.jpeg"},
    {songName: "Penhale Mahadev Piyariya ", filePath: "songs/23.mp3", coverPath: "4.jpeg"}
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=23){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})