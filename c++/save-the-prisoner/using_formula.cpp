// https://www.hackerrank.com/challenges/save-the-prisoner/problem
// Complete the saveThePrisoner function below.
int saveThePrisoner(int n, int m, int s) {

 int rem = m % n;
 int warn = s-1 + rem;
 if (warn > n ){
    warn = warn -n; 
 }
 return warn == 0 ? n : warn;
}
