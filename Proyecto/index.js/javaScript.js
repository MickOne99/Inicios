const changeThemeButtons = document.querySelectorAll('[name="theme"]')
const rootStyle = document.documentElement.style


const lightTheme = {

     "--bg-color"     : "#ffffff",
     "--bg-color-2"   : "#848484ff",
     "--text-color"   : "#000",
     "--accent-color" : "rgba(255, 255, 255, 0.678)",
     "--font"         : " sans-Serif"

}

const darkTheme = {

     "--bg-color"     : "#313131",
     "--bg-color-2"   : "#008080",
     "--text-color"   : "#ffffff",
     "--accent-color" : "rgba(132, 132, 132, 0.541)",
     "--font"         : "impact, sans-Serif"

}

for (let button of changeThemeButtons ) {
     button.addEventListener("change", e => {
      if (e.target.id === `dark`){
           changeTheme(darkTheme)
      }else if (e.target.id === `light`)
           changeTheme(lightTheme)
     })
}

const changeTheme = theme => {
      let cssVars = Object.keys(theme)
     for ( let cssVar of cssVars) {
          rootStyle.setProperty(cssVar, theme[cssVar])
     }    
}

