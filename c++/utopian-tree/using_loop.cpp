// https://www.hackerrank.com/challenges/utopian-tree/problem

int utopianTree(int n) {
    int i =0;
    int max = 0;
    while(i<=n){
        if(i%2 == 0){
            max++;
        }else {
            max = max * 2;
        }
        i++;
    }
    return max;
}
