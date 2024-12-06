import React from "react";
import Container1 from "./Container1";
import { Helmet } from "react-helmet";
import Container2 from "./Container2";
import Container3 from "./Container3";

function Home() {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>

            <Container1 />
            <Container2 />
            <Container3 />
        </>
    );
}

export default Home;
