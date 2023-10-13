from flask import Flask, jsonify, send_from_directory

# This is the path contains our react app (frontend)
# and the static files to serve to the browser.
app = Flask(__name__, static_folder="build", static_url_path="/")


# This is the endpoint our react app calls (via button click)
@app.route('/api/message', methods=['GET'])
def get_message():
    return jsonify({'message': 'JSON Response from Python Flask!'})


# This route serves the React app (frontend) from the build directory.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


# This is the main entry point for starting the server.
if __name__ == '__main__':
    app.run(port=5050)
