/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Line = function(p1, p2)
{
	if(this instanceof flux.Line)

		this.setPoints(p1, p2);

};
flux.Line.prototype =
{
	setPoints: function(p1, p2)
	{
		this.points = [p1 || new flux.V2(0, 0), p2 || new flux.V2(0, 0)];
	},
	getPoints: function()
	{
		return [this.points[1], this.points[2]];
	}
};
