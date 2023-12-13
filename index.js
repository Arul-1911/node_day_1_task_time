const express = require("express");
const app = express();
const fs = require("fs").promises;

const PORT = 4000;

app.get("/", async (req, res) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    await fs.writeFile("date-time.txt", `${formattedDate}\n${formattedTime}`);

    const jsonResponse = {
      date: formattedDate,
      time: formattedTime,
    };

    res.json(jsonResponse);
  } catch (error) {
    console.error("error in writing file", error);
    res.status(500).json({ error: "server error" });
  }
});

app.listen(PORT, () => {
  console.log("port is running");
});
