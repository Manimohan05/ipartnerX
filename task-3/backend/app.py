from flask import Flask, request, jsonify
from PyPDF2 import PdfReader

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_resume():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"})

    if file and file.filename.endswith('.pdf'):
        reader = PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
        
        # You can parse and categorize the text here
        categorized_data = {
            "Name": "John Doe",
            "Contact": "johndoe@gmail.com",
            "Skills": ["Python", "Flask"],
            "Experience": "Software Engineer"
        }
        return jsonify(categorized_data)
    
    return jsonify({"error": "Invalid file format"})

if __name__ == '__main__':
    app.run(debug=True)
