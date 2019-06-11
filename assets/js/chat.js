class Chat {
  constructor() {
    this.chatStage = 0;
    this.chatCategory = '';
    this.chatCategoryObj = {};
    this.chatSubCategoryObj = {};
  }

  setChatStage(chatStage) {
    this.chatStage = chatStage;
  }

  setChatCategory(chatCategory) {
    this.chatCategory = chatCategory;
  }

  setChatCategoryObj(chatCategoryObj) {
    this.chatCategoryObj = chatCategoryObj;
  }

  setSubCategoryObj(chatSubCategoryObj) {
    this.chatSubCategoryObj = chatSubCategoryObj;
  }
}
