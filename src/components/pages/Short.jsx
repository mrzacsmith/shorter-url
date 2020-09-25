import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import LinkBox from './LinkBox.jsx'

const Short = () => {
  const { handleSubmit, register, errors } = useForm()
  const [shortUrl, setShortUrl] = useState([])
  const POST_URL = 'https://rel.ink/api/links/'
  const onSub = (input) => {
    // console.log(input)
    axios
      .post(POST_URL, input)
      .then((res) => {
        setShortUrl(res.data)
      })
      .catch((err) => console.log(`Error: ${err}`))
      .finally()
  }

  const { hashid, url } = shortUrl
  console.log(hashid, url)

  return (
    <div>
      <form onSubmit={handleSubmit(onSub)}>
        <input
          type="text"
          name="url"
          placeholder="https://something.com"
          ref={register({
            required: 'Required',
            pattern: {
              // value: '',
              message: 'please enter a URL',
            },
          })}
        />
        {errors.url && errors.url.message}
        <button type="submit">Shorten It!</button>
      </form>
      <LinkBox />
    </div>
  )
}

export default Short
