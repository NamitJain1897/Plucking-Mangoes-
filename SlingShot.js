class SlingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004
            
        }
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
    fly () {
        this.throw.bodyA = null;
    }
    attach (bodyA) {
       this.throw.bodyA = bodyA;
    }
    display(){
      if (this.throw.bodyA) {
          var pointA = this.throw.bodyA.position;
          var pointB = this.pointB;
          line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
    }
}