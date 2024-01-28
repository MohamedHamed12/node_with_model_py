# model.py

import sys


def calculate_square(number):
    # make any calculation here
    
    # make file with num 
    with open("number.txt", "w") as file:
        file.write(str(number))
    return int(number) * int(number)

if __name__ == "__main__":
    number = sys.argv[1]
    result = calculate_square(number)
