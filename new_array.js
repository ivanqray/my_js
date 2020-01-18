function find_small(in_list) {
    var lowest_indx = 0;
    var lowest = in_list[0];
    for (i in in_list){
        if (in_list[i] < lowest) {
            lowest_indx = i;
            lowest = in_list[i];
        }
    }
    return lowest_indx;
}

function SelectionSort(in_list){
    var new_arr = [];
    var in_list_cnt = [];
    for (e in in_list){
        in_list_cnt.push(in_list[e]);
    }
    for (i in in_list_cnt){
        smallest = find_small(in_list);
        new_arr.push(in_list[smallest]);
        in_list.splice(smallest,1);
    }
    return new_arr;
}
var my_list = [21,5,9,7,12];
console.log(SelectionSort(my_list));
