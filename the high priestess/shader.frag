/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
 const float PI = 3.14159;


float drawCircle(vec2 st, vec2 center, float size)
{
    return step(size, distance(st, center));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color =  vec3(drawCircle(st, vec2(0.5), 0.2) - drawCircle(st, vec2(0.5), 0.21) );
    gl_FragColor = vec4(color, 1.0);
}