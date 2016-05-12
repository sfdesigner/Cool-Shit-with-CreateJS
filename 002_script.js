// Part 001: Bootstrapping

function init()
{
    // Create CreateJS stage
    var stage = new createjs.Stage("stageCanvas");
    
    // Create test object
    var circle = new createjs.Shape();
    circle.graphics.beginFill("Blue").drawCircle(0,0,50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    
    // Render stage
    stage.update();
}