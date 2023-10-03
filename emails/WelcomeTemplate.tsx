import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
      <Body className="bg-white">
        <Container>
          <Text className="font-bold text-3xl">Hello {name}</Text>
          <Link href="www.google.com">Google</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: '#fff';
}

const heading: CSSProperties = {
  fontSize: '32px'
}

export default WelcomeTemplate;
