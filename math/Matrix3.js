/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
 
flux.Matrix3 = function (m1, m2, m3, m4, m5, m6, m7, m8, m9)
{
    this.elements = new Float32Array([
        m1||0, m2||0, m3||0,    
        m4||0, m5||0, m6||0,
        m7||0, m8||0, m9||0
    ]);   
};
flux.Matrix3.prototype = {
    elements: null
};

