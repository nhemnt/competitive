//https://www.hackerrank.com/challenges/queens-attack-2/problem
//8/22 test case failed
// Complete the queensAttack function below.
int queensAttack(int n, int k, int r_q, int c_q, vector<vector<int>> obstacles) {
    //suppose no obstacles
    int right  = n - c_q;            //2
    int left   = c_q - 1;            //2
    int up     = n - r_q;            //1
    int bottom = r_q - 1;            //3
    int ul     = min(left,up);       //1 
    int ur     = min(right,up);      //1
    int lb     = min(bottom,left);   //2
    int rb     = min(right, bottom); //2
    cout<<"left ="<<left<<"\n"<<"right = "<<right<<"\n"<<"up = "<<up<<"\n"<<"bottom = "<<bottom<<"\n"<<"ul ="<<ul<<"\n"<<"ur = "<<ur<<"\n"<<"lb = "<<lb<<"\n"<<"rb = "<<rb<<"\n";

    int row, col;
    for(int i=0; i< k; i++){
        
        row = obstacles[i][0];
        col = obstacles[i][1];
        // if(row == r_q && col == c_q ){
        //     continue;
        // }
        // cout<<row<<"\t"<<col<<"\n";
        //obstacle is in Horizontal line
        if(row == r_q ){
            // check left
            if( col < c_q && c_q-col-1 < left){
                left = c_q-col-1;
            }
            // check right
            else if(col -1- c_q < right){
                right = col -1- c_q;
            }
        }
        //obstacle is in vertical line
        else if(col == c_q){
            // check up
            if( row < r_q && r_q-row-1 < bottom ){
                bottom = r_q-row-1;
            }
            // check right
            else if(row -1- r_q < up){
                up = row -1- r_q;
            }
        }
        //obstacle is in diagonal line
        else if(abs(row-r_q) == abs(col-c_q)){
            // cout<<"yes i am here";
            //up diagonal
            if(row > r_q){
                //up left
                if(col<c_q && row -1-r_q< ul){
                    ul = row -1-r_q; 
                }
                //up right
                else if(row -1-r_q< ur){
                    ur =row -1-r_q;
                }
            }else if(row< r_q){
                //bottom left
                if(col<c_q && r_q-1-row< lb){
                    lb = r_q-1-row; 
                }
                //bottom right
                else if(col-1-c_q< rb){
                    rb = col-1-c_q;
                }
            }
        }
    }
    cout<<"---------------------------------"<<"\n";
    cout<<"left ="<<left<<"\n"<<"right = "<<right<<"\n"<<"up = "<<up<<"\n"<<"bottom = "<<bottom<<"\n"<<"ul ="<<ul<<"\n"<<"ur = "<<ur<<"\n"<<"lb = "<<lb<<"\n"<<"rb = "<<rb<<"\n";
    return right + left + up + bottom + ul + ur + lb + rb;;
}