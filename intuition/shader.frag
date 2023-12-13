/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

#define PI 3.14159265359


float drawTriangle(vec2 st, vec2 center, float width)
{
   float result = max(abs(st.x - center.x) * 1.5 + (st.y * width  - center.y) , -(st.y - center.y)  );
   return result;
}


mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float fill(float x, float size) {
    return  step(x, size);
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st = (st * 2. - 1.);
    vec2 translate = vec2(cos(u_time),sin(u_time));
    st = rotate2d( sin(-0.15)*PI ) * st;
    float triangle = drawTriangle(st, vec2(0., -1.), 3.);
        float mtriangle = drawTriangle(st, vec2(0.), 1.);

    vec3 color = vec3( fill(mtriangle, 0.45)); 
    color -= fill(triangle, .8);
    gl_FragColor = vec4(color, 1.0);
}