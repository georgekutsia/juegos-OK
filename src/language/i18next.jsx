import i18n from "i18next"

import{ger} from "./ger";
import{esp} from "./esp";
import { initReactI18next } from "react-i18next";


const resources = {
  esp:{
    translation:esp
  },
ger:{
  translation: ger
}
}

i18n.use(initReactI18next).init({
  resources,
  lng: "esp"
})

export default i18n