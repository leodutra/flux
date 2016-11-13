function Face(vertices) {
    color = DEF_COLOR
    this.setVertices(vertices)
}

Face.prototype = {

    set: function (face) {
        var vertices = face.vertices
        var i = vertices.length
        var self = Array(i)
        while (i--) {
            self[i] = vertices[i].clone()
        }
        this.vertices = self
    },

    setVertices: function (vertices) {
        this.vertices = vertices || []
        return this
    },

    getVertices: function () {
        return this.vertices
    },

    getEdges: function () {
        var vertices = this.vertices
        var quantity = vertices.length
        if (quantity < 3) {
            return []
        }
        var edges = Array(quantity)
        var color = this.color
        for (var i = 0 i < quantity) {
            edges[i] = new Line(vertice[i], ++i === quantity ? vertice[0] : vertice[i], color, 1)
        }
    }
}
