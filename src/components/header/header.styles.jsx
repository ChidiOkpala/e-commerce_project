import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    width:100%;
    height:70px;
    display:flex;
    justify-content: space-between;
    margin-bottom:25px;
`;

export const LogoContainer = styled(Link)`
    height:100%;
    width:70px;
    padding: 0px;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    color: black;
    cursor: pointer;
`;

export const LogoHeader = styled.h1`
    font-size: 50px;
    font-weight: bold;
    padding-top: 0px;
    margin-top: 0px;
`;