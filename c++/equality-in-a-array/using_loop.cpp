// https://www.hackerrank.com/challenges/equality-in-a-array/problem
// Complete the equalizeArray function below.
int equalizeArray(vector<int> arr) {
    int a[101] = {0};
    // cout<<a[100]<<"\n";
    for(int i =0; i< arr.size(); i++){
        // if(arr[i] == 100){
        //     // cout<< 100<<"\n";
        // }
        a[arr[i]] = a[arr[i]] + 1;
    }
    // cout<<"v-- =="<<a[100]<<"\n";

    int l = 102;
    int max = 0;
    int maxIndex = 0;
     for(int i =0; i< l -1; i++){
        // cout<<a[i]<<" - "<<i<<"\t";
        if(a[i] > max){
            max = a[i];
            maxIndex = i;
        }
    }

    // cout<<"only"<<"\n";
    // for(int i =0; i< l -1; i++){
    //     // cout<<a[i]<<"\t";
    //     if(a[i] != 0){
    //         cout<<a[i]<<"\t";    
    //     }
    // }


    // cout <<"\n"<<"max =="<<max<<"   | maxIndex =="<<maxIndex<<"\n";
    int result = 0;
    for(int i =0; i< l -1; i++){
        // cout<<a[i]<<"\t";
        if(i !=  maxIndex){
            result += a[i];    
        }
    }
    return result;

}