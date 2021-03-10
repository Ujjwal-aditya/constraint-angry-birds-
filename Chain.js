class Chain
{
constructor(bodyA,bodyB)
{
    var constraintOptions = {
        bodyA: bodyA,
        bodyB:bodyB,
        stiffness:0.4,
        length:10
    }
   this.chain = Constraint.create(constraintOptions);
 World.add(world,this.chain)
}

display()
{
    var pointA= this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;

    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}
