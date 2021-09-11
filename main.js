var mantras = ["My mind is brilliant",
  "I create my own path and walk it with joy",
  "My positive thoughts guide me to new heights",
  "I am conquering my fears and becoming stronger each day",
  "I will have a good day, because it's my choice",
  "I am that I am",
  "May my heart be kind my mind fierce and my spirit brave",
  "Expect nothing and appreciate everything",
  "I am free from sadness",
  "I choose purpose over perfect"
]
var affirmations = ["I choose to be happy and love myself everyday",
  "I am worthy",
  "Today is going to be a great day",
  "I am becoming more confident everyday",
  "I will not worry about things I cannot control",
  "I am grateful for all that I have",
  "I have it within me to solve any challenges that occur today",
  "I am enough",
  "I am creating my life exactly as I want it",
  "I have what it takes"
]

var mantraBtn = document.getElementById("mantra")
var affirmationBtn = document.getElementById("affirmation")
var receiveMessageBtn = document.querySelector(".receiveBtn")
var messageReveal = document.querySelector(".message-reveal")
var enterBtn = document.querySelector(".enter-button")
var personName = document.querySelector(".name")
var nameInput = document.getElementById("name-input")
var welcomeMessage = document.querySelector(".welcome")
var mainSection = document.querySelector(".main-section")
var loginSection = document.querySelector(".login")

receiveMessageBtn.addEventListener("click", retrieveMessage)
enterBtn.addEventListener("click", login)

//get random index of one of the arrays
function showMainSection() {
  mainSection.classList.remove("hidden")
}

function hideLoginSection() {
  loginSection.classList.add("hidden")
}

function generateRandomIndex(list) {
  return Math.floor(Math.random() * list.length)
}

function retrieveMessage() {
  if (mantraBtn.checked) {
    retrieveMantra()
  } else if (affirmationBtn.checked) {
    retrieveAffirmation()
  }
}

function retrieveMantra() {
  var randomMantra = mantras[generateRandomIndex(mantras)]
  if (!mantras.length) {
    messageReveal.innerText = `Please check back tomorrow for more daily mantras!`
  }
  for (var i = 0; i < mantras.length; i++) {
    if (mantras[i] === randomMantra) {
      messageReveal.innerText = `🧘 ${randomMantra}`
      mantras.splice(i, 1)
    }
  }
}

function retrieveAffirmation() {
  var randomAffirmation = affirmations[generateRandomIndex(affirmations)]
  if (!affirmations.length) {
    messageReveal.innerText = `Please check back tomorrow for more daily affirmations!`
  }
  for (var i = 0; i < affirmations.length; i++) {
    if (affirmations[i] === randomAffirmation) {
      messageReveal.innerText = `🌸 ${randomAffirmation}`
      affirmations.splice(i, 1)
    }
  }
}

function login() {
  console.log("clicked!")
  if (nameInput.value) {
    welcomeMessage.innerText = `Welcome, ${nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1)}!`
    showMainSection()
    hideLoginSection()
  } else {
    alert('Please fill in your first name to continue...')
  }
}
