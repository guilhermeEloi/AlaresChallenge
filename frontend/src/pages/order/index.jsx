import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { Button, FormControl, Form } from 'react-bootstrap';
import {
    Container,
    ContainerContent,
    BtnAdmText,
    Header,
    LogoImg,
    TitleText,
    FormText,
    Line,
    ModalContent,
    ContainerActions,
    ContainerContentForm,
} from './styles';

import ImgLogo from '../../assets/logo.png';

import api from '../../services';
import { MaskCellphone } from '../../utils/masks';

export default function Order() {
    const [plans, setPlans] = useState([]);
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [status, setStatus] = useState("");
    const [planId, setPlanId] = useState(false);

    const navigate = useNavigate();

    const getOrder = async () => {
        try {
            const id = window.location.href.split("?id=")[1];

            const response = await api.get(`/orders/${id}`);

            const { clientName, clientEmail, clientPhone, status, planId } = response.data;

            setClientName(clientName);
            setClientEmail(clientEmail);
            setClientPhone(clientPhone)
            setStatus(status);
            setPlanId(planId);
        } catch (err) {
            console.log("erro", err)
            toast.error("Não foi possível listar os dados do pedido!");
        }
    }

    const listAllPlans = async () => {
        try {
            const response = await api.get("/plans");

            setPlans(response.data)
        } catch (err) {
            console.log("erro", err)
            toast.error("Não foi possível listar os planos");
        }
    }

    const update = async () => {
        try {
            const toSend = {
                clientName,
                clientEmail,
                clientPhone,
                status,
                planId
            }

            const id = window.location.href.split("?id=")[1];

            await api.put(`/orders/${id}`, toSend);

            toast.success("Pedido atualizado com sucesso!");
            navigate("/admin")
        } catch (err) {
            console.log("erro", err);
            toast.error("Não foi possível atualizar o pedido")
        }
    }

    useEffect(() => {
        if (window.location.href.indexOf("?id=") > 0) {
            getOrder();
            listAllPlans();
        }
    }, []);

    return (
        <Container>
            <Header>
                <LogoImg src={ImgLogo} alt="Alares" />
            </Header>
            <ContainerContent>
                <TitleText>Acesso administrativo</TitleText>
                <ContainerContentForm>
                    <Line>
                        <ModalContent>
                            <FormText>Nome do cliente</FormText>
                            <FormControl type='text' value={clientName} onChange={(e) => setClientName(e.target.value)} required />
                        </ModalContent>
                        <ModalContent>
                            <FormText>E-mail do cliente</FormText>
                            <FormControl type='text' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required />
                        </ModalContent>
                        <ModalContent>
                            <FormText>Telefone do cliente</FormText>
                            <FormControl type='text' value={clientPhone} onChange={(e) => setClientPhone(MaskCellphone(e.target.value))} required />
                        </ModalContent>
                    </Line>
                    <Line>
                        <ModalContent>
                            <FormText>Status do pedido</FormText>
                            <Form.Select style={{ borderRadius: '10px', marginTop: '5px', marginBottom: '10px', border: '1px solid #000', width: '250px', background: '#F8F8F8', padding: '5px' }} value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="IN PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </Form.Select>
                        </ModalContent>
                        <ModalContent>
                            <FormText>Plano</FormText>
                            <Form.Select style={{ borderRadius: '10px', marginTop: '5px', marginBottom: '10px', border: '1px solid #000', width: '250px', background: '#F8F8F8', padding: '5px' }} value={planId} onChange={(e) => setPlanId(e.target.value)}>
                                {plans && plans.map((item) => (
                                    <option key={item._id} value={item._id}> {item.name} </option>
                                ))}
                            </Form.Select>
                        </ModalContent>
                    </Line>
                    <ContainerActions>
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            <BtnAdmText>Voltar</BtnAdmText>
                        </Button>
                        <Button style={{ backgroundColor: '#77F3AE', border: 'none' }} onClick={() => update()}>
                            <BtnAdmText>Atualizar</BtnAdmText>
                        </Button>
                    </ContainerActions>
                </ContainerContentForm>
            </ContainerContent>
        </Container>);
}