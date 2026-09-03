const express = require("express");

const app = express();

app.get("/search", (req, res) => {
    const query = req.query.q;

    const result = eval(query);

    res.send(result);
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
