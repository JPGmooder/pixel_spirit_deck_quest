/* Main function, uniforms & utils */
#ifdef GL_ES
    precision mediump float;
#endif
 uniform vec2 u_resolution;
uniform float u_time;
 const float PI = 3.14159;


    float drawLine(float x, float s, float w)
    {
    float line = step(s, x + w / 2.) - step(s, x - w /2.);
    return line;
    }

    float drawRect(vec2 st, vec2 size)
    {
    return max(abs(st.x / size.x), abs(st.y / size.y));
    }


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 dst = st;
    st = st * 2. - 1.; // уменьшаем плоскость до размеров макета
    vec3  color = vec3(drawLine(drawRect(st, vec2(0.7)), 0.7, 0.15));
    color += drawLine(drawRect(st, vec2(0.15)), 0.1, 1.);
    gl_FragColor = vec4(color, 1.0);
}