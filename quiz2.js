
// frage1
    let ergebnis = document.getElementById("ergebnis1");
    let ergebnisJA = document.getElementById("buttonJa1");
    let ergebnisNein = document.getElementById("buttonNein1")

    ergebnisJA.addEventListener("click",() =>{
    ergebnis.innerHTML = "richtig";
    })

    ergebnisNein.addEventListener("click",() =>{
    ergebnis.innerHTML = "falsch";
    })

// frage2
    let ergebnis2 = document.getElementById("ergebnis2");
    let ergebnisJA2 = document.getElementById("buttonJa2");
    let ergebnisNein2 = document.getElementById("buttonNein2")

    ergebnisJA2.addEventListener("click",() =>{
    ergebnis2.innerHTML = "richtig";
    })

    ergebnisNein2.addEventListener("click",() =>{
    ergebnis2.innerHTML = "falsch";
    })

// frage3
    let ergebnis3 = document.getElementById("ergebnis3");
    let ergebnisJA3 = document.getElementById("buttonJa3");
    let ergebnisNein3 = document.getElementById("buttonNein3")

    ergebnisJA3.addEventListener("click",() =>{
    ergebnis3.innerHTML = "falsch! Es ist der Oberschenkel";
    })

    ergebnisNein3.addEventListener("click",() =>{
    ergebnis3.innerHTML = "richtig";
    })

// frage4
    let ergebnis4 = document.getElementById("ergebnis4");
    let ergebnisJA4 = document.getElementById("buttonJa4");
    let ergebnisNein4 = document.getElementById("buttonNein4")

    ergebnisJA4.addEventListener("click",() =>{
    ergebnis4.innerHTML = "falsch! Bis zu drei Jahren";
    })

    ergebnisNein4.addEventListener("click",() =>{
    ergebnis4.innerHTML = "richtig";
    })

// frage5
    let ergebnis5 = document.getElementById("ergebnis5");
    let ergebnisJA5 = document.getElementById("buttonJa5");
    let ergebnisNein5 = document.getElementById("buttonNein5")

    ergebnisJA5.addEventListener("click",() =>{
    ergebnis5.innerHTML = "falsch! Ist die Angst vor Clowns";
    })

    ergebnisNein5.addEventListener("click",() =>{
    ergebnis5.innerHTML = "richtig";
    })