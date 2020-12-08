var smoothscroll = 'https://github.com/cferdinandi/smooth-scroll'

function claim() {
    if (selectedSkinsAmount < 1) return document.querySelector('.holderInput h1').innerText = "Please select at least 1 or more items!";

    $('.firstStep').fadeOut(250)
    $('.verifying').fadeIn(2250)

    const statuses = ['Connecting...', 'Authorizing User...', 'User Found!', 'Verifying Human...', 'Attempting Human Verification (1/2)...', 'Failed...', 'Attempting Human Verification (2/2)...', 'Manual Verification Is Required To Claim Your Among Us Items!'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length - 1) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 2 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) $('.verify').show();
        }, time)
    }
}
