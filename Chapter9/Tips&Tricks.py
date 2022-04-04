# 9.03. Getting a random number:

# import random
# random_number = random.randint(1,100)

# import random

# number = random.randint(1,51)
# print(number)

# number = random.randint(1,51)
# print(number)

# number = random.randint(1,51)
# print(number)

# Exercice video with for loop
# import random 

# for i in range(5):
#     print(random.randint(1,51))

# 09.04. True is true!
# answer_is_correct = True

# if answer_is_correct == True:
#     print("The answer is correct!")

# answer_is_correct = True

# if answer_is_correct:
#     print("The answer is correct!")

# 9.05. Catching errors
# number = input("Type a number: ")
# result = int(number) + 1
# print("The result is " + str(result))

# number = input("Type a number: ")

# try:
#     result = int(number) + 1
# except:
#     print("Couldn't convert your input to a valid number")
#     quit()
# print("The result is " + str(result))

number = input("Please, write a number between 0 and 10: ")

try:
    result = int(number)

except:
    print("Huston? We have a problem!")
    quit()

print(number)