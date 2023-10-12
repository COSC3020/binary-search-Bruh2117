function binarySearch(list, element) {
    var left = 0; 
    var right = list.length - 1; 

    while (left <= right)
    {
        var mid = Math.floor((left + right) / 2); 

        if (list[mid] == element)
        {
            while(mid != 0)
            {
                if (list[mid] != element)
                {
                    break; 
                }
                mid--; 
            }
            return mid; 
        }

        else if (list[mid] < element)
        {
            left = mid + 1; 
        }
        else if (list[mid] > element)
        {
            right = mid - 1; 
        }
    }
    return -1; 
}
