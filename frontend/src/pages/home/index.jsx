import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import ImgLogo from '../../assets/logo.png';

import {
    Container,
    BtnAdm,
    BtnAdmText,
    Header,
    LogoImg,
    ContainerContent,
    TitleText,
    ContainerContentPlans,
    PlanContainer,
    PlanContent,
    PlanName,
    PlusPlans,
    PlanBenefitText,
    BtnOrder,
    PlanSpeedText,
} from './styles';

import api from '../../services';

import { MaskCellphone } from '../../utils/masks';

export default function Home() {
    const [plans, setPlans] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [planSelected, setPlanSelected] = useState("");
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const listAllPlans = async () => {
        try {
            const response = await api.get("/plans");
            setPlans(response.data)
        } catch (err) {
            console.log("Erro: ", err)
            toast.error("Erro ao listar planos!");
        }
    }

    const handleOrder = async () => {
        if (name === '' || email === '' || phone === "") {
            toast.error("Por favor preencha todos os campos!");
        } else {
            if (email.indexOf("@") > 0 && email.indexOf(".") > 0) {
                try {
                    const toSend = {
                        clientName: name,
                        clientEmail: email,
                        clientPhone: phone,
                        planId: planSelected
                    }

                    await api.post("/order", toSend);

                    toast.success("Plano contratado com sucesso!");
                    setShowModal(false);
                } catch (err) {
                    toast.error("Não foi possível contratar o plano");
                }
            } else {
                toast.error("Favor preencher um e-mail válido");
            }
        }
    }

    useEffect(() => {
        listAllPlans()
    }, []);

    return (
        <Container>
            <Header>
                <LogoImg src={ImgLogo} alt="Alares" />
                <BtnAdm onClick={() => navigate("/admin")}>
                    <BtnAdmText>Acessar painel administrativo</BtnAdmText>
                </BtnAdm>
            </Header>
            <ContainerContent>
                <TitleText>Escolha o plano que se encaixa perfeitamente para você!</TitleText>
                <ContainerContentPlans>
                    {plans && plans.map((plan) => (
                        <PlanContainer style={{ backgroundColor: plan.costBenefit === true ? "#5A53F7" : "#fff" }} key={plan._id}>
                            <PlanContent>
                                <PlanName style={{ color: plan.costBenefit === true ? "#fff" : "#5A53F7" }}>{plan.name}</PlanName>
                                <PlanSpeedText style={{ color: plan.costBenefit === true ? "#fff" : "#5A53F7" }} >{plan.speed} {plan.prefix}</PlanSpeedText>
                                {plan.signatureWifi && (
                                    <>
                                        <PlusPlans>
                                            +
                                        </PlusPlans>
                                        <PlanSpeedText style={{ color: plan.costBenefit ? "#fff" : "#5A53F7" }}>Wi-fi</PlanSpeedText>
                                    </>
                                )}
                                {plan.signatureGames && (
                                    <>
                                        <PlusPlans>
                                            +
                                        </PlusPlans>
                                        <PlanSpeedText style={{ color: plan.costBenefit ? "#fff" : "#5A53F7" }}>Jogos</PlanSpeedText>
                                    </>
                                )}
                                {plan.signatureMovies && (
                                    <>
                                        <PlusPlans>
                                            +
                                        </PlusPlans>
                                        <PlanSpeedText style={{ color: plan.costBenefit ? "#fff" : "#5A53F7" }}>Canais de filmes</PlanSpeedText>
                                    </>
                                )}
                            </PlanContent>
                            <PlanBenefitText style={{ fontWeight: 'bold', color: plan.costBenefit === true ? "#fff" : "#5A53F7" }}>Por: R$ {plan.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</PlanBenefitText>
                            <BtnOrder
                                onClick={() => {
                                    setPlanSelected(plan._id)
                                    setShowModal(true)
                                }}>
                                <BtnAdmText>Contrate já</BtnAdmText>
                            </BtnOrder>
                        </PlanContainer>
                    ))}
                    {showModal === true ? (
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Preencha seus dados</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Label style={{ fontSize: 18, fontWeight: 600 }}>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    style={{ border: '2px solid #5A53F7', marginBottom: 10 }}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Label style={{ fontSize: 18, fontWeight: 600 }}>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    style={{ border: '2px solid #5A53F7', marginBottom: 10 }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Label style={{ fontSize: 18, fontWeight: 600 }}>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    style={{ border: '2px solid #5A53F7', marginBottom: 10 }}
                                    value={phone}
                                    onChange={(e) => setPhone(MaskCellphone(e.target.value))}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Cancelar
                                </Button>
                                <Button style={{ backgroundColor: '#77F3AE', border: 'none' }} onClick={() => handleOrder()}>
                                    Contratar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ) : null}
                </ContainerContentPlans>
            </ContainerContent>
        </Container>
    );
}