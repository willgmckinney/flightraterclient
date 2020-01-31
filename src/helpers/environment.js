let APIURL = "";
switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:8000";
    break;
  case "wm-flightrater-client.herokuapp.com/":
    APIURL = "https://wm-flightrater-server.herokuapp.com"
    break;
}
export default APIURL;