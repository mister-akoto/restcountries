export default function getLanguages(languageObject){
  const lang = Object.values(languageObject.languages)
  return lang.join(", ")
}