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

export const TitleText = styled.label`
    color: #5A53F7;
    font-size: 24px;
    font-weight: 800;
`;

export const BtnTableText = styled.label`
    color: #5A53F7;
    font-size: 18px;
    cursor: pointer;
`;

export const BtnsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const BtnActionTable = styled.div`
    width: 200px;
    border-radius: 10px;
    border: 1px solid #848484;
    margin-top: 30px;
    margin-left: 30px;
    cursor: pointer;
`;

export const TableContainer = styled.div`
    margin-top: 40px;
    text-align: end;
`;

export const Line = styled.div`
    width: 700px;
    padding: 5px;
    text-align: start;
`;

export const SubLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SubLineLeftContainer = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
`;

export const NormalText = styled.label`
    font-size: 16px;
    color: #848484;
    font-weight: 600;
`;

export const BtnActions = styled.div`
    border-radius: 10px;
    width: 70px;
    text-align: center;
    cursor: pointer;
`;

export const StatusContainer = styled.div`
    border-radius: 10px;
    width: 100px;
    font-size: 12px;
    text-align: center;
    padding-top: 2px;
    font-weight: 600;
`;