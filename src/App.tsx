import './styles/global.css';
import './styles/theme.css';
//import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Container } from './components/Container';



export function App(){
    return (
        <>
            <Container>
                <Heading>Logo</Heading>
            </Container>

            <Container>
                <Heading>Menu</Heading>
            </Container>

            <Container>
                <Heading>Form</Heading>
            </Container>

            <Container>
                <Heading>Footer</Heading>
            </Container>
        </>
    )
}
