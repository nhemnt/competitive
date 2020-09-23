  // https://www.hackerrank.com/challenges/extra-long-factorials/problem
// Complete the extraLongFactorials function below.
void extraLongFactorials(int n) {
    int arr[100000] = {0};
    int q = 2;
    arr[0]= 1;
    int x =0;
    int len = 1;
    int num = 0;
    while(q<= n){
        x= 0;
        num =0;
        while(x < len){
            arr[x] = (arr[x]*q) + num;
            num = arr[x]/10;
            arr[x] = arr[x]%10;
            x++;
        }
        while(num!=0){
            arr[len] = num%10;
            num = num/10;
            len++;
        }
        q++;
    }
    len--;
    while(len>=0)
    {
        cout<<arr[len];
        len = len-1;
    }
}
