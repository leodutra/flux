function Shape() {
    this._super_.call(this)
}

Shape.prototype = extend(Displayable, {
    draw: function (context, globals) {

    }
})
