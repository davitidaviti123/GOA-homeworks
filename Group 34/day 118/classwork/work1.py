import random

def divide_into_teams(people, leaders, group_size):
    random.shuffle(people)
    random.shuffle(leaders)
    teams = []
    for i in range(0, len(people), group_size - 1):
        group = people[i:i + (group_size - 1)]
        if leaders:
            group.insert(0, leaders.pop())
        teams.append(group)
    return teams

people = ["Person7", "Person8", "Person9", "Person10", "Person11", "Person12", "Person13", "Person14", "Person15", "Person16"]
leaders = ["Leader1", "Leader2", "Leader3", "Leader4", "Leader5", "Leader6"]
group_size = 3
teams = divide_into_teams(people, leaders, group_size)
print(teams)