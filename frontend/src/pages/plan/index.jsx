import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useNavigate, } from "react-router-dom";

import ImgLogo from '../../assets/logo.png';

import { Button, FormControl, FormCheck } from 'react-bootstrap';
import {
    Container,
    ContainerContent,
    BtnAdm,
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

import api from '../../services';

export default function Plan() {
    const [name, setName] = useState("");
    const [prefix, setPrefix] = useState("");
    const [price, setPrice] = useState("");
    const [speed, setSpeed] = useState("");
    const [signatureWifi, setSignatureWifi] = useState(false);
    const [signatureGames, setSignatureGames] = useState(false);
    const [signatureMovies, setSignatureMovies] = useState(false);
    const [costBenefit, setcostBenefit] = useState(false);

    const navigate = useNavigate();

    const getPlan = async () => {
        try {
            const id = window.location.href.split("?id=")[1];

            const response = await api.get(`/plans/${id}`);

            const { name, price, speed, prefix, signatureWifi, signatureGames, signatureMovies, costBenefit } = response.data

            setName(name);
            setPrice(price);
            setSpeed(speed);
            setPrefix(prefix);
            setSignatureWifi(signatureWifi);
            setSignatureGames(signatureGames);
            setSignatureMovies(signatureMovies);
            setcostBenefit(costBenefit);

        } catch (err) {
            console.log("erro", err)
            toast.error("Não foi possível listar os planos");
        }
    }

    const formatPrice = (value) => {
        const valueNumber = value.replace(/\D/g, '');

        if (!valueNumber) {
            return '';
        }

        const formatted = (parseFloat(valueNumber) / 100).toFixed(2);

        return formatted;
    }

    const handleInputChange = (value) => {
        setPrice(formatPrice(value));
    }

    const register = async () => {
        try {
            const toSend = {
                name,
                speed,
                signatureWifi,
                signatureGames,
                signatureMovies,
                prefix,
                price,
                costBenefit
            }

            await api.post("/plans", toSend);

            toast.success("Plano cadastrado com sucesso!");
            navigate("/admin")
        } catch (err) {
            console.log("erro", err);
            toast.error("Não foi possível cadastrar o novo plano")
        }
    }

    const update = async () => {
        try {
            const toSend = {
                name,
                speed,
                signatureWifi,
                signatureGames,
                signatureMovies,
                prefix,
                price,
                costBenefit
            }

            const id = window.location.href.split("?id=")[1];

            await api.put(`/plans/${id}`, toSend);

            toast.success("Plano atualizado com sucesso!");
            navigate("/admin")
        } catch (err) {
            console.log("erro", err);
            toast.error("Não foi possível cadastrar o novo plano")
        }
    }

    useEffect(() => {
        if (window.location.href.indexOf("?id=") > 0) {
            getPlan();
        }
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
                <ContainerContentForm>
                    <Line>
                        <ModalContent>
                            <FormText>Nome do plano</FormText>
                            <FormControl type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                        </ModalContent>
                        <ModalContent>
                            <FormText>Preço</FormText>
                            <FormControl type='text' onChange={(e) => handleInputChange(e.target.value)} value={price} required />
                        </ModalContent>
                        <ModalContent>
                            <FormText>Velocidade</FormText>
                            <FormControl type='text' value={speed} onChange={(e) => setSpeed(e.target.value)} required />
                        </ModalContent>
                        <ModalContent>
                            <FormText>Prefixo (MB/GB)</FormText>
                            <FormControl type='text' value={prefix} onChange={(e) => setPrefix(e.target.value)} required />
                        </ModalContent>
                    </Line>
                    <Line>
                        <ModalContent style={{ width: '120px' }}>
                            <FormText>Wi-fi</FormText>
                            <FormCheck style={{ width: '40px' }} type='checkbox' checked={signatureWifi} onChange={() => setSignatureWifi(!signatureWifi)} />
                        </ModalContent>
                        <ModalContent style={{ width: '120px' }}>
                            <FormText>Games</FormText>
                            <FormCheck style={{ width: '40px' }} type='checkbox' checked={signatureGames} onChange={() => setSignatureGames(!signatureGames)} />
                        </ModalContent>
                        <ModalContent style={{ width: '140px' }}>
                            <FormText>Canal de filmes</FormText>
                            <FormCheck style={{ width: '40px' }} type='checkbox' checked={signatureMovies} onChange={() => setSignatureMovies(!signatureMovies)} />
                        </ModalContent>
                        <ModalContent style={{ width: '180px' }}>
                            <FormText>Custo benefício</FormText>
                            <FormCheck style={{ width: '40px' }} type='checkbox' checked={costBenefit} onChange={() => setcostBenefit(!costBenefit)} />
                        </ModalContent>
                    </Line>
                    {window.location.href.indexOf("?id=") > 0 ? (
                        <ContainerActions>
                            <Button variant="secondary" onClick={() => navigate(-1)}>
                                <BtnAdmText>Voltar</BtnAdmText>
                            </Button>
                            <Button style={{ backgroundColor: '#77F3AE', border: 'none' }} onClick={() => update()}>
                                <BtnAdmText>Atualizar</BtnAdmText>
                            </Button>
                        </ContainerActions>
                    ) : (
                        <ContainerActions>
                            <Button variant="secondary" onClick={() => navigate(-1)}>
                                <BtnAdmText>Voltar</BtnAdmText>
                            </Button>
                            <Button style={{ backgroundColor: '#77F3AE', border: 'none' }} onClick={() => register()}>
                                <BtnAdmText>Cadastrar</BtnAdmText>
                            </Button>
                        </ContainerActions>
                    )}
                </ContainerContentForm>
            </ContainerContent>
        </Container>
    );
}