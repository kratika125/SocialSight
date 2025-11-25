const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const Tesseract = require("tesseract.js");

const app = express();

app.use(cors());
app.use(fileUpload());

app.post("/extract-text", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.file;

    if (file.mimetype === "application/pdf") {
      const data = await pdfParse(file.data);
      return res.json({ text: data.text });
    }

    const result = await Tesseract.recognize(file.data, "eng");
    return res.json({ text: result.data.text });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
