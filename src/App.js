import { createContext, useEffect, useState } from 'react';
import './App.css';
import Text from './components/text/Text';

const ThemeContext = createContext()

function App() {

  const light_theme_settings = {
    theme:'light',
    colors:{
          bg:"#ffffff",
          color_0:"#000000"
    }
  }

  const dark_theme_settings = { 
    theme:'dark',
    colors:{
          bg:"#000000",
          color_0:"#ffffff"
    }
  }


  if(window.localStorage.getItem('theme_settings')==null){
    window.localStorage.setItem('theme_settings',JSON.stringify(light_theme_settings))
  }
  
  const [theme, set_theme] = useState(JSON.parse(window.localStorage.getItem('theme_settings')))

  const toggle_theme = ()=>{
    if(JSON.stringify(theme)===JSON.stringify(light_theme_settings)){
      set_theme(dark_theme_settings)
      window.localStorage.setItem('theme_settings',JSON.stringify(dark_theme_settings))
    }
    else{
      set_theme(light_theme_settings)
      window.localStorage.setItem('theme_settings',JSON.stringify(light_theme_settings))
    }
  }

  useEffect(()=>{
    document.body.style.backgroundColor = theme['colors']['bg']
  },[theme])

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme_settings:theme}}>
        <button style={{backgroundColor:'#b4b4b4'}} onClick={toggle_theme}>TOGGLE</button>
        <div style={{height:'5em'}}></div>
        <Text content={'Hello world'}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export {ThemeContext};