https://www.hackerrank.com/challenges/angry-professor/problem

string angryProfessor(int k, vector<int> a) {

    for(int i = 0; i < a.size(); i++){
        if(a[i] <= 0) {
            k--;
        }
    } 

    return k<= 0 ? "NO": "YES";

}