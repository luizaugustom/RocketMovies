
import { Container, Form, Avatar } from "./styles";
import { FiCamera, FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";

export function Perfil(){
    return(
        <Container>
            <header><a href="# ">  <FiArrowLeft/> Voltar</a> </header>
            <Form>
            <Avatar>
                <img src="https://scontent.ffln14-1.fna.fbcdn.net/v/t1.6435-9/76654424_535872567197712_6194206928122413056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs0UvZphpGmnZrqbbme-KfXztDLYqsnCZfO0MtiqycJu8lUofiE7GSbrP8iNIYxPBMDcxDgjJtP7NYFoCelqN6&_nc_ohc=yCjCOHD8jEQAX-VsCVQ&_nc_ht=scontent.ffln14-1.fna&oh=00_AfDnslvFCyMwJpASKdoxewM6i_aGW5NavNRJzNalBUo2yw&oe=65908C61"
                    alt="Foto do usuário"/>

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input id="avatar" type="file" />
                </label>
            </Avatar>
            <Input placeholder="Nome" type="text" icon={FiUser}/>
            <Input placeholder="Email" type="text" icon={FiMail}/>
            <Input placeholder="Senha Atual" type="password" icon={FiLock}/>
            <Input placeholder="Nova Senha " type="password" icon={FiLock}/>
            <Button title="Salvar"/>
            </Form>
        </Container>
    )
}