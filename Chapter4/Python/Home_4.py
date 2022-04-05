# variable = input("Enter your value in Celsius:")
# farenheit = int(value)
# farenheit = (farenheit* 9/5) + 32
# value = str(farenheit)
# print("Temperature in farenheit is: " + value)

# Temperature converter (celsius * 9/5) + 32 == farenheit

# celsius = 21 
# farenheit = (celsius * 9/5) + 32 
# print(farenheit)

# celsius = -5
# farenheit = (celsius * 9/5) + 32 
# print(farenheit)

# celsius = 17
# farenheit = (celsius * 9/5) + 32 
# print(farenheit)

# Functions reusability 
# def say_hello(): 
#     print("Hello!")
#     print("How are you today?")
#     print("It was nice meeting you!")
# say_hello()
# say_hello()

# def show_colors():
#     color_one = "Red"
#     color_two = "Blue" 
#     message = " is a color"
#     print(color_one + message)
#     print(color_two + message)

# def simple_addition():
#     a = 3
#     b = 5 
#     result = a + b
#     print(result)

# show_colors()
# simple_addition()
# show_colors()
# simple_addition()

# def count_fruits():
#     oranges = 3
#     apples = 7
#     fruits = oranges + apples
#     print(fruits)

# count_fruits()
# count_fruits()
# count_fruits()

# def say_hello():
#     print("Hello!")

# def ask_question():
#     print("How are you today?")

# def say_goodbye():
#     name = "Ziva"
#     message = "Goodbye " + name
#     print(message)

# say_hello()
# ask_question()
# say_goodbye()

# 04/12 Function parameters and return values
# def say_hello(name):
#     print("Hello " + name)

# say_hello("Rick")
# say_hello("Lory")
# say_hello("Daryl")

# def add(number_one, number_two):
#     result1 = number_one + number_two
#     print(result1)

# add(7, 3)
# add(2, 8)
# add(5, 4)

# def subtract(number_one, number_two):
#     return number_one - number_two

# print(subtract(10, 5))

# def multiply(number_one, number_two):
#    return number_one * number_two

# print(multiply(3,7))

# 04/13 Temperature converter
def temp_converter(celsius):
    return (celsius * 9/5) + 32

print(temp_converter(21.5))
print(temp_converter(-7))
print(temp_converter(11))
print(temp_converter(0))

