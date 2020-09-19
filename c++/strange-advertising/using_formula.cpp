// https://www.hackerrank.com/challenges/strange-advertising/problem
// fail after two test cases
// works from 1-6
int magicNumber(int num){
    int max;
    if(num%5 == 1||num%5 == 2 ){
        max = pow(num,2) +1;
    }else if(num%5 == 3){
         max = pow(num,2);
    } else {
        max = pow(num,2) -1;
    }
    return max;
}
// Complete the viralAdvertising function below.
int viralAdvertising(int n) {    
    return magicNumber(n);

}


