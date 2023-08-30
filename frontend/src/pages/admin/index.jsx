import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import ImgLogo from '../../assets/logo.png';

import {
    Container,
    BtnAdm,
    BtnAdmText,
    Header,
    LogoImg,
    SubLineLeftContainer,
    BtnActions,
    ContainerContent,
    TitleText,
    BtnsContainer,
    BtnActionTable,
    TableContainer,
    Line,
    SubLine,
    NormalText,
    StatusContainer,
    BtnTableText,
} from './styles';

import api from '../../services';

export default function Admin() {
    const [plans, setPlans] = useState([]);
    const [orders, setOrders] = useState([]);
    const [typeTable, setTypeTable] = useState("plan");

    const navigate = useNavigate();

    const listAllPlans = async () => {
        try {
            const response = await api.get("/plans");

            setPlans(response.data)
        } catch (err) {
            console.log("erro", err)
            toast.error("Não foi possível listar os planos");
        }
    }

    const listAllOrders = async () => {
        try {
            const response = await api.get("/orders");

            setOrders(response.data)
        } catch (err) {
            console.log("erro", err)
            toast.error("Não foi possível listar os pedidos");
        }
    }

    const deletePlan = async (id) => {
        try {
            await api.delete(`/plans/${id}`)
            toast.success("Plano deletado com sucesso!");
            window.location.reload()
        } catch (err) {
            console.log("Erro: ", err);
            toast.error("Não foi possível deleter o plano");
        }
    }

    const deleteOrder = async (id) => {
        try {
            await api.delete(`/orders/${id}`)
            toast.success("Pedido deletado com sucesso!");
            window.location.reload()
        } catch (err) {
            console.log("erro", err);
            toast.error("Não foi possível deleter o pedido");
        }
    }

    useEffect(() => {
        listAllPlans()
        listAllOrders()
    }, []);

    return (
        <Container>
            <Header>
                <LogoImg src={ImgLogo} alt="Alares" />
                <BtnAdm onClick={() => navigate("/")}>
                    <BtnAdmText>Acesso usuário</BtnAdmText>
                </BtnAdm>
            </Header>
            <ContainerContent>
                <TitleText>Acesso administrativo</TitleText>
                <BtnsContainer>
                    <BtnActionTable onClick={() => setTypeTable("plan")} style={{ background: typeTable === 'plan' ? '#77F3AE' : '#fff', border: typeTable === 'plan' ? 'none' : '1px solid #848484' }}>
                        <BtnTableText style={{ color: typeTable === 'plan' ? '#fff' : '#848484' }}>Planos</BtnTableText>
                    </BtnActionTable>
                    <BtnActionTable onClick={() => setTypeTable("order")} style={{ background: typeTable === 'order' ? '#77F3AE' : '#fff', border: typeTable === 'order' ? 'none' : '1px solid #848484' }}>
                        <BtnTableText style={{ color: typeTable === 'order' ? '#fff' : '#848484' }}>Pedidos</BtnTableText>
                    </BtnActionTable>
                </BtnsContainer>
                <TableContainer>
                    {typeTable === 'plan' ? (
                        <BtnAdm style={{ marginBottom: 10 }}>
                            <BtnAdmText onClick={() => navigate("/plan")}>Adicionar novo</BtnAdmText>
                        </BtnAdm>
                    ) : (
                        <> </>
                    )}
                    {typeTable === 'plan' && plans.length > 0 ? plans.map((item, index) => (
                        <Line style={{ background: index % 2 === 0 ? "#DFDEF6" : "#CDCCE5" }}>
                            <SubLine>
                                <BtnTableText>{item.name}</BtnTableText>
                            </SubLine>
                            <SubLine>
                                <SubLineLeftContainer>
                                    <NormalText>{item.speed} {item.prefix}</NormalText>
                                    {item.signatureWifi && (
                                        <NormalText>Wi-fi</NormalText>
                                    )}
                                    {item.signatureGames && (
                                        <NormalText>Game</NormalText>
                                    )}
                                    {item.signatureMovies && (
                                        <NormalText>Canal de filmes</NormalText>
                                    )}
                                    {item.costBenefit && (
                                        <NormalText>Custo benefício</NormalText>
                                    )}
                                </SubLineLeftContainer>
                                <BtnActions style={{ background: "#5A53F7" }} onClick={() => navigate(`/plan?id=${item._id}`)}>
                                    <NormalText style={{ color: "#fff", cursor: 'pointer' }}>Alterar</NormalText>
                                </BtnActions>
                                <BtnActions style={{ background: "red" }} onClick={() => deletePlan(item._id)}>
                                    <NormalText style={{ color: "#fff", cursor: 'pointer' }}>Excluir</NormalText>
                                </BtnActions>
                            </SubLine>
                        </Line>
                    )) : orders.map((item, index) => (
                        <Line style={{ background: index % 2 === 0 ? "#DFDEF6" : "#CDCCE5" }}>
                            <SubLine>
                                <BtnTableText>Pedido {index + 1} - {item.planId?.name ? item.planId.name : 'Plano excluído'}</BtnTableText>
                            </SubLine>
                            <SubLine>
                                <SubLineLeftContainer style={{ width: '75%' }}>
                                    <NormalText>{item.clientName}</NormalText>
                                    <NormalText>{item.clientEmail}</NormalText>
                                    <NormalText>{item.clientPhone}</NormalText>
                                    <StatusContainer style={{ background: item.status === 'DONE' ? '#77F3AE' : '#5A53F7', color: item.status === 'DONE' ? '#5A53F7' : '#fff' }}>{item.status}</StatusContainer>
                                </SubLineLeftContainer>
                                <BtnActions style={{ background: "#5A53F7" }} onClick={() => navigate(`/order?id=${item._id}`)}>
                                    <NormalText style={{ color: "#fff", cursor: 'pointer' }}>Alterar</NormalText>
                                </BtnActions>
                                <BtnActions style={{ background: "red" }} onClick={() => deleteOrder(item._id)}>
                                    <NormalText style={{ color: "#fff", cursor: 'pointer' }}>Excluir</NormalText>
                                </BtnActions>
                            </SubLine>
                        </Line>
                    ))}
                </TableContainer>
            </ContainerContent>
        </Container>);
}