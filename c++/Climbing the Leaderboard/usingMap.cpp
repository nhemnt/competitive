
vector<int> climbingLeaderboard(vector<int> ranked, vector<int> player) {
    std::vector<int> ranks; 
    std::map<int, int> scoreRank;
    int rank{1};
    for(int i{}; i< ranked.size(); i++){
        if(scoreRank[ranked[i]] == 0){
            scoreRank[ranked[i]]= rank++;
        }
    } 
//     auto it = scoreRank.upper_bound(500);
//    cout << "heelo" << it->first << "  -  " <<it->second<<"\n"<<endl; 
    for(int i =0; i< player.size(); i++){
    auto it = scoreRank.upper_bound(player[i]);
        if(it->second == 0 ){
            ranks.push_back(1);
        }
        else{
            ranks.push_back(it->second +1);
        }

    }
    return ranks;
}
