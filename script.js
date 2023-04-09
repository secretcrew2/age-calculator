const today = new Date();
const warning = document.querySelectorAll('.warning');
const date = document.querySelectorAll('h4');
const output = document.querySelectorAll('.colored');

const btn = document.querySelectorAll('input');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('input', ()=>{
        hideWarnings(i);
    });
}

function someFunction(){
    for(let i = 0; i < warning.length; i++){
        hideWarnings(i);
        output[0].textContent = '--';
        output[1].textContent = '--'; 
        output[2].textContent = '--';
    }
    let days = Number(document.querySelector('#days').value);
    let months = Number(document.querySelector('#months').value);
    let years = Number(document.querySelector('#years').value);
    const birthOfDate = new Date([years, months, days]);
    const validBirth = new Date(years, months, 0);
    isDays(days, validBirth.getDate());
    isMonths(months);
    isYears(years);
    const today = new Date();
    const isContinue = isDays(days, validBirth.getDate()) && isMonths(months) && isYears(years);
    if(isContinue){
        let age = today.getFullYear() - birthOfDate.getFullYear();
        let month = today.getMonth() - birthOfDate.getMonth();
        let day = today.getDate() - birthOfDate.getDate();

        if(month < 0){
            age--;
            month += 12;
        } else if((month === 0) && (day < 0)){
            age--;
            month += 12;
        }
        if(day < 0){
            month--;
            day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if(age < 0){
            warning[2].textContent = "Please enter a valid year";
            warning[2].classList.add('show-warning');
            date[2].classList.add('red');
        } else {
            output[0].textContent = age;
            output[1].textContent = month; 
            output[2].textContent = day;
        }
        
    }
}

function isDays(days, validBirth){
    if(days > 31 || days < 0 ){
        warning[0].textContent = "Must be a valid day"
        warning[0].classList.add('show-warning');
        date[0].classList.add('red');
        return false;
    } else if(validBirth < days){
        warning[0].textContent = "Must be a valid date"
        warning[0].classList.add('show-warning');
        date[0].classList.add('red');
        return false;
    }else if(days === 0){
        warning[0].textContent = "This field is required"
        warning[0].classList.add('show-warning');
        date[0].classList.add('red');
        return false;
    } else {
        return true;
    }
}
function isMonths(months){
    if(months > 12 || months < 0){
        warning[1].textContent = "Must be a valid month"
        warning[1].classList.add('show-warning');
        date[1].classList.add('red');
        return false;
    } else if(months === 0){
        warning[1].textContent = "This field is required"
        warning[1].classList.add('show-warning');
        date[1].classList.add('red');
        return false;
    } else{
        return true
    }
}
function isYears(years){
    if (years === 0) {
        warning[2].textContent = "This field is required";
        
        warning[2].classList.add('show-warning');
        date[2].classList.add('red');
        return false;   
    } else if(years > 2023 || years < 1900){
        warning[2].textContent = "Must be a valid year";
        warning[2].classList.add('show-warning');
        date[2].classList.add('red');
        return false;
    } else{
        return true;
    }
}

function hideWarnings(index){
    warning[index].classList.remove('show-warning');
    date[index].classList.remove('red');
}
