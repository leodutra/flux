function Displayable() {
    this.transform = null
    // TODO adjust transform for HTML5 Canvas
    this.composite = CompositeMode.SOURCE_OVER
    // ~= AS3 blendMode
    // this.graphics = new Graphics()
    // TODO cacheAsBitmap (AS3)?
    // TODO filters?
    // TODO mask?
}

Displayable.prototype = extend(Node, {
    draw: function (context, globals) {

    }
})
