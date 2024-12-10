import api from "./services/api";

api
  .get("users/gabjohann")
  .then((response) => console.log(response.data))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
