/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
 const float PI = 3.14159;

float line(float x, vec2 st)
{
    return step(sin(x + cos(st.y * PI) * .15), st.x) 
    - step(sin(x + 0.1 + cos(st.y * PI) * .15), st.x) ;
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(line(0.3,  st)) + vec3(line(0.5,  st))  + vec3(line(0.7,  st));
    gl_FragColor = vec4(color, 1.0);
}