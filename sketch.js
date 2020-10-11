var i1,i2,b1,bg,e1,e2,e3,e4,o,x;
var state = 0;
var flag;
var c11, c22, c33, c44, c55, c66, c77, c88, c99, game = "tie", player = 1, blank;
var tie;
var reload;
var mark = 0;
var group;
function preload(){
  bg = loadImage("bg.jpg")
  o = loadImage("oo.png")
  x = loadImage("xx.png")
  blank = loadImage("whitebg.jpg")
}


function setup() {
  createCanvas(700, 500);
  i1 = createInput("")
  i2 = createInput("")
  b1 = createButton("Play")
  
  e1 = createElement("h3")
  e1.html("Enter Your Name:")
  e1.position(570,160)
  
  e2 = createElement("h3")
  e2.html("Enter the Password:")
  e2.position(570,210)
  
  e3 = createElement("h1")
  e3.html("Tic Tac Toe")
  e3.position(570,5)
  
  e4 = createElement("h1")
  e4.html("Invalid Credentials")
  e4.position(350,400)
  e4.hide()
  
  i1.position(570,200)
  i2.position(570,250)
  b1.position(570,300)
  flag = 0;

  reload = createButton("reload");
  reload.position(650,50)
  reload.hide()

  group = new Group()

  c11 = 0;
  c22 = 0;
  c33 = 0;
  c44 = 0;
  c55 = 0;
  c66 = 0;
  c77 = 0;
  c88 = 0;
  c99 = 0;
  
  
  
}

function draw() {
  background(0)
  

  
  if (state === 0){
    var v = i2.value()
    var t = i1.value()
    reload.hide()
    i1.show()
    i2.show()
    b1.show()
    e1.show()
    e2.show()
    e3.show()
    e4.show()
    b1.mousePressed( ()=>{
      if (v === "123" && t !== " "){
        flag = 1
      }
      if (v !== "123" || t === " ")
       flag = 2;
    } )
    
    if (flag === 1){
      state = 1;
    }
      
    if (flag === 2 && state === 0)
      e4.show()
  }
  if (state === 1){
    i1.hide()
    i2.hide()
    b1.hide()
    e1.hide()
    e2.hide()
    e3.hide()
    e4.hide()
    reload.show()
    flag = 0
    var m = play()
    if (m === 1){
   reload.mousePressed( ()=>{
    state = 0
    group.destroyEach()
  })}
}
  drawSprites()
}

function play(){
   background("pink")
 tie=0
  var c1 = createSprite(200,100,140,140)
  var c2 = createSprite(364,100,140,140)
  var c3 = createSprite(528,100,140,140)
  var c4 = createSprite(200,260,140,140)
  var c5 = createSprite(364,260,140,140)
  var c6 = createSprite(528,260,140,140)
  var c7 = createSprite(200,420,140,140)
  var c8 = createSprite(364,420,140,140)
  var c9 = createSprite(528,420,140,140)
  group.add(c1)
  group.add(c2)
  group.add(c3)
  group.add(c4)
  group.add(c5)
  group.add(c6)
  group.add(c7)
  group.add(c8)
  group.add(c9)

  
  c1.shapeColor="white"
  c2.shapeColor="white"
  c3.shapeColor="white"
  c4.shapeColor="white"
  c5.shapeColor="white"
  c6.shapeColor="white"
  c7.shapeColor="white"
  c8.shapeColor="white"
  c9.shapeColor="white"
  
  c1.addImage(blank)
  c2.addImage(blank)
  c3.addImage(blank)
  c4.addImage(blank)
  c5.addImage(blank)
  c6.addImage(blank)
  c7.addImage(blank)
  c8.addImage(blank)
  c9.addImage(blank)
  
  c1.visible = true
  c2.visible = true
  c3.visible = true
  c4.visible = true
  c5.visible = true
  c6.visible = true
  c7.visible = true
  c8.visible = true
  c9.visible = true
  
  c1.scale=0.3
  c2.scale=0.3
  c3.scale=0.3
  c4.scale=0.3
  c5.scale=0.3
  c6.scale=0.3
  c7.scale=0.3
  c8.scale=0.3
  c9.scale=0.3
  

  
  if (player === 1){
    text("X Turn",10,10)
  }  
  if (player === 2){
    text("O Turn", 10, 10)
  }
  if (player === 1 && mousePressedOver(c1) && c11 === 0){
    c1.addImage(x)
   
    tie+=1
    c1.visible = true
    
    c11 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c2) && c22 === 0){
    c2.addImage(x)
    tie+=1
    c2.visible = true
    c22 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c3) && c33 === 0){
    c3.addImage(x)
    tie+=1
    c3.visible = true
    c33 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c4) && c44 === 0){
    c4.addImage(x)
    tie+=1
    c4.visible = true
    c44 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c5) && c55 === 0){
    c5.addImage(x)
    tie+=1
    c5.visible = true
    c55 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c6) && c66 === 0){
    c6.addImage(x)
    tie+=1
    c6.visible = true
    c66 = 1
    player = 2
  }
  if (player === 1 && mousePressedOver(c7) && c77 === 0){
    c7.addImage(x)
    tie+=1
    c7.visible = true
    c77 = 1
    player = 2
  }
   if (player === 1 && mousePressedOver(c8) && c88 === 0){
    c8.addImage(x)
    tie+=1
    c8.visible = true
    c88 = 1
    player = 2
  }
   if (player === 1 && mousePressedOver(c9) && c99 === 0){
    c9.addImage(x)
    tie+=1
    c9.visible = true
    c99 = 1
    player = 2
  }
  
  
  //Player 2 
  
if (player === 2 && mousePressedOver(c1) && c11 === 0){
    c1.addImage(o)
    tie+=1
    c1.visible = true
    c11 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c2) && c22 === 0){
    c2.addImage(o)
    tie+=1
    c2.visible = true
    c22 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c3) && c33 === 0){
    c3.addImage(o)
    tie+=1
    c3.visible = true
    c33 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c4) && c44 === 0){
    c4.addImage(o)
    tie+=1
    c4.visible = true
    c44 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c5) && c55 === 0){
    c5.addImage(o)
    tie+=1
    c5.visible = true
    c55 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c6) && c66 === 0){
    c6.addImage(o)
    tie+=1
    c6.visible = true
    c66 = 2
    player = 1
  }
  if (player === 2 && mousePressedOver(c7) && c77 === 0){
    c7.addImage(o)
    tie+=1
    c7.visible = true
    c77 = 2
    player = 1
  }
   if (player === 2 && mousePressedOver(c8) && c88 === 0){
    c8.addImage(o)
    tie+=1
    c8.visible = true
    c88 = 2
    player = 1
  }
   if (player === 2 && mousePressedOver(c9) && c99 === 0){
    c9.addImage(o)
    tie+=1
    c9.visible = true
    c99 = 2
    player = 1
  }
  
  // X 
  
    if (c11 === 1 && c22 === 1 && c33 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c11 === 1 && c44 === 1 && c77 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c11 === 1 && c55 === 1 && c99 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c33 === 1 && c55 === 1 && c77 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c22 === 1 && c55 === 1 && c88 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c33 === 1 && c66 === 1 && c99 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c44 === 1 && c55 === 1 && c66 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  if (c77 === 1 && c88 === 1 && c99 === 1){
       game = "win"
      text("X wins", 10, 50)
    }
  
  // O
  
   if (c11 === 2 && c22 === 2 && c33 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c11 === 2 && c44 === 2 && c77 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c11 === 2 && c55 === 2 && c99 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c33 === 2 && c55 === 2 && c77 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c22 === 2 && c55 === 2 && c88 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c33 === 2 && c66 === 2 && c99 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c44 === 2 && c55 === 2 && c66 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
  if (c77 === 2 && c88 === 2 && c99 === 2){
       game = "win"
      text("O wins", 10, 50)
    }
 
  if (game === "win"){
    if (c11 === 0){
        c11 = 3
        }
    if (c22 === 0){
        c22 = 3
        }
    if (c33 === 0){
        c33 = 3
        }
    if (c44 === 0){
        c44 = 3
        }
    if (c55 === 0){
        c55 = 3
        }
    if (c66 === 0){
        c66 = 3
        }
    if (c77 === 0){
        c77 = 3
    }
    if (c88 === 0){
        c88 = 3
        }
    if (c99 === 0){
        c99 = 3
        }   
  } 
  
  // X animation
  if (c11 === 1){
    c1.addImage(x)
  }
  if (c22 === 1){
    c2.addImage(x)
  }
  if (c33 === 1){
    c3.addImage(x)
  }
  if (c44 === 1){
    c4.addImage(x)
  }
  if (c55 === 1){
    c5.addImage(x)
  }
  if (c66 === 1){
    c6.addImage(x)
  }
  if (c77 === 1){
    c7.addImage(x)
  }
  if (c88 === 1){
    c8.addImage(x)
  }
  if (c99 === 1){
    c9.addImage(x)
  }
  
  
  // o animation
  
   if (c11 === 2){
    c1.addImage(o)
  }
  if (c22 === 2){
    c2.addImage(o)
  }
  if (c33 === 2){
    c3.addImage(o)
  }
  if (c44 === 2){
    c4.addImage(o)
  }
  if (c55 === 2){
    c5.addImage(o)
  }
  if (c66 === 2){
    c6.addImage(o)
  }
  if (c77 === 2){
    c7.addImage(o)
  }
  if (c88 === 2){
    c8.addImage(o)
  }
  if (c99 === 2){
    c9.addImage(o)
  }

// Empty cell animation

if (c11 === 0){
    c1.addImage(blank)
  }
  if (c22 === 0){
    c2.addImage(blank)
  }
  if (c33 === 0){
    c3.addImage(blank)
  }
  if (c44 === 0){
    c4.addImage(blank)
  }
  if (c55 === 0){
    c5.addImage(blank)
  }
  if (c66 === 0){
    c6.addImage(blank)
  }
  if (c77 === 0){
    c7.addImage(blank)
  }
  if (c88 === 0){
    c8.addImage(blank)
  }
  if (c99 === 0){
    c9.addImage(blank)
  }

// for tie

 if (game === "tie" && tie ===9){
   text("tie", 10, 50)
 }
 /*if (game === "win"){
 c1.addImage(blank)
  c2.addImage(blank)
  c3.addImage(blank)
  c4.addImage(blank)
  c5.addImage(blank)
  c6.addImage(blank)
  c7.addImage(blank)
  c8.addImage(blank)
  c9.addImage(blank)

  c1.visible = false
  c2.visible = false
  c3.visible = false
  c4.visible = false
  c5.visible = false
  c6.visible = false
  c7.visible = false
  c8.visible = false
  c9.visible = false
 }*/
mark = 1
return mark 




}
