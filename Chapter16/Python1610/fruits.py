import flask

app=flask.Flask("fruits")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

def get_fruits():
    fruitsdb = open("fruitsdb.txt")
    content = fruitsdb.read()
    fruitsdb.close()
    fruits = content.split("\n")
    return fruits


@app.route("/")
def homepage():
    html_page = get_html("index")
    fruits = get_fruits()
    actual_values = ""
    for fruit in fruits:
        actual_values += "<p>" + fruit + "</p>"
    return html_page.replace("$$FRUITS$$", actual_values)

@app.route("/another")
def about():
    return get_html("another")
 

