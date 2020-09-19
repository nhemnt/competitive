//  https://www.hackerrank.com/challenges/strange-advertising/problem
// Complete the viralAdvertising function below.
int viralAdvertising(int n) {
  
  int max = 0;
  int share = 5;
  int reShare =3;
  int maxReach =2;

  for(int i =1; i <=n; i++){
      max = max + (share/maxReach);
      share = (share/maxReach) * reShare;
  }

  return max;

}