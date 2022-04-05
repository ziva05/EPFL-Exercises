# Les conditions if ex 1
# apples = 3
# oranges = 3
# if apples <= oranges:
# print("Il y a moins de pommes que d'oranges...")
# print("... ou autant!")
# print("Ici je ne suis pas dans la condition")


##############################################################################

# Exo 1 - Partie 2 
# Mettre le code dans une fonction et appeler la fonction 
# def count_characters(limite):
#     user_sentence = input("Saisie une phrase afin de compter les caractères : ")
#     text_length = len(user_sentence)
#     if text_length >= limite: 
#         print("La limite est depasse")
#     message_result = 'La phrase : ' + user_sentence + ' compte ' + str(text_length) + ' caractères'
#     print(message_result)
	


# limite = 10 
# count_characters(limite)
# count_characters(60)
# count_characters(limite)

#####################################################################

from pkg_resources import UnknownExtra


def count_characters():
      question1 = input("Full price of the order")
      question2 = input("To which country is delivering?")
      French = 33
      UK = 44
      Switzerland = 41 
      if French == 33 and UK == 44 and Switzerland == 41:
          print("free delivery")
      else: 
            print("you have to pay")

     
#     input("Le montant total de la commande : ")
#     user_sentence = input("Quel est votre pays de livraison?")
#     pays_de_livraison = 33, 44, 41
#     if pays_de_livraison ="les frais de port gratuit"
#         print("les frais de port gratuit")

count_characters()