# Microphone audio visualizer

A microphone visualizer prototype for input voice commands in a UI display.

I designed this prototype to showcase the visual and animation intention of a voice UI. It helped as the base design for voice interactions and to guide the developers in the desired direction.

![Image of description](readme-content/description4.gif)

## Reconstructing the animation

### Place vertices

Microphone activity level is mapped into multiple vertices drawn in a circumference using Polar coordinates. Each vertex responds slightly different to the microphone level using a limited random value. A polygon shape is created from these vertices.

![Image of description](readme-content/description1.gif)

### Bezier curves

The vertices are used as control points to create bezier curves, these connect with each other in a loop to form an oval shape that replaces the polygon.

![Image of description](readme-content/description2.gif)

### Tangential movement

Vertex movement is adjusted to move tangentially with each counterpart, as a result the oval bezier curves should distort with an organic motion.

![Image of description](readme-content/description3.gif)

## Non-interactive animation

I created a [non-interactive animation](https://gesoto.github.io/microphone-audio-visualizer/reference-animation/soundviz.html) to be used as a fallback, the animation was created manually in After Effects and made available as JSON to be rendered by web technologies.

