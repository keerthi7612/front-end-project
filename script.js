/*'use strict';

let current = [0, 0];
let curScr = document.querySelectorAll('.current-score');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
let scr = 0;

// Roll Dice Button Event
rollBtn.addEventListener('click', evt => {
  const rand = Math.trunc(Math.random() * 6) + 1;
  console.log(rand);
  scr += rand;
  dice.setAttribute('src', `./dice-${rand}.png`);
  current[0] = scr;
  curScr[0].innerHTML = scr;
});
*/
/*const newGame = document.queryselector('.btn--new');
//const holdbtn = document.querySelector('.btn--roll');
const rolldisc = document.querySelector('.btn--hold');

//newGame.addeventlistener('click', evt => {
// console.log('welcome to  the game');
//});

const diceImg = document.querySelector('dice');
const curscr = document.querySelectorAll('.current-score');
const current = [0, 0];

rolldisc.addeventlistener('click', evt => {
  let random = math.trunc(math.random() * 6) + 1;
  diceImg.setAttribute('scr', `./dice-${random}.png`);
  if (random == 1) {
    index = 1;
  } else {
    current[index] += random;
    curscr[index].textcontent = current[index];
    index = 0;
  }
});*/

/*
'use strict';
//let current = 0; // count
let player = 0;
let score = 0;
let curscr = document.querySelector('.current-score');
const scr = document.querySelector('.score');
const diceroll = document.querySelector('.btn--roll');
const img = document.querySelector('.dice');
const cursrcplayer1 = document.querySelector('#current--0');
const cursrcplayer2 = document.querySelector('#current--1');
const scr0 = document.querySelector('#score--0');
const scr1 = document.querySelector('#score--1');

diceroll.addEventListener('click', function (evt) {
  //generate random no
  const random = Math.trunc(Math.random() * 6) + 1;
  console.log(random);
  //disp random no
  img.setAttribute('src', `dice-${random}.png`);
  // adding random scr
  //score[0] += random;

  if (random !== 1) {
    player = 0;
    scr0[0] += random;
    scr0[0] = curscr;
    curscr[0].innerHTML = score;

    //scr0.innerHTML = scr[0];
  } else {
    player = 1;
    scr1[1] += random;
    cursrcplayer2.innerHTML = scr1;
    scr1[1] = scr1;
    //scr1.innerHTML = scr;
  }
});
*/

//10-nov-23

/*'use strict';
let current = [0];
let score = 0;
let curscr = document.querySelectorAll('.current-score');
const scr = document.querySelectorAll('.score');
const diceroll = document.querySelector('.btn--roll');
const img = document.querySelector('.dice');
const cursrcplayer1 = document.querySelector('#current--0');

diceroll.addEventListener('click', function (evt) {
  //generate random no
  const random = Math.trunc(Math.random() * 6) + 1;
  console.log(random);
  //disp random no
  img.setAttribute('src', `dice-${random}.png`);
  // adding random scr
  if (random !== 1) {
    score += random;
    curscr[0].innerHTML = score;
    current[0] = score;
    scr[0].innerHTML = score;
  } else {
  }
});
*/

'use strict';
//declarating into short form
const rolldice = document.querySelector('.btn--roll');
const diceEle = document.querySelector('.dice');
//const newbtn = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const highlight = document.querySelector('.player');

// initial declarisation
let rand = 0;
let activeindex = 0;
let curscr = 0;
let score = 0;
let play = true;
//let highlight =0;
// roll dice
rolldice.addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 6) + 1;
  console.log(rand);
  curscr = document.getElementById(`current--${activeindex}`);
  diceEle.setAttribute('src', `./dice-${rand}.png`);
  if (rand !== 1) {
    curscr.textContent = Number(curscr.textContent) + rand;
  } else {
    switchplayer();
  }
});

//switch function
function switchplayer() {
  curscr.textContent = '0';
  activeindex = activeindex ? 0 : 1;
  highlight[activeindex].classlist.remove('player--active');
  highlight[activeindex].classlist.add('player--active');
}
// hold btn
hold.addEventListener('click', function () {
  score = document.getElementById(`score--${activeindex}`);
  if (play) {
    score.textContent = Number(score.textContent) + Number(curscr.textContent);
    if (Number(score.textContent) >= 100) {
      play = false;
      //highlight[activeindex].classlist.add('player--winner');
    }
    switchplayer();
  }
});

// newgame btn

/*newbtn.addEventListener('click', function () {
  //curscr.textContent = '0';
  // curscr = document.getElementById(`current--${activeindex[(0, 1)]}`);
  // let newscore = 0;

  score = document.getElementById(`score--${activeindex['0']}`);
  // score.textContent = newscore;
  //let newscr = 0;
  //newscr = document.getElementById(`score--${newscr}`);
});
*/
