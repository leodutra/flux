/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Sprite = function (width, height)
{
    flux.CanvasWrap.call(this);
};

_ = flux.Sprite.prototype = new flux.CanvasWrap();
_.draw = function(context, relative) {
    // TODO DRAW OVERRIDE
};