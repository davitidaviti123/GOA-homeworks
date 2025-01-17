def sum_largest_two(size, nums):
    if size < 2:
        return "Not enough elements"
    first = max(nums)
    nums.remove(first)
    second = max(nums)
    return first + second

n = 5
nums = [18, 12, 40, 1, 19]
print(sum_largest_two(n, nums))
