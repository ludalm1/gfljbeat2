a = (x,y) => [x[0]+y[0],x[1]+y[1]],
p = (x)   => x.map( (z) => (t/4*1.0595**(z+((t+P)/9/2**19|0)*3)+128)%256/40 ),
r = (x)   => a( p(q(x)), a( p([x-.1,x-.3]), p([x+.1,x+.2]) )),
u = (x)   => a( r(x), S>P&S<P*4|S>P*5?r(x+11.8):Z),
s = (x)   => u(x[T=(S>>45)%32]??-9e9),
w = (x)   => p(q(x)).map( x => (x*4&16)*1.8 ),
q = (x)   => [x,x],
Z = q(0),
P = 8<<16,
S = t%(P*9),

this.v??=0,
R=(w,i,s)=>(
    v++||(x=Array(8<<10).fill(0)),
    y=w[1]%256+x.shift(),
    x.push(y*s),
    [y*i+w[0]*.7,y*i+w[1]*.5]
),

A = [38,,,38,,,38,41,,,41,,,41,,,36,,,36,,,36,38,,,38,,,38],
B = [31,,,31,,,31,34,,,34,,,34,,,29,,,29,,,29,31,,,31,,,31,,29],
C = [46,,,46,,,46,46,,,46,,,48,,,45,,,45,,,45,46,,,46,,,46,,53],
D = [7,10,5,7],
E = [43,38,50,46,,46,45,41],
	F = [,38,41,38,36,41,38,,],
	G = [43,,45,46,48,50,43],
	E = E.concat(F,E,G),
H = S<P*5?[8,,3,]:[8,4,2,1],

a(
	a(
		R(a(
			a(
				a(
					s(A),
					s(B)
				),
				a(
					s(B.map(x=>x-12)),
					s(C)
				)
			),
			S>P*4?q(w(E[T%32])[0]*(H[(4*t>>45)%4]??0)*.1):Z
		),.5,-.5),
		S>P*6|S<P*4?T&1?a(w(D[T>>3]),w(D[T>>3]-11.9)):Z:Z
	),
	a(
		S>P*2&S<P*4|S>P*6?~T&1?q((1e2**(t*2%(8<<12))**.05)&32):Z:Z,
		q(random()*(256-(t>>4)%256)*[4,2,8,3][(t>>44)%4]/75)
	)
)