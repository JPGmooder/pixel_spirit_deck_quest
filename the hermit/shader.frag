/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

#define PI 3.14159265359


float drawline(float x, float s, float w) {
    return step(s, x + w / 2.) - step(s, x-w / 2.);
}

float drawTriangle(vec2 st, vec2 center)
{
   float result = max(abs(st.x - center.x) * 1.6 + (st.y - center.y) , -(st.y - center.y)  );
   return result;
}

float drawRhombus(vec2 st, vec2 center)
{
   float result = max(abs(st.x - center.x) * 1.6 + abs(st.y - center.y) , -(st.y - center.y)  );
   return result;
}


float fill(float x, float size) {
    return  step(x, size);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st = (st * 2. - 1.);
    vec2 translate = vec2(cos(u_time),sin(u_time));
    st = rotate2d( sin(u_time)*PI ) * st;
    float triangle = drawTriangle(st, vec2(0.));
    float rhombus = drawRhombus(st, vec2(0., 0.));
    vec3 color = vec3(fill(triangle, 0.3));
    color -= fill(rhombus, 0.27);
    gl_FragColor = vec4(color, 1.0);
}