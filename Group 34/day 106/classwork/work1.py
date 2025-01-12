import math
def match(usefulness, months):
    initial_needs = 100
    decay_rate = 0.15
    decayed_needs = initial_needs * math.exp(-decay_rate * months)
    husband_usefulness = sum(usefulness)
    return "Match!" if husband_usefulness >= decayed_needs else "No match!"