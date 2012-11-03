/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.CanvasWrap = function (width, height)
{ 
    flux.Displayable.call(this);
    var e = this._canvas = document.createElement('canvas');
    e.width = width;
    e.height = height;
};

flux.CanvasWrap.prototype = extend(flux.Displayable(), {
    
    _canvas: null,
    
    getContext2D: function() {
        return this._canvas.getContext('2d');
    },
    
    getCanvas: function() {
        return this._canvas;
    },
    
    draw: function(context, relative) {
        context.drawImage(
            this._canvas,
            relative.x + this.x,
            relative.y + this.y,
            this._element.width * (relative.scaleX * this.scaleX),
            this._element.height * (relative.scaleY * this.scaleY)
        );
    }
});