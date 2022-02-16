// import styled from 'styled-components'
import Header from './components/Header'
import Weather from './components/Weather'
import Introduction from './components/Introduction'
import SlideShow from './components/SlideShow'
import BackgroundImg from './components/img/back.jpg'
import styled from 'styled-components'

function App() {
  return (
    <Website>
      <Header />
      <Weather />
      <Introduction />
      <SlideShow />
    </Website>
  )
}

export default App

const Website = styled.div`
  background-image: url('https://picsum.photos/300/700?grayscale?blur');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`
