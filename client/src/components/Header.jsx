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
  color: #ffffff;
  font-size: 3rem;
  font-family: Righteous;
`

const Wrapper = styled.section`
  padding: 2em 4em 0 4em;
`
