def get_unique(array):
    return [i for i in array if array.count(i) == 1]

array = [1, 20, "hello", 20, 4,"world"]
print(get_unique(array))