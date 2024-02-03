const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const translateIcon = document.getElementById("translateIcon");

let isJapanese = false;

translateIcon.addEventListener("click", () => {
    isJapanese = !isJapanese;

    if (yesBtn.style.display !== "none" || noBtn.style.display !== "none") {
        isJapanese
            ? (question.innerHTML = "バレンタインになってくれませんか？")
            : (question.innerHTML = "Will you be my valentine?");

        yesBtn.innerHTML = isJapanese ? "もちろん！" : "Of course!";
        noBtn.innerHTML = isJapanese ? "いやです" : "No";
    } else {
        isJapanese
            ? (question.innerHTML = "やったー！14日に会いましょうね")
            : (question.innerHTML = "Yay! See you on the 14th");

        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    question.innerHTML = "やったー！14日に会いましょうね";
    gif.src = "https://giphy.com/embed/ZRu8DujpaznZEF57Is";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
