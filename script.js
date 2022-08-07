let title = document.getElementById('title');
let artist = document.getElementById('artist');
let img = document.querySelector('img');
let music = document.querySelector('audio');
let prev = document.getElementById('prev');
let play = document.getElementById('play');
let next = document.getElementById('next');
let curr_time = document.getElementById('curr_time');
let total_duration = document.getElementById('total_duration');
let flag = 1;
let songIndex = 0;


//music data is stored in array of objects
const songsList = [
    {
        name: 'Song-1',
        title: 'Bad Boy',
        artist: 'Unknown',
        img:'images/1.jpg',
        path:'audio/bad_boy.mp3'

    },
    {
        name: 'Song-2',
        title: 'Big City Blues',
        artist: 'Lil Peep',
        img:'images/2.jpg',
        path:'audio/bigCityBlues.mp3'
    },
    {
        name: 'Song-3',
        title: 'Giving Cocaine',
        artist: 'Lil Peep',
       img:'images/3.jpg',
        path:'audio/giving_cocaine.mp3'
    },
];



//this fnc is for playing music and giving animation
let musicIsPlaying = () => {
    flag = 1;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
};

//this fnc is to stop the music and animation
let musicIsStopped = () => {
    flag = 0;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
};

//function event and condition to play and pause the music
play.addEventListener('click', () => {
    if(flag){
        musicIsStopped();
    } else {
        musicIsPlaying();
    }
});

//defining function to fetch data from array of objects
let loadSongs = (songsList) => {
    title.textContent = songsList.title;
    artist.textContent = songsList.artist;
    img.src = songsList.img;
    music.src = songsList.path;
}
loadSongs(songsList[songIndex]);

//next button to play another song
next.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songsList.length;
   loadSongs(songsList[songIndex]);
   musicIsPlaying();
} );


//previous button to play previous song
prev.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songsList.length) % songsList.length;
   loadSongs(songsList[songIndex]);
   musicIsPlaying();
} );

