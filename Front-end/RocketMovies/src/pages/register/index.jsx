import { Container, Form, Background } from "./styles";

import { Input } from '../../components/input/index';
import { Button } from '../../components/button/index';
import { FiMail, FiLock, FiUser, FiArrowLeft  } from 'react-icons/fi';



export function Register(){
    return(
        <Container>

            <Background/>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua Conta</h2>


                <Input 
                    placeholder="Nome" type="text" icon={FiUser}
                />
                <Input 
                    placeholder="E-mail" type="text" icon={FiMail}
                />
                <Input 
                    placeholder="Senha" type="password" icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#"><FiArrowLeft/> Voltar para o login</a>
            </Form>

            

        </Container>

)

};