this.dr||(
dr=1,
zzfxV=.5,
zzfxR=22050,
zzfxG=(q=1,k=.05,c=220,e=0,t=0,u=.1,r=0,F=1,v=0,z=0,w=0,A=0,l=0,B=0,x=0,G=0,d=0,y=1,m=0,C=0)=>{let b=2*PI,H=v*=500*b/zzfxR**2,I=(0<x?1:-1)*b/4,D=c*=(1+2*k*random()-k)*b/zzfxR,Z=[],g=0,E=0,a=0,n=1,J=0,K=0,f=0,p,h;e=99+zzfxR*e;m*=zzfxR;t*=zzfxR;u*=zzfxR;d*=zzfxR;z*=500*b/zzfxR**3;x*=b/zzfxR;w*=b/zzfxR;A*=zzfxR;l=zzfxR*l|0;for(h=e+m+t+u+d|0;a<h;Z[a++]=f)++K%(100*G|0)||(f=r?1<r?2<r?3<r?sin((g%b)**3):max(min(tan(g),1),-1):1-(2*g/b%2+2)%2:1-4*abs(round(g/b)-g/b):sin(g),f=(l?1-C+C*sin(2*PI*a/l):1)*(0<f?1:-1)*abs(f)**F*q*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-y):a<e+m+t?y:a<h-d?(h-a-d)/u*y:0),f=d?f/2+(d>a?0:(a<h-d?1:(h-a)/d)*Z[a-d|0]/2):f),p=(c+=v+=z)*sin(E*x-I),g+=p-p*B*(1-1E9*(sin(a)+1)%2),E+=p-p*B*(1-1E9*(sin(a)**2+1)%2),n&&++n>A&&(c+=w,D+=w,n=0),!l||++J%l||(c=D,v=H,n=n||1);return Z},
zzfxM=zzfxM=(n,f,t,e=125)=>{let l,o,z,r,g,h,x,a,u,c,d,i,m,p,G,M=0,R=[],b=[],j=[],k=0,q=0,s=1,v={},w=zzfxR/e*60>>2;for(;s;k++)R=[s=a=d=m=0],t.map((e,d)=>{for(x=f[e][k]||[0,0,0],s|=!!f[e][k],G=m+(f[e][0].length-2-!a)*w,p=d==t.length-1,o=2,r=m;o<x.length+p;a=++o){for(g=x[o],u=o==x.length+p-1&&p||c!=(x[0]||0)|g|0,z=0;z<w&&a;z++>w-99&&u?i+=(i<1)/99:0)h=(1-i)*R[M++]/2||0,b[r]=(b[r]||0)-h*q+h,j[r]=(j[r++]||0)+h*q+h;g&&(i=g%1,q=x[1]||0,(g|=0)&&(R=v[[c=x[M=0]||0,g]]=v[[c,g]]||(l=[...n[c]],l[2]*=2**((g-12)/12),g>0?zzfxG(...l):[])))}m=G});return[b,j]},
d=zzfxM([[.4,0,1e4,,,,,,,,,,.01,6.8,-.2],[1.4,0,84,,,,,.7,,,,.5,,6.7,1,.01],[,0,60,,.1,,2],[2,0,360,,,.12,2,2,,,,,,9,,.1],[.75,0,586,,,.25,6],[2,0,360,,,.375,2,3.5],[1.2,0,490,,.25,.45,,,,,,,.2,,,,,,,.1],[.75,0,386,,,.25,6]],[[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8,,20,8,8,20,8,,8,,20,,8,20,8,,8,,20,8,8,20,8,,8,,20,,8,20,8,,20],[,1,32,22,22,32,32,22,32,27,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,27,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,27,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,,20,,,20,,,20,20.5,20,,,20,,,20,,20,,,20,,,20,20.5,20,,,20,,,20,,20,,,20,,,20,20.5,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[4,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24.75,20.75,,,,,,,24.75,20.75,,,,21.75,20.75,,24.75,20.75,,,,,,,24.75,20.75,,,,21.75,20.75]],[[,-1,8,,,,,,8,,8,,,,,,8,,6,,,,,,6,,6,,,,,,6,,13,,,,,,13,,13,,,,,,13,,8,,,,,,8,,8,,,,,,8,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,18,6,6,18,6,,18,,18,,6,18,6,,6,,25,13,13,25,13,,13,,25,13.75,13,25,13,,25,,20,8,8,20,8,,8,,20,,8,20,8,,20],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[5,1,20,20,15,,18,,13,15,,11,,6,8,,18,20,11,11,13,,10,,13,18,23,23,22,,18,,13,,11,11,13,,25,,11,13,25,25,11,,13,,6,,8,,,,,,,,,,,,,,,,]],[[,-1,6,,,,,,6,,6,,,,,,6,,11,,,,,,11,,11,,,,,,11,,13,,,,,,13,,13,,,,,,13,,8,,,,,,8,,8,,,,,,8,,],[2,-1,,18,6,6,18,6,,6,,18,,6,18,6,,6,,23,11,11,23,11,,23,,23,,11,23,11,,11,,25,13,13,25,13,,13,,25,13.75,13,25,13,,25,,20,8,8,20,8,,8,,20,,8,20,8,,20],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[5,1,18,18,13,,11,,10,11,,11,,13,10,,11,13,23,23,22,,18,,13,,11,10,,18,11,,11,18,11,11,13,,25,,18,23,25,23,18,,23,23,18,,20,,20,18,11,,6,8,,,,,,,,,]],[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.5,20,,,20,,,20,,20,,,20,,,20,20.5],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,]],[[,-1,11,,,,,,11,,11,,,,,,11,,11,,,,,,11,,11,,,,,,11,,16,,,,,,16,,16,,,,,,16,,16,,,,,,16,,16,,,,,,16,,],[2,-1,,23,11,11,23,11,,11,,23,,11,23,11,,23,,23,11,11,23,11,,11,,23,,11,23,11,,11,,28,16,16,28,16,,16,,28,,16,28,16,,16,,28,16,16,28,16,,16,,28,,16,28,16,,16],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,15,,,,,,,,,,,,,,,,18,,,,,,,,,,,,15,18,15,18,18,,,,20,,,,,,,,,,,,23,,,,,,,,,,,,20,23,20,23]],[[,-1,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,15,,,,,,15,,15,,,,,,15,,15,,,,,,15,,15,,,,,,15,,],[2,-1,,25,13,13,25,13,,25,,25,,13,25,13,,13,,25,13,13,25,13,,25,,25,,13,25,13,,25,,27,15,15,27,15,,27,,27,,15,27,15,,15,,27,15,15,27,15,,27,,27,,15,27,15,,15],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,25,,,,,,,,,,,,,,,,,,,,,,,,,,,,20,23,25,,27,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[2,-1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[4,1,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,,,,,,,,,],[7,1,,,,,,,,,,,,,,,,,,,,,,,,,18,18,,18,13,13,10,10]],[[,-1,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,],[2,-1,,16,4,4,16,4,,16,,16,,4,16,4,,16,,16,4,4,16,4,,4,,16,,4,16,4,,4,,25,13,13,25,13,,13,,25,,13,25,13,,13,,25,13,13,25,13,,25,,25,,13,25,13,,13],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,4,,,,,,11,,,,,,16,,,,21,,,,,,20,,,,,,20,,,,11,,,,,,13,,,,,,13,,,,11,,,,,,13,,,13,,,11,11,13,13]],[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8,,18,6,6,18,6,,18,,18,,6,18,6,,18,,18,6,6,18,6,,18,,18,,6,18,6,,18],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,8,,,,,,18,,,,,,,,,,11,,,,,,22,,,,,,,,,,,,,,18,,,,,,,,,,,,18,18,18,18,18,18,18,18,20,20,20,20,18,18,18,18]],[[,-1,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,],[2,-1,,16,4,4,16,4,,16,,16,,4,16,4,,16,,16,4,4,16,4,,4,,16,,4,16,4,,4,,25,13,13,25,13,,13,,25,,13,25,13,,13,,25,13,13,25,13,,25,,25,,13,25,13,,13],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,4.25,,,,16,,16,,,,,,,,16,,,,18,,15,,,,13,,11,,,,,,1,,,,16,,16,,,,,,,,21,,,,23,,20,,,,18,,16,,11,,9,,]],[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8,,18,6,6,18,6,,18,,18,,6,18,6,,18,,18,6,6,18,6,,18,,18,,6,18,6,,18],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,11,,,,,,9,,,,,,8,,,,16,,,,,,15,,,,,,15,,,,6,,,,,,13,,,,,,18,,,,23,22.5,22.5,22.37,22.37,22.5,22.5,22.37,22.37,22.5,22.5,22.37,22.37,22.5,22.5,22.37]],[[,-1,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,],[2,-1,,16,4,4,16,4,,16,,16,,4,16,4,,16,,16,4,4,16,4,,4,,16,,4,16,4,,4,,25,13,13,25,13,,13,,25,,13,25,13,,13,,25,13,13,25,13,,25,,25,,13,25,13,,13],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,4,,,,,,,,,,,,,,,,,16,16,16,15,16,16,16,15,16,16,16,4,,6,,8,,,,,,,,,,,,,,,,,20,20,20,19,20,20,20,19,20,20,20,8,,9,,]],[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8,,18,6,6,18,6,,18,,18,,6,18,6,,18,,18,6,6,18,6,,18,,18,,6,18,6,,18],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,20,,,,,,21,,,,,,20,,,,16,,,,15,,11,,,,8,,,,,,6,,,,,,13,,,,,,18,,,,30,,,,,,25,,23,,22,,18,,13,,]],[[,-1,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,4,,,,,,4,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,13,,,,,,13,,],[2,-1,,16,4,4,16,4,,16,,16,,4,16,4,,16,,16,4,4,16,4,,4,,16,,4,16,4,,4,,25,13,13,25,13,,13,,25,,13,25,13,,13,,25,13,13,25,13,,25,,25,,13,25,13,,13],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,4.25,,3,,4,,11,,16,,,,23,,20,,8,,8.25,,20,,,,21,,,,23,,,,,,,,23,,,,21,,,,20,,8,8,8,1,3,,4,,8,,13,,16,,20,,21,,]],[[,-1,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,8,,,,,,8,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,6,,,,,,6,,],[2,-1,,20,8,8,20,8,,8,,20,,8,20,8,,20,,20,8,8,20,8,,8,,20,,8,20,8,,8,,18,6,6,18,6,,18,,18,,6,18,6,,18,,18,6,6,18,6,,18,,18,,6,18,6,,18],[,1,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32,32,22,22,32,32,22,32,22,32,22,22,32,32,22,32,32],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,],[6,1,11,,,,,,,,,,,,,,,,,23,23,23,22,23,21,,20,,15,,11,,8,,6,,,,,,8,,,,,,10,,,,11,,,,,,13,,,,,,16,,,,]],[[4,-1,15,15,15,,15,,15,15,,15,,15,15,,15,15,15,15,15,,15,,15,15,27,15,,15,15,,15,15,15,15,15,,15,,15,15,15,15,15,,15,15,15,,15,,15,15,15,,15,15,,,,,,,,,],[1,-1,20,,,20,,,20,22.5,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25,20,,,20,,,20,,20,,,20,,,20,20.25],[,-1,,22,22,,,22,,,,22,22,,,22,,,,22,22,,,22,,22,,22,22,,,22,,,,22,22,,,22,,22,,22,22,,,22,,,,22,22,,,22,,22,,22,22,,,22,,,],[3,-1,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,]]],[0,1,2,3,2,4,5,6,1,2,3,7,10,9,8,13,12,11,14,4,5,15,6]),
nn=v=>isNaN(v)?0:v
),
[nn(d[0][t]),nn(d[1][t])]