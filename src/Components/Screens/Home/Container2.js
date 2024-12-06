import React from "react";
import styled from "styled-components";

function Container2() {
    return (
        <>
            <Container>
                <Wrap>
                    <Heading>What We Do</Heading>
                    <Paragraph>
                        Assumenda non repellendus distinctio nihil dicta
                        sapiente, quibusdam maiores,
                        <br /> illum at, aliquid blanditiis eligendi qui.
                    </Paragraph>
                </Wrap>
                <Branding>
                    <Brand>
                        <BrandWrap>
                            <BrandImage
                                src={require("../../Assets/images/lemon.png")}
                                alt="Brand"
                            />
                            <BrandTitle>Product Design</BrandTitle>
                            <BrandInfo>
                                Dominion dry make shall is is greater fish
                                moving set seas open man which. Green make
                                appear moveth fruit likeness.
                            </BrandInfo>
                        </BrandWrap>
                    </Brand>
                    <Brand>
                        <BrandWrap>
                            <BrandImage
                                src={require("../../Assets/images/shoe.png")}
                                alt="Brand"
                            />
                            <BrandTitle>Branding</BrandTitle>
                            <BrandInfo>
                                Dominion dry make shall is is greater fish
                                moving set seas open man which. Green make
                                appear moveth fruit likeness.
                            </BrandInfo>
                        </BrandWrap>
                    </Brand>
                    <Brand>
                        <BrandWrap>
                            <BrandImage
                                src={require("../../Assets/images/sink.png")}
                                alt="Brand"
                            />
                            <BrandTitle>Photography</BrandTitle>
                            <BrandInfo>
                                Dominion dry make shall is is greater fish
                                moving set seas open man which. Green make
                                appear moveth fruit likeness.
                            </BrandInfo>
                        </BrandWrap>
                    </Brand>
                </Branding>
            </Container>
        </>
    );
}

const Container = styled.section``;
const Wrap = styled.div`
    text-align: center;
    margin: 50px 0;
    padding: 50px 0;
`;
const Heading = styled.h1`
    font-size: 45px;
    color: #23262f;
    margin: 0;
`;
const Paragraph = styled.p`
    font-size: 18px;
`;
const Branding = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
`;
const Brand = styled.div`
    width: 360px;
    height: auto;
    text-align: center;
    background: #eff4fd;
    border-radius: 20px;
`;
const BrandWrap = styled.div`
    padding: 40px;
`;
const BrandImage = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 20px;
`;
const BrandTitle = styled.h2`
    font-size: 20px;
`;
const BrandInfo = styled.p`
    font-size: 16px;
    margin: 0;
    color: #23262f;
`;

export default Container2;
