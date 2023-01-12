import { useRouteError } from 'react-router-dom'
import { Center, Container, Alert, Text } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <Container>
      <Center>
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Oops!"
          radius="md"
          variant="outline"
        >
          <Text italic>
            Something terrible happened! You made a mistake and there is no
            going back, your data was lost forever!
          </Text>
          <Text variant="link" component={Link} to="/">
            Voltar para a página inicial
          </Text>
        </Alert>
      </Center>
    </Container>
  )
}

export default ErrorPage
