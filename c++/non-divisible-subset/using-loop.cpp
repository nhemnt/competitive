// https://www.hackerrank.com/challenges/non-divisible-subset/problem
/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

int nonDivisibleSubset(int k, vector<int> s) {
    int reminder[k] = {0};
    int rem;
    for(int i =0; i<s.size(); i++){
        rem = s[i]%k;
        // cout<<rem<<"\n";
        reminder[rem] = reminder[rem]+ 1; 
    }
    // cout<<"\n";
    int min = 1;
    int max = k-1;
    int result = 0;
    bool oo = true;

    for(int i =1; i<k; i++){
        cout<<reminder[i]<<"\t";
    }
    for (int i = 1; i < (k + 1) / 2; i++){
        result += (reminder[i] > reminder[k - i] ? reminder[i] : reminder[k - i]);
    }
      

      result += (reminder[0] >= 1) + (k % 2 == 0 && reminder[k / 2]);
    // while(oo){
    //     if(reminder[min] > reminder[max]){
    //         result =result + reminder[min];
    //     }else{
    //          result = result +reminder[max];
    //     }
    //     if(max-min == 1){
    //         oo = false;
    //     }else{
    //         max--;
    //         min++;
    //     }
    // }
     
    return result;
}
