// https://www.hackerrank.com/challenges/find-digits/problem
// Complete the findDigits function below.
int findDigits(int n) {
 vector<int> arr;
    int o = n;
    while(n > 0){
        arr.push_back(n%10);
        n /=10;
    }
    int count =0;
    for(int i=0; i<arr.size(); i++){
        if(arr[i] != 0 && o%arr[i] == 0){
            count++;
        }
    }

    return count;

}