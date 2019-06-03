var lp = [
  // STAGE 0 OF CHAT
  {
    processLang: function(str) {
      let arrayStr = str.trim().split(" ");
      let category = lp[0].findKeyWord(arrayStr);
      if (category == null) {
        return chatError();
      }
      else {
        chat.setChatStage(1);
        return 'Je hebt dus problemen met: ' + category.category;
      }
    },

    findKeyWord: function(arrayStr) {
      let categories = autopartCategories;
      for (let i=0;i<arrayStr.length;i++) {
        for (let j=0;j<categories.length;j++) {
          if (lp[0].compareCategory(arrayStr[i], categories[j])) {
            return categories[j];
          }
        }
      }
    },

    compareCategory: function(potentialKeyWord, potentialCategoryObj) {
      if (potentialKeyWord.toLowerCase() == potentialCategoryObj['category'].toLowerCase()) {
        return true;
      }
      else {
        for (let i=0;i<potentialCategoryObj['synonyms'].length;i++) {
          if (potentialKeyWord.toLowerCase() == potentialCategoryObj['synonyms'][i].toLowerCase()) {
            return true;
          }
        }
      }
    },
  },




  // STAGE 1 OF CHAT
  {
    processLang: function() {
      alert('stage 1');
    }
  }
]


chatError = function() {
  let allErrors = [
    'Ik heb niet gevonden wat je zoekt.',
    'Sorry, ik snap niet wat je bedoelt.',
    'Ik snap het niet.'
  ]
  return allErrors[Math.floor(Math.random()*allErrors.length)];
}
