/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif

 uniform vec3 iResolution;

void main() {
    vec3 color = vec3(0);

    gl_FragColor = vec4(color, 1.0);
}