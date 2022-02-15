// import styled from 'styled-components'
import Header from './components/src/Header'
import Welcome from './components/src/Welcome'
import Introduction from './components/src/Introduction'
import SlideShow from './components/src/SlideShow'
import BackgroundImg from './components/src/img/back.jpg'
import styled from 'styled-components'

function App() {
  return (
    <Website>
      <Header />
      <Welcome />
      <Introduction />
      <SlideShow />
    </Website>
  )
}

export default App

const Website = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center top;
`
