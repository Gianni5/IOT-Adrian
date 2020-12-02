from flask import Flask, render_template
from db import Database

app = Flask(__name__)


# mango: rgba(255, 190, 11, 1);
# mango: rgba(255, 190, 11, 0.5);
# orange-pantone: rgba(251, 86, 7, 1);
# winter-sky: rgba(255, 0, 110, 1);
# blue-violet: rgba(131, 56, 236, 1);
# azure: rgba(58, 134, 255, 1);


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/humidity')
def humidity():
    return render_template('humidity.html')


@app.route('/cpu')
def chart_cpu():
    return render_template('chart-cpu.html')


if __name__ == '__main__':
    app.run()
