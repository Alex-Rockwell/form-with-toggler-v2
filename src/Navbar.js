import { useContext } from 'react'
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import {StRoot, StToolbar, StMenuButton, StTitle, StGrow, StSearch, StSearchIcon, StAppBar, StInputBase} from './CustomComponents'
import england from './img/uk.svg'
import france from './img/france.png'
import spain from './img/spain.png'
import {ThemeContext} from './contexts/ThemeContext';
import {LanguageContext} from './contexts/LanguageContext'

const content = {
  english: {
    search: 'Search...',
    flag: england
  },
  french: {
    search: 'Chercher...',
    flag: france
  },
  spanish: {
    search: 'Buscar...',
    flag: spain
  }
}

function Navbar(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  const {language} = useContext(LanguageContext)
  const {search, flag} = content[language]

  return (
    <StRoot>
    <StAppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
      <StToolbar>
        <StMenuButton color='inherit'>
          <span 
            style={{marginRight: '10px', marginTop: '-4px', width: '35px', height: '20px'}}>
              <img src={flag} height={'20px'} alt='fr-flag'/>
          </span>
          <StTitle variant='h6' color='inherit'>
            {language}
          </StTitle>
          <Switch onChange={toggleTheme}/>
        </StMenuButton>
      </StToolbar>
      <StGrow></StGrow>
      <StSearch>
        <StSearchIcon>
          <SearchIcon />
        </StSearchIcon>
        <StInputBase placeholder={search}/>
      </StSearch>
    </StAppBar>
  </StRoot>
  )
}

export default Navbar