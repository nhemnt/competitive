  https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
  
  int reverse(int num){
    int reverse = 0,remainder;
    while(num !=0){
        remainder = num%10;
        reverse = reverse*10 + remainder;
        num = num /10;
    }
    return reverse;
}

  // Complete the beautifulDays function below.
    int beautifulDays(int i, int j, int k) {
        int beautifulDay = 0;
        for(int index = i; index<= j ; index++){
            if(abs(index-reverse(index))% k == 0){
                beautifulDay++;
            }
        }
        // cout<<beautifulDay;
        return beautifulDay;
    }