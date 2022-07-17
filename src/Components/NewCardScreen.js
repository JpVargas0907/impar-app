import { useState } from 'react';

import styled from 'styled-components';
import createIcon from '../Assets/icone_criar.svg'

export default function NewCardScreen(props){
    const {newCardStatus, setNewCardStatus} = props;
    
    function closeWindow(){
        setNewCardStatus(false);
    }

    function message(){
        alert("Funcionalidade ainda não foi implementada!");
    }

    return (
        <Content newCardStatus={newCardStatus}>   
            <div className='out' onClick={closeWindow} ></div>
            <NewCardContent>
                <Titlle>
                    <img src={createIcon} />
                    Criar Card
                </Titlle>
                <Line />
                <Form>
                    <label>DIGITE UM NOME PARA O CARD</label>
                    <input 
                        type="text"
                        placeholder=" Digite o título"
                    />
                     <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                    <input 
                        type="text"
                        placeholder=" Nenhum arquivo selecionado"
                    />

                    <Line />

                    <div>
                        <button onClick={message}>Criar Card</button>
                    </div>
                </Form>
            </NewCardContent>
        </Content>
    )
}

const Content = styled.div`
    display: ${props => props.newCardStatus ? "block" : "none"};
    top: 0px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
    opacity: 1;
    z-index: 1;

    .out{
        width: 60vw;
        height: 100vw;
        position: fixed;
    }
`

const NewCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 40vw;
    height: 100vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    right: 0px;
    top: 0px;
    z-index: 1;
`
const Titlle = styled.p`
    display: flex;
    align-items: center;
    font: normal normal bold 32px/40px Muli;
    letter-spacing: 0px;
    color: #5F1478;
`   

const Line = styled.div`
    width: 90%;
    height: 0px;
    border: 1px solid #F0EFF0;
    margin-bottom: 40px;
`
const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;

    input{
        width: 100%;
        height: 60px;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        margin-bottom: 50px;
    }

    label{
        font: normal normal bold 14px/18px Muli;
        letter-spacing: 0px;
        color: #454545;
        margin-bottom: 12px;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    button{
        width: 167px;
        height: 48px;
        background: #E76316 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #92207242;
        border-radius: 8px;
        border: none;
        font: normal normal bold 18px/23px Muli;
        letter-spacing: 0px;
        color: #FFFFFF;
        cursor: pointer;
    }
`