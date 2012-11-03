/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Geometry = function() {};

flux.Geometry.prototype = extend(flux.V2, {
    width: 1,
    color: DEF_COLOR,
    cap: DEF_LINE_CAP,
    joinStyle: DEF_JOIN_STYLE,
    mitterLimit: DEF_MITTER_LIMIT
});
