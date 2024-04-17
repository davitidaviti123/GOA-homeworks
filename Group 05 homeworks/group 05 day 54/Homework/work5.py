def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

def main():
    try:
        number = int(input("Enter a number: "))
        result = even_or_odd(number)
        print(f"The number {number} is {result}.")
    except ValueError:
        print("Please enter a valid integer.")

if __name__ == "__main__":
    main()