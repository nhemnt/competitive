// https://www.hackerrank.com/challenges/permutation-equation/problem

// Complete the permutationEquation function below.
vector<int> permutationEquation(vector<int> p) {
    vector<int> result;
    int size = p.size();
    std::map<int, int> eq;
    int in = {1};
    for(int i ={}; i< size; i++){
        eq[p[i]] = i+1;
    }
    map<int, int>::iterator itr; 
for (itr = eq.begin(); itr != eq.end(); ++itr) { 
        cout << '\t' << itr->first 
             << '\t' << itr->second << '\n'; 
    } 
    for(int i =1; i<= size; i++){
        result.push_back(eq[eq[i]]);
    }
    return result;

}