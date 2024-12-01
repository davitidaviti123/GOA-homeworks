def highest_rank(arr):
    max_freq = 0
    max_num = 0
    
    for i in set(arr):
        freq = arr.count(i)
        if freq > max_freq or (freq == max_freq and i > max_num):
            max_freq = freq
            max_num = i
    
    return max_num