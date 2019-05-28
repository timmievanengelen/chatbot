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
        content: carObj.handelsbenaming,
        delay: 500
      })
    });
  },

  showCar: function() {
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
  }
}
