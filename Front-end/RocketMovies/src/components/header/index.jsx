import { Container, Profile, Logout } from "./styles";
import { Input } from "../input";
import userimg from "../../assets/imguser.png";



export function Header() {

    return(
        <Container> 

            <h2>RocketMovies</h2>
            <Input className="Searchtitle" placeholder="Pesquisar pelo título" type="text" />

            <Profile> 
                <div><span>Rodrigo Gonçalves </span>
                    <Logout>sair</Logout>
                    </div>
            </Profile>
                <img src="https://scontent.ffln14-1.fna.fbcdn.net/v/t1.6435-9/76654424_535872567197712_6194206928122413056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs0UvZphpGmnZrqbbme-KfXztDLYqsnCZfO0MtiqycJu8lUofiE7GSbrP8iNIYxPBMDcxDgjJtP7NYFoCelqN6&_nc_ohc=yCjCOHD8jEQAX-VsCVQ&_nc_ht=scontent.ffln14-1.fna&oh=00_AfDnslvFCyMwJpASKdoxewM6i_aGW5NavNRJzNalBUo2yw&oe=65908C61"
                alt="Foto do usuário"/>
        </Container>
    );

}