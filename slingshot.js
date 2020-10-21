class slingshot
{
    constructor(ob1,p2)
    {
        var options=
        {
          bodyA:ob1,
         pointB:p2,
          length:10,
          stiffness:0.04
        }
      this.img1=loadImage("sprites/sling1.png");
      this.img2=loadImage("sprites/sling2.png");
      this.img3=loadImage("sprites/sling3.png");
       this.pointB=p2
       this.chain = Matter.Constraint.create(options);
       World.add(world,this.chain);
    }
    fly(){
        //null=nothing
        this.chain.bodyA=null;
    }
    attach(ob1)
    {
        this.chain.bodyA = ob1;
    }
    display(){
    
        image(this.img1,200,103)
        var posB = this.pointB;
        if(this.chain.bodyA!=null){
        var posA=this.chain.bodyA.position;
        
        stroke("#54280f");
        if(posA.x>215){
            strokeWeight(7);
            line(posA.x+20,posA.y,posB.x+30,posB.y+14);
            line(posA.x+20,posA.y,posB.x-25,posB.y+10);
            image(this.img3,posA.x+25,posA.y-12,15,30);
        }else{
            strokeWeight(4);
        line(posA.x-20,posA.y,posB.x+30,posB.y+14);
        line(posA.x-20,posA.y,posB.x-25,posB.y+10);
        image(this.img3,posA.x-30,posA.y-12,15,30);
        
        }
        
    }
    else
    {
        line(200,200,posB.x+30,posB.y+14);
        line(200,200,posB.x-25,posB.y+10);
        image(this.img3,225,188,15,30); 
        image(this.img2,172,103)
    }
    image(this.img2,172,103)   
    }
}
