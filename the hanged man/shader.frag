/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
 const float PI = 3.14159;


    float drawLine(vec2 st, float weigth, bool main)
    {
     float axis = st.x + weigth; 
     if (!main)
     {
        axis = 1.2 - axis;
     }  
     return  step(st.y,  axis) 
     - step(st.y + weigth + 0.1 , axis);
    }

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color =  vec3(drawLine(st, 0.1, true) + drawLine(st, 0.1, false)  );
    gl_FragColor = vec4(color, 1.0);
}