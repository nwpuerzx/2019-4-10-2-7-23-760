#include <stdio.h>
int main() 
{
     
    double a,b,c;
    int t,n;
    scanf("%lf%d",&a,&b);
    if (s<=2) 
        c=6+0.25*b;
    else if(s>2 && s<=10) 
        c=6+0.8*(a-2)+0.25*b;
    else if(s>8)
        c=10.8+1.2*(a-8)+0.25*b;
    if c >= int(c)+0.5
        c = c+1
    else c= int(c)
    printf("%.lf\n",c);
    return 0;
}
