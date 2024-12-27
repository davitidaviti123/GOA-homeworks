def most_frequent_characters(string):
    max_frequency = max(string.count(char) for char in string)
    return list(set(char for char in string if string.count(char) == max_frequency))

string = "abbcccddde"
print(most_frequent_characters(string))