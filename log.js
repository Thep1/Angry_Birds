class log extends Base
{
    constructor(x,y,w,h,angle)
    {
        super(x,y,w,h,angle);
         Matter.Body.setAngle(this.body,angle);
         this.img = loadImage('sprites/wood2.png');
    }
 
   
}