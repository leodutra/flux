function Particle(color, mass, width, speed, acceleration, x, y) {
    this._super_.call(this, x, y)
    this.color = color || DEF_COLOR
    this.mass = mass || 0
    this.width = width || 1

    this.speed = speed || new V2()
    this.acceleration = acceleration || new V2()
}

Particle.prototype = extend(V2, {
    clone: function () {
        return new Particle(this.color, this.mass, this.width, this.speed, this.acceleration, this.x, this.y)
    }
})
