var lp = [
  // STAGE 0 OF CHAT
  {
    processLang: function(str) {
      let arrayStr = str.trim().split(" ");
      let category = lp[0].findKeyWord(arrayStr);
      if (category == null) {
        chatError();
      }
      else {
        let finalString = 'Je hebt dus problemen met: ' + category.category;
        lp[chat.chatStage].renderChat(finalString);
        chat.setChatCategoryObj(category);
        chat.setChatCategory(category.category);
        lp[1].setChat();
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

    renderChat: function(chatString) {
      botui.message.add({
        content: chatString,
        delay: 500
      });
      botui.message.add({
        content: 'Wil je specifieker zijn?',
        delay: 750
      });
      chat.setChatStage(1);
    }
  },




  // STAGE 1 OF CHAT
  {
    setChat: function() {
      let category = chat.chatCategoryObj;
      let subcategories = category.subcategories;
      let categoriesBtns = [];
      for (let i=0; i<subcategories.length; i++) {
        categoriesBtns[i] = {
          text: subcategories[i].category
        }
      }
      categoriesBtns[subcategories.length] = { text: 'Ik weet het niet' };

      botui.action.button({
        action: categoriesBtns,
        delay: 750
      })
    },

    processLang: function() {
      alert('stage 1');
    }
  }
];


chatError = function() {
  let allErrors = [
    'Ik heb niet gevonden wat je zoekt.',
    'Sorry, ik snap niet wat je bedoelt.',
    'Ik snap het niet.'
  ]
  let errorString = allErrors[Math.floor(Math.random()*allErrors.length)];
  botui.message.add({
    content: errorString,
    delay: 500
  });
  setTimeout(autoBot.userAskQuestion, 750);
}
