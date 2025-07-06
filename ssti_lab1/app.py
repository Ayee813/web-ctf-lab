from flask import Flask, request, render_template, render_template_string

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    output = ""
    if request.method == "POST":
        name_input = request.form.get("name", "")
        try:
            output = render_template_string(name_input) #the Vulnerable is here
        except Exception as e:
            output = f"Error: {e}"
    return render_template("index.html", output=output)

if __name__ == "__main__":
    app.run(debug=True)
