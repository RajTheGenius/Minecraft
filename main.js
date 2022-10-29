var canvas = new fabric.Canvas("myCanvas");
playerX = 10;
playerY = 10;
var playerImage = "";
blockImgWidth = 30;
blockImgHeight = 30;
var blockImg = "";
 
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerImage = Img;

        playerImage.scaleToWidth(150);
        playerImage.scaleToHeight(140);

        playerImage.set({
            top : playerY,
            left : playerX
        });

        canvas.add(playerImage);

    });
}

function blockUpdate(newBlock){
    fabric.Image.fromURL(newBlock, function(Img){
        blockImg = Img;

        blockImg.scaleToWidth(blockImgWidth);
        blockImg.scaleToHeight(blockImgHeight);

        blockImg.set({
            top : playerY,
            left : playerX
        });

        canvas.add(blockImg);

    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey && keyPressed == "80" ) {
        blockImgWidth = blockImgWidth + 10;
        blockImgHeight = blockImgHeight + 10;
        document.getElementById("CurrentHeight").innerHTML = blockImgHeight;
        document.getElementById("CurrentWidth").innerHTML = blockImgWidth;
        console.log("p and shift key are pressed together");
    }

    if (e.shiftKey && keyPressed == "77" ) {
        blockImgWidth = blockImgWidth - 10;
        blockImgHeight = blockImgHeight - 10;
        document.getElementById("CurrentHeight").innerhtml = blockImgHeight;
        document.getElementById("CurrentWidth").innerhtml = blockImgWidth;
        console.log("m and shift key are pressed together");
    }

    if(keyPressed == 37){
        left();
        console.log("left");
    }
    if(keyPressed == 38){
        up();
        console.log("up");
    }
    if(keyPressed == 39){
        right();
        console.log("right");
    }
    if(keyPressed == 40){
        down();
        console.log("down");
    }

    if(keyPressed == 87){
        blockUpdate("wall.jpg");
        console.log("w");
    }

    if(keyPressed == 71){
        blockUpdate("ground.png");
        console.log("g");
    }
    
    if(keyPressed == 76){
        blockUpdate("light_green.png");
        console.log("l");
    }
    
    if(keyPressed == 84){
        blockUpdate("trunk.jpg");
        console.log("t");
    }
    
    if(keyPressed == 82){
        blockUpdate("roof.jpg");
        console.log("r");
    }
    
    if(keyPressed == 89){
        blockUpdate("yellow_wall.png");
        console.log("y");
    }
    
    if(keyPressed == 68){
        blockUpdate("dark_green.png");
        console.log("d");
    }
    
    if(keyPressed == 85){
        blockUpdate("unique.png");
        console.log("u");
    }
    
    if(keyPressed == 67){
        blockUpdate("cloud.jpg");
        console.log("c");
    }
}

function up(){
    if (playerY > 0) {
        playerY = playerY - blockImgHeight;
        console.log("block img height = " + blockImgHeight);
        console.log("when up is pressed X = " + playerX + "and Y = " + playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
    
}
function down(){
    if (playerY <= 500) {
        playerY = playerY + blockImgHeight;
        console.log("block img height = " + blockImgHeight);
        console.log("when up is pressed X = " + playerX + "and Y = " + playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
    
}
function left(){
    if (playerX > 0) {
        playerX = playerX - blockImgWidth;
        console.log("block img Width = " + blockImgWidth);
        console.log("when up is pressed X = " + playerX + "and Y = " + playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
    
}
function right(){
    if (playerX <= 900 ) {
        playerX = playerX + blockImgWidth;
        console.log("block img Width = " + blockImgWidth);
        console.log("when up is pressed X = " + playerX + "and Y = " + playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
    
}
