import React, {useContext} from 'react'
import './FormStyles.css'
import { InputLabel, MenuItem, Select, Typography, FormControl, Input, FormControlLabel, Checkbox } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { CustomAvatar, CustomButton, CustomPaper } from './CustomForm';
import {LanguageContext} from './contexts/LanguageContext'
const words = {
  english: {
    signIn: 'Sign in',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Electronique',
    password: 'Mot de Passe',
    remember: 'Souveens-toi De Moi',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame',
  }
}

function Form(props) {
  const {language, changeLanguage} = useContext(LanguageContext)
  const {email, signIn, password, remember} = words[language]

  return (
    <main className='Form-main'>
    <CustomPaper>

      <CustomAvatar>
        <PersonIcon />
      </CustomAvatar>

      <Typography variant='h5' sx={{marginTop: '.5rem'}}>{signIn}</Typography>

      <Select labelId='selectLabel' value={language} sx={{marginTop: '1rem'}} onChange={changeLanguage}>
        <MenuItem value='english'>English</MenuItem>
        <MenuItem value='french'>French</MenuItem>
        <MenuItem value='spanish'>Spanish</MenuItem>
      </Select>

      <form className='Form-inputs'>
        <FormControl required fullWidth sx={{marginBottom: '2rem',}}>
          <InputLabel htmlFor='email'>{email}</InputLabel>
          <Input id='email' name='email'/>
        </FormControl>
        <FormControl required fullWidth sx={{marginBottom: '2rem',}}>
          <InputLabel htmlFor='password'>{password}</InputLabel>
          <Input id='password' name='password'/>
        </FormControl>
        <FormControlLabel control={<Checkbox color='primary'/>} label={remember} sx={{marginBottom: '2rem',}}/>
        <CustomButton variant='contained' type='submit' fullWidth color='primary' sx={{marginBottom: '2rem',}}>{signIn}</CustomButton>
      </form>

    </CustomPaper>
  </main>
  )
}

export default Form