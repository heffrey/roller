const d10tenfaces = ["fa", "fat", "fab"];
const d10ten = [
  {"fa": "00", "fat": 80, "fab": 40},
  {"fa": 10, "fat": 90, "fab": 70},
  {"fa": 20, "fat": 60, "fab": 80},
  {"fa": 30, "fat": 70, "fab": 50},
  {"fa": 40, "fat": "00", "fab": 60},
  {"fa": 50, "fat": 30, "fab": 90},
  {"fa": 60, "fat": 40, "fab": 20},
  {"fa": 70, "fat": 10, "fab": 30},
  {"fa": 80, "fat": 20, "fab": "00"},
  {"fa": 90, "fat": 50, "fab": 10}
  ];
  
const d10onefaces = ["fb", "fbl", "fbr"];
const d10one = [
  {"fb": 0, "fbl": 8, "fbr": 4},
  {"fb": 1, "fbl": 9, "fbr": 7}, 
  {"fb": 2, "fbl": 6, "fbr": 8},    
  {"fb": 3, "fbl": 7, "fbr": 5},
  {"fb": 4, "fbl": 0, "fbr": 6},  
  {"fb": 5, "fbl": 3, "fbr": 9},
  {"fb": 6, "fbl": 4, "fbr": 2},
  {"fb": 7, "fbl": 1, "fbr": 3},
  {"fb": 8, "fbl": 2, "fbr": 0},
  {"fb": 9, "fbl": 5, "fbr": 1}
];

const d20faces = ["d20f0","d20f1", "d20f4", "d20f7", "d20f9", "d20f5", "d20f8", "d20f6", "d20f2", "d20f3"];
const d20 = [
  {"d20f0": 1, "d20f1":7, "d20f4":19, "d20f7":13, "d20f9":15, "d20f5":9, "d20f8":5, "d20f6":11, "d20f2":17, "d20f3":3},
  {"d20f0": 2, "d20f1":12, "d20f4":18, "d20f7":20, "d20f9":10, "d20f5":4, "d20f8":8, "d20f6":14, "d20f2":15, "d20f3":5},
  {"d20f0": 3, "d20f1":17, "d20f4":16, "d20f7":19, "d20f9":7, "d20f5":6, "d20f8":1, "d20f6":9, "d20f2":10, "d20f3":8},
  {"d20f0": 4, "d20f1":18, "d20f4":11, "d20f7":14, "d20f9":2, "d20f5":9, "d20f8":20, "d20f6":6, "d20f2":5, "d20f3":13},
  {"d20f0": 5, "d20f1":18, "d20f4":15, "d20f7":13, "d20f9":4, "d20f5":7, "d20f8":11, "d20f6":1, "d20f2":2, "d20f3":12},
  {"d20f0": 6, "d20f1":9, "d20f4":16, "d20f7":14, "d20f9":11, "d20f5":8, "d20f8":4, "d20f6":20, "d20f2":19, "d20f3":3},
  {"d20f0": 7, "d20f1":15, "d20f4":17, "d20f7":1, "d20f9":5, "d20f5":3, "d20f8":13, "d20f6":19, "d20f2":12, "d20f3":10},
  {"d20f0": 8, "d20f1":16, "d20f4":10, "d20f7":20, "d20f9":6, "d20f5":12, "d20f8":14, "d20f6":2, "d20f2":3, "d20f3":17},
  {"d20f0": 9, "d20f1":6, "d20f4":11, "d20f7":19, "d20f9":16, "d20f5":13, "d20f8":3, "d20f6":1, "d20f2":14, "d20f3":4},
  {"d20f0": 10, "d20f1":17, "d20f4":12, "d20f7":8, "d20f9":3, "d20f5":2, "d20f8":16, "d20f6":20, "d20f2":7, "d20f3":15},
  {"d20f0": 11, "d20f1":9, "d20f4":4, "d20f7":13, "d20f9":19, "d20f5":18, "d20f8":1, "d20f6":5, "d20f2":6, "d20f3":14},
  {"d20f0": 12, "d20f1":10, "d20f4":15, "d20f7":2, "d20f9":8, "d20f5":5, "d20f8":20, "d20f6":18, "d20f2":17, "d20f3":7},
  {"d20f0": 13, "d20f1":11, "d20f4":5, "d20f7":1, "d20f9":9, "d20f5":15, "d20f8":19, "d20f6":7, "d20f2":4, "d20f3":18},
  {"d20f0": 14, "d20f1":4, "d20f4":6, "d20f7":20, "d20f9":18, "d20f5":16, "d20f8":2, "d20f6":8, "d20f2":11, "d20f3":9},
  {"d20f0": 15, "d20f1":5, "d20f4":12, "d20f7":7, "d20f9":13, "d20f5":10, "d20f8":1, "d20f6":17, "d20f2":18, "d20f3":2},
  {"d20f0": 16, "d20f1":6, "d20f4":3, "d20f7":8, "d20f9":14, "d20f5":17, "d20f8":20, "d20f6":10, "d20f2":9, "d20f3":19},
  {"d20f0": 17, "d20f1":10, "d20f4":3, "d20f7":7, "d20f9":12, "d20f5":19, "d20f8":15, "d20f6":1, "d20f2":8, "d20f3":16},
  {"d20f0": 18, "d20f1":5, "d20f4":4, "d20f7":2, "d20f9":15, "d20f5":14, "d20f8":12, "d20f6":20, "d20f2":13, "d20f3":11},
  {"d20f0": 19, "d20f1":3, "d20f4":9, "d20f7":1, "d20f9":17, "d20f5":11, "d20f8":7, "d20f6":13, "d20f2":16, "d20f3":6},
  {"d20f0": 20, "d20f1":2, "d20f4":14, "d20f7":8, "d20f9":12, "d20f5":6, "d20f8":10, "d20f6":16, "d20f2":18, "d20f3":4}
];  

const d12faces = ["d12f0", "d12f1", "d12f2", "d12f3", "d12f4", "d12f5"];
const d12 = [
  {"d12f0": 1, "d12f1": 5, "d12f2": 10, "d12f3": 2, "d12f4": 4, "d12f5": 6},
  {"d12f0": 2, "d12f1": 7, "d12f2": 8, "d12f3": 4, "d12f4": 1, "d12f5": 10},
  {"d12f0": 3, "d12f1": 6, "d12f2": 4, "d12f3": 8, "d12f4": 12, "d12f5": 11},
  {"d12f0": 4, "d12f1": 8, "d12f2": 3, "d12f3": 6, "d12f4": 1, "d12f5": 2},
  {"d12f0": 5, "d12f1": 11, "d12f2": 9, "d12f3": 10, "d12f4": 1, "d12f5": 6},
  {"d12f0": 6, "d12f1": 3, "d12f2": 11, "d12f3": 5, "d12f4": 1, "d12f5": 4},
  {"d12f0": 7, "d12f1": 2, "d12f2": 10, "d12f3": 9, "d12f4": 12, "d12f5": 8},
  {"d12f0": 8, "d12f1": 4, "d12f2": 2, "d12f3": 7, "d12f4": 12, "d12f5": 3},
  {"d12f0": 9, "d12f1": 10, "d12f2": 5, "d12f3": 11, "d12f4": 12, "d12f5": 7},
  {"d12f0": 10, "d12f1": 9, "d12f2": 7, "d12f3": 2, "d12f4": 1, "d12f5": 5},
  {"d12f0": 11, "d12f1": 5, "d12f2": 6, "d12f3": 3, "d12f4": 12, "d12f5": 9},
  {"d12f0": 12, "d12f1": 11, "d12f2": 3, "d12f3": 8, "d12f4": 7, "d12f5": 9}
];

const d8faces = ["d8f0", "d8f1", "d8f2", "d8f3"];
const d8 = [
  {"d8f0": 1, "d8f1": 3, "d8f2": 7, "d8f3": 4},
  {"d8f0": 2, "d8f1": 4, "d8f2": 8, "d8f3": 3},
  {"d8f0": 3, "d8f1": 5, "d8f2": 1, "d8f3": 2},
  {"d8f0": 4, "d8f1": 6, "d8f2": 2, "d8f3": 1},
  {"d8f0": 5, "d8f1": 7, "d8f2": 3, "d8f3": 8},
  {"d8f0": 6, "d8f1": 8, "d8f2": 4, "d8f3": 7},
  {"d8f0": 7, "d8f1": 1, "d8f2": 5, "d8f3": 6},
  {"d8f0": 8, "d8f1": 2, "d8f2": 6, "d8f3": 5}
];

const d4faces = ["d4f0", "d4f1", "d4f2"];
const d4 = [
  {"d4f0": 1, "d4f1": 2, "d4f2": 3},
  {"d4f0": 2, "d4f1": 1, "d4f2": 3},
  {"d4f0": 3, "d4f1": 4, "d4f2": 2},
  {"d4f0": 4, "d4f1": 3, "d4f2": 1}
];

var logLine = 0;
var maxValues = { "pct": 99, "d20": 20, "d12": 12, "d8": 8, "d6": 6, "d4": 4 };

function logRoll(type, value)
{
  var log = document.getElementById("dice-log");
  logLine++;

  var entry = document.createElement("div");
  entry.className = "log-entry";

  var max = maxValues[type];
  var tag = "";

  if (type === "d20" && value === 20) {
    entry.classList.add("crit");
    tag = "NAT 20!";
  } else if (type === "d20" && value === 1) {
    entry.classList.add("fumble");
    tag = "NAT 1";
  } else if (value === max) {
    entry.classList.add("max-roll");
    tag = "MAX";
  }

  var html = '<span class="roll-num">#' + logLine + '</span>';
  html += '<span class="roll-type">' + type + '</span>';
  html += '<span class="roll-arrow">&rarr;</span>';
  html += '<span class="roll-value">' + value + '</span>';
  if (tag) {
    html += '<span class="roll-tag">' + tag + '</span>';
  }

  entry.innerHTML = html;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;

  dungeonAdvance(type, value);
}

function logClear(){
  var log = document.getElementById("dice-log");
  log.innerHTML = "";
  logLine = 0;
  initDungeon();
}

function randBetween(min,max)
{
  var c = Math.floor(Math.random()*(max-min+1)) + min;
  return c;
}

function renderD20_faces(die, value)
{
   var die_face = d20[value-1];
   d20faces.forEach(function(a){die.getElementsByClassName(a)[0].innerText = die_face[a]; } );
}

function renderD12_faces(die, value)
{
   var die_face = d12[value-1];
   d12faces.forEach(function(a){die.getElementsByClassName(a)[0].innerText = die_face[a]; } );
}

function renderD4_face(die, value)
{
   var die_face = d4[value-1];
   d4faces.forEach(function(a){die.getElementsByClassName(a)[0].innerText = die_face[a]; } );
}

function animate(die, animation_callback)
{
  die.classList.remove("rolling");
  void die.offsetWidth;
  die.classList.add("rolling");
  var id = setInterval(frame, 5);
  var c = 0;
  function frame (){
    if (c>50) {
      clearInterval(id);
      die.classList.remove("rolling");
      logRoll(die.type, die.value);
    } else
    {
      c++;
      animation_callback();
    }
  }
}

function renderPct_faces (dice, roll)
{
  var roll_ten = Math.floor(roll/10)*10;
  var roll_one = roll - roll_ten;
  var one_face = d10one[roll_one];
  var ten_face = d10ten[roll_ten/10];  
  d10onefaces.forEach(function(a){dice.getElementsByClassName(a)[0].innerText = one_face[a]; });
  d10tenfaces.forEach(function(a){dice.getElementsByClassName(a)[0].innerText = ten_face[a]; });
}

function rollPct(dice, mode) 
{
  switch (mode) 
  {
    case "animated":
      animate(dice, function(){    
        var roll = randBetween(0,99);
        renderPct_faces(dice, roll);
        dice.value = roll;});
      break;
    case "static":
      var roll = randBetween(0,99);
      renderPct_faces(dice, roll);
      dice.value = roll;
      break;
  }
}

function rollD20(die, mode) 
{  
  switch (mode) 
  {
    case "animated":
      animate(die, function(){    
        var roll = randBetween(1,20);
        renderD20_faces(die, roll);
        die.value = roll;});
      break;
    case "static":
      var roll = randBetween(1,20);
      renderD20_faces(die, roll);
      die.value = roll;
      break;
  }
}

function renderD8_faces(die, value)
{
   var die_face = d8[value-1];
   d8faces.forEach(function(a){die.getElementsByClassName(a)[0].innerText = die_face[a]; } );
}


function renderD6_face(die, value)
{
  die.getElementsByClassName("d6f0")[0].innerText = value;
}

function rollD12(die, mode) 
{
  switch (mode) 
  {
    case "animated":
      animate(die, function(){    
        var roll = randBetween(1,12);
        renderD12_faces(die, roll);
        die.value = roll;});
      break;
    case "static":
      var roll = randBetween(1,12);
      renderD12_faces(die, roll);
      die.value = roll;
      break;
  }
}


function rollD8(die, mode) 
{
  switch (mode) 
  {
    case "animated":
      animate(die, function(){    
        var roll = randBetween(1,8);
        renderD8_faces(die, roll);
        die.value = roll;});
      break;
    case "static":
      var roll = randBetween(1,8);
      renderD8_faces(die, roll);
      die.value = roll;
      break;
  }
}

function rollD6(die, mode) 
{
  switch (mode) 
  {
    case "animated":
      animate(die, function(){    
        var roll = randBetween(1,6);
        renderD6_face(die, roll);
        die.value = roll;});
      break;
    case "static":
      var roll = randBetween(1,6);
      renderD6_face(die, roll);
      die.value = roll;
      break;
  }
}

function rollD4(die, mode) 
{
  switch (mode) 
  {
    case "animated":
      animate(die, function(){    
        var roll = randBetween(1,4);
        renderD4_face(die, roll);
        die.value = roll;});
      break;
    case "static":
      var roll = randBetween(1,4);
      renderD4_face(die, roll);
      die.value = roll;
      break;
  }
}

function addFace (a, b) 
{
  var div = document.createElement("div");
  div.className = b;
  a.appendChild(div);
}

function appendImg (a, b) 
{
  var img = document.createElement("img");
  img.src = b;
  a.appendChild(img);
  
}

function renderPct(die)
{
  die.width = 128;
  die.height = 64;
  die.onclick = function() { rollPct(die, "animated"); };
  
  appendImg(die, "pcta.png");
  appendImg(die, "pctb.png");
  
  d10tenfaces.forEach(function(face){addFace(die,face);});
  
  d10onefaces.forEach(function(face){addFace(die,face);});
  
  rollPct(die, "static");
}

function renderD20(die)
{
  die.width = 64;
  die.height = 64;
  die.onclick = function() { rollD20(die, "animated"); };
  
  appendImg(die, "d20.png");
  d20faces.forEach(function(face){addFace(die, face);}); 
  
  rollD20(die, "static");
}

function renderD12(die)
{
  die.width = 64;
  die.height = 64;
  die.onclick = function() { rollD12(die, "animated"); };
  
  appendImg(die, "d12.png");
  d12faces.forEach(function(face){addFace(die, face);}); 

  rollD12(die, "static");
}

function renderD8(die)
{
  die.width = 64;
  die.height = 64;
  die.onclick = function() { rollD8(die, "animated"); };


  appendImg(die, "d8.png");
  d8faces.forEach(function(face){addFace(die, face);}); 

  rollD8(die, "static");
}

function renderD4(die)
{
  die.width = 64;
  die.height = 64;
  
  die.onclick = function() { rollD4(die, "animated"); };

  appendImg(die, "d4.png");

  d4faces.forEach(function(face){addFace(die, face);}); 
  
  rollD4(die, "static");
}

function renderD6(die)
{
  die.width = 64;
  die.height = 64;
  die.onclick = function() { rollD6(die, "animated"); };
  
  appendImg(die, "d6.png");

  addFace(die, "d6f0");
  
  rollD6(die, "static");
}

function renderDice() 
{
  var pct = document.getElementsByClassName("pct");
  for (let die of pct) 
  {
    die.type = "pct";
    renderPct(die);
  }
  
  var d20 = document.getElementsByClassName("d20");
  for (let die of d20) 
  {
    die.type = "d20";
    renderD20(die);
  }
  
  var d12 = document.getElementsByClassName("d12");
  for (let die of d12) 
  {
    die.type = "d12";
    renderD12(die);
  }
 
  var d8 = document.getElementsByClassName("d8");
  for (let die of d8) 
  {
    die.type = "d8";
    renderD8(die);
  }
 
  var d6 = document.getElementsByClassName("d6");
  for (let die of d6) 
  {
    die.type = "d6"
    renderD6(die);
  }
  
  var d4 = document.getElementsByClassName("d4");
  for (let die of d4) 
  {
    die.type = "d4";
    renderD4(die);
  }
  
  logClear();
  initDungeon();
}

// ─── Dungeon Crawler ───────────────────────────────────────

var DGRID_W = 48;
var DGRID_H = 32;
var DVIEW_W = 30;
var DVIEW_H = 14;
var dgrid = [];
var playerX = 0;
var playerY = 0;
var dungeonTurnNum = 0;
var typeTimer = null;

var flavorText = {
  legendary: [
    "A dragon's hoard glitters before you!",
    "You found the Sword of a Thousand Truths!",
    "A celestial chest opens with blinding light!",
    "The ancient vault reveals its secrets!",
    "A legendary artifact pulses with power!",
    "You discover the lost crown of the Lich King!",
    "Gems cascade from a golden fountain!",
    "The gods smile upon your journey!",
    "A portal to the treasure dimension opens!",
    "You stumble upon an elder dragon's nest!"
  ],
  catastrophe: [
    "The floor collapses beneath you!",
    "A mimic! The chest has teeth!",
    "You trigger an ancient curse...",
    "Poisonous gas fills the chamber!",
    "The walls begin closing in!",
    "A gelatinous cube oozes from the darkness!",
    "You step on a rune of disintegration!",
    "An angry beholder rounds the corner!",
    "The dungeon shakes... a cave-in!",
    "You awaken something that should have stayed asleep..."
  ],
  good: [
    "A chest of gold gleams in the torchlight.",
    "You find a healing potion on a pedestal.",
    "A friendly ghost offers you directions.",
    "Treasure! Coins scatter across the floor.",
    "A magical fountain restores your strength.",
    "You discover a merchant's hidden stash.",
    "An enchanted weapon hangs on the wall.",
    "You find a map to deeper levels.",
    "A shrine blesses you with protection.",
    "Secret compartment! Full of gemstones."
  ],
  neutral: [
    "An empty chamber. Dust motes drift by.",
    "Torch sconces flicker on the walls.",
    "Old bones crunch underfoot.",
    "Faded murals depict ancient battles.",
    "A drafty corridor stretches onward.",
    "You hear distant echoes... footsteps?",
    "Cobwebs cling to forgotten doorways.",
    "A mysterious altar hums faintly.",
    "Scratching sounds from behind the walls.",
    "An abandoned camp. Still warm ashes."
  ],
  bad: [
    "A pressure plate clicks underfoot!",
    "Spiders descend from the ceiling!",
    "A goblin ambush from the shadows!",
    "Poison darts fly from the walls!",
    "The door slams shut behind you!",
    "A pit trap! You barely catch the edge!",
    "Skeletons rise from the rubble!",
    "A swinging blade nearly takes your head!",
    "Toxic mushroom spores fill the air!",
    "A tripwire! Arrows pepper the corridor!"
  ]
};

var encounterSymbols = {
  legendary: "$",
  catastrophe: "!",
  good: "*",
  neutral: ".",
  bad: "^"
};

function initDungeon() {
  dgrid = [];
  for (var y = 0; y < DGRID_H; y++) {
    dgrid[y] = [];
    for (var x = 0; x < DGRID_W; x++) {
      dgrid[y][x] = "#";
    }
  }
  playerX = Math.floor(DGRID_W / 2);
  playerY = Math.floor(DGRID_H / 2);
  dungeonTurnNum = 0;
  carveRoom(playerX - 2, playerY - 1, 5, 3);
  renderDungeon();
  var textEl = document.getElementById("dungeon-text");
  if (textEl) {
    textEl.className = "dungeon-text text-neutral";
    textEl.textContent = "";
    typeFlavorText("You stand in a torch-lit chamber. Roll dice to explore...", "text-neutral");
  }
}

function carveRoom(rx, ry, rw, rh) {
  for (var y = ry; y < ry + rh && y < DGRID_H - 1; y++) {
    for (var x = rx; x < rx + rw && x < DGRID_W - 1; x++) {
      if (x > 0 && y > 0) {
        dgrid[y][x] = ".";
      }
    }
  }
}

function carveCorridor(x1, y1, x2, y2) {
  var x = x1;
  var y = y1;
  while (x !== x2) {
    if (x > 0 && x < DGRID_W - 1 && y > 0 && y < DGRID_H - 1) {
      dgrid[y][x] = ".";
    }
    x += (x2 > x1) ? 1 : -1;
  }
  while (y !== y2) {
    if (x > 0 && x < DGRID_W - 1 && y > 0 && y < DGRID_H - 1) {
      dgrid[y][x] = ".";
    }
    y += (y2 > y1) ? 1 : -1;
  }
  if (x > 0 && x < DGRID_W - 1 && y > 0 && y < DGRID_H - 1) {
    dgrid[y][x] = ".";
  }
}

function dungeonAdvance(type, value) {
  dungeonTurnNum++;
  var max = maxValues[type] || 20;
  var ratio = value / max;

  var encounter;
  if (type === "d20" && value === 20) {
    encounter = "legendary";
  } else if (type === "d20" && value === 1) {
    encounter = "catastrophe";
  } else if (value === max && type !== "d20") {
    encounter = "good";
  } else if (ratio >= 0.75) {
    encounter = "good";
  } else if (ratio >= 0.35) {
    encounter = "neutral";
  } else {
    encounter = "bad";
  }

  // Pick a direction weighted towards unexplored areas
  var dirs = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 }
  ];

  // Calculate unexplored cell count for each direction
  var dirWeights = dirs.map(function(dir) {
    var unexploredCount = 0;
    var checkX = playerX + dir.dx * 5; // Check ahead where player would move
    var checkY = playerY + dir.dy * 5;

    // Count unexplored (#) cells in a small radius around the target
    for (var dy = -2; dy <= 2; dy++) {
      for (var dx = -2; dx <= 2; dx++) {
        var nx = checkX + dx;
        var ny = checkY + dy;
        if (nx > 0 && nx < DGRID_W && ny > 0 && ny < DGRID_H) {
          if (dgrid[ny][nx] === "#") {
            unexploredCount++;
          }
        }
      }
    }
    return unexploredCount + 1; // +1 to avoid 0 weight
  });

  // Select direction using weighted random selection
  var totalWeight = dirWeights.reduce(function(a, b) { return a + b; }, 0);
  var rand = Math.random() * totalWeight;
  var cumWeight = 0;
  var dir = dirs[0];
  for (var i = 0; i < dirs.length; i++) {
    cumWeight += dirWeights[i];
    if (rand <= cumWeight) {
      dir = dirs[i];
      break;
    }
  }

  // Corridor length 3-5, then a room
  var corrLen = randBetween(3, 5);
  var newX = playerX + dir.dx * corrLen;
  var newY = playerY + dir.dy * corrLen;

  // Clamp to grid bounds
  newX = Math.max(3, Math.min(DGRID_W - 4, newX));
  newY = Math.max(3, Math.min(DGRID_H - 4, newY));

  // Carve corridor from player to new room center
  carveCorridor(playerX, playerY, newX, newY);

  // Carve a room around the new position
  var rw = randBetween(3, 5);
  var rh = randBetween(3, 5);
  var rx = newX - Math.floor(rw / 2);
  var ry = newY - Math.floor(rh / 2);
  rx = Math.max(1, Math.min(DGRID_W - rw - 1, rx));
  ry = Math.max(1, Math.min(DGRID_H - rh - 1, ry));
  carveRoom(rx, ry, rw, rh);

  // Place encounter symbol
  var sym = encounterSymbols[encounter];
  if (dgrid[newY] && dgrid[newY][newX]) {
    dgrid[newY][newX] = sym;
  }

  // Move player
  playerX = newX;
  playerY = newY;

  renderDungeon();

  // Flavor text
  var pool = flavorText[encounter];
  var text = pool[Math.floor(Math.random() * pool.length)];
  var cssClass = "text-neutral";
  if (encounter === "legendary") cssClass = "text-crit";
  else if (encounter === "catastrophe") cssClass = "text-fumble";
  else if (encounter === "good") cssClass = "text-treasure";
  else if (encounter === "bad") cssClass = "text-danger";

  typeFlavorText(text, cssClass);
}

function renderDungeon() {
  var mapEl = document.getElementById("dungeon-map");
  if (!mapEl) return;

  // Viewport centered on player
  var startX = playerX - Math.floor(DVIEW_W / 2);
  var startY = playerY - Math.floor(DVIEW_H / 2);
  startX = Math.max(0, Math.min(DGRID_W - DVIEW_W, startX));
  startY = Math.max(0, Math.min(DGRID_H - DVIEW_H, startY));

  var lines = [];
  for (var y = startY; y < startY + DVIEW_H && y < DGRID_H; y++) {
    var row = "";
    for (var x = startX; x < startX + DVIEW_W && x < DGRID_W; x++) {
      if (x === playerX && y === playerY) {
        row += "@";
      } else {
        var cell = dgrid[y][x];
        // Show fog for walls adjacent to explored areas
        if (cell === "#") {
          var adjacent = false;
          for (var dy = -1; dy <= 1; dy++) {
            for (var dx = -1; dx <= 1; dx++) {
              var ny = y + dy;
              var nx = x + dx;
              if (ny >= 0 && ny < DGRID_H && nx >= 0 && nx < DGRID_W) {
                var neighbor = dgrid[ny][nx];
                if (neighbor !== "#") adjacent = true;
              }
            }
          }
          row += adjacent ? "\u2591" : " ";
        } else {
          row += cell;
        }
      }
    }
    lines.push(row);
  }
  mapEl.textContent = lines.join("\n");
}

function typeFlavorText(text, cssClass) {
  var textEl = document.getElementById("dungeon-text");
  if (!textEl) return;

  if (typeTimer) {
    clearInterval(typeTimer);
    typeTimer = null;
  }

  textEl.textContent = "";
  textEl.className = "dungeon-text " + (cssClass || "text-neutral");

  var i = 0;
  typeTimer = setInterval(function() {
    if (i < text.length) {
      textEl.textContent += text[i];
      i++;
    } else {
      clearInterval(typeTimer);
      typeTimer = null;
    }
  }, 30);
}
