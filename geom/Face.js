/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Face = function (vertices)
{
    this.setVertices(vertices);
};

flux.Face.prototype = {

    vertices: null,
    
    color: DEF_COLOR,

    set: function (face)
    {
        var vertices = face.vertices;
        var i = vertices.length;
        var self = Array(i);
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
        var edges = Array(quantity);
        var color = this.color;
        for (var i = 0; i < quantity;)
        {
            edges[i] = new flux.Line(vertice[i], ++i === quantity ? vertice[0] : vertice[i], color, 1);
        }
    }
};