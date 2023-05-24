function validateForm() {
    const questions = [
        { id: 'first', name: 'pergunta1', number: 1, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'a' },
        { id: 'secont', name: 'pergunta2', number: 2, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'e' },
        { id: 'third', name: 'pergunta3', number: 3, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'd' },
        { id: 'fourth', name: 'pergunta4', number: 4, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'c' },
        { id: 'fifth', name: 'pergunta5', number: 5, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'c' },
        { id: 'sixth', name: 'pergunta6', number: 6, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'a' },
        { id: 'seventh', name: 'pergunta7', number: 7, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'e' },
        { id: 'octave', name: 'pergunta8', number: 8, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'c' },
        { id: 'ninth', name: 'pergunta9', number: 9, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'b' },
        { id: 'tenth', name: 'pergunta10', number: 10, options: ['a', 'b', 'c', 'd', 'e'], correctOpition: 'c' }

    ];
    let score = 0;
    let allAnswered = true;
    let result= document.querySelector('.result')
    let aprovado = "\u{1F604}";
    let reprovado = "\u{1F622}";
    const check = document.querySelectorAll('.checkbox');

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedOpition = document.querySelector(`input[name="${question.name}"]:checked`);

        if (!selectedOpition) {
            allAnswered = false;
            break
        }
    }
    if (allAnswered) {
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const selectedOpition = document.querySelector(`input[name="${question.name}"]:checked`);
            if (selectedOpition.value !== question.correctOpition) {
                selectedOpition.parentNode.parentNode.classList.add('errada');
                selectedOpition.parentNode.parentNode.classList.remove('certa');

            } else {
                selectedOpition.parentNode.parentNode.classList.remove('errada');
                selectedOpition.parentNode.parentNode.classList.add('certa');
                score++
            }

        }
        
    } if (!allAnswered) {
        alert('Por favor, responda todas as perguntas.');
    } else if(score >= 6){
        result.innerHTML = `Parabéns sua pontuação foi ${score} ${aprovado}`;
        check.forEach(function(element) {
            element.disabled = true;
          });
    } else{
        result.innerHTML = `Sua pontuação foi ${score} ${reprovado} </br> Vale pena revisar algumas matérias`;
        check.forEach(function(element) {
            element.disabled = true;
          });
    }
    
}
document.querySelector('#ativar').addEventListener('click', validateForm);
