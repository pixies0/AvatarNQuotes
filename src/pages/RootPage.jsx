import { Link } from 'react-router-dom'
import { avatarAPI } from '../service/api'
import sprites from '../constants/sprites'
import {
  Container,
  Title,
  Group,
  Button,
  Space,
  Center,
  Avatar
} from '@mantine/core'
import BlockQuote from '../components/BlockQuote'

function RootPage() {
  return (
    <Container>
      <Title color="blue">Página Inicial</Title>
      <Space h="md" />
      {[...Array(5)].map((_, key) => (
        <Center key={key}>
          <Avatar
            radius="xl"
            size="lg"
            src={`${avatarAPI}${sprites[Math.floor(Math.random() * 10)]}/svg`}
          ></Avatar>
          <BlockQuote />
        </Center>
      ))}

      <Group poistion="center" spacing="xl" grow>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          component={Link}
          to="/avatar"
        >
          Criar Avatar
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          component={Link}
          to="/quote"
        >
          Gerar CItação
        </Button>
      </Group>
    </Container>
  )
}

export default RootPage
