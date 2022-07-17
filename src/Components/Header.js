import react from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo-teste.png';

export default function Header(){
    return (
        <>
            <HeaderStyle>
                <img src={logo}></img>
            </HeaderStyle>
        </>
        
    );
}

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 64px;
    position: fixed;    
    top: 0px;
    left: 0px;
    background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;

    img{
        width: 192px;
        height: 37px;
        margin-left: 24px;
    }
`




