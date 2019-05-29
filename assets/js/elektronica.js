var elektronicaBot = {
    elektronica: function() {
        botui.message.add({
            content: 'Het probleem heeft dus te maken met de elektronica',
            delay: 500
        }),
        botui.message.add({
            content: 'Kan je wat specifieker aangeven waar het probleem mee te maken heeft?',
            delay: 500
        }),
        botui.action.button({
            action: [
                {
                    text: 'Accu',
                    value: 'accu'
                },
                {
                    text: 'Dynamo',
                    value: 'dynamo'
                },
                {
                    text: 'Startmotor',
                    value: 'startmotor'
                },
                {
                    text: 'Relais, Schakelaars en sensoren',
                    value: 'relais'
                },
                {
                    text: 'Diversen',
                    value: 'diversen'
                }
            ],delay: 1000
        }).then(function (res) {
            if (res.value == 'accu') {
                elektronicaBot.accuKeuze();
            }
        });
    },

    accuKeuze:function(){
        botui.message.add({
            content: 'Ik heb hier een een keuze uit accus voor jouw auto <a href="https://www.123autoparts.nl/onderdelen/109/suzuki/7527/splash-ex/27528/1-0-a5b-310/elektronica/accu/artikel/4963/vmf/54465">klik hier!</a> Heb je hulp nodig bij het bestellen of monteren van jouw onderdeel? <a href="https://www.123autoparts.nl/contact">Contacteer ons!</a>',
            delay: 500
        });
    }
}