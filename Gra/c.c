#include <stdio. h>

int main()
{
    int a,b,d;

    printf("podaj liczby a i b : ");
    scanf("%d %d",&a,&b);
    printf("NWD(%d %d)= " a,b);

    d=a%b;

    while(d!=0){
        a=b;
        b=d;
        d=a%b:

    }

    printf("%d\n",b)

    return(0)
}