const API_KEY = 'b7188fc2570709a7ac428d07148bd3ca-3e51f8d2-e570ff5d';
const DOMAIN = 'ematicsolutions.com';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });
const title = 'Testing';
const slug = 'test_project';
const name = 'Polleflora Diamond Earrings in 18K White Gold';
const item_url = 'https://www.michaeltrio.com/me0052-18kw';
const img_url = 'https://diamanti.s3.amazonaws.com/images/diamond/222002-1171.jpg';
// const img_url = 'https://www.michaeltrio.com/pub/media/catalog/product/cache/451cc34aa0c2fd8d78ba81cb10feab48/m/d/mde0026-3mm-18kw_1.jpg'
const price = 'SGD 327';
const qty = 1;
let SubscribedId = [
  'ardianto.teguh@voxnet.id-',
  'cadence.sun@ematicsolutions.com-',
  'aubree@allyoung.com.tw-',
  'willson.huang@timaru.com.tw-',
  'hasiholan@moengage.com-',
  'ravinder.singh@moengage.com-',
  'onkiet969@gmail.com-',
  'nhi.nguyenthiquynh@havang.com-'
].join('-').replaceAll('-', '\n')

let CampaignId = [
  '4505757~',
  '4421380~',
  '4421380~',
  '4421380~',
  '2947142~',
  '2947142~',
  '2947142~',
  '2946897~'
].join('~').replaceAll('~', '\n')

let CampaignName =[
  '20220620_ID_SEO_Series_2~',
  '[TW] Service Announcement_GA4_20220620~',
  '[TW] Service Announcement_GA4_20220620~',
  '[TW] Service Announcement_GA4_20220620~',
  'Ematic Dashboard Invite~',
  'Ematic Dashboard Invite~',
  'Ematic Dashboard Invite~',
  'Ematic Solutions Password Reset~'
].join('~').replaceAll('~', '\n')

const data = {
  from: 'Mailgun Sandbox <postmaster@michaeltrio.com>',
  to: 'gema.reza@ematicsolutions.com',
  subject: `Email ${title}`,
  template: 'test_project',
  'h:X-Mailgun-Variables': JSON.stringify({ // be sure to stringify your payload
    title,
    slug,
    SubscribedId,
    CampaignId,
    CampaignName
    // items: [{
    //     name,
    //     item_url,
    //     img_url,
    //     price,
    //     qty
    // },
    // {
    //     name,
    //     item_url,
    //     img_url,
    //     price,
    //     qty
    // }
    // ]
  }),
};

client.messages.create(DOMAIN, data).then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.error(err);
  });