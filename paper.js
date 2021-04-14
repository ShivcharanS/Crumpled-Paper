class paper{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction'  : 0,
            'density' : 1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }
    display(){
        var paperpos = this.body.position
        var paperangle = this.body.angle

        push()
        translate(paperpos.x,paperpos.y)
        rotate(paperangle)
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop()
    }
}