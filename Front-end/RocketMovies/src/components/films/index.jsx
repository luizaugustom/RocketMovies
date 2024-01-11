import { Container } from "./styles";

import { Tag } from "../tag/index";

export function Films( {title , children, tagtitle } ){
    return(
        <Container>
            <h2>{title}</h2>
            <p>{children}</p>
            <Tag title="Ficção Cientifica"/>
            <Tag title="Ficção Drama"/>
            <Tag title="Ficção Familia"/>

        </Container>

    )
}