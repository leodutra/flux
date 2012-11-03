/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Face = function (vertices)
{
    this.setVertices(vertices);
};

flux.Face.prototype = extend(flux.Geometry, {

    vertices: null,

    set: function (face)
    {
        var vertices = face.vertices;
        var i = vertices.length;
        var self = [];
        while (i--)
        {
            self[i] = vertices[i].clone();
        }
        this.vertices = self;
    },

    setVertices: function (vertices)
    {
        this.vertices = vertices || [];
        return this;
    },

    getVertices: function ()
    {
        return this.vertices;
    },

    getEdges: function ()
    {
        var vertices = this.vertices;
        var quantity = vertices.length;
        if (quantity < 3) {
            return [];   
        }
        var edges = [];
        for (var i = 0; i < quantity;)
        {
            edges.push(new flux.Line(vertice[i], ++i === quantity ? vertice[0] : vertice[i]));
        }
    }
});