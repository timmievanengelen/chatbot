var autoBot = {
  askForCar: function(res) {
    botui.action.text({
      action: {
        placeholder: 'Wat is het kenteken van je auto?'
      },
      delay: 500
    })
    .then(function(res) {
      let finalKenteken = res.value.toUpperCase().replace(/-/g,'');
      var currentAuto = new auto(finalKenteken);
    })
  },

  showCarDetails: function(carObj) {
    botui.message.add({
      content: 'Is dit je auto?',
      delay: 500
    })
    .then(function() {
      console.log(carObj);
      botui.message.add({
        content: carObj.merk,
        delay: 500
      })
      botui.message.add({
        content: carObj.handelsbenaming,
        delay: 500
      })
      botui.message.add({
        content: carObj.eerste_kleur,
        delay: 500
      })
    })
    .then(function() {
      autoBot.showCar(carObj);
    })
    ;
  },

  noCar: function() {
    botui.message.add({
      content: 'Kenteken niet gevonden, probeer het opnieuw',
      delay: 500
    })
    autoBot.askForCar();
  },

  showCar: function(carObj) {
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
      ]
    })
    .then(function(res) {
      if (res.value == 'nee') {
        autoBot.askForCar();
      }

      else if (res.value == 'ja') {
        autoBot.userAskQuestion();
      }

      else {
        autoBot.error();
      }
    })
  },

  userAskQuestion: function() {
    botui.action.text({
      action: {
        placeholder: 'Typ je bericht.'
      }
    }).then(function (res) { // will be called when it is submitted.
      botui.message.add({
        content: lp[chat.chatStage].processLang(res.value),
        delay: 500
      });
      setTimeout(autoBot.userAskQuestion, 750);
    });
  },

  error: function() {
    botui.message.add({
      content: 'Er is iets fout gegaan. Probeer het opnieuw.',
      delay: 500
    });
  }
}
