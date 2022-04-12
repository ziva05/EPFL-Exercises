# class Human:
#     name = ""
#     age = 0
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
        

#     def sayHi(self):
#         print("Hi! I'am " + self.name)

#     def takeCoffee(self):
#         print("Hm... I don't like a coffee. I rather drink a cup of tea.")

# #### class Médecin ###
# class Medecin(Human): 
#     experience = 6
#     languages = [] 
    
#     def __init__ (self, name, age, experience):
#         super().__init__(name,age)
#         self.experience = experience

#     def sayHi(self):
#         print("Hi!  I'm " + self.name + " a medical doctor.")
#         print("I have " + str(self.experience) + ", years of experience")

#     def learnLanguage(self, languageName):
#         try:
#             value_index = self.languages.index(languageName)
#         except: 
#             value_index = -1

#         if value_index == -1:
#             self.languages.append(languageName)
#             print("I'am learning " + languageName + "...")
#         else:
#             print("Oh, I already know Javascript, but I can practice.")

#     def takeCoffee(self):
#         print("OK, " + self.name + "... ")
#         print("Keep calm and drink a coffee ")
#         print("Now, I am ready to code!")

#     def codeSomething(self, language = "Javascript"):
#         try: 
#             value_index = self.languages.index(language)
#         except:
#             value_index = -1
        
#         if value_index == -1:
#             print(language + "? I don't know this language...")
#         else:
#             print("Let's go for some code in " + language + "!")


# #### Création d'objets ###
# melanie = Human("Mélanie",30)
# johan = Medecin("Johan",40,6)

# print("\n----- Mélanie ------\n")
# melanie.sayHi()
# melanie.takeCoffee()

# print("\n----- Johan ------\n")
# johan.sayHi()
# johan.codeSomething("Python")
# johan.learnLanguage("Python")
# johan.codeSomething("Python")
# johan.takeCoffee()

### my example ### 
class Human:
    name = ""
    age = 0
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sayHi(self):
        print("Hi! I'm Johana.")       
        print("This is my friend.")
    
    def takeCoffee(self):
        print("OK!")


#### class Médecin ###
class Medecin(Human): 
    experience = 6
    specialisation = [] 
    
    def __init__ (self, name, age, experience, specialisation):
        super().__init__(name,age)
        self.experience = experience
        self.specialisation = specialisation

    def sayHi(self):
        print("Hi!  I'm " + self.name + " a medical doctor.")
        print("I have " + str(self.experience) + ", years of experience.")
        print("I'm specialised in orthopedics.")

    def learnSpecialisation(self, specialisationName):
        try:
            value_index = self.specialisation.index(specialisationName)
        except: 
            value_index = -1

        if value_index == -1:
            print("I'am learning " + "...")
        else:
            print("Oh, I already know spine surgery, but I can practice.")

    def takeCoffee(self):
        print("OK, " + self.name + "... ")
        print("Keep calm and drink a coffee ")
        print("Now, I am ready to operate!")

    def specialiseSomething(self, specialisation = "Spine"):
        try: 
            value_index = self.specialisation.index(specialisation)
        except:
            value_index = -1
        
        if value_index == -1:
            print(specialisation + "? I don't know this technic...")
        else:
            print("Let's go for some new method in " + specialisation + "!")

#### Création d'objets ###
johana = Human("Johana",30)
johan = Medecin("Johan",40,6, "spine")

print("\n----- Johana ------\n")
johana.sayHi()
johana.takeCoffee()

print("\n----- Johan ------\n")
johan.sayHi()
johan.specialiseSomething("ELIF")
johan.learnSpecialisation("ELIF")
johan.takeCoffee()


