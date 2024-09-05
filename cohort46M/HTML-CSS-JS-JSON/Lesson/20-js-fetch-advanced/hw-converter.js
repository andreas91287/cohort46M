const base_url = 'https://api.apilayer.com/fixer';
const api_key = 'mXQ2cmmcEA98Wu9fXqqFsVunG5UDFnP2';

fetch(`${base_url}/symbols`, {
    headers: {
        apikey: api_key
    }
})
    .then(response => response.json())
    .then(({ symbols }) => {
        const currencies = Object.keys(symbols);
        currencies.forEach(item => {
            const option = document.createElement('option');
            option.text = item;
            option.value = item;
            to.appendChild(option);
            from.appendChild(new Option(item, item));
        });
        convert.onclick = () => {
            fetch(`${base_url}/convert?from=${from.value}&to=${to.value}&amount=${sum.value.trim()}`, {
                headers: {
                    apikey: api_key
                }
            })
                // response - antworten
                .then(response => response.json())
                .then(data => data.result)
                .then(res => {
                    const h1 = document.createElement('h1');
                    h1.append(`Result: ${res.toFixed(2)}`);
                    if (result.firstElementChild) {
                        result.replaceChild(h1, result.firstElementChild);
                    } else {
                        result.append(h1);
                    }
                })
        }
    })
    .catch(e => {
        const h1 = document.createElement('h1');
        h1.append(`Error`);
        if (result.firstElementChild) {
            result.replaceChild(h1, result.firstElementChild);
        } else {
            result.append(h1);
        }
    });

