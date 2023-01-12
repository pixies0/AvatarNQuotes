import { Container, Title, Space } from '@mantine/core'
import BlockQuote from '../components/BlockQuote'

const QuotePage = () => {
  return (
    <Container>
      <Title color="grey">Citação profunda</Title>
      <Space h="md" />
      <BlockQuote />
    </Container>
  )
}

export default QuotePage
