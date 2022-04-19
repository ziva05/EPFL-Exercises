# 13.03. It all begins with a Class
# class Cat:
#     name = ""
#     species = ""
#     weight = 0
#     color = ""

# tom = Cat()
# tom.name = "Tom"
# tom.species = "Tabby"
# tom.weight = 2
# tom.color = "Orange"

# athena = Cat()
# athena.name = "Athena"
# athena.species = "Siamese"
# athena.weight = 1.5
# athena.color = "Brown"

# # The Cat class code goes here
# # The definition for tom and athena goes here

# print("Athena is a " + athena.species + " cat.")
# print("But Tom is a " + tom.species + " cat.")

# 12.05. Objects can do things
# class Cat:
#     name = ""

#     def sleep(self):
#         print(self.name + " is sleeping")
#     def show(self):
#         print(self.species + " is the species of " + self.name)

#     def eat(self, food):
#         print(self.name + " is eating " + food)

# tom = Cat()
# tom.name = "Tom"
# tom.species = "Tabby"
# tom.sleep()
# tom.show()
# tom.eat("a mouse")

# bob = Cat()
# bob.name = "Bob"
# bob.species = "Siamese"
# bob.sleep()
# bob.eat("a tomato")


# 13.07. Constructing objects
# # Class definition
# class Cat:
#     name = ""
#     species = ""

#     def __init__(self, name, species):
#         self.name = name
#         self.species = species

#     def sleep(self):
#         print(self.name + " is sleeping")

# # Object
# tom = Cat("Tom", "Tabby")
# tom.sleep()

#############################################################

# Class definition
# class Iphone:
#     name = ""
#     color = ""
#     capacity = 0

#     def call_friend(self):
#         print(self.name + " is calling a friend!")
    
#     def send_email(self):
#         print(self.name + " is writing an email.")
    
# # Objects
# iPhoneSE = Iphone()
# iPhoneSE.name = "iPhoneSE Ian"
# iPhoneSE.color = "Red"
# iPhoneSE.capacity = 128

# iPhone6 = Iphone()
# iPhone6.name = "iPhone6 Caro"
# iPhone6.color = "Golden"
# iPhone6.capacity = 64 

# iPhoneSE.call_friend() 
# iPhone6.send_email()

# print("iPhoneSE is a " + iPhoneSE.color + " color.")
# print("But iPhone6 is a " + iPhone6.color + " color.")

# # Class definition
# class Iphone:
#     name = ""
#     color = ""


#     def __init__(self, name, color):
#         self.name = name
#         self.color = color

#     def call_friend(self):
#         print(self.name + " is calling a friend!")

# # Objects
# iPhoneSE = Iphone("iPhoneSE Ian", "Red")
# iPhoneSE.call_friend()

################################################################

# # Class definition
class Car:
    name = ""
    color = ""
    speed = 0
    
    def __init__(self, name, color, speed):
        self.name = name
        self.color = color
        self.speed = speed
    
    def speed_limit(self):
        print("At " + str(self.speed) + " km/h is turning too fast.")

    def different_speeds(self):
        print(self.name + " is too fast in short turn with " + str(self.speed) + " km/h")

# Objects
audi = Car("Audi", "Red", 88)
audi.name = "Audi"
audi.color = "Red"
audi.speed = 88

audi = Car("Audi", "Red", 88)
audi.speed_limit()
audi.different_speeds()