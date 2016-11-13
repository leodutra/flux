function Text(value, font, align, baseline) {
    this._super_.call(this)
    this.font = font || new Font()
    this.align = 'start'
    this.baseline = 'alphabetic'
    this.value = ''
}

Text.prototype = extend(Displayable, {
    draw: function (context, globals) {
        // TODO DRAW OVERRIDE
    }
})
