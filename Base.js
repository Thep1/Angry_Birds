class Base{
     
    constructor(x,y,w,h,a){
        var options={
           "density":1,
            "restitution":0.3,
            "friction":1
        }
     
         this.body=Bodies.rectangle(x,y,w,h,options)
         this.width=w
         this.height=h
        
         World.add(world,this.body)
         this.img = loadImage('sprites/base.png');
    }
 
    display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
       angleMode(RADIANS);
       rotate(this.body.angle);
       imageMode(CENTER);
       image(this.img,0,0,this.width,this.height);
       pop();
 
 
 
    }
 
 }