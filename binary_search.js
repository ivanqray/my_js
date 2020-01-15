function binary_search(my_list, my_item) {
    low = 0;
    high = my_list.length - 1;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = my_list[mid];
        if (guess === my_item) {
            return mid;
        }
        else if (guess < my_item) {
            low = mid + 1;
        } 
        else {
            high = mid - 1;
        }
    }
    return false;
}
