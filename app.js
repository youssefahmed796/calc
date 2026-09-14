
document.querySelector('#calculateButton').addEventListener('click', calculateInstallment)


function calculateInstallment(){

    var carPrice = parseFloat(document.querySelector('#carPrice').value)

    var downPayment = parseFloat(document.querySelector('#downPayment').value)

    var years = document.querySelector('#duration').value


    var remainingValue = carPrice - downPayment


    var interestRate


    if(years == 1){

        interestRate = 0.10

    }
    else if(years == 2){

        interestRate = 0.19

    }
    else if(years == 3){

        interestRate = 0.32

    }
    else if(years == 4){

        interestRate = 0.45

    }
    else if(years == 5){

        interestRate = 0.51

    }
    else if(years == 7){

        interestRate = 0.79

    }


    var interestValue = remainingValue * interestRate

    var totalInstallments = remainingValue + interestValue

    var totalMonths = years * 12

    var monthlyInstallment = totalInstallments / totalMonths


    document.querySelector('#monthlyInstallment').innerText =
        monthlyInstallment + ' EGP'


    document.querySelector('#interestRate').innerText =
        (interestRate * 100) + '%'

}

