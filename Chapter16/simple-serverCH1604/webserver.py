import http.server
import socketserver

port = 80
handler = http.server.SimpleHTTPRequestHandler

my_web_server = socketserver.TCPServer(("", port), handler)
print("I will start to listen through port " + str(port))
my_web_server.serve_forever()
