import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "../client/components/App";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/../client`));

app.get("*", (_, res) => {
  let reactAppMarkup = renderToString(<App />);
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        <div id="root">
          ${reactAppMarkup}
        </div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.info("App listening at " + port);
});
