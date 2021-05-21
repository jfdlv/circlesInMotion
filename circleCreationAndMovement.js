//Create multiple circles
var colorsArray = ["#A80333","#D6DF41","#FBAE26","#C8E8F0","7F8085"];
var velocityArray = [10,20,30,40,50,60,70,80,100]
var circlesArray = [];
var positionX = 0;
var positionY = 0;
//change the limit of this for loop to increase the amount of circles created.
for (let i = 0; i < 4; i++) {
    var randomColor = colorsArray[Math.floor(Math.random() * 3)];
    circlesArray.push(
    {
        ballObject: create(positionX, positionY, randomColor),
        positionX: positionX,
        positionY: positionY,
        flagX: true,
        flagY: true,
        velocityX: velocityArray[Math.floor(Math.random() * 9)],
        velocityY: velocityArray[Math.floor(Math.random() * 9)],
    }
    );
}

var Xmin = 0;
var Xmax = 500;
var Ymin = 0;
var Ymax = 500;

/**
 * function that move all the circles
 */
function moveCircles() {
    circlesArray.forEach(function(element){
            element.ballObject.style.left = element.positionX + 'px';
            element.ballObject.style.top = element.positionY + 'px';
            if(element.positionX < Xmax && element.flagX) {
                element.positionX = element.positionX + element.velocityX;
                if(element.positionX >= Xmax){
                    element.flagX = false;
                    colorRandom(element.ballObject);
                }
            }
            else {
                element.positionX = element.positionX - element.velocityX;
                if(element.positionX <= Xmin) {
                    element.flagX = true;
                    colorRandom(element.ballObject);
                }
            }
            
            if(element.positionY < Ymax && element.flagY) {
                element.positionY = element.positionY + element.velocityY;
                if(element.positionY >= Ymax){
                    element.flagY = false;
                    colorRandom(element.ballObject);
                }
            }
            else {
                element.positionY = element.positionY - element.velocityY;
                if(element.positionY <= Ymin) {
                    element.flagY = true;
                    colorRandom(element.ballObject);
                }
            }
        }
    );
}

// This call the moveCircles function every 50ms
setInterval(moveCircles, 100);