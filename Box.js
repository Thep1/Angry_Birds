//class: blueprint or design of an object which consists of properties and functions
//constructor():spl function which holds properties


class Box extends Base{
     
   constructor(x,y,w,h){
        super(x,y,w,h)
        this.img = loadImage('sprites/wood1.png');
   }

  
}