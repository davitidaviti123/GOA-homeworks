def xo(s):
    x_count = 0
    o_count = 0
    
    for i in s:
        if i.lower() == 'x':                   #codewars task.
            x_count += 1
        elif i.lower() == 'o':
            o_count += 1
    
    return x_count == o_count