def longest_increasing_sequence(arr):
    longest = []
    current = []
    for i in range(len(arr)):
        if not current or arr[i] > current[-1]:
            current.append(arr[i])
        else:
            if len(current) > len(longest):
                longest = current
            current = [arr[i]]
    if len(current) > len(longest):
        longest = current
    return longest
arr = [50,200,30]
print(longest_increasing_sequence(arr))