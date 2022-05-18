import flask
app = flask.Flask("logic")

    
def add_notes(note_value):
    note = note_value
    file = open("enotes.txt", "a")
    file.write("----\n" + note + "\n")
    file.close()
    
def get_notes():
  notedb = open("enotes.txt")
  content = notedb.read()
  notedb.close()
  notes = content.split("\n")
  notes.pop(len(notes) - 1)
  return notes
    
    
def get_html(page_name):
  html_file = open(page_name + '.html')
  content = html_file.read()
  html_file.close()
  return content

@app.route("/")
def homepage():
  return get_html("eindex")


@app.route("/eadd")
def add():
  note_value = flask.request.args.get("q")
  add_notes(note_value)
  return get_html("eindex")


@app.route("/esearch")
def search():
  html_page = get_html("esearch-result")
  query = flask.request.args.get("search")
  notes = get_notes()
  result = ""
  
  for note in notes:
    if note.lower().find(query.lower()) != -1:
      result += "<p>" + note + "</p>"
      
  if result == "":
      result = "<p>No results found</p>"
  return html_page.replace("$$NOTES$$", result)

@app.route("/enotes")
def notes():
  html_page = get_html("enotes")
  notes = get_notes()
  result = ""
  for note in notes:
      result += "<p>" + note + "</p>"
      
  if result == "":
      result = "<p>No notes available</p>"
  return html_page.replace("$$NOTES$$", result)
