// app.js
let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const messageEl = document.getElementById("message");
const resultEl = document.getElementById("result");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function loadQuestion() {
    if (typeof questions === 'undefined') {
        console.error("Hata: questions array'i tanımlı değil. questions.js dosyasını kontrol edin.");
        questionEl.textContent = "Hata: Sorular yüklenemedi.";
        return;
    }

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionEl.textContent = (currentQuestion + 1) + ". " + q.q;

        optionsEl.innerHTML = "";
        q.options.forEach((opt, index) => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = opt;
            button.onclick = () => checkAnswer(index);
            optionsEl.appendChild(button);
        });
    } else {
        // Oyun bitti
        questionEl.textContent = "🎉 Oyun Bitti!";
        optionsEl.innerHTML = "";
        messageEl.textContent = "";
        resultEl.textContent = `Toplam Doğru: ${correctCount} | Yanlış: ${wrongCount} | Puan: ${score}`;
    }
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option");

    if (selected === q.answer) {
        buttons[selected].classList.add("correct");
        correctCount++;
        score += 10;
        if (correctSound) correctSound.play().catch(() => console.log("Doğru sesi oynatılamadı."));
        messageEl.textContent = "✅ Doğru!";
    } else {
        buttons[selected].classList.add("wrong");
        buttons[q.answer].classList.add("correct");
        wrongCount++;
        if (wrongSound) wrongSound.play().catch(() => console.log("Yanlış sesi oynatılamadı."));
        messageEl.textContent = "❌ Yanlış!";
    }

    document.getElementById("correctCount").textContent = correctCount;
    document.getElementById("wrongCount").textContent = wrongCount;
    document.getElementById("score").textContent = score;

    // Butonları kilitle
    buttons.forEach(btn => btn.disabled = true);

    // 1.5 saniye sonra sonraki soruya geç
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1500);
}

// DOM yüklendiğinde oyunu başlat
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});
