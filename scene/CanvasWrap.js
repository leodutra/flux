function CanvasWrap(width, height) {
    Displayable.call(this)
    var e = this._canvas = document.createElement('canvas')
    e.width = width
    e.height = height
}

CanvasWrap.prototype = extend(Displayable(), {

    getContext2D: function () {
        return this._canvas.getContext('2d')
    },

    getCanvas: function () {
        return this._canvas
    },

    draw: function (context, relative) {
        context.drawImage(
          this._canvas,
          relative.x + this.x,
          relative.y + this.y,
          this._element.width * (relative.scaleX * this.scaleX),
          this._element.height * (relative.scaleY * this.scaleY)
        )
    }
})
