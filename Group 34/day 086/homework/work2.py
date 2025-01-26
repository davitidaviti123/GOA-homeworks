numbers = []

for i in range(10):
    num = int(input(f"enter {i+1}-th num"))
    numbers.append(num)

doubled_numbers = [x * 2 for x in numbers]

print("multiplied nums:", doubled_numbers)