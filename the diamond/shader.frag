/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float stroke(float x, float s, float w) { // 04
    float d = step(s, x + w / 2.) - step(s, x - w / 2.);
    return clamp(d, 0., 1.);
}
float reverse(float matcher, float figure)
{
    return mix(figure, 1. - figure, matcher);
}
float fill(float figure, float size)
{
    return 1. - step(size, figure);
}

float drawDiamond(vec2 st, vec2 center)
{
   float result = max(abs(st.x - center.x) * 1.6 + abs(st.y - center.y) , -(st.y - center.y)  );
   return result;
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st = st * 2. -1.; 

    float diamond = drawDiamond(st, vec2(0., -0.));

    vec3 color = vec3(fill(diamond, 0.35));
    color += stroke(diamond, 0.43, 0.03);
    color += stroke(diamond, 0.5, 0.02);
    gl_FragColor = vec4(color, 1.0);
}