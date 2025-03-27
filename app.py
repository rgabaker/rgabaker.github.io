from flask import Flask, render_template, request
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    input1 = 0
    input2 = 0
    if request.method == 'POST':
        input1 = float(request.form['input1'])
        input2 = float(request.form['input2'])
    
    x = np.linspace(0, 360, 361)
    y_sin = np.sin(np.radians(x + input1))
    y_cos = np.cos(np.radians(x + input2))

    fig, ax = plt.subplots()
    ax.plot(x, y_sin, label='Sine Curve', color='blue')
    ax.plot(x, y_cos, label='Cosine Curve', color='red')
    ax.legend()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()

    return render_template('index.html', plot_url=plot_url, input1=input1, input2=input2)

if __name__ == '__main__':
    app.run(debug=True)
