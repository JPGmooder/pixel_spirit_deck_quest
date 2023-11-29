/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
 const float PI = 3.14159;


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color =  vec3(step(st.y, st.x + 0.1) - step(st.y + 0.2 , st.x + 0.1));
    gl_FragColor = vec4(color, 1.0);
}