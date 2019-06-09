var wisserBot = {
    ruitenKeuze: function () {
        botui.message.add({
            content: 'Je hebt dus een probleem met de ruitenwissers en toebehoren',
            delay: 500
        }),
            botui.message.add({
                content: 'Betreft het de sproeiers of de wissers?',
                delay: 1000
            }),
            botui.action.button({
                action: [
                    {
                        text: 'Sproeiers',
                        value: 'sproeiers'
                    },
                    {
                        text: 'Wissers',
                        value: 'wisser'
                    }
                ], delay: 1000
            }).then(function (res) {
                if (res.value == 'sproeiers') {
                    wisserBot.sproeiersMenu();
                }
                if (res.value == 'wisser') {
                    wisserBot.wissersMenu();
                }
            })
    },

    wissersMenu: function () {
        botui.message.add({
            content: 'Je kan hier het assortiment ruitenwissers bekijken',
            delay: 500
        });
    },

    sproeiersMenu: function () {
        botui.message.add({
            content: 'We gaan even kijken wat er mis is met de ruitensproeiers',
            delay: 500
        }),
            botui.message.add({
                content: 'Zit er nog voldoende ruitenwisservloeistof in het reservoir?',
                delay: 1000
            }),
            botui.action.button({
                action: [
                    {
                        text: 'Ja',
                        value: 'ja'
                    },
                    {
                        text: 'Nee',
                        value: 'nee'
                    }
                ], delay: 1000
            }).then(function (res) {
                if (res.value == 'ja') {
                    wisserBot.checkElectra();
                }
                if (res.value == 'nee') {
                    wisserBot.checkVloeistof();
                }
            })
    },

    checkVloeistof: function () {
        botui.message.add({
            content: 'Je auto heeft nieuwe ruitenwisservloeistof nodig!',
            delay: 500
        }),
        botui.message.add({
            content: 'Je kan deze <a href="https://www.123autoparts.nl/auto-accessoires/vloeistoffen">hier kopen</a>',
            delay: 1000
        })
    },

    checkElectra: function () {
        botui.message.add({
            content: 'Probeer te sproeien en kijk of je een zoemend geluidje hoort wanneer de moterklep openstaat',
            delay: 500
        }),
        botui.message.add({
            content: 'Hoor je een geluid wanneer je de sproeier gebruikt?',
            delay: 500
        }),
        botui.action.button({
            action: [
                {
                    text: 'Ja',
                    value: 'ja'
                },
                {
                    text: 'Nee',
                    value: 'nee'
                }
            ], delay: 1000
        }).then(function (res) {
            if (res.value == 'ja') {
                wisserBot.checkVerstopping();
            }
            if (res.value == 'nee') {
                wisserBot.checkPompje();
            }
        })
    },

    checkVerstopping: function () {
        botui.message.add({
            content: 'Het is mogelijk dat er een verstopping in het ruitensproeierkannaal zit',
            delay: 500
        }),
        botui.message.add({
            content: 'Probeer zelf te kijken of bij de uiteinden van de sproeiers er wat vast zit',
            delay: 1000
        }),
        botui.message.add({
            content: 'Lukt het niet? Wij kunnen je helpen, <a href="https://www.123autoparts.nl/contact">neem contact op!</a>',
            delay: 1500
        })
    },

    checkPompje: function () {
        botui.message.add({
            content: 'Het is mogelijk dat het pompje van de ruitenwisservloeistof kapot is',
            delay: 500
        }),
        botui.message.add({
            content: 'We hebben een pompje gevonden die bij jouw auto past!',
            delay: 1000
        }),
        botui.message.add({
            content: '<a target="_blank" href="https://www.123autoparts.nl/auto-accessoires/elektronica/universele-ruitensproeierpomp">Bekijk hem hier</a>',
            delay: 1500
        })
    }
}