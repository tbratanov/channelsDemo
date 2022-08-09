
document.addEventListener("DOMContentLoaded", () => {
    Glue({ activities: false, channels: true })
        .then((glue) => {
            const VOD = document.getElementById('VOD');
            VOD.addEventListener("click", () => changeInstrument("VOD"))
            const GOOG = document.getElementById('GOOG');
            GOOG.addEventListener("click", () => changeInstrument("GOOG"))
            const AAL = document.getElementById('AAL');
            AAL.addEventListener("click", () => changeInstrument("AAL"))
            const MSFT = document.getElementById('MSFT');
            MSFT.addEventListener("click", () => changeInstrument("MSFT"))

            function changeInstrument(instrument) {
                glue.channels.publish({ instrument }, "Red");
                console.log('triggerred')
            }
        })
        .catch((error) => {
            console.log(error)
        });
})

