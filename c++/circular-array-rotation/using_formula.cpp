// Complete the circularArrayRotation function below.
vector<int> circularArrayRotation(vector<int> a, int k, vector<int> queries) {
   vector<int> results;
   int size = a.size();
   int arr[size];

    // if(size != k){
        for(int i = 0; i<size; i++){
            arr[(i+k) % size ] = a[i];
        }
    // }
    //we can optimize it more by checking if number of rotation and size of a is same then use a instead of arr; 
    for(int i = 0; i< queries.size(); i++ ){
        results.push_back(arr[queries[i]]);
    }
    return results;
    
}