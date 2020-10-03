// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
// Complete the jumpingOnClouds function below.
int jumpingOnClouds(vector<int> c) {

    int n1 = 0;
    int skip =0;
    for(int i =0; i< c.size(); i++){
        if(i<skip){
            continue;
        }
        if(i == c.size()-3){
            n1++;
            break;   
        }
        if(i == c.size()-2){
            n1++;
            break;
        }
        if(c[i+1] == 1 || c[i+2] == 0){
            skip = i+2;
            n1++;
        }else{
            n1++;
        }
    }

    return n1;
}
