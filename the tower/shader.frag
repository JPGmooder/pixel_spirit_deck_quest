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

float drawLine(float x, float s, float w)
{
    float line = step(s, x + w / 2.) - step(s, x - w /2.);
    return line;
}


float fill(float x, float size)
{
    return 1.- step(size, x);
}

float drawRect(vec2 st, vec2 size)
{
    return max(abs(st.x / size.x), abs(st.y / size.y));
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    st = st * 2. - 1.;
    float rect = drawRect(st, vec2(0.4, 0.8));
    float line = drawLine(st.y + st.x , 0., 0.01);;
    vec3 color = vec3(reverse(fill(rect, 0.8), line));
    gl_FragColor = vec4(color, 1.0);
}