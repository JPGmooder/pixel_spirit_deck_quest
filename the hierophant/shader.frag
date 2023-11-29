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

    float fill(float x, float size) { 
    return 1. - step(size, x);
    }

    float drawRect(vec2 st, vec2 size)
    {
    return max(abs(st.x / size.x), abs(st.y / size.y));
    }

    float drawKrest(vec2 st, float size)
    {
    vec2 s = vec2(0.25, size);
    float krest = min(drawRect(st, s.xy), drawRect(st, s.yx));
  
    return krest;
    }

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 dst = st;
    st = st * 2. - 1.; // уменьшаем плоскость до размеров макета
    float krest = drawKrest(st, 1.);
    float rect = drawRect(st, vec2(1.));
    vec3  color = vec3( fill(rect, 0.5));
    color *= step(0.4, fract(krest * 4.));
    color *= step(1. , krest);
    color += vec3(fill(krest, 0.5)); // крест внутри
    color  += vec3(drawLine(drawRect(st, vec2(1.)), 0.8, 0.02)); // внешняя обводка
    color  += vec3(drawLine(drawRect(st, vec2(1.)), 0.7, 0.05)); // внутренняя обводка
    gl_FragColor = vec4(color, 1.0);
}