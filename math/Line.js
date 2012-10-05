/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Line = function(a, b)
{
    this.setPoints(a, b);
};
flux.Line.prototype =
{
    points: null,

	setPoints: function(a, b)
	{
		this.points = [a || new flux.V2(), b || new flux.V2()];
	},
    
	getPoints: function()
	{
		return this.points;
	},
    
    clone: function() {
        return new Line(this.points[0].clone(), this.points[1].clone());
    }
};
