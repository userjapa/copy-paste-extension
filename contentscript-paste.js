(function () {
  let request = {}
  request.type = 'PASTE'

  function setInfo(response) {
    if (response.error) return;
    let input = document.getElementById('lst-ib')
    const button = document.getElementById('_fZl')
    input.value = response.title
    button.click()
  }

  chrome.runtime.sendMessage('gghidpfbbblnpigjfoidemnbobnhgajp', request, setInfo)
}())
