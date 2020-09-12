// Find the maximum repeating number in the array. 
// If there are two or more maximum repeating numbers return the element having least value.

int maxRepeating(int *arr, int n, int k)
{
  int innerMax = 0, outerMax = 0, value = 0, i, j;
  for (i = 0; i < n; i++)
  {
    innerMax = 0;
    for (j = 0; j < n; j++)
    {
      if (arr[i] == arr[j])
      {
        innerMax++;
      }
    }
    if (outerMax <= innerMax)
    {
      if (outerMax == innerMax)
      {
        if (value > arr[i])
        {
          value = arr[i];
        }
        outerMax = innerMax;
      }
      else
      {
        outerMax = innerMax;
        value = arr[i];
      }
    }
  }
  return value;
}
