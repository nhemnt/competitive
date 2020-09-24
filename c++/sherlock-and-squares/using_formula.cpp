// https://www.hackerrank.com/challenges/sherlock-and-squares/problem
// Complete the squares function below.
int squares(int a, int b) {
    return (floor(sqrt(b)) - ceil(sqrt(a))) +1; 
}