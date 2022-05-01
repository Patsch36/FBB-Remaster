// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify  } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

const LightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#c6a966',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const DarkTheme = {
  dark: true,
  colors: {
    background: '#000000',
    surface: '#000000',
    primary: '#c6a966'
  }
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'DarkTheme',
    themes: {
      LightTheme,
      DarkTheme,
    }
  }
})
