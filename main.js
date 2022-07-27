document.addEventListener('DOMContentLoaded', () => {

// API REGISTER HERE
// https://rapidapi.com/ipregistry3-ipregistry/api/ip-geolocation-and-threat-detection/
const OPTIONS_PUBLIC = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
}

const $form = document.getElementById('form')
const $input = document.getElementById('input')
const $submit = document.getElementById('submit')
const $results = document.getElementById('results')

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}

if ($form) {

  $form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const {value} = $input
    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)
    if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disable', '')
    $submit.removeAttribute('aria-busy')
  })

}


});