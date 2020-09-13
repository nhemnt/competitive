// https://www.hackerrank.com/challenges/picking-numbers
int pickingNumbers(vector<int> a) {
    int max =0, innerMax;
    for(int i =0; i< a.size(); i++){
        innerMax = 0;
        for(int j=0; j< a.size(); j++){
            if(a[i] - a[j] < 2 && a[i] - a[j] >= 0){
                cout<<"i ="<<a[i] << " j = " <<a[j] <<"\n";
                cout<< "before = " <<innerMax<<"\n";
                innerMax++;
                cout<< "after = " <<innerMax<<"\n";;
                cout<<"*******"<<"\n";
            }
        }
        cout<<"\n";
        if(innerMax > max ){
            cout<<"innermax =" << innerMax << " : "<< "i = "<<i<<"\n";
            max = innerMax;
        }
    }
    return max;
}
