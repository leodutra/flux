/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Geometry = function()
{
	if(this instanceof flux.Geometry)
	{
		this.points = [];
		this.lines = [];
		this.faces = [];
	}
};
