import { useLottie } from 'lottie-react'

const style = {
  width: '9rem',
  opacity: 0.8,
}

const LottieAnimation = () => {
  const options = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_bvsy03wk.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation
