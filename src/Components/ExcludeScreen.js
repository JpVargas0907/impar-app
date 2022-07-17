import { useState } from 'react';
import styled from 'styled-components';

import iconTrash from '../Assets/Icon-trash.svg';

export default function ExcludeScreen(props) {

    const { excludeStatus, setExcludeStatus } = props;

    function closeWindow(){
        setExcludeStatus(false);
    }

    return (
        <Content excludeStatus={excludeStatus}>
            <ExcludeContent>
                <ion-icon onClick={closeWindow} name="close-circle-outline"></ion-icon>
                <div className='image-content'>
                    <img className="card-image" src={iconTrash} />
                </div>
                <p className="tittle">Excluir</p>
                <p className="caption">CERTEZA QUE DESEJA EXCLUIR?</p>
                <div className="line"></div>
                <div className="buttons">
                    <ExcludeButton >
                        Excluir
                    </ExcludeButton>
                    <CancelButton onClick={closeWindow}>
                        Cancelar
                    </CancelButton>
                </div>
            </ExcludeContent>
        </Content>
    )
}

const Content = styled.div`
    display: ${props => props.excludeStatus  ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    top: 0px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
    opacity: 1;
    z-index: 2;

    .out{
        width: 60vw;
        height: 100vw;
        position: fixed;
    }
`

const ExcludeContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 438px;
    height: 434px;
    background: #FFFFFF 0% 0% no-repeat padding-box;

    ion-icon{
        width: 34px;
        height: 34px;
        background: #E76316 0% 0% no-repeat padding-box;
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;
        color: #FFFFFF;
    }

    .image-content{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 30px;
        background: #F6F4F6 0% 0% no-repeat padding-box;
        border: 6px solid #E4E4E4;
        margin-bottom: 25px;

        .card-image{
            width: 90px;
            height: 90px;
        }
    }

    .tittle{
        font: normal normal bold 32px/40px Muli;
        color: #DB2525;
        margin-bottom: 12px;
    }

    .caption{
        font: normal normal bold 12px/15px Muli;
        color: #454545;
    }

    .line{
        width: 90%;
        height: 0px;
        border: 1px solid #F0EFF0;
        margin-bottom: 20px;
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
    justify-content: center;
    width: 165px;
    height: 48px;
    background: #DB2525 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    cursor: pointer;

    color: #FFFFFF;
    font: normal normal bold 18px/23px Muli;
`

const CancelButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 48px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border: 1px solid #DB2525;
    border-radius: 8px;
    cursor: pointer;

    color: #DB2525; 
    font: normal normal bold 18px/23px Muli;
`