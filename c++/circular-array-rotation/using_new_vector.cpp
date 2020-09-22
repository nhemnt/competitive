// https://www.hackerrank.com/challenges/circular-array-rotation/problem
// Complete the circularArrayRotation function below.
vector<int> circularArrayRotation(vector<int> a, int k, vector<int> queries) {
   vector<int> arr;
//    arr.resize(k);
   vector<int> results;
//    int qsize = queries.size();
//    results.resize(qsize);
   int size = a.size();
    if(size != k){
        for(int i = size -k; i<size; i++){
            arr.push_back(a[i]);
        }
        for(int i = 0; i<arr.size(); i++){
            cout<<arr[i]<<"\t";
        }
    }
    if(k == size){
        k =0;
    }
    for(int i = 0; i< queries.size(); i++ ){
        if(queries[i] < k){
            results.push_back(arr[queries[i]]);
        }else{
            results.push_back(a[queries[i]-k]);
        }

    }
    return results;
    
}
