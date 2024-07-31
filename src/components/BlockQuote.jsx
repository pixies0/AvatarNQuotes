import { useEffect, useState } from 'react'
import { animeAPI } from '../service/api'
import { Blockquote } from '@mantine/core'

const BlockQuote = () => {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const data = await (await animeAPI.get('/quotes')).data
        setQuote(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <Blockquote cite={`${quote.author}`}>
      {quote.quote}
    </Blockquote>
  )
}

export default BlockQuote
