// https://www.hackerrank.com/challenges/append-and-delete/problem
// Complete the appendAndDelete function below.
string appendAndDelete(string s, string t, int k) {

    int lengthOfS = s.length();
    int lengthOfT = t.length();
    int index = 0;
    int  minL = lengthOfT > lengthOfS ? lengthOfS : lengthOfT;
    for(int i =0; i< minL; i++){
        if(s[i] == t[i]){
            index++;
        }else{
            break;
        }
    }
    if((lengthOfS+lengthOfT-2*index)>k){
        cout<< "afffsd";
        return "No";
    }
    else if((lengthOfS+lengthOfT-2*index)%2==k%2){
        return "Yes";
    }

    else if((lengthOfS+lengthOfT-k)<0){
        return "Yes";
    }
    else{
        cout<< "asdasd";
        return "No";
    }
}