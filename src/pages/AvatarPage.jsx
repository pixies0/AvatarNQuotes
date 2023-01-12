import { avatarAPI } from '../service/api'
import React, { useState } from 'react'
import {
  Title,
  Select,
  TextInput,
  Button,
  Image,
  Center,
  Container,
  Space
} from '@mantine/core'

const AvatarPage = () => {
  const sprites = [
    'male',
    'female',
    'human',
    'identicon',
    'initials',
    'bottts',
    'avataaars',
    'jdenticon',
    'gridy',
    'micah'
  ]

  const [sprite, setSprite] = useState(sprites[0])
  const [seed, setSeed] = useState()
  const [avatar, setAvatar] = useState()

  return (
    <Container>
      <Title color="blue">Criar Avatar</Title>
      <Space h="sm" />
      <Select
        label="Escolha um sprite:"
        radius="xl"
        searchable
        nothingFound="Não Encontrado"
        value={sprite}
        onChange={setSprite}
        data={sprites}
      />
      <Space h="sm" />
      <TextInput
        label="Digite alguma coisa:"
        radius="xl"
        size="md"
        value={seed}
        onChange={event => setSeed(event.currentTarget.value)}
      />

      <Space h="md" />

      <Button
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={() => setAvatar(`${avatarAPI}${sprite}/${seed}.svg`)}
      >
        Enviar
      </Button>

      <Space h="sm" />

      <Center>
        <Image
          src={avatar}
          height={300}
          width={300}
          alt="Avatar Gerado"
          withPlaceholder
        />
      </Center>
    </Container>
  )
}

export default AvatarPage
