SocialSight – Social Media Content Analyzer
SocialSight is a lightweight, AI-assisted tool that extracts text from PDF documents and images using OCR and parsing techniques. It is designed as part of an academic assignment focused on analyzing 
social media content by transforming uploaded documents into extractable, readable text. The system provides a simple interface for uploading files and retrieving extracted text instantly.

🚀 Features
✔ Upload PDF or Image (JPG/PNG)
✔ Extract text using:
    • pdf-parse for digital PDFs
    • tesseract.js for OCR on images
✔ Display extracted text in UI
✔ Easy-to-use React interface
✔ Node.js + Express backend
✔ Ready for deployment (Render + Netlify/Vercel)

🛠 Tech Stack
Frontend
 • React.js
 • Fetch API
 • HTML File Input
Backend
 • Node.js
 • Express
 • Express-fileupload
 • pdf-parse
 • Tesseract.js (OCR)
 • CORS

📁 Project Structure
SocialSight/
│
├── backend/
│   ├── index.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md

⚡ How to Run Locally
1. Clone Repository
git clone https://github.com/YOUR_USERNAME/SocialSight.git
cd SocialSight

2. Run Backend
cd backend
npm install
node index.js
Backend runs at:
👉 http://localhost:5000

3. Run Frontend
cd ../frontend
npm install
npm start
Frontend runs at:
👉 http://localhost:3000

🌐 API Endpoint
POST /extract-text
Uploads a file and returns extracted text.
Request:
 • Form-data
 • Key: file
 • Value: PDF/Image
 Response:
{
  "text": "Extracted content here..."
}
