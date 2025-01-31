var mantras = ["My mind is brilliant",
  "I create my own path and walk it with joy",
  "My positive thoughts guide me to new heights",
  "I am conquering my fears and becoming stronger each day",
  "I will have a good day, because it's my choice",
  "I am that I am",
  "May my heart be kind my mind fierce and my spirit brave",
  "Expect nothing and appreciate everything",
  "I am free from sadness",
  "I choose purpose over perfect",
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it",
  "Don’t let yesterday take up too much of today",
  "Every day is a second chance",
  "Tell the truth and love everyone",
  "Inhale the future, exhale the past"
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
  "I have what it takes",
  "I am in the process of becoming the best version of myself",
  "I am full of energy and vitality and my mind is calm and peaceful",
  "I am worthy of my dreams",
  "I honor my body by trusting the signals that it sends me",
  "I choose to be kind to myself and love myself unconditionally"
]

var loginSection = document.querySelector(".login")
var messageReveal = document.querySelector(".message-reveal")
var enterBtn = document.querySelector(".enter-button")
var mantraBtn = document.getElementById("mantra")
var affirmationBtn = document.getElementById("affirmation")
var nameInput = document.getElementById("name-input")
var inputField = document.getElementById("input-field")
var audio = document.getElementById("audio")
var welcomeMessage = document.getElementById("welcome")
var mainSection = document.getElementById("main-section")
var receiveMessageBtn = document.getElementById("receiveBtn")


receiveMessageBtn.addEventListener("click", retrieveMessage)
enterBtn.addEventListener("click", login)
nameInput.addEventListener("keyup", function(e) {
  if(e.keyCode === 13){
    login()
  }
})

function showMainSection() {
  mainSection.classList.remove("hidden")
  audio.play()
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
  if (nameInput.value) {
    welcomeMessage.innerText = `Welcome, ${nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1)}!`
    showMainSection()
    hideLoginSection()
  } else {
    alert('Please fill in your first name to continue...')
  }
}
