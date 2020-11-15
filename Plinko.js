class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:1,
            friction:0
        }
       this.body=Bodies.circle(x,y,10,options);
       this.x=x;
       this.y=y;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("white");
        circle(0,0,10);
        pop();
    }
}