def count_greater_left(size, nums):
    result = []
    for i in range(size):
        result.append(sum(1 for x in nums[:i] if x < nums[i]))
    return result

n = 5
nums = [3, 2, 6, 5, 1]
print(count_greater_left(n, nums))