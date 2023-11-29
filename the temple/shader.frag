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

float drawTriangle(vec2 st, vec2 center)
{
   float result = max(abs(st.x - center.x) * 1.6 + (st.y - center.y) , -(st.y - center.y)  );
   return result;
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 rst = st;
    rst.y = 1.- st.y;
    st = st * 2. -1.; 
    rst = rst * 2. -1.; 


    float rtriangle = drawTriangle(rst, vec2(0., 0.));
    float triangle = drawTriangle(st, vec2(0., 0.3));

    vec3 color = vec3(fill(rtriangle, 0.6) - fill(triangle, 0.3));
    gl_FragColor = vec4(color, 1.0);
}