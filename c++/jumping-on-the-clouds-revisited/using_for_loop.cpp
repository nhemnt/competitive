
// Complete the jumpingOnClouds function below.
int jumpingOnClouds(vector<int> c, int k) {
    int result = 100;
    int size = c.size();
    if(c[0] == 1){
        result -=3;
    }else{
        result -=1;
    }
    for(int i=k%c.size();i!=0;i=(i+k)%c.size()) 
{  
    if(c[i]==0)
    {
        result=result-1;
    }
    else 
    {
        result=result-(2+1);
    }
}
    return result;
}
