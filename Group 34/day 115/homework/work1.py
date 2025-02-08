def sum_two_largest(lst):
    num1 = max(lst)
    lst.remove(num1)
    num2 = max(lst)
    return f'{num1 + num2}({num1} + {num2})'

print(sum_two_largest([10, 10, 2, 3]))