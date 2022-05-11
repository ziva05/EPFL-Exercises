import flask
app = flask.Flask("param")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

@app.route("/")
def homme():
    return get_html("index")

@app.route("/result")
def result():
    message = flask.request.args.get("message")
    return message

