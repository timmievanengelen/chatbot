var diversenBot = {
    diversen: function() {
        botui.message.add({
            content: 'Het probleem heeft dus te maken met diversen',
            delay: 500
        }),
        botui.message.add({
            content: 'Kan je wat specifieker aangeven waar het probleem mee te maken heeft?',
            delay: 500
        }),
        botui.action.button({
            action: [
                {
                    text: 'Accessoires',
                    value: 'accesoires'
                },
                {
                    text: 'Comfortsysteem',
                    value: 'comfortsysteem'
                },
                {
                    text: 'Informatie en Communicatiesystemen',
                    value: 'informatie'
                },
                {
                    text: 'Onderhoudsbeurt',
                    value: 'onderhoudsbeurt'
                },
                {
                    text: 'Ruitenwissers en toebehoren',
                    value: 'ruiten'
                },
                {
                    text: 'Sloten en vergrendeling',
                    value: 'sloten'
                },
                {
                    text: 'Trekhaak en transportsystemen',
                    value: 'trekhaak'
                },
            ],delay: 1000
        }).then(function (res) {
            if (res.value == 'ruiten') {
                wisserBot.ruitenKeuze();
            }
        });
    },

}