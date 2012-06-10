/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.BitmapData = function(width, height, backgroundColor) {
    if (this instanceof flux.BitmapData) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = Number(width)||0;
        this.canvas.height = Number(height)||0;
        if (backgroundColor) this.backgroundColor = backgroundColor;
    }
};

flux.BitmapData.prototype = {

    canvas: null,
    backgroundColor: 'transparent',

    getWidth: function() {
        return this.canvas.width;
    },

    getHeight: function() {
        return this.canvas.height;
    },

    getContext2D: function() {
        return this.canvas.getContext('2d');
    }
};