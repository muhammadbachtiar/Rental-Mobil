const http = require("http");
const getHtml = require("../helpers/getHtml");
const readStaticFiles = require("../helpers/readStaticFile");
const PORT = 8888;

const onReq = (req, res) => {
    const url  = req.url;

    switch (url) {
        case "/":
            res.writeHead(200);
            res.end(getHtml("index.html"));
            break;
        case "/cars":
            res.writeHead(200);
            res.end(getHtml("cariMobil.html"));
            break;
        case "/testing":
            res.writeHead(200);
            res.end(getHtml("testing.html"));
            break;
        default:
            if (url.endsWith(".js")) {
                readStaticFiles(url, res, "text/js", "UTF-8");
            }else if (url.endsWith(".css")) {
                readStaticFiles(url, res, "text/css", "UTF-8");
            }else if (url.endsWith(".png")) {
                readStaticFiles(url, res, "image/png");
            }else if (url.endsWith(".jpg")) {
                readStaticFiles(url, res, "image/jpg");
            }else {
                res.writeHead(404);
                res.end("Not Found");
            }
    }
}

const server = http.createServer(onReq);
server.listen(PORT, "0.0.0.0", ()=> {
    console.info(`is listening on port ${PORT}`)
});