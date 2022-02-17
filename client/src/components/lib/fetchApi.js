async function FetchFromApi(url = '', useState = '') {
  try {
    const response = await fetch(url)
    const api = await response.json()
    return useState(api)
  } catch (e) {
    console.error(e)
  }
}

export default FetchFromApi
