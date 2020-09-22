// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
// Complete the jumpingOnClouds function below.
int jumpingOnClouds(vector<int> c, int k) {
    int result = 100;
    int i = k;
    int size = c.size();
    if(c[0] == 1){
        result -=3;
    }else{
        result -=1;
    }
    while(i != 0){
        
        if(c[i] == 1){
            result -=3;
        }else{
             result -=1;
        }
        // cout<<result<<" --- "<<i<<"\n";
        if(i+k >= size){
            i = i +k - size; 
        }else{
            i = i+k;
        }
        
    }
    return result;
}