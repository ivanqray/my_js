def quick_search(in_list):
    if len(in_list) < 2:
	    return in_list
	else:
	    pivot = [in_list[0]]
	    less = [i for i in in_list[1:] if i <= in_list[0]]
		  greater = [s for s in in_list[1:] if s > in_list[0]]
		  return quick_search(less) + pivot + quick_search(greater)
