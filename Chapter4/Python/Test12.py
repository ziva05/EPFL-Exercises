# value = input ("Enter your value in Celsius:")
# farenheit = int(value)
# farenheit = (farenheit*9/5) + 32
# value = str(farenheit)
# print("The temperature in Farenheit is:" + value)


# Ex 4.18 Mixing data types
# a_number = "3 "
# a_string = " Hello"

# result = a_number + a_string
# print(result)

# Converting types in Python
# from email import message
# from os import chflags
# from unittest import result


# number_one = 3
# number_two = 2
# result = number_one + number_two

# a_string = "Hello"

# message = "result" + a_string
# print(message)

# number_one = 3
# number_two = 2
# result = number_one + number_two

# a_string = "Hello"

# message = str(result) + a_string
# print(message)

# apples = 3
# oranges = 5
# fruits = apples + oranges

# message = "There are " + str(fruits) + " fruits in the basket"
# print(message)

# add message The number is 9!
# number_one = 6
# number_two = 3
# result = number_one + number_two

# a_string = "The result is "

# message = a_string + str(result) 
# print(message)

# def add(a, b): 
#     message = "The result is "
#     c = a + b
#     return message + str(c)

# print(add(3,5))

# Upgrade your temperature converter to a friendly version
# (Celsius * 9/5) + 32 = Farnheit

# def converter(Celsius):
#     return (Celsius * 9/5) + 32

# print("18.5 degrees Celsius are ") + str(converter(18.5)) + " degrees Farnheit")

# def temp_converter(Celsius):
#     message_1 = " degrees Celsius are "
#     message_2 = " degrees Farnheit."
#     result = (Celsius * 9/5) + 32
#     return str(Celsius) + message_1 + str(result) + message_2

# print(temp_converter(21))
# print(temp_converter(4))
# print(temp_converter(19))
# print(temp_converter(0))

from unicodedata import name
from unittest import result


# def chf_to_eur_conversion(chf):
#    msg_1 = " The conversion from "
#    msg_2 = " CHF is "
#    msg_3 = " EUR."
#    result = chf * 1.0
#    return msg_1 + str(chf) + msg_2 + str(result) + msg_3

# print(chf_to_eur_conversion(100))
# print(chf_to_eur_conversion(40))
# print(chf_to_eur_conversion(600))

# def speed_convert(mph):
#      msg_1 = "The conversion from "
#      msg_2 = " mph is "
#      msg_3 = " kmh."
#      result = mph * 1.609344
#      return msg_1 + str(mph) + msg_2 + str(result) + msg_3

# print(speed_convert(30))
# print(speed_convert(70))
# print(speed_convert(120))

# Ex 4.22 convert cm to inch
# def convert(cm):
#     msg_1 = " centimeters are "
#     msg_2 = " inches"
#     result = cm / 2.54
#     return str(cm) + msg_1 + str(result) + msg_2


# print(convert(2.54))

# Ex. 04.25 Getting user input - the input function
# print("Please enter your name:")
# name = input()
# print("Your name is " + name)

# name = input("Please enter your name:")
# print("Your name is " + name)

# x = input("Enter a number: ")
# y = input("Enter a second number: ")
# result = float(x) + float(y) 

# message = "The result of " + x + " plus " + y + " is " + str(result)

# print(message)

# age = input("How old are you?")
# print("You are " + age + " years old!")

# Ex. 4.26 Make your py converter work with a user input
# Temperature converter output 
# Enter a temperature in degrees celsius: 23.4
# 23.4 degrees celsius are 74.12 degrees Farenheit.
# (celsius * 9/5) + 32 = Farnheit
# def temp_converter(celsius):
#     celsius = input("Enter a temperature in degrees Celsius: ")
#     farnheit = (float(celsius) * 9/5) + 32
#     print(celsius + "degree celsuis are ") + str(farnheit) + " degrees farenheit.")

# def temp_converter(celsius):
#     message_1 = " degrees celsius are "
#     message_2 = " degrees farnheit."
#     result = (celsius * 9/5) + 32
#     return str(celsius) + message_1 + str(result) + message_2

# user_input = input ("Enter a temperature in degrees Celsius: ")
# farnheit_result = temp_converter(float(user_input))

# print(farnheit_result)

# Euro to CHF converter
def euro_converter(euro, exchange_rate):
    chf = euro * exchange_rate
    euro_converter = "Today, euro" + str(euro) + "can buy chf" + str(chf) + "."
    return euro_converter

user_input_1 = float(input("Enter the euro amount: "))
user_input_2 = float(input("Today's exchange rate: "))
print(euro_converter(user_input_1, user_input_2))




















