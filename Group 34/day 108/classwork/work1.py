def first_unique_element(sequence):
    for element in sequence:
        if sequence.count(element) == 1:
            return element
    return None
print(first_unique_element("aallo"))