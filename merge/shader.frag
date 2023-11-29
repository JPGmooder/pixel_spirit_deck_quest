/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float reverse(float matcher, float figure)
{
    return mix(figure, 1. - figure, matcher);
}
float fill(float figure, float size)
{
    return 1. - step(size, figure);
}

float drawCircle(vec2 st, vec2 center)
{
   return   distance(center, st);
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    st = st * 2. - 1.;
    float circle = drawCircle(st, vec2(0.2, 0.));
    float lcircle = drawCircle(st, vec2(-0.2, 0.));
    float lline = reverse(fill(lcircle, 0.3) - fill(lcircle, 0.27), fill(circle, 0.3));
    vec3 color = vec3(lline);
    gl_FragColor = vec4(color, 1.0);
}