


const chessBoardElement = document.querySelector('.chessBoard') // Object | null

// ciclo
for (let n = 1; n <= 100; n++) {

    // creazione cella
    const squareElement = document.createElement('div'); // Object
    squareElement.classList.add('col-1','chessSquare')
        // console.log(squareElement);
    
    if (n % 3 == 0 && n % 5 == 0) {
        // customizzazione cella multipli di 3 e 5
        squareElement.innerHTML = '<div>fizz buzz</div>';
        squareElement.classList.add('fizzBuzz')
        console.log('fizz buzz');
        } else if (n % 3 == 0)  {
        // customizzazione cella multipli di 3
        squareElement.innerHTML = '<div>fizz</div>';
        squareElement.classList.add('fizz')
        console.log('fizz');
        } else if (n % 5 == 0) {
        // customizzazione cella multipli di 5
        squareElement.innerHTML = '<div>buzz</div>';
        squareElement.classList.add('buzz')
        console.log('buzz');
        } else {
        // customizzazione cella semplice
        squareElement.innerHTML = '<div>' + n + '</div>';
        console.log(n);
        }

    // aggiungere cella a file html
    chessBoardElement.append(squareElement);

}