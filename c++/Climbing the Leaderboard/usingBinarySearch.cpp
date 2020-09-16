
int binarySearch(vector<int> a, int key){

    int lo = 0;
    int hi = a.size() - 1;

    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] == key) {
            return mid;
        } else if (a[mid] < key && key < a[mid - 1]) {
            return mid;
        } else if (a[mid] > key && key >= a[mid + 1]) {
            return mid + 1;
        } else if (a[mid] < key) {
            hi = mid - 1;
        } else if (a[mid] > key) {
            lo = mid + 1;
        }
    }
    return -1;
}
/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

vector<int> climbingLeaderboard(vector<int> ranked, vector<int> player) {
    int rankedSize = ranked.size();
    vector<int> result; 
    vector<int> scores; 
    scores.push_back(ranked[0]);
    for(int i=1; i<rankedSize; i++){
        if(ranked[i] != ranked[i-1]){
             scores.push_back(ranked[i]);
        }
    }

    
    for (int i = 0; i < scores.size(); i++) 
        cout << scores[i] << " "; 
    cout<<"\n";
    for(int i=0; i<player.size(); i++){
        if(player[i]>= scores[0]){
            result.push_back(1);
        }else if(player[i] <= scores[scores.size()-1]){
            if(player[i]  == scores[scores.size()-1]){
                result.push_back(scores.size());
            }else{
                result.push_back(scores.size()+1);
            }
            
        }else {
            int pos = binarySearch(scores, player[i]);
            result.push_back(pos+1);
        }
    }
 
    return result;
}
