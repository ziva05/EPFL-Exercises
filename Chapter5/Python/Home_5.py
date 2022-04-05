# Lesson 5.02
# day = True
# night = False

# print(day)
# print(night)

# is_light_on = True
# is_password_correct = False
# is_document_saved = True
# has_succeded = True
# print(is_light_on)
# print(is_document_saved)

# print(5==5)
# print(2==5)

# secret_number = 5
# guess = input("Enter a number between 1 and 10: ")
# print(secret_number == int(guess))

# secret_word = "kiwi"
# guess = input("What is the secret word?")

# print(secret_word == (guess))

# # 05/06. If this then that
# password = "secret"
# user_input = input("Enter the password: ")

# if password == user_input:
#     print("You are now logged in.")

# weather = "sunny"
# if weather == "sunny":
#     print("It is sunny outside.")
#     print("It is a beautiful day!")
# print("This line of code will execute no matter what.")

# weather = "rainy"
# if weather == "sunny":
#      print("It is sunny outside.")
#      print("It is a beautiful day!")
# print("This line of code will execute no matter what.")

# apples = 3
# oranges = 3
# if apples <= oranges:
#     print("There are less apples than oranges")
#     print("...or the same amount!")

# What is the result of 5+2?
# result = 7
# guess = input("What is the result of 5 + 2? ")

# if result == int(guess):
#     print("Congratulations! You found the correct result.")
#     print("This will only display if the check evaluates to True!")

# print("The program terminated successfully.")

# Update secret word program
from ast import And
from select import KQ_FILTER_WRITE


# secret_word = "kiwi"
# guess = input("What is the secret word?")

# if secret_word == guess:
#     print("Congratulations!")
#     print("You can play again.")

# def temp_converter (celsius):
#     msg_1 = "degrees celsius are "
#     msg_2 = "degrees farenheit."
#     result = (celsius * 9/5) + 32
#     return str(celsius) + msg_1 + str(result) + msg_2

# user_input = input("Enter a temperature in degrees celsius: ")
# farenheit_result = temp_converter(float(user_input))

# print(farenheit_result)

# if float(user_input) > 38:
#     print("It is very hot outside!")
#     print("It is impossible to be outside")

# Ex 5.14 Upgrading your converter 
# def convert(cm):
#     if cm < 0:
#         print("Beware! This is a negative value")

#     msg_1 = " centimeters are "
#     msg_2 = " inches"
#     result = cm / 2.54
#     return str(cm) + msg_1 + str(result) + msg_2

# print(convert(-3))

# Ex 5.16 ... or Else!
# apples = 5
# oranges = 3
# if apples <= oranges:
#     print("There are less apples than oranges...")
#     print("...or the same amount!")
# else:
#     print("There are more apples than oranges.")

# secret_number = 7
# guess = input("Enter a number between 1 and 10")
# if secret_number == int(guess):
#     print("You win!")
# else:
#     print("You lose!")
# print("Try to play again!")

# secret_number = 7
# guess = input("Enter a number between 1 and 10")
# if secret_number != int(guess):
#     print("You lose!")
# else:
#     print("You win")
# print("Try to play again!")

# 5.18 Upgrade your secret word game!
# secret_word = "kiwi"
# guess = input("What is the secret word?")

# if secret_word == guess:
#     print("Congratulations!")
# else:
#     print("Ooops! You didn't guess the secret word!")

# print("Let's play again!")        

# 5.20 Chaining if statements 
# weather = "foggy"
# if weather == "raining":
#     print("Take an umbrella.")

# elif weather == "sunny":
#     print("Take sunglasses.")

# elif weather == "snowing":
#     print("Take gloves.")
# else:
#     print("Stay home.")

# Ex 5.20 practice else if concept
# number_1 = input ("Enter a number: ")
# number_2 = input ("Enter another number: ")
# result = float(number_1) - float(number_2)

# if result > 10:
#     print("The result is greater than 10")

# elif result > 0 and result < 10:
#     print("The result is greater than 0 but not than 10.")

# elif result == 0:
#     print("The result is zero")

# else:
#     print("The result is negative number")

# print("You can try again!")

# # 05.25 The syntax of And
# weather = "sunny"
# temperature = "cold"

# if weather == "sunny" and temperature == "cold":
#     print("Take sunglasses and a T-shirt! ")

# # Ex 05.25: enter 2 numbers
# number1 = input("Enter the number one: ")
# number2 = input("Enter the second number: ")

# if int(number1) > 10 and int(number2) > 10:
#     print("Both numbers are greater than 10.")
# else:
#     print("At least one of the numbers you entered is not greater than 10")

# 5.26 Ex: Use AND!
# weather = input("What is the weather today?")
# temperature = input("What's the temperature today?")

# if(weather == "raining" and temperature == "cold"):
#     print("Take an umbrella and a warm jacket.")

# elif(weather == "raining" and temperature == "warm"):
#     print("Take an umbrella and a T-shirt.")

# elif(weather == "sunny" and temperature == "cold"):
#     print("Take sunglasses and a warm jacket.")

# elif(weather == "sunny" and temperature == "warm"):
#     print("Take sunglasses and a T-shirt.")

# else: 
#     print("Stay home!")

# 5.29 Saying OR
# a = 8
# b = 12

# if a > 10 or b > 10:
#     print("One of the two numbers is greater than 10!")
# else:
#     print("Both numbers are not greater than 10.")

# 5.30 Ex: Your own AND and OR
# language1 = "Python"
# language2 = "JavaScript"

# if language1 == "Python" or language2 == "JavaScript":
#     print("The course is good!")
# elif language1 == "Python" and language2 == "JavaScript":
#     print("This is the Thinking and Creating with Code course.")

# number = 30
# color = "blue"

# if int(number > 10) or color == "blue":
#     print("The test is true.")

# elif int(number < 10) and color != "blue":
#     print("The test is true.")

# 5.32 Ex: Guess the number and the color 

def play():
    secret_number = 12
    secret_color = "red"


    guess_number = input("Please, write the number between 1 and 20: ")
    guess_color = input("Please, write down a color: ")

    if secret_number == int(guess_number) and secret_color == guess_color:
        print("Congratulations! You've found both the secret number and the secret color!")

    elif secret_number == int(guess_number) or secret_color == guess_color:
        print("Great! You've found at least one of the secrets!")

    else:
        print("You didn't find any of the secrets!")
        print("Better luck next time!")

    print("Try again!")

play()







