var processLang = function(str) {
  let arrayStr = str.trim().split(" ");
  let category = findKeyWord(arrayStr);
  if (category == null) {alert('geen categroie')}
}

var findKeyWord = function(arrayStr) {
  let categories = autopartCategories;
  // console.log(arrayStr);
  for (let i=0;i<arrayStr.length;i++) {
    for (let j=0;j<categories.length;j++) {
      // console.log(categories[j].category);
      if (compareCategory(arrayStr[i], categories[j])) {
        return categories[j];
      }
    }
  }
}

var compareCategory = function(potentialKeyWord, potentialCategoryObj) {
  console.log(potentialKeyWord + ' ' + potentialCategoryObj.category);
  if (potentialKeyWord == potentialCategoryObj.category) {
    return true;
  }
  else {
    for (let i=0;i<potentialCategoryObj['synonyms'].length;i++) {
      if (potentialKeyWord == potentialCategoryObj['synonyms'][i]) {
        return true;
      }
    }
  }
}







enne = processLang('rem');
// "Dan moet je een nieuwe motor kopen..."
