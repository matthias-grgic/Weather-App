import styled from 'styled-components'

export default function Header() {
  return (
    <Wrapper>
      <Text>WEATHER</Text>
    </Wrapper>
  )
}

const Text = styled.h1`
  text-align: center;
  color: #000000;
`

const Wrapper = styled.section`
  padding: 2em 4em 1em 4em;
  background: #ffffff;
`
