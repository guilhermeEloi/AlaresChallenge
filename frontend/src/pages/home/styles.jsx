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
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
`;

export const TitleText = styled.label`
    color: #5A53F7;
    font-size: 24px;
    font-weight: 800;
`;

export const ContainerContentPlans = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    margin-top: 30px;
    justify-content: space-evenly;
`;

export const PlanContainer = styled.div`
    display: flex;
    width: 260px;
    height: 100%;
    background: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #5A53F7;
    margin-bottom: 20px;
    flex-direction: column;
    padding: 10px;
`;

export const PlanName = styled.label`
    color: #5A53F7;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 10px;
`;

export const PlanSpeedText = styled.label`
    color: #5A53F7;
    font-size: 28px;
    font-weight: 600;
`;

export const PlanBenefitText = styled.label`
    color: #5A53F7;
    font-size: 24px;
    font-weight: 600;
`;

export const PlanBenefitStreamingText = styled.label`
    color: #5A53F7;
    font-size: 26px;
    font-weight: 800;
`;

export const PlusPlans = styled.label`
    color: #77F3AE;
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
`;

export const BtnOrder = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #77F3AE;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #5149ff;
    }
`;

export const PlanContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
`;
