
vector<int> climbingLeaderboard(vector<int> ranked, vector<int> player)
{
  int playerSize = player.size();
  vector<int> result;
  vector<int> vect;

  for (int i = 0; i < playerSize; i++)
  {
    // cout<<"RS- "<<ranked.size()<<"\n";
    int count = 0;
    for (int j = 0; j < ranked.size(); j++)
    {

      if (ranked[j] <= player[i])
      {
        // if(j == 0){
        count++;
        // }
        // cout<<"j: "<<j<<"\n";
        // cout<<"i: "<<i<<"\n";
        // cout<<"count: "<<count<<"\n";
        // cout<<"ranked.size(): "<<ranked.size()<<"\n";
        result.push_back(count);

        ranked.resize(ranked.size() + 1);
        for (int k = ranked.size() + 1; k > j; k--)
        {
          ranked[k] = ranked[k - 1];
        }
        ranked[j] = player[i];
        break;
      }
      else
      {
        if (j == 0)
        {
          count++;
        }
        else
        {
          if (j == ranked.size() - 1)
          {
            // cout<<"j: "<<j<<"\n";
            // cout<<"ranked= "<<ranked[j]<<"\n";
            // cout<<"i: "<<i<<"\n";
            // cout<<"count: "<<count<<"\n";
            // cout<<"ranked.size(): "<<ranked.size()<<"\n";
            ranked.resize(ranked.size() + 1);
            ranked.push_back(player[i]);
            result.push_back(count + 2);
            break;
          }
          if (ranked[j] != ranked[j - 1])
          {
            count++;
          }
        }
      }
    }
  }

  // for (int x : ranked)
  //     cout << x << " ";
  return result;
}