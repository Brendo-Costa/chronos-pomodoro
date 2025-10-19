import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';

import './styles/global.css';
import './styles/theme.css';
import { DefaultInput } from './components/DefaultInput';
import { DefaultInputRow } from './components/DefaultInputRow';
import { Cycles } from './components/Cycles';

export function App(){
    return (
        <>
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
                    labelText='Task'
                    placeholder='Digite sua task aqui!!!'
                  /> 
                </DefaultInputRow>

                <div className='formRow'>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                
                <DefaultInputRow>
                  <Cycles />
                </DefaultInputRow>

                <div className='formRow'>
                  <button>Enviar</button>
                </div>
              </form>
            </Container>

            <Container>
                <Heading>Footer</Heading>
            </Container>
        </>
    )
}
