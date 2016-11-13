function Line(a, b, color, width) {
    this.setPoints(a, b)
    this.color = color || DEF_COLOR
    this.width = width || width === 0 ? width : 1
}

Line.prototype = {

    setPoints: function (a, b) {
        this.points = [a || new Point(), b || new Point()]
        return this
    },

    getPoints: function () {
        return this.points
    },

    clone: function () {
        return new Line(this.points[0].clone(), this.points[1].clone(), this.width)
    }
}
