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

const d20faces = ["f","lf", "rf", "bf", "l", "r", "bl", "br", "tl", "tr"];
const d20 = [
  {"f": 1, "lf":7, "rf":19, "bf":13, "l":15, "r":9, "bl":5, "br":11, "tl":17, "tr":3},
  {"f": 2, "lf":12, "rf":18, "bf":20, "l":10, "r":4, "bl":8, "br":14, "tl":15, "tr":5},
  {"f": 3, "lf":17, "rf":16, "bf":19, "l":7, "r":6, "bl":1, "br":9, "tl":10, "tr":8},
  {"f": 4, "lf":18, "rf":11, "bf":14, "l":2, "r":9, "bl":20, "br":6, "tl":5, "tr":13},
  {"f": 5, "lf":18, "rf":15, "bf":13, "l":4, "r":7, "bl":11, "br":1, "tl":2, "tr":12},
  {"f": 6, "lf":9, "rf":16, "bf":14, "l":11, "r":8, "bl":4, "br":20, "tl":19, "tr":3},
  {"f": 7, "lf":15, "rf":17, "bf":1, "l":5, "r":3, "bl":13, "br":19, "tl":12, "tr":10},
  {"f": 8, "lf":16, "rf":10, "bf":20, "l":6, "r":12, "bl":14, "br":2, "tl":3, "tr":17},
  {"f": 9, "lf":6, "rf":11, "bf":19, "l":16, "r":13, "bl":3, "br":1, "tl":14, "tr":4},
  {"f": 10, "lf":17, "rf":12, "bf":8, "l":3, "r":2, "bl":16, "br":20, "tl":7, "tr":15},
  {"f": 11, "lf":9, "rf":4, "bf":13, "l":19, "r":18, "bl":1, "br":5, "tl":6, "tr":14},
  {"f": 12, "lf":10, "rf":15, "bf":2, "l":8, "r":5, "bl":20, "br":18, "tl":17, "tr":7},
  {"f": 13, "lf":11, "rf":5, "bf":1, "l":9, "r":15, "bl":19, "br":7, "tl":4, "tr":18},
  {"f": 14, "lf":4, "rf":6, "bf":20, "l":18, "r":16, "bl":2, "br":8, "tl":11, "tr":9},
  {"f": 15, "lf":5, "rf":12, "bf":7, "l":13, "r":10, "bl":1, "br":17, "tl":18, "tr":2},
  {"f": 16, "lf":6, "rf":3, "bf":8, "l":14, "r":17, "bl":20, "br":10, "tl":9, "tr":19},
  {"f": 17, "lf":10, "rf":3, "bf":7, "l":12, "r":19, "bl":15, "br":1, "tl":8, "tr":16},
  {"f": 18, "lf":5, "rf":4, "bf":2, "l":15, "r":14, "bl":12, "br":20, "tl":13, "tr":11},
  {"f": 19, "lf":3, "rf":9, "bf":1, "l":17, "r":11, "bl":7, "br":13, "tl":16, "tr":6},
  {"f": 20, "lf":2, "rf":14, "bf":8, "l":12, "r":6, "bl":10, "br":16, "tl":18, "tr":4}
];  

var logLine = 0;

function logRoll(a)
{
  var log = document.getElementById("dice-log");
  logLine++;
  if (logLine < 10) logLine =  "  " + logLine;
  else if (logLine < 100) logLine = " " + logLine;
  log.value = log.value + logLine + ". " +  a + "\n";
  log.setSelectionRange(log.value.length,log.value.length);
}

function logClear(){
  var log = document.getElementById("dice-log");
  log.value = "";
  logLine = 0;
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

function animate(die, animation_callback)
{
  var id = setInterval(frame, 5);
  var c = 0;
  function frame (){
    if (c>50) {
      clearInterval(id);
      logRoll(die.type + " rolls " + die.value);
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

function renderD6_face(die, value)
{
  die.getElementsByClassName("f6")[0].innerText = value;
  die.value = value;
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
    
    appendImg(die, "pcta.png", "width:64");
    appendImg(die, "pctb.png", "width:64");
    
    d10tenfaces.forEach(function(face){addFace(die,face);});
    
    d10onefaces.forEach(function(face){addFace(die,face);});
    
    rollPct(die, "static");
}

function renderD20(die)
{
    die.width = 64;
    die.height = 64;
    die.onclick = function() { rollD20(die, "animated"); };
    
    appendImg(die, "d20.png", "width:64");
    d20faces.forEach(function(face){addFace(die, face);}); 
    
    rollD20(die, "static");
}

function renderD6(die)
{
    die.width = 64;
    die.height = 64;
    die.onclick = function() { rollD6(die, "animated"); };
    
    appendImg(die, "d6.png", "width:64");

    addFace(die, "f6");
    
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
 
  var d6 = document.getElementsByClassName("d6");
  for (let die of d6) 
  {
    die.type = "d6"
    renderD6(die);
  }
  logClear();
}
