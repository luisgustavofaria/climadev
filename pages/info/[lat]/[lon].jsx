import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"
import Card from "../../../src/components/card/Card"

const Body = styled.div`
    background-color: #EFEFEF;
    min-height: 100vh;
`

const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
`

const CityName = styled.h2`
  font-size: 60px;
  padding: 0;
  margin: 0;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

function infoPage() {
    return (
        <>
            <Navbar />
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do tempo para</Text>
                        <CityName>Vitória, ES, Brasil</CityName>
                        <InfoContainer>
                            <Card/>
                            <Card/>
                            <Card/>
                        </InfoContainer>
                    </Content>
                </Container>    
            </Body>
        </>
    )
}

export default infoPage