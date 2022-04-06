# Define the functions:
# Func: Euro to CHF 
# euros * 1.13
def euros_to_CHF(euros):
    return euros * 1.13

# Func: Celsius to Farenheit
# (celsius * 9/5) + 32
def celsius_to_farenheit(celsius):
    return (celsius * 9/5) + 32

# Func: Liters to Gallons
# liters / 3.785
def liters_to_gallons(liters):
    return liters / 3.785

# Func: Ask if the user wants to convert something
def ask_continue():
    answer = input("Do you want to convert a value? (yes/no)")
    if(answer == "yes"):
        return true
    else:
        return false


# Func: Ask which conversion
def ask_conversion():
    answer = input("Which conversion? (euros/celsius/liters)")
    return answer

# Func: Ask for a value
def ask_value():
    answer = int(input("Enter a value"))
    return answer

# Main:
# - Continue while the user wants to convert something
# - Check which conversion
# - Get the value
# - Display the result

while(ask_continue()):
    conversion_type = ask_conversion() 
    conversion_value = ask_value()
    result_message = "The result is "
   
    if (conversion_type == "euros"):
        result_message += euros_to_CHF(int(str(conversion_value)))
    elif (conversion_type == "celsius"):
        result_message += celsius_to_farenheit(int(str(conversion_value)))
    elif (conversion_type == "liters"): 
        result_message += liters_to_gallons(int(str(conversion_value)))
    else:
        result_message = "Sorry. I can't do this conversion."
 
    print(result_message)