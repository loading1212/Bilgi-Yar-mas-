let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;
let score = 0;

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("result").innerText =
      "🎉 Oyun bitti! Toplam Puan: " + score;
    document.getElementById("question").innerText = "";
    document.getElementById("options").innerHTML = "";
    return;
  }

  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    let btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  let q = questions[currentQuestion];
  let buttons = document.querySelectorAll(".option");

  if (selected === q.answer) {
    btn.classList.add("correct");
    correctCount++;
    score += 10;
    document.getElementById("correctSound").play();
  } else {
    btn.classList.add("wrong");
    wrongCount++;
    document.getElementById("wrongSound").play();
    // Doğru cevabı yeşil işaretle
    buttons[q.answer].classList.add("correct");
  }

  // Skorları güncelle
  document.getElementById("correctCount").innerText = correctCount;
  document.getElementById("wrongCount").innerText = wrongCount;
  document.getElementById("score").innerText = score;

  // 1 saniye sonra sonraki soruya geç
  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

// --- Oyunu Başlat ---
showQuestion();
