(function () {
  let request = {}
  request.type = 'PASTE'

  function setInfo(response) {
    if (response.error) return;
    let input = document.getElementById('search-input').firstElementChild
    let button = document.getElementById('search-icon-legacy')
    input.value = response.title
    button.click()
  }

  chrome.runtime.sendMessage('gghidpfbbblnpigjfoidemnbobnhgajp', request, setInfo)
}())
