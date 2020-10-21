class Bird extends Base
{
    constructor(x,y)
    {
        super(x,y,50,50)
       this.img = loadImage('sprites/bird.png');
       this.smoke = loadImage('sprites/smoke.png')
       this.array = []
    }
    display()
    {
       // var pos  = this.body.position;
        //pos.x=mouseX;
       // pos.y=mouseY;
        super.display()
        console.log(this.body.mass);
        this.body.mass = 4000;
        if(this.body.position.x>210 && this.body.velocity.x>10)
        {
        var posarr = [this.body.position.x,this.body.position.y];
        this.array.push(posarr);
        }
        for(var i = 0;i<this.array.length;i++)
        {
         image(this.smoke,this.array[i][0],this.array[i][1]);
        }
    }
}