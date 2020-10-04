
// https://www.hackerrank.com/challenges/taum-and-bday/problem
//issue with the provided default code
// clearly it shows the provided templet code is invalid w.r.t the constrainsts So i have made the changes to the below code
// made the following changes in the provided templete code.
//  change input parameter type from int to long
/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

long taumBday(int b, int w, long bc, long wc, int z) {
    if(abs(bc-wc) < z){
        // cout<<(bc*b)<<"\t"<<(wc*w);
        return (bc*b) + (wc*w);
    }else{
        // cout<<"here";
        return bc > (wc +z) ? (wc*w) + (wc+z)*b : (bc*b) + (bc+z)*w;
    }
    // return b*min(bc, wc+z) + w*min(wc, bc+z);
}
