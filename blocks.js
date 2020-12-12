class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.05,
            'friction':0.05,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;      
        World.add(world, this.body);
        this.visiblity=255;
      }
      display(){
        
        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
            console.log(this.body.speed);
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            
            pop();
        }else{
            World.remove(world, this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
            pop();

        }
        
             }
             Score(){
            if(this.visiblity<0&&this.visiblity>-105){
                score++;
            }
            }
  }