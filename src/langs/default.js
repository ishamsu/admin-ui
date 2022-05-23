
// specify the language code in currentLang
// use currentLocal anywhere in the project to access the text 
// check language text file containing all the text (const.js)

import text from "./const"
const currentLang = "en"
const currentLocal  = text[currentLang]
export default currentLocal
