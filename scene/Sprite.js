function Sprite(width, height) {
    this._super_.call(this)
}

Sprite.prototype = extend(CanvasWrap, {
    draw: function (context, globals) {
        // TODO DRAW OVERRIDE
    }
})
