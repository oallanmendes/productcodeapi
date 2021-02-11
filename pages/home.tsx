import Head from 'next/head'

import { Container, Header, HeaderTitle, Title, Code } from '../styles/Home';

export default function Home() {

  const exampleResponse = {
    product: {
      _id: "60133c21d2423a0009834290",
      productCode: "7896102501407",
      name: "ERVILHA E CENOURA EM CONSERVA QUERO LATA 200G",
      brand: "Não informado",
      source: "LINHA BLUESOFT CURVA B",
      manufacturer: "HEINZ BRASIL",
      imageUrl: "https://i.imgur.com/tQubHSf.jpeg"
    },
    date: "Wed, 10 Feb 2021 23:40:58 GMT"
  }

  return (
    <div>
      <Head>
        <title>Product Code API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header>
          <HeaderTitle>Product Code API</HeaderTitle>
        </Header>
        <Title>
          Method Get:
        </Title>
        <Code disabled={true}>
          https://productcodeapi.com/api/product/7896102501407
        </Code>
        <Title>
          JSON response:
        </Title>
        <Code disabled={true} id="test">
          {JSON.stringify(exampleResponse, undefined, 2)}
        </Code>
      </Container>
    </div>
  )
}