import axios from "axios";
const header = {
  "Content-Type": "application/json",
  "user": "secret",
  "x-api-key": "secret"
}
export const client = axios.create({ baseURL: "http://api.vquiz.tinpangames.test", headers: header });


const values = [0,1,2,3,4];

function main() {
  values.map(async(v) => {
    try{
      const response = await client.get("/", { headers: header });
      console.log(v, response.data);
    } catch (error) {
      console.log(error);
    }
  })
}
main();