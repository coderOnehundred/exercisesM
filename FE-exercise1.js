
const array = [5, 7, 9, 10, 1, 4, 11];

const logParity = (x) => {
    /* Write the function logParity your self */
    /* The function logParity will take a number argument and console log "Is ood" if the argument is odd and "Is even" if the argument is even */
    if (x % 2 === 0) {
        console.log(`${x}:"Is Even"`);
    } else {
        console.log(`${x}:"Is Odd"`);
    }

    /* We actually used a function like previously, probably called isOdd or something like that. Feel free to check it out but ideally, write this for your self */
    /* The function is very simple, use the % operator and if the remainder of dividing by 2 is 0 you can say the number is even and if the remainder is not 0, you can say it's odd */
}

array.forEach(logParity);