var myFigure;
var obstacles;

function game(){
    myFigure = new figure();
    myFigure.update();
}

function figure(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle ="#0000FF";
    ctx.fillRect(20,20,20,20);

    this.x = 20;
    this.y = 20;
    this.width = 20;
    this.height = 20;

    this.update = function(){
        ctx.clearRect(0,0,470,270);
        make_obstacle();
        ctx.fillRect(this.x,this.y,20,20);
        //фігура для перемоги
        ctx.fillStyle ="#d3d3d3";
        ctx.fillRect(440,20,20,20);

        for(i = 0; i<obstacles.length; i++){
            if(myFigure.crashEx(obstacles[i])){
                lose();
                return;
            }
        }
        if((this.x>=440 && this.x<=460) && (this.y>=20 && this.y<=40)){
            alert("Ви перемогли");
            myFigure = new figure();
            myFigure.update();
        }
    };


    this.crashEx = function(some_object){
        var left = this.x;
        var right = this.x +(this.width);
        var top = this.y;
        var bottom  = this.y +(this.height)

        var o_left = some_object.x;
        var o_right = some_object.x +(some_object.width);
        var o_top = some_object.y;
        var o_bottom  = some_object.y +(some_object.height);

        var crash = true;
        if((bottom < o_top)||(top>o_bottom)||(right<o_left)||(left>o_right)){
            crash = false;
        }
        return crash;
    }
}

function lose(){
    alert("Ви програли");
    myFigure = new figure();
    myFigure.update();
}

function right(){
    myFigure.x += 10;
    myFigure.update();
}

function left(){
    myFigure.x -= 10;
    myFigure.update();
}

function up(){
    myFigure.y -= 20;
    myFigure.update();
}

function down(){
    myFigure.y += 20;
    myFigure.update();
}


function obstacle(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle =color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = "#0000FF";
}


function make_obstacle(){
    obstacles = [];
    obstacles.push(new obstacle(60,0, 10,220, "#FF0000"));
    obstacles.push(new obstacle(120,60, 10,220, "#00FF00"));
    obstacles.push(new obstacle(180,0, 10,220, "#0F00F0"));
    obstacles.push(new obstacle(240,60, 10,220, "#FFA500"));
    obstacles.push(new obstacle(300,0, 10,220, "#0F0F0F"));
    obstacles.push(new obstacle(360,60, 10,220, "#FFF000"));
    obstacles.push(new obstacle(420,0, 10,220, "#800080"));


}





