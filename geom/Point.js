function Point(color, x, y, width) {
    this._super_.call(this, x, y)
    this.color = color || DEF_COLOR
    this.width = width || width === 0 ? width : 1
}

Point.prototype = extend(V2, {
    clone: function () {
        return new Point(this.color, this.x, this.y, this.width)
    }
})
