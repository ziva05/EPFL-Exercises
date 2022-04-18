# Set up:
# noteApp = input("What do you want to do?")

# user = input("Press 1 for adding a note.")
# user = input("Press 2 for searching your notes.")
# print(noteApp)
# print(user)

# file = open("noteApp.txt", "w")
# file.write("There are some interesting words in this text.\nThe first one would be adding a note.\nThe second would be find my notes.\nI have no clue for the third one.")


# Create a note
def write_note(text):
    file = open("noteApp.txt", "a")
    file.write("----\n")
    file.write(text + "\n")
    file.close()

# Search through notes
def search(text):
    file = open("noteApp.txt")
    content = file.read()
    file.close()
    result = ""
    notes = content.split("----")
    for note in notes:
        if note.find(text) != -1:
            result += "\n----" + note
    if result == "":
        print("Nothing found!")
    else:
        print(result)

# Display menu
print("What do you want to do?")
print("Press 1 for adding a note")
print("Press 2 for searching your notes")
answer = input(": ")

# Execute what is based on menu input
if answer == "1":
    print("Enter your note:")
    note = input().strip()
    write_note(note)
elif answer == "2":
    print("Enter the text to serach:")
    text = input().strip()
    search(text)
else:
    print("Sorry! I didn't understand that")
