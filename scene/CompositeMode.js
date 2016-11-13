CompositeMode = {

    SOURCE_OVER: 'source-over', // This is the default setting and draws new shapes on top of the existing canvas content.

    DESTINATION_OVER: 'destination-over', // New shapes are drawn behind the existing canvas content.

    SOURCE_IN: 'source-in', // The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent

    DESTINATION_IN: 'destination-in', // The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.

    SOURCE_OUT: 'source-out', // The new shape is drawn where it doesn't overlap the existing canvas content

    DESTINATION_OUT: 'destination-out', // The existing content is kept where it doesn't overlap the new shape.

    SOURCE_ATOP: 'source-atop', // The new shape is only drawn where it overlaps the existing canvas content.

    DESTINATION_ATOP: 'destination-atop', // The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.

    LIGHTER: 'lighter', // Where both shapes overlap the color is determined by adding color values.

    DARKER: 'darker', // Where both shapes overlap the color is determined by subtracting color values.

    XOR: 'xor', // Shapes are made transparent where both overlap and drawn normal everywhere else.

    COPY: 'copy' // Only draws the new shape and removes everything else.
}
