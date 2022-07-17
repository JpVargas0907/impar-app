import {useState, React, useEffect} from "react";
import Header from "./Header";
import styled from 'styled-components';
import axios from "axios";

//Images and Icons
import banner from '../Assets/fundo-busca.png';
import lupa from '../Assets/lupa.svg';
import iconEdit from '../Assets/Icon-edit.svg';
import iconTrash from '../Assets/Icon-trash.svg';
import NewCardScreen from "./NewCardScreen";
import ExcludeScreen from "./ExcludeScreen";

export default function HomeScreen() {
    const [newCardStatus, setNewCardStatus] = useState(false);
    const [excludeStatus, setExcludeStatus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [cards, setCards] = useState([]);
    // const URL = ""

    useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/posts";

        const promise = axios.get(URL);

        promise.then((res) => {
            const { data } = res;
            setCards([...data]);
        });

        promise.catch();

    },[])

    function openNewCardScreen(){
        setNewCardStatus(true);
    }

    function openExcludeCardScreen(){
        setExcludeStatus(true);
    }

    return (
        <Content>
            <ExcludeScreen excludeStatus={excludeStatus} setExcludeStatus={setExcludeStatus}/>
            <NewCardScreen newCardStatus={newCardStatus} setNewCardStatus={setNewCardStatus}/>
            <Header />
            <SearchBar setSearchValue={setSearchValue}/>
            <ButtonNewCard>
                <p>Resultado de Busca</p>
                <button onClick={openNewCardScreen}>Novo Card</button>
            </ButtonNewCard>
            <CardsContent>
                {cards.map(card => {
                    const {id, title} = card;
                    if(searchValue === ""){
                        return <Card id={id} title={title} openNewCardScreen={openNewCardScreen} openExcludeCardScreen={openExcludeCardScreen}/>
                    } else if(title.includes(searchValue)){
                        return <Card id={id} title={title} openNewCardScreen={openNewCardScreen} openExcludeCardScreen={openExcludeCardScreen}/>
                    }
                })}
                
            </CardsContent>
        </Content>
    )
}

const Content = styled.div`
    top: 0px;
    left: 0px;
    background: #F6F4F6 0% 0% no-repeat padding-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ButtonNewCard = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font: normal 32px/40px Muli;
        color: #5F1478;
    }

    button{
        width: 173px;
        height: 48px;

        background: #E76316;
        box-shadow: 0px 3px 6px #92207242;
        border-radius: 8px;
        border: 0px;
        cursor: pointer;


        color: #FFFFFF;
    }
`

const CardsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
`

function SearchBar(props) {
    const { setSearchValue } = props;
    return (
        <SearchBox>
            <SearchBarBox>
                <SearchBarStyle
                    type="search"
                    placeholder=" Digite aqui sua busca..."
                    onChange={(e) => setSearchValue(e.target.value.toLocaleLowerCase())}
                />
                <button></button>
            </SearchBarBox>
        </SearchBox>
    )
}

const SearchBox = styled.div`
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 200px;
    margin-top: 64px;
    left: 0px;
    right: 0px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent url(${banner}) 0% 0% no-repeat padding-box;
`

const SearchBarBox = styled.div`
    width: 80%;
    height: 75px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 8px;

    button{
        width: 5%;
        height: 49px;
        border: none;
        cursor: pointer;

        background: transparent url(${lupa}) 0% 0% no-repeat padding-box;
    }
`

const SearchBarStyle = styled.input`
    top: 147px;
    left: 168px;
    width: 95%;
    height: 75px;
    border-radius: 8px;
    border: none;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    font: normal normal 300 24px/30px Muli;
    color: #757575;

`

function Card(props) {
    const {id, title, openNewCardScreen, openExcludeCardScreen} = props;

    return (
        <CardBox>
            <img className="card-image" src="https://st.depositphotos.com/1017908/1548/i/450/depositphotos_15489579-stock-photo-amazing-mountain-with-red-leaf.jpg" />
            <div className="line"></div>
            <p>{title}</p>
            <div className="buttons">
                <ExcludeButton onClick={openExcludeCardScreen}>
                    <img src= {iconTrash} />
                    excluir
                </ExcludeButton>
                <EditButton onClick={openNewCardScreen}>
                    <img src={iconEdit} />
                    editar
                </EditButton>
            </div>
        </CardBox>
    )
}

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-right: 30px;
    width: 234px;
    height: 267px;
    border-radius: 8px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;

    .card-image{
        width: 95px;
        height: 95px;
        border-radius: 50%;
        margin-bottom: 30px;
        background: #F6F4F6 0% 0% no-repeat padding-box;
        border: 1px solid #E4E4E4;
    }

    p{  
        height: 50px;
        width: 80%;
    }

    .line{
        width: 169px;
        height: 0px;
        border: 1px solid #F0EFF0;
    }

    .buttons{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`

const ExcludeButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        margin-right: 5px;
    }
`

const EditButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        margin-right: 5px;
    }
`