import flask

app=flask.Flask("guestlist")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

def get_guestlist():
    guestlistdb = open("guestlistdb.txt")
    content = guestlistdb.read()
    guestlistdb.close()
    guestlist = content.split("\n")
    return guestlist


@app.route("/")
def homepage():
    html_page = get_html("index")
    guestlist = get_guestlist()
    actual_values = ""
    for guest in guestlist:
        actual_values += "<p>" + guest + "</p>"
    return html_page.replace("$$GUESTS$$", actual_values)

@app.route("/another")
def about():
    return get_html("another")
 
