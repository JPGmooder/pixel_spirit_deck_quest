/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
  uniform vec2 u_mouse;

 const float PI = 3.14159;


float drawCircle(vec2 st, vec2 center, float size)
{
    return step(size, distance(st, center));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
        vec2 sm = u_mouse.xy / u_resolution.xy;

    vec3 color =  vec3(drawCircle(st, vec2(0.6, 0.55), 0.23) - drawCircle(st, sm.xy, 0.3) );
    gl_FragColor = vec4(color, 1.0);
}