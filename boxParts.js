class Parts { 
    constructor(x,y,width,height,fill){
    
    var options = {
        isStatic: true 
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    }
    
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
    }
    }