/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */


// TODO SHALL WRAP WEBGL, SVG AND 2D CONTEXT FOR EASY DRAWING

flux.GraphicContext = function (context2D)
{
    if (this instanceof flux.GraphicContext)
    {
        this.ctx = context2D;
    }
};

flux.GraphicContext.prototype = {
    
    
    
};