// https://www.hackerrank.com/challenges/acm-icpc-team/problem

int result(string a, string b){
    int count = 0;
    for(int i =0; i < a.length(); i++){
       
        // cout<<a[i]<<"\t"<<b[i]<<"\n";
        // cout << typeid(a[i]).name() << "\n";
        if(a[i] == '1' || b[i] == '1'){
            //  cout<<a[i] <<"\t"<< count<<" --- "<<b[i]<<"\n";
            count = count +1;
        }
    }

    // cout<< "counr = "<< count<<"\n";
    return count;
}
// Complete the acmTeam function below.
vector<int> acmTeam(vector<string> topic) {
    int max = 0;
    int maxCount = 0;

    for(int i=0; i<topic.size() -1; i++){
        for(int j = i+1; j < topic.size(); j++){
            int r = result(topic[i], topic[j]);
            if(r == max){
                maxCount= maxCount+1;
            }else if(r > max){
                max = r;
                maxCount = 1;
            }
        }
    }
    vector<int> vect; 
    cout<<max<<" "<<maxCount;
    vect.push_back(max); 
    vect.push_back(maxCount);

    return vect;

}