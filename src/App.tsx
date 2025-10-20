/* Index Page */

import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { DefaultInputRow } from './components/DefaultInputRow';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { useState } from 'react'; 

export function App(){

  const [numero, setNumero]= useState(0);

  function handleClick() {
    setNumero(prevState => prevState+1);
  }
  
  return (
    <>
      <Heading>
        Número: {numero}
        <button onClick={handleClick}>Aumentar</button>
      </Heading>
      <Container>
          <Logo />
      </Container>

      <Container>
          <Menu />
      </Container>

      <Container>
          <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          
          <DefaultInputRow>
            <DefaultInput 
              id='meuInput'
              type='text' 
              labelText={numero.toString()}
              placeholder='Digite sua task aqui!!!'
            /> 
          </DefaultInputRow>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          
          <DefaultInputRow>
            <Cycles />
          </DefaultInputRow>

          <DefaultInputRow>
            <DefaultButton status='start'>
              <PlayCircleIcon/>
            </DefaultButton>
          </DefaultInputRow>

        </form>
      </Container>

      <Container>
          <Footer />
      </Container>

      <Container>
        algo
      </Container>
    </>
  )
}
