import { Container, SubHeader } from "./styles";

import { Header } from "../../components/header/index";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea/input";
import { NoteItem } from "../../components/noteitem";
import { Button } from "../../components/button/index";


export function CreateMovies(){
    return(
        <Container>
            <Header/>
            <body>
                <SubHeader>
                <a href="#" ><FiArrowLeft/>  Voltar</a>
                <h2>Novo Filme</h2>
                </SubHeader>
                <div id="initial">
                <Input placeholder="Título" type="text"/>
                <Input placeholder="Sua Nota (de 0 a 5) " type="text"/>
                </div>
                <Textarea placeholder="Observações" type="text"/>
                <h3>Marcadores</h3>
                <div id="notes">
                    <NoteItem value="React"/>
                    <NoteItem isNew value="Criar Notas"/>
                </div>
                <div id="buttons">
                <Button title="Excluir filme"/>
                <Button title="Salvar alterações"/>
                </div>
            </body>

        </Container>

    )
}