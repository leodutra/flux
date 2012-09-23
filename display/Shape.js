/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Shape = function ()
{
    if (this instanceof flux.Shape)
    {
        this.Displayable.call(this);
    }
};

_ = flux.Shape.prototype = new flux.Displayable();