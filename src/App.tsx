import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';

import './styles/global.css';
import './styles/theme.css';
import { DefaultInput } from './components/DefaultInput';
import { DefaultInputRow } from './components/DefaultInputRow';

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
                  <DefaultInput id='meuInput' type='text' label='TEST'/> 
                </DefaultInputRow>

                <div className='formRow'>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                
                <div className='formRow'>
                  <span>Ciclos</span>
                  <p>0 0 0 0 0 0 0  0 0</p>
                </div>

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
