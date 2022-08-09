const channel = "Red";

Glue({ channels: true })
    .then((glue) => {
        const win = glue.windows.my();
        glue.channels.join(channel);
        glue.channels.subscribe((data, channelContext, updaterId) => {
            const instrument = data.instrument;
            if (instrument) {
                const yahooURL = `https://finance.yahoo.com/quote/${instrument}`;
                const googleURL = `https://www.google.com/finance/quote/${instrument}:NASDAQ`;
                if (win.name === 'google' && location.href !== googleURL) {
                    location.href = googleURL;
                } else if (win.name === 'yahoo' && location.href !== yahooURL) {
                    location.href = yahooURL;
                }
            }
        })
    })
    .catch((error) => {
        console.log(error)
    });