// https://www.hackerrank.com/challenges/cut-the-sticks/problem
// Complete the cutTheSticks function below.
vector<int> cutTheSticks(vector<int> arr) {
    vector<int> result;

    vector<int> temp;
    sort(arr.begin(), arr.end());
    int k =0;
    int min = arr[0];
    int sum = 1;
    int a = 0;
    bool minSet;
    while(sum != 0){
        sum = 0;
        k =0;
        minSet = false;
        for(int i =0; i< arr.size(); i++){
            
            if(arr[i] != 0 && !minSet){
                minSet = true;
                min = arr[i];
            }
            if(arr[i] != 0){
                arr[i] = arr[i] -min;
                k++;
            }
            if(i == arr.size() -1){
                result.push_back(k);
            }
            sum = sum + arr[i];
            cout<<"a = "<<a<<" === i = "<<i<<" === arr[i] ="<<arr[i]<<" === k =" <<k<<"== sum ="<<sum<<"== min = "<<min<<"\n";
        }
        a++;
    }
    
    return result;

}
