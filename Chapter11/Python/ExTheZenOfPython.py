# TheZenOfPython
text_file = open("/Users/ZiTa/Documents/AdaFlow/EPFL-Exercises/Chapter11/Python/TheZenOfPython.txt")
content = text_file.read()


# Clean up the data
parsed = content.replace(".", "").replace("-", "").replace("!", "").replace("'", "").replace(",", "").replace("*", "").replace("\n", " ").replace("  ", " ").strip()

# Count the words 
word_count = len(parsed.split(" "))
print(word_count)

new_text = content.replace("is", "should be")
new_text = new_text.upper()
print(new_text)

text_file.close()

