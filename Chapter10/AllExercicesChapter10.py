# Number Game 

# START: generate a secret number between 1 and 100
# ASKS the user to enter a number
# TELL the user if the secret number is bigger or smaller than the guess
# GAME continues as long as the user doesn't find the secret number
# User FINDS the secret number, the game stops and tells the user how many attempts it took to win. 
# USE the right wording attempt(s)
# User enters anything else than a number, the game should tell that to the user and quit gracefully.

# secret_number = 45
# guess = input("Enter a secret number between 1 and 100: ")
# if secret_number == int(guess):
#     print("Congratulations! It took you one attempt to win.")

# elif secret_number < int(guess):
#     print("Your number is too small!")

# elif secret_number > int(guess):
#     print("Your number is too big!")
    
# else:
#     print("Congratulation, you've found the right number!")

# while i < secret_number:
#     print("The number is smaller!")
#     i = i + 1

# i = 0
# while i > 100:
# i = i + 1
# ################################################################################

# secret_number = 45

# guess = 0
# i=0


# while guess != secret_number:
#     guess = int(input("Please enter a number between 1 and 100: "))
#     i = i + 1
   
#     if int(guess) < secret_number:
#         print("Your number is to small!")

#     elif int(guess) > secret_number:
#         print("Your number is to big!")

# else:
#     print("Congratulation, you found the right number!")
    

# print("You've took "  + str(i) + " attempts to win")


# Support
# for i in range(100):
#     current_attempt = str(i + 1)
#     attempt_word = ""
#     if current_attempt == "1":
#         attempt_word = " attempt "
#         print("It took you one attempt to win!")
        
#     else:
#         attempt_word = " attempts "
#         print("It took you " + str(current_attempt) + " attemps to win!")
# print("Congratulations!")


# try:
#     secret_number = int(guess) + 1
# except:
#     print("The wrong input. Program will quit. ")
#     quit()

# if int(guess) == secret_number:
        # print("Congratulations! It took you one attempt to win.")


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

# ####################################################################### 

# 1-set up phase
import random
answer = random.randint(1,101)
user_wins = False
attemps = 0
attempt_word = ""

# 2-start the game logic > loop
while user_wins != True:

    # get user input (inside your input insert number)
    guess = int(input("Enter a number between 1 and 100: "))
    i = i + 1
    # check the user input meaning number not a string
    try:
        guess_number = int(guess)
        # error message
    except:
        print("Error: You need to enter a valid number! ")
        quit()
       
    # increase the attempt count
    attempts += 1

    # check the user answer against the secret_number
    if quess_number == answer:
        user_wins = True
    elif guess_number > answer:
        print("The secret number is smaller!")
    else:
        print("The secret number is bigger!")

# 3-get the spelling of the "attempt" word
    if attempts == "1":
    attempt_word = " attempt "
   
   
    
    else: 
        attempt_word = " attempts "
        print("It took you " + str(current_attempt) + " attemps to win!")


# 4-display the result.
print("you won!!! It took " + str(attempts) + attempt_word)



