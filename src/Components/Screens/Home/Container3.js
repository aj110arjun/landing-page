import React from "react";
import styled from "styled-components";

function Container3() {
    return (
        <>
            <Container>
                <Left>
                    <Heading>Make your site better with easyfrontend</Heading>
                </Left>
                <Right>
                    <Features>
                        <Wrap>
                            <Icon
                                src={
                                    require("../../Assets/icons/leaf.svg")
                                        .default
                                }
                            />
                            <Paragraph>
                                Assumenda non repellendus distinctio nihil dicta
                                sapiente, quibusdam maiores, illum at, aliquid.
                            </Paragraph>
                        </Wrap>
                        <Wrap>
                            <Icon
                                src={
                                    require("../../Assets/icons/shuffle.svg")
                                        .default
                                }
                            />
                            <Paragraph>
                                Assumenda non repellendus distinctio nihil dicta
                                sapiente, quibusdam maiores, illum at, aliquid.
                            </Paragraph>
                        </Wrap>
                        <Wrap>
                            <Icon
                                src={
                                    require("../../Assets/icons/camera.svg")
                                        .default
                                }
                            />
                            <Paragraph>
                                Assumenda non repellendus distinctio nihil dicta
                                sapiente, quibusdam maiores, illum at, aliquid.
                            </Paragraph>
                        </Wrap>
                    </Features>
                </Right>
            </Container>
        </>
    );
}

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 150px;
`;
const Left = styled.div`
    text-align: center;
`;
const Heading = styled.h1`
    font-size: 45px;
    height: 175px;
    width: 400px;
`;
const Right = styled.div``;
const Features = styled.div``;
const Wrap = styled.div`
    display: flex;
    align-items: center;
`;
const Icon = styled.img`
    height: 20px;
    width: 20px;
    background: #fc6e5c1a;
    opacity: 0.9;
    padding: 15px;
    border-radius: 100px;
`;
const Paragraph = styled.p`
    font-size: 16px;
    height: 50px;
    width: 300px;
    margin: 30px;
`;

export default Container3;
