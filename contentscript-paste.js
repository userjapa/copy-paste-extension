(function () {
  let request = {}
  request.type = 'PASTE'

  function setInfo(response) {
    if (response.error) return;
    var input = document.getElementById('lst-ib')
    input.value = response.title
  }

  chrome.runtime.sendMessage('gghidpfbbblnpigjfoidemnbobnhgajp', request, setInfo)
}())
