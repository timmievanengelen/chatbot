class Chat {
  constructor() {
    this.chatStage = 0;
    this.chatCategory = '';
    this.chatCategoryObj = {};
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
}
