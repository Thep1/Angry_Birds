class Pig extends Base
{
    constructor(x,y)
    {
       super(x,y,50,50); 
       this.img = loadImage('sprites/enemy.png');
       this.visibility = 255;
    }
    display()
    {
        console.log(this.body.speed);
        if(this.body.speed<3)
        {
             super.display();
        }
        else 
        {
           World.remove(world,this.body);
           push();
           this.visibility-=5;
           tint(255,this.visibility);
           image(this.img,this.body.position.x,this.body.position.y,50,50);
           pop();
        }
    }
    score()
    {
        if(this.visibility <= 0 && this.visibility>-500)
        {
            s++;
        }
    }
}