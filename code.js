function binarySearch(list, element) {
    if (list.length == 0)
    return -1; 
    else if (list.length == 1)
    return list[0]; 

    var left = 0 
    var right = list.length - 1;

    while (left <= right)
    {
        var mid = Math.floor((left + right) / 2); 

        if (list[mid] == element)
        {
            return element; 
        }

        if (list[mid] < element)
        {
            left = mid + 1; 
        }
        else if (list[mid] > element)
        {
            right = mid - 1; 
        }
    }
    return - 1; 
}
