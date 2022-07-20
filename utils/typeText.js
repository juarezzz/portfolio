const typeText = (el, text) => {
    return new Promise((resolve, reject) => {
        let i = 0;
        let displayText = '';
        const interval = setInterval(() => {
            displayText = text.substring(0, i);

            try {
                el.innerText = displayText;
            } catch (error) {
                reject(error);
                clearInterval(interval);
            }

            if (i === text.length) {
                resolve();
                clearInterval(interval);
            }

            i++;
        }, 100)
    })
}

export default typeText;