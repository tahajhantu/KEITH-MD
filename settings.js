/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5LM0FLQzRyN00zZDdjM1BzeXdXdEx1UDk5d2VCN2FGOW56WWQwNFRIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXFmcldLc2pyVi9TUEtINjBnclF5Wkc1QWwybEwvWWwvV0xkbEVVb3RpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S25hYWw3b1FVRlR1SXpRK1E5RVFxYllmWitHa3h1STB1WkNBU2Z4cTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTGR1dm93dUhiVzUxZDdNWUh4ZkplNVN3QWt4SklHNTJheXRvaTFkZlMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJMCtQcHVqcTNIZzUxdXI3QktUaDFhekRwMXcxQmw2b0IvWEprSE5rMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFZQnFodUtmNGhBcmlYQ0g5dlB1ZStwNkZzY3h5WERMc24yL3VNS1VCRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkowT3JGV1JIeE42Rnh4NGN1UXVCOWwySTVtYzlkZ0E4aWhObk1CS1VrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXdNenp4OTdDOC9xdEJLMUIrQkt6c21hbTBqbXNtZ1ZCaUJLMWxuSjR4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRiZ3M3MWxLSkdZa1BPaTlVMitCTWFCa1NoNTZMeGhOdWJTSVU3Zm9nam5VMUFkekxralNSMXUrQm1XVktlMy9TVHVDZVVaRUlKSHpoYXZOV094eUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJOaFF4Q3BVdkdmTU9IMk1jNlhlQmtOY3BRc01wbzJnQTdXNnJ3ZzRiZW5ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxODg2ODU0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3REFDQTU1NkRBMzIxNkVCQ0VBMUZFRjQzNzBDOTY5OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1OTc4NzEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItYXdyUnZTTVQ4eXplMEtvUXU0LWtnIiwicGhvbmVJZCI6IjM2Y2RiZmFiLTMxNzgtNDdjYi1hYmQ0LWI0YmYwNWFiNmViNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUjIxb1hiNzk2V3lSQzF2UENhcE5PQ3FsVUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDVleHFWNTZ2c1RRRDhEWjVCbWJtbTllVVpBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRIWFBDTUdBIiwibWUiOnsiaWQiOiIyNjM3MTg4Njg1NDY6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFiaWIgTXVnaGFsIFlUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMjBqS01CRU1mZDQ3c0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWa25VVDJwV2pya21lSjFGYjcrS1hWYTh2YU5ET21sQXBLT3RINWdQVGc4PSIsImFjY291bnRTaWduYXR1cmUiOiJGVWVEVTFqTHArUlI0cDJ3TGhWKzdoS2VjdTNKV0dHRElOeEczTlZSUFZjM3FOL0JVV0htWjA3S1FrYkVnL21nWXV1Tkk2K1l1bXFBWnFjMGtncWJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNUpSTU1XTXhIK0Q4MFlLNWtsc1JEa1VHSllXbWFUVGJXbGFHYWgxK2lOQlNFdHNtYUdteFpLVXZYaTVGTVIvUkFaTlVpT1ZyY1Q4c3pURUZmelJEQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTg4Njg1NDY6ODVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlpKMUU5cVZvNjVKbmlkUlcrL2lsMVd2TDJqUXpwcFFLU2pyUitZRDA0UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTk3ODcwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHWWcifQ==';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'habibmughalyt';
const dev = process.env.DEV || '263718868546';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'Habib-Mughal';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
