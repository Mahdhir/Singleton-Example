// Import stylesheets
import "./style.css";
import { First } from "./first.js";
import { Second } from "./second.js";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

new First();
new Second();
