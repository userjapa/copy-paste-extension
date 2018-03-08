(function () {
  let request = {}

  function getInfo() {
    request.type = 'COPY'
    request.title = document.getElementsByClassName('content-head__title')[0].textContent
    return request
  }

  chrome.runtime.sendMessage('gghidpfbbblnpigjfoidemnbobnhgajp', getInfo(), response => {
    if (response.error) console.error(response.error)
  })
}())
