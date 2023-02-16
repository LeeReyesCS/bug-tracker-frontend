import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


console.log("This is my url",`https://bug-tracker-backend.herokuapp.com`)
export default axios.create({
  baseURL:`https://bug-tracker-backend.herokuapp.com`,
  headers: {"ngrok-skip-browser-warning": "true",
  'Access-Control-Allow-Origin': '*',
  Authorization: `bearer ${cookies.get("token")}`,
}
});
