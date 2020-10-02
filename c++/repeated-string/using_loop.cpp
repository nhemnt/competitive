// https://www.hackerrank.com/challenges/repeated-string/problem

// Complete the repeatedString function below.
long repeatedString(string s, long n) {
    cout<<n <<" ==  "<<s.length()<<"\n";
    long q = n/s.length();
    long r  = n % s.length();
    cout<<q<<"\t"<<r<<"\n";
    long r1 = 0;
    long r2 = 0;
    for(int i =0; i< s.length(); i++){
        if(s[i] == 'a'){
            cout<<i<<"\n";
            if(i < r){
                r2++;
            }
            r1++;
        }

    }
    return r1*q + r2;

}