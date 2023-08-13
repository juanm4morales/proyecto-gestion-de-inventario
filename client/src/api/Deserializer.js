import axios from "axios";

export const getAllTipoInsumo = () => {
    return axios.get("http://127.0.0.1:8000/TipoInsumo/api/v1/TipoInsumo/")
}