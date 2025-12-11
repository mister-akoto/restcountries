
  export default function toggleTheme(element, theme,darkClass= "dark-containers", lightClass ='light-containers'){
      if(theme){
        element?.classList.remove(lightClass)
        element?.classList.add(darkClass)
      }else{
        element?.classList.remove(darkClass)
        element?.classList.add(lightClass)
      }
}