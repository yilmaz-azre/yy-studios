
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON isteklerini okuyabilmek için
app.use(express.json());

// Site dosyalarını yayınla
app.use(express.static(path.join(__dirname, "public")));

// Sunucu kontrol adresi
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    name: "YY Studios"
  });
});

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`YY Studios sunucusu ${PORT} portunda çalışıyor.`);
});
