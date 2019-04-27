let song, fperb, clap, lyrics, moving;
let arrview = 0;
let bpm = 120;
let framerater = 60;
let frameCount = 0;
let secCount = 0;

function preload(){
  song = loadSound('mp3/Juice_edit.mp3');
  clap = loadSound('mp3/clap.wav');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  setBPM(bpm);
  noStroke();

//these are the song varr
  frameRate(framerater);
  fperb = (framerater * 60)/bpm;

 //lyrics
 lyrics = [{ beat: 32, lyric: "Mirror, mirror on the wall"},
{beat: 35, lyric: "Don't say it, ’cause I know I'm cute (Ooh, baby)"},
{beat: 40, lyric: "Louis down to my drawers"},
{beat: 43, lyric: "LV all on my shoes (Ooh, baby)"},
{beat: 47, lyric: "I be drippin' so much sauce"},
{beat: 51, lyric: "Gotta been lookin’ like RAGÚ (Ooh, baby)"},
{beat: 55, lyric: "Lit up like a crystal ball"},
{beat: 59, lyric: "That's cool, baby, so is you"},
{beat: 62, lyric: "That's how I roll"},
{beat: 65, lyric: "If I'm shiny, everybody gonna shine (Yeah, I'm goals)"},
{beat: 73, lyric: "I was born like this, don't even gotta try (Now you know)"},
{beat: 80, lyric: "I like chardonnay, get better over time (So you know)"},
{beat: 89, lyric: "Heard you say I'm not the baddest, bitch, you lie"},
{beat: 96, lyric: "Ain't my fault that I’m out here gettin’ loose"},
{beat: 102, lyric: "Gotta blame it on the Goose"},
{beat: 106, lyric: "Gotta blame it on my juice, baby"},
{beat: 112, lyric: "Ain't my fault that I’m out here makin' news"},
{beat: 119, lyric: "I'm the pudding in the proof"},
{beat: 123, lyric: "Gotta blame it on my juice"},
{beat: 127, lyric: "Ya-ya-ee, ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 136, lyric: "Blame it on my juice, blame it, blame it on my juice"},
{beat: 142, lyric: "Ya-ya-ee, ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 151, lyric: "Blame it on my juice, blame it, blame it on my juice (Ooh, baby)"},
{beat: 160, lyric: "No, I'm not a snack at all"},
{beat: 164, lyric: "Look, baby, I’m the whole damn meal (Ooh, baby)"},
{beat: 168, lyric: "Baby, you ain't bein' slick"},
{beat: 171, lyric: "Don't dare try to cop a feel (Ooh, baby)"},
{beat: 176, lyric: "The juice ain't worth the squeeze"},
{beat: 180, lyric: "If the juice don't look like this (Like this, like this, like this)"},
{beat: 185, lyric: "Hold up, n****, please Don't make me have to take your bitch (How I roll)"},
{beat: 192, lyric: "If I'm shiny, everybody gonna shine (Yeah, I'm goals)"},
{beat: 201, lyric: "I was born like this, don't even gotta try (Now you know)"},
{beat: 208, lyric: "I like chardonnay, get better over time (So you know)"},
{beat: 217, lyric: "Heard you say I'm not the baddest, bitch, you lie (You lie)"},
{beat: 224, lyric: "Ain't my fault that I'm out here gettin' loose"},
{beat: 230, lyric: "Gotta blame it on the Goose"},
{beat: 234, lyric: "Gotta blame it on my juice, baby"},
{beat: 240, lyric: "Ain't my fault that I'm out here makin' news"},
{beat: 247, lyric: "I'm the pudding in the proof"},
{beat: 251, lyric: "Gotta blame it on my juice"},
{beat: 255, lyric: "Ya-ya-ee (Ya-ya-ee), ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 264, lyric: "Blame it on my juice, blame it, blame it on my juice"},
{beat: 270, lyric: "Ya-ya-ee (Ya-ya-ee), ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 279, lyric: "Blame it on my juice, blame it, blame it on my juice (Alright)"},
{beat: 288, lyric: "Ya-ya-ee Somebody come get this man"},
{beat: 293, lyric: "I think he got lost in my DMs, what? My DMs, what?"},
{beat: 303, lyric: "You better come get your man"},
{beat: 309, lyric: "I think he wanna be way more than friends, what?"},
{beat: 318, lyric: "More than friends. What you want me to say?"},
{beat: 320, lyric: "It ain't my fault that I'm out here gettin' loose"},
{beat: 326, lyric: "Gotta blame it on the Goose"},
{beat: 330, lyric: "Gotta blame it on my juice, baby"},
{beat: 336, lyric: "Ain't my fault that I'm out here makin' news"},
{beat: 343, lyric: "I'm the pudding in the proof (Puddin' in the proof)"},
{beat: 347, lyric: "Gotta blame it on my juice (Blame it on my juice)"},
{beat: 356, lyric: "Ya-ya-ee (Yay-ya), ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 365, lyric: "Blame it on my juice, blame it, blame it on my juice"},
{beat: 371, lyric: "Ya-ya-ee (Ya-ya-ee), ya-ya-ee, ya-ya-ee, ya-ya-ee"},
{beat: 380, lyric: "Blame it on my juice, blame it, blame it on my juice"}
];

song.play();  
}

function draw(){
	frameCount++;
	 //console.log(frameCount);
	 if(frameCount % round(fperb) == 0 && song.isPlaying()){
		secCount++;
		console.log("beats = "+secCount);
		//console.log("arrviw = "+ arrview);
		if (secCount == lyrics[arrview].beat){
			console.log(lyrics[arrview].lyric);
			background(255);
			
			//timer stuff
			var textdelay = lyrics[arrview+1].beat - lyrics[arrview].beat;
			console.log(textdelay);

			//text stuff
			fill(0);
			textAlign(CENTER);
			textSize(32);
			textFont('Comic Sans MS');
			var textdisplay = text(lyrics[arrview].lyric, width/2, height/2 );

			
			//this goes at the end!
			arrview++;
		}


		//clap.play();
	}
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause();
    background(255);
    //secCount = 0;
    //background(0);
  } else {
    song.play();
    background(0);
    //secCount = 0;
    //background(255);
  }
}