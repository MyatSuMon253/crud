import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="www.google.com">Google</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
