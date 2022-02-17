// import styled from 'styled-components'
import Header from './components/Header'
import Weather from './components/Weather'
import styled from 'styled-components'

function App() {
  return (
    <Website>
      <Header />
      <Weather />
    </Website>
  )
}

export default App

const Website = styled.div`
  background-image: url('https://picsum.photos/300/700?blur');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`
