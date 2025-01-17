def last_repeated(size, nums):
    seen = set()
    last_repeat = None
    for num in reversed(nums):
        if num in seen:
            last_repeat = num
            break
        seen.add(num)
    return last_repeat if last_repeat is not None else "No repeated elements"

n = 6
nums = [1, 3, 4, 1, 3, 12]
print(last_repeated(n, nums))
