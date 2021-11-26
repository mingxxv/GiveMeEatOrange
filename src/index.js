const WORDS = ['Ranice', 'is', 'a', 'monkey']

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-go').addEventListener('click', generateText)
  document.getElementById('btn-copy').addEventListener('click', copyText)
  document.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('btn-go').click()
    }
  });
})

function copyText() {
  const POPUP_CLASSLIST = document.getElementById('popup-copied').classList
  navigator.clipboard.writeText(document.getElementById('output-text').value)
  POPUP_CLASSLIST.add('visible')
  POPUP_CLASSLIST.remove('invisible')
  window.setTimeout(() => {
    POPUP_CLASSLIST.remove('visible')
    POPUP_CLASSLIST.add('invisible')
  }, 1000)
}

function generateText() {  
  let val = document.getElementById('input-word-count').value

  if (val <= 0 || val === undefined) return
  
  let wordCount = Number.parseInt(val) - 1
  let output = ''

  let prev = -1
  for (let i = 0; i < wordCount; i++) {
    let next = randomNumber(prev)
    output += WORDS[next] + ' '
    prev = next
  }

  output += 'ranice ranice'

  document.getElementById('output-text').value = output
}

/**
 * this is my pee pee
 * @param {integer} prev - Previous number generated
 * @returns Random integer different from prev
 */
const randomNumber = (prev) => {
  var rand = Math.floor(Math.random() * WORDS.length)
  if (rand === prev) {
    return randomNumber(prev)
  } else {
    return rand
  }
}