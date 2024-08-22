// empty - 4mat
Bpm = 120,
Hz = 44100,
tf = abs((((t/Hz/180*3)*256*128)*Bpm)),

C = 261.63/(4/2.972),
Db = 277.18/(4/2.972),
D = 293.66/(4/2.972),
Eb = 311.13/(4/2.972),
E = 329.63/(4/2.972),
F = 349.23/(4/2.972),
Gb = 369.99/(4/2.972),
G = 392.00/(4/2.972),
Ab = 415.30/(4/2.972),
A = 440.00/(4/2.972),
Bb = 466.16/(4/2.972),
B = 493.88/(4/2.972),

M = [E,E,A,A,C*2,D*2,F,F][(tf/2>>16)%8]/256,
m1 = ([E,D,C,C,E,D,A/2,A/2][(tf/2>>16)%8])/256,
mx = ([4.75,5,5,5,4.75,5,4.75,4.75][(tf/2>>16)%8]),
m2 =(([G,Gb,D,D,D,D,G,Gb,D,D,D,D,G,Gb,C,C,C,C,C,C,C,C,C,C,G,Gb,D,D,D,D,G,Gb,D,D,D,D,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,G,Gb,A,A,A,A,G,Gb,B,B,B,B,G,Gb,C,C,C,C,C,C,C,C,C,C,G,Gb,D,D,D,D,G,Gb,D,D,D,D,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2,A/2][((tf*3/4)>>14)%96])*(([1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0][(tf>>14)%16])*([1,0][(tf>>18)%2])+([0,1][(tf>>18)%2]))+(([0,0,0,0,0,0,0,0,0,0,0,0,0,0,A,G,0,0,0,0,0,0,0,0,0,0,0,0,0,0,A,G][(tf>>13)%32])/2)*([1,0][(tf>>18)%2])+([0,1][(tf>>18)%2]))*t/64&128,
m = 64,

(
+(t*M/2*([2,4,0,0,2,4,0,3][(tf/2>>13)%8])/4%256) // SawBass
+(t*E/256*([1,1.5,2,(5+(1/3))/2,4,2,(5+(1/3))/2,2][(tf/2>>12)%8])%256) // SawLead
+floor((t*(m1*([4,mx,6][(tf/2>>9)%3]))/128%4)**2/8)*128 //Pulse
+(tf&2097152?m2%256:0) // SquareLead
)/3