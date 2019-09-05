function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserInfo(message) {
  await wait(500);
  return message.session;
}

async function getProductInfo(message) {
  await wait(500);
  return message.product;
}

async function getCategoryInfo(message) {
  await wait(500);
  return message.category;
}

async function getCampaignInfo(message) {
  await wait(500);
  return message.campaign;
}

async function sendEmail(options) {
  await wait(500);
  return options
}

module.exports = {
  getUserInfo,
  getProductInfo,
  getCategoryInfo,
  getCampaignInfo,
  sendEmail
}