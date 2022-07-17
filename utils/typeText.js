const typeText = (el, text) => {
    let i = 0;
    let displayText = '';
    const interval = setInterval(() => {
        displayText = text.substring(0, i);
        el.innerText = displayText;
        if (i === text.length) clearInterval(interval);
        i++;
    }, 125)
}

export default typeText;