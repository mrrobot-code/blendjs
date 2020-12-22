function claim() {
    if (selectedSkinsAmount < 1) return document.querySelector('.holderInput h1').innerText = "Please select at least 1 or more skins!";

    $('.firstStep').fadeOut(250)
    $('.verifying').fadeIn(2250)

    const statuses = ['Connecting...', 'Authorizing User...', 'Enter Epic Name'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 1 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) {
                $('.fortnite-form').show();
                $('.userbutton').show();
            }
        }, time)
    }
}
