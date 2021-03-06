function Rectangle(x, y, width, height) {
    this.x = x || 0
    this.y = y || 0
    this.width = width || 0
    this.height = height || 0
}
Rectangle.prototype = {

    set: function (rect) {
      this.x = rect.x
      this.y = rect.y
      this.width = rect.width
      this.height = rect.height
      return this
    },

    setXY: V2.prototype.setXY,
    setXYV2: V2.prototype.set,

    setSize: function (width, height) {
        this.width = width
        this.height = height
        return this
    },

    clone: function () {
        return new Rectangle(this.x, this.y, this.width, this.height)
    },

    inflate: function (width, height) {
        this.x -= width
        this.width += 2 * width
        this.y -= height
        this.height += 2 * height
        return this
    },

    inflateV2: function (v2) {
        return this.inflate(v2.x, v2.y)
    },

    inflateScalar: function (s) {
        return this.inflate(this.width * s, this.height * s)
    },

    union: function (rect) {
        /* IMPORTANT: strings in a more/less comparison return false
         * keep the original value FROM "THIS" OBJECT IN CASE OF FALSE,
         * avoiding the use of <instanceof> or <typeof o === 'number'>
         */
        this.x = rect.x < this.x ? rect.x : this.x
        this.y = rect.y < this.y ? rect.y : this.y
        this.width = this.width < rect.width ? rect.width : this.width
        this.height = this.height < rect.height ? rect.height : this.height
        return this
    },
    contains: function (x, y) {
        return !(x < this.x || y < this.y || this.width < x || this.height < y)
    },
    containsV2: function (v2) {
        return !(v2.x < this.x || v2.y < this.y || this.x + this.width < v2.x || this.y + this.height < v2.y)
    },
    containsRect: function (rect) {
        return !(rect.x < this.x || rect.y < this.y || this.x + this.width < rect.x + rect.width || this.y + this.height < rect.y + rect.height)
    },
    intersects: function (rect) // TODO benchmark Rect.intersects.
    {
        return !(min(this.x + this.width, rect.x + rect.width) - max(this.x, rect.x) < 0 || min(this.y + this.height, rect.y + rect.height) - max(this.y, rect.y) < 0)
    },
    equals: function (rect) {
        return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height
    },
    toJSON: function () {
        return '{x:' + this.x + ', y:' + this.y + ', width:' + this.width + ', height:' + this.height + '}'
    },
    toString: function () {
        return this.toJSON()
    }
}
