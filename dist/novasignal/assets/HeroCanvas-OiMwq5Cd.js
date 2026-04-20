import{r as n,u as g,j as r,C as I,P as L}from"./three-react-CKcKJTpi.js";import{e as P,l as A,m as x,n as z,o as b,h as N,p as V,M as H,q as D,r as U,g as W}from"./three-core-Ccm5QmxT.js";const f=e=>{const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)};function X({count:e=3e3,mousePosition:t}){const o=n.useRef(null),i=n.useRef({x:0,y:0}),{positions:c,colors:p,sizes:s}=n.useMemo(()=>{const u=new Float32Array(e*3),h=new Float32Array(e*3),M=new Float32Array(e),S=new P("#00F0FF"),w=new P("#FF00AA"),y=new P("#FFD700");for(let m=0;m<e;m++){const d=m*3,k=f(m+1),_=f(m+e+1),E=f(m+e*2+1),B=f(m+e*3+1),G=f(m+e*4+1),T=k*Math.PI*2,j=Math.acos(2*_-1),F=3+E*8;u[d]=F*Math.sin(j)*Math.cos(T),u[d+1]=F*Math.sin(j)*Math.sin(T),u[d+2]=F*Math.cos(j);const R=B;let v;R<.5?v=S.clone().lerp(w,R*2):v=w.clone().lerp(y,(R-.5)*2),h[d]=v.r,h[d+1]=v.g,h[d+2]=v.b,M[m]=G*2+.5}return{positions:u,colors:h,sizes:M}},[e]),l=n.useMemo(()=>{const u=new A;return u.setAttribute("position",new x(c,3)),u.setAttribute("color",new x(p,3)),u.setAttribute("size",new x(s,1)),u},[c,p,s]),a=n.useMemo(()=>new z({uniforms:{uTime:{value:0},uMouse:{value:new N(0,0)}},vertexShader:`
        uniform float uTime;
        uniform vec2 uMouse;
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          
          vec3 pos = position;
          
          // Gentle wave motion
          pos.x += sin(uTime * 0.5 + position.y * 0.5) * 0.1;
          pos.y += cos(uTime * 0.3 + position.x * 0.5) * 0.1;
          pos.z += sin(uTime * 0.4 + position.z * 0.3) * 0.1;
          
          // Mouse interaction - particles move away from mouse
          float dist = distance(pos.xy, uMouse * 5.0);
          float influence = smoothstep(3.0, 0.0, dist);
          vec2 dir = normalize(pos.xy - uMouse * 5.0);
          pos.xy += dir * influence * 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation
          gl_PointSize = size * (300.0 / -mvPosition.z);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        
        void main() {
          // Circular particle
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          if (dist > 0.5) discard;
          
          // Glow effect
          float glow = 1.0 - dist * 2.0;
          glow = pow(glow, 1.5);
          
          gl_FragColor = vec4(vColor, glow);
        }
      `,transparent:!0,blending:b,depthWrite:!1}),[]);return g(u=>{if(o.current){i.current.x+=(t.x*.5-i.current.x)*.05,i.current.y+=(t.y*.5-i.current.y)*.05;const h=o.current.material;h.uniforms.uTime.value=u.clock.elapsedTime,h.uniforms.uMouse.value.set(i.current.x,i.current.y),o.current.rotation.y=u.clock.elapsedTime*.02}}),n.useEffect(()=>()=>{l.dispose(),a.dispose()},[l,a]),r.jsx("points",{"code-path":"src/components/three/ParticleField.tsx:153:5",ref:o,geometry:l,material:a})}function Y({count:e=5}){const t=n.useRef(null),o=n.useMemo(()=>Array.from({length:e},(i,c)=>({id:c,radius:2+c*1.5,speed:.3+c*.1,offset:c*Math.PI*2/e,color:c%2===0?"#00F0FF":"#FF00AA"})),[e]);return r.jsx("group",{"code-path":"src/components/three/SignalRings.tsx:23:5",ref:t,children:o.map(i=>r.jsx(q,{"code-path":"src/components/three/SignalRings.tsx:25:9",radius:i.radius,speed:i.speed,offset:i.offset,color:i.color},i.id))})}function q({radius:e,speed:t,offset:o,color:i}){const c=n.useRef(null),p=n.useMemo(()=>new V(e,.02,16,100),[e]),s=n.useMemo(()=>new H({color:i,transparent:!0,opacity:.6,side:D}),[i]);return g(l=>{if(c.current){const a=l.clock.elapsedTime,u=c.current.material;u.opacity=.3+Math.sin(a*t+o)*.3,c.current.rotation.x=Math.sin(a*.1+o)*.2,c.current.rotation.y=a*.05+o}}),r.jsx("mesh",{"code-path":"src/components/three/SignalRings.tsx:75:5",ref:c,geometry:p,material:s})}const C=e=>{const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)};function $({count:e=1e3}){const t=n.useRef(null),{positions:o,sizes:i}=n.useMemo(()=>{const s=new Float32Array(e*3),l=new Float32Array(e);for(let a=0;a<e;a++){const u=a*3,h=C(a+1),M=C(a+e+1),S=C(a+e*2+1),w=C(a+e*3+1),y=h*Math.PI*2,m=Math.acos(2*M-1),d=15+S*25;s[u]=d*Math.sin(m)*Math.cos(y),s[u+1]=d*Math.sin(m)*Math.sin(y),s[u+2]=d*Math.cos(m),l[a]=w*1.5+.5}return{positions:s,sizes:l}},[e]),c=n.useMemo(()=>{const s=new A;return s.setAttribute("position",new x(o,3)),s.setAttribute("size",new x(i,1)),s},[o,i]),p=n.useMemo(()=>new z({uniforms:{uTime:{value:0}},vertexShader:`
        uniform float uTime;
        attribute float size;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          
          // Twinkle effect
          float twinkle = sin(uTime * 2.0 + position.x * 10.0 + position.y * 5.0) * 0.5 + 0.5;
          vAlpha = 0.3 + twinkle * 0.7;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (200.0 / -mvPosition.z);
        }
      `,fragmentShader:`
        varying float vAlpha;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          if (dist > 0.5) discard;
          
          float glow = 1.0 - dist * 2.0;
          glow = pow(glow, 2.0);
          
          gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * glow);
        }
      `,transparent:!0,blending:b,depthWrite:!1}),[]);return g(s=>{if(t.current){const l=t.current.material;l.uniforms.uTime.value=s.clock.elapsedTime,t.current.rotation.y=s.clock.elapsedTime*.005}}),n.useEffect(()=>()=>{c.dispose(),p.dispose()},[c,p]),r.jsx("points",{"code-path":"src/components/three/Starfield.tsx:109:5",ref:t,geometry:c,material:p})}function J({intensity:e=1}){const t=n.useRef(null),o=n.useRef(null),i=n.useMemo(()=>new H({color:"#FFD700",transparent:!0}),[]),c=n.useMemo(()=>new z({uniforms:{uTime:{value:0},uIntensity:{value:e}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float dist = distance(vUv, vec2(0.5));
          
          // Pulsing glow
          float pulse = sin(uTime * 2.0) * 0.3 + 0.7;
          
          // Color gradient from center
          vec3 centerColor = vec3(1.0, 0.84, 0.0); // Gold
          vec3 outerColor = vec3(0.0, 0.94, 1.0);  // Cyan
          vec3 magentaColor = vec3(1.0, 0.0, 0.67); // Magenta
          
          vec3 color = mix(centerColor, outerColor, dist * 2.0);
          color = mix(color, magentaColor, sin(uTime + dist * 5.0) * 0.2 + 0.2);
          
          // Fade out at edges
          float alpha = (1.0 - dist * 2.0) * 0.5 * pulse * uIntensity;
          
          gl_FragColor = vec4(color, max(0.0, alpha));
        }
      `,transparent:!0,blending:b,depthWrite:!1,side:U}),[e]);return g(p=>{const s=p.clock.elapsedTime;if(t.current){const l=t.current.material,a=1+Math.sin(s*2)*.1;t.current.scale.setScalar(a),l.opacity=.8+Math.sin(s*3)*.2}if(o.current){const l=o.current.material;l.uniforms.uTime.value=s;const a=1.5+Math.sin(s*1.5)*.2;o.current.scale.setScalar(a)}}),r.jsxs("group",{"code-path":"src/components/three/SupernovaCore.tsx:90:5",children:[r.jsxs("mesh",{"code-path":"src/components/three/SupernovaCore.tsx:92:7",ref:t,children:[r.jsx("sphereGeometry",{"code-path":"src/components/three/SupernovaCore.tsx:93:9",args:[.3,32,32]}),r.jsx("primitive",{"code-path":"src/components/three/SupernovaCore.tsx:94:9",object:i,attach:"material"})]}),r.jsxs("mesh",{"code-path":"src/components/three/SupernovaCore.tsx:98:7",ref:o,children:[r.jsx("sphereGeometry",{"code-path":"src/components/three/SupernovaCore.tsx:99:9",args:[1,32,32]}),r.jsx("primitive",{"code-path":"src/components/three/SupernovaCore.tsx:100:9",object:c,attach:"material"})]})]})}function K({mousePosition:e}){const t=n.useRef(null),o=n.useRef(new W(0,0,8));return g(()=>{t.current&&(o.current.x+=(e.x*2-o.current.x)*.02,o.current.y+=(e.y*1-o.current.y)*.02,t.current.position.x=o.current.x,t.current.position.y=o.current.y,t.current.lookAt(0,0,0))}),r.jsx(L,{"code-path":"src/components/three/HeroCanvas.tsx:31:5",ref:t,makeDefault:!0,position:[0,0,8],fov:60})}function Z(){const[e,t]=n.useState({x:0,y:0}),o=n.useRef(null);return n.useEffect(()=>{const i=p=>{if(o.current){const s=o.current.getBoundingClientRect(),l=((p.clientX-s.left)/s.width-.5)*2,a=-((p.clientY-s.top)/s.height-.5)*2;t({x:l,y:a})}},c=p=>{if(o.current&&p.touches[0]){const s=o.current.getBoundingClientRect(),l=((p.touches[0].clientX-s.left)/s.width-.5)*2,a=-((p.touches[0].clientY-s.top)/s.height-.5)*2;t({x:l,y:a})}};return window.addEventListener("mousemove",i,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),()=>{window.removeEventListener("mousemove",i),window.removeEventListener("touchmove",c)}},[]),r.jsx("div",{"code-path":"src/components/three/HeroCanvas.tsx:73:5",ref:o,className:"absolute inset-0 z-0",children:r.jsxs(I,{"code-path":"src/components/three/HeroCanvas.tsx:74:7",gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},dpr:[1,2],children:[r.jsx(K,{"code-path":"src/components/three/HeroCanvas.tsx:82:9",mousePosition:e}),r.jsx("ambientLight",{"code-path":"src/components/three/HeroCanvas.tsx:85:9",intensity:.1}),r.jsx($,{"code-path":"src/components/three/HeroCanvas.tsx:88:9",count:800}),r.jsx(Y,{"code-path":"src/components/three/HeroCanvas.tsx:91:9",count:5}),r.jsx(X,{"code-path":"src/components/three/HeroCanvas.tsx:94:9",count:2500,mousePosition:e}),r.jsx(J,{"code-path":"src/components/three/HeroCanvas.tsx:97:9",intensity:1})]})})}function ee(){return r.jsx("div",{"code-path":"src/components/three/HeroCanvas.tsx:105:5",className:"absolute inset-0 z-0 flex items-center justify-center bg-void",children:r.jsxs("div",{"code-path":"src/components/three/HeroCanvas.tsx:106:7",className:"text-center",children:[r.jsx("div",{"code-path":"src/components/three/HeroCanvas.tsx:107:9",className:"h-12 w-12 animate-spin rounded-full border-4 border-cyan border-t-transparent"}),r.jsx("p",{"code-path":"src/components/three/HeroCanvas.tsx:108:9",className:"mt-4 text-sm font-mono text-stardust",children:"Initializing experience..."})]})})}export{ee as HeroCanvasFallback,Z as default};
