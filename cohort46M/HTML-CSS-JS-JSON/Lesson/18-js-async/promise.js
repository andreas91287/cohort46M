// resolve - lösen
// reject - ablehnen

const willWeGetAnswer = function () {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const isEddAngry = Math.random() > 0.5;
            if (isEddAngry) {
                const ignore = new Error(';)');
                reject(ignore);
            } else {
                const answer = {
                    code: 'Good luck!',
                    smile: ':)'
                }
                resolve(answer);
            }
        }, 1000);
    });
}

willWeGetAnswer()
            .then(result => result.code)
            .then(code => {
                console.log(code);
                return willWeGetAnswer();
            })
            .then(result => result.code)
            .then(code => {
                console.log(code);
                return willWeGetAnswer();
            })
            .then(result => result.code)
            .then(code => console.log(code))
            .catch(err => console.log(err.message));