import axios from "axios";

const COCTAILSLIST =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

const FILTERLIST =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

export const coctailsList = (val = "Ordinary Drink") =>
  axios.get(`${COCTAILSLIST}${val}`);

export const filterList = () => axios.get(`${FILTERLIST}`);
