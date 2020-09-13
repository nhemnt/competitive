int maxRepeating(int *arr, int n, int k)
{

  int count[k] = {0};

  for (int i = 0; i < n; i++)
  {
    if (count[arr[i]] == 0)
    {
      count[arr[i]] = 1;
    }
    else
    {
      count[arr[i]] = count[arr[i]] + 1;
    }
  }
  int max = 0;
  int value = arr[0];
  for (int j = 0; j < k; j++)
  {
    if (count[j] > max)
    {
      max = count[j];
      value = j;
    }
  }
  return value;
}