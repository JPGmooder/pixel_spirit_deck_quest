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
   float offset = 0.2;
   vec2 result =   max(abs(vec2(st.y, st.x - offset)), abs(vec2(st.y, st.x + offset)));
   return   distance(center, result);
}



void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    st = st * 2. - 1.;
    float circle = drawCircle(st, vec2(0., 0.));
    float line = step(st.x, -st.y);
    vec3 color = vec3(reverse(fill(circle, 0.5), line));

    gl_FragColor = vec4(color, 1.0);
}