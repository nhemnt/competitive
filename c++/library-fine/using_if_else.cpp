// https://www.hackerrank.com/challenges/library-fine/problem
// Complete the libraryFine function below.
int libraryFine(int d1, int m1, int y1, int d2, int m2, int y2) {

    if(y2 > y1) return 0;
    if(y2 < y1) return 10000;

    //same year
    if(m2 > m1) return 0;
    if(m2 < m1) return 500*(m1-m2);
    
    //same month
    if(d2>=d1){
        return 0;
    } 
    else {
        return 15*(d1-d2);
    }
}