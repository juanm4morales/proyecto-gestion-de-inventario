import axios from "axios"

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

export default function Deserializer(itemName){
    return inventarioAPI.get(itemName.concat("/api/v1/".concat(itemName)));
}