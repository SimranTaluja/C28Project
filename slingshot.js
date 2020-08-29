class Slingshot{
constructor(bodyA, pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:100,
}
this.pointB = pointB;
this.body = Constraint.create(options);
World.add(world, this.body);
}

fly(){
    this.body.bodyA = null;
}

display(){
    if(this.body.bodyA){
    strokeWeight(3)
    stroke("black");
    line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
}
}