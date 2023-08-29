import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #FAFAFA;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    background: #5a53f7;
    justify-content: space-between;
    align-items: center;
`;

export const LogoImg = styled.img`
  width: 160px;
  padding: 20px;
`

export const BtnAdm = styled.div`
    width: 160px;
    background: #77F3AE;
    border-radius: 10px;
    margin-right: 10px;
    text-align: center;
    transition: background-color 0.5s ease;
    cursor: pointer;
    
    &:hover {
        background-color: #5149ff;
    }
`;

export const BtnAdmText = styled.label`
    color: #fafafa;
    font-size: 20px;
    cursor: pointer;
`;

export const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    text-align: center;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
`;

export const ContainerContentForm = styled.div`
    display: flex;
    width: 50%;
    height: 45%;
    text-align: center;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    background-color: #ccc;
    border-radius: 10px;
    justify-content: space-around;
`;

export const TitleText = styled.label`
    color: #5A53F7;
    font-size: 24px;
    font-weight: 800;
`;

export const ModalContent = styled.div`
    margin-left: 15px;
    display: flex;
    text-align: left;
    flex-direction: column;
    margin-top: 10px;
`;

export const FormText = styled.text`
    color: #000;
    font-size: 18px;
`;

export const Line = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    text-align: start;
    justify-content: center;
`;

export const NormalText = styled.text`
    font-size: 16px;
    color: #848484;
`;

export const ContainerActions = styled.div`
    display: flex ;
    width: 50%;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 20px;
`;

