const express = require("express");
const app = express();

app.use(express.static("./public", {
    maxAge : "365 days"
}));
// TODO Add cache control support



const port = process.env.PORT || 8080 ;
app.listen(port, () => {
    console.log(`The server is now running at port ${port}...`);
});
