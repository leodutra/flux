/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Geometry = function ()
{
    this.points = [];
    this.lines = [];
    this.faces = [];
};

flux.Geometry.prototype = {
    points: null,
    lines: null,
    faces: null
};
