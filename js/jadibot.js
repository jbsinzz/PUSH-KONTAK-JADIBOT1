function _0x2354(_0x3a0307,_0x4263f6){const _0x233e5d=_0x233e();return _0x2354=function(_0x2354a5,_0x57813b){_0x2354a5=_0x2354a5-0xc7;let _0x1692e1=_0x233e5d[_0x2354a5];return _0x1692e1;},_0x2354(_0x3a0307,_0x4263f6);}function _0x233e(){const _0x4fa49b=['downloadMediaMessage','Chrome','join','conns','Connection\x20closed,\x20reconnecting....','startsWith','statusCode','key','international','close','connection.update','badSession','end','replace','getNumber','./db/jadibot/','2658720jhffLk','3724070lVUWKC','6ygCmVg','1.0.0','set','map','matchAll','test','qrcode','@s.whatsapp.net','log','BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:','restartRequired','@g.us','now','withoutContact','message','6499215SnVmzL','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','remoteJid','contacts','decodeJid','mtype','endsWith','floor','mimetype','status','BAE5','\x20Kontak','Connecting\x20to\x20jadibot..','Unknown\x20DisconnectReason:\x20','keys','ephemeralMessage','*_\x20\x0a\x20USER\x20SESSION\x20:\x20','writeFileSync','18276lwuNKs','CB:Blocklist','connecting','output','toDataURL','random','user','subject','time','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','./lib/exif','8423960gnFMns','from','status@broadcast','public','bind','WhatsApp','s.whatsapp.net','length','concat','sendMessage','downloadAndSaveMediaMessage','43528VrzSrB','Restart\x20Required,\x20Restarting...','name','./lib/functions','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','split','parseMention','sendContact','open','100','connectionClosed','Jadibot\x20PushKontak\x20KurrXd','*Connected\x20to\x20Whatsapp\x20-\x20Bot*\x0a\x0a*User\x20:*\x0a\x20_*×\x20id\x20:\x20','connectionReplaced','child','groupMetadata','fromBuffer','push','notify','8977104OUvoem','ext','msg','silent','logout','connectionLost','timedOut','../js/xd','store','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','query','\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD','pino','getName','server','280ILSJgu','0@s.whatsapp.net'];_0x233e=function(){return _0x4fa49b;};return _0x233e();}const _0x4f6986=_0x2354;(function(_0xe520af,_0x44a8f5){const _0x384783=_0x2354,_0xbddea3=_0xe520af();while(!![]){try{const _0x5e3500=parseInt(_0x384783(0x132))/0x1*(-parseInt(_0x384783(0xfc))/0x2)+-parseInt(_0x384783(0xe6))/0x3*(-parseInt(_0x384783(0x11e))/0x4)+parseInt(_0x384783(0xd4))/0x5+-parseInt(_0x384783(0x130))/0x6+-parseInt(_0x384783(0x131))/0x7+parseInt(_0x384783(0xf1))/0x8+-parseInt(_0x384783(0x10f))/0x9;if(_0x5e3500===_0x44a8f5)break;else _0xbddea3['push'](_0xbddea3['shift']());}catch(_0x200acd){_0xbddea3['push'](_0xbddea3['shift']());}}}(_0x233e,0xa510c),require('../config/settings'));const {modul}=require('./module'),{baileys,boom,chalk,fs,figlet,FileType,path,process,PhoneNumber}=modul,{Boom}=boom,{default:makeWaSocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,generateWAMessage,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=baileys,{color,bgcolor}=require('./lib/color'),log=pino=require(_0x4f6986(0x11b)),qrcode=require(_0x4f6986(0xcb)),rimraf=require('rimraf'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x4f6986(0xf0)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,sleep,reSize}=require(_0x4f6986(0xff)),owner=global['owner'],store=makeInMemoryStore({'logger':pino()[_0x4f6986(0x10a)]({'level':_0x4f6986(0x112),'stream':_0x4f6986(0x117)})});if(global[_0x4f6986(0x123)]instanceof Array)console[_0x4f6986(0xcd)]();else global[_0x4f6986(0x123)]=[];const jadibot=async(_0x4a99fa,_0x3b2ae9,_0x445a92)=>{const _0x58631c=_0x4f6986,{sendImage:_0x36677d,sendMessage:_0x1b9d52}=_0x4a99fa,{reply:_0x5bdb1c,sender:_0x2ae799}=_0x3b2ae9,_0x2ba51a=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99',_0x58631c(0x105)],_0xba921=_0x2ba51a[Math[_0x58631c(0xdb)](Math[_0x58631c(0xeb)]()*_0x2ba51a[_0x58631c(0xf8)])],_0x5d08f9=Math[_0x58631c(0xdb)](Math['random']()*0x270f*0x7),{state:_0x369731,saveCreds:_0x1e55a7}=await useMultiFileAuthState(path[_0x58631c(0x122)](__dirname,_0x58631c(0x12f)+q),log({'level':_0x58631c(0x112)}));try{async function _0xa3f84e(){const _0x2832c1=_0x58631c;let {version:_0x20881c,isLatest:_0xbc0f42}=await fetchLatestBaileysVersion();const _0x552fc8=await makeWaSocket({'auth':_0x369731,'browser':[_0x2832c1(0x107),_0x2832c1(0x121),_0x2832c1(0x133)],'logger':log({'level':_0x2832c1(0x112)}),'version':_0x20881c});_0x552fc8['ws']['on'](_0x2832c1(0xe7),_0x5ecde2=>{const _0x37a85b=_0x2832c1;if(blocked['length']>0x2)return;for(let _0x31f2c0 of _0x5ecde2[0x1]['blocklist']){blocked[_0x37a85b(0x10d)](_0x31f2c0[_0x37a85b(0x12d)]('c.us',_0x37a85b(0xf7)));}}),_0x552fc8['ev']['on']('messages.upsert',async _0x7a3c2d=>{const _0x3e5a58=_0x2832c1;try{_0x3b2ae9=_0x7a3c2d['messages'][0x0];if(!_0x3b2ae9[_0x3e5a58(0xd3)])return;_0x3b2ae9['message']=Object[_0x3e5a58(0xe2)](_0x3b2ae9[_0x3e5a58(0xd3)])[0x0]===_0x3e5a58(0xe3)?_0x3b2ae9[_0x3e5a58(0xd3)]['ephemeralMessage'][_0x3e5a58(0xd3)]:_0x3b2ae9[_0x3e5a58(0xd3)];if(_0x3b2ae9['key']&&_0x3b2ae9[_0x3e5a58(0x127)][_0x3e5a58(0xd6)]===_0x3e5a58(0xf3))return;if(!_0x552fc8[_0x3e5a58(0xf4)]&&!_0x3b2ae9[_0x3e5a58(0x127)]['fromMe']&&_0x7a3c2d['type']===_0x3e5a58(0x10e))return;if(_0x3b2ae9['key']['id'][_0x3e5a58(0x125)](_0x3e5a58(0xde))&&_0x3b2ae9['key']['id']['length']===0x10)return;_0x3b2ae9=smsg(_0x552fc8,_0x3b2ae9,store),require(_0x3e5a58(0x116))(_0x552fc8,_0x3b2ae9,_0x7a3c2d,store);}catch(_0x5cf82d){console[_0x3e5a58(0xcd)](_0x5cf82d);}}),_0x552fc8[_0x2832c1(0xf4)]=!![],store[_0x2832c1(0xf5)](_0x552fc8['ev']),_0x552fc8['ev']['on']('creds.update',_0x1e55a7),_0x552fc8['ev']['on'](_0x2832c1(0x12a),async _0x3ca3dd=>{const _0x4caffa=_0x2832c1,{lastDisconnect:_0xc3ac69,connection:_0xcd27f1}=_0x3ca3dd;if(_0xcd27f1==_0x4caffa(0xe8))return;if(_0xcd27f1){if(_0xcd27f1!=_0x4caffa(0xe8))console[_0x4caffa(0xcd)](_0x4caffa(0xe0));}console['log'](_0x3ca3dd);if(_0x3ca3dd['qr'])await _0x36677d(_0x445a92,await qrcode[_0x4caffa(0xea)](_0x3ca3dd['qr'],{'scale':0x8}),'Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara\x0a\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0aQR\x20Expired\x20dalam\x2030\x20detik',_0x3b2ae9);console[_0x4caffa(0xcd)](_0xcd27f1);_0xcd27f1==_0x4caffa(0x104)&&(_0x552fc8['id']=_0x552fc8[_0x4caffa(0xd8)](_0x552fc8[_0x4caffa(0xec)]['id']),_0x552fc8[_0x4caffa(0xee)]=Date[_0x4caffa(0xd1)](),global[_0x4caffa(0x123)][_0x4caffa(0x10d)](_0x552fc8),await _0x3b2ae9['reply'](_0x4caffa(0x108)+_0x552fc8['decodeJid'](_0x552fc8[_0x4caffa(0xec)]['id'])+_0x4caffa(0xe4)+q));if(_0xcd27f1===_0x4caffa(0x129)){let _0x291fe0=new Boom(_0xc3ac69?.['error'])?.[_0x4caffa(0xe9)][_0x4caffa(0x126)];if(_0x291fe0===DisconnectReason[_0x4caffa(0x12b)])console['log'](_0x4caffa(0x118)),_0x552fc8[_0x4caffa(0x113)]();else{if(_0x291fe0===DisconnectReason[_0x4caffa(0x106)])console[_0x4caffa(0xcd)](_0x4caffa(0x124)),_0xa3f84e();else{if(_0x291fe0===DisconnectReason[_0x4caffa(0x114)])console['log'](_0x4caffa(0xef)),_0xa3f84e();else{if(_0x291fe0===DisconnectReason[_0x4caffa(0x109)])console[_0x4caffa(0xcd)](_0x4caffa(0xd5)),_0x552fc8[_0x4caffa(0x113)]();else{if(_0x291fe0===DisconnectReason['loggedOut'])console[_0x4caffa(0xcd)](_0x4caffa(0x100)),_0x552fc8[_0x4caffa(0x113)]();else{if(_0x291fe0===DisconnectReason[_0x4caffa(0xcf)])console[_0x4caffa(0xcd)](_0x4caffa(0xfd)),_0xa3f84e();else{if(_0x291fe0===DisconnectReason[_0x4caffa(0x115)])console['log']('Connection\x20TimedOut,\x20Reconnecting...'),_0xa3f84e();else _0x552fc8[_0x4caffa(0x12c)](_0x4caffa(0xe1)+_0x291fe0+'|'+_0xcd27f1);}}}}}}}}),_0x552fc8['decodeJid']=_0x5e96b8=>{const _0x313ebf=_0x2832c1;if(!_0x5e96b8)return _0x5e96b8;if(/:\d+@/gi[_0x313ebf(0xca)](_0x5e96b8)){let _0x1c4273=jidDecode(_0x5e96b8)||{};return _0x1c4273[_0x313ebf(0xec)]&&_0x1c4273[_0x313ebf(0x11d)]&&_0x1c4273[_0x313ebf(0xec)]+'@'+_0x1c4273[_0x313ebf(0x11d)]||_0x5e96b8;}else return _0x5e96b8;},_0x552fc8['ev']['on']('contacts.update',_0xb9d5ef=>{const _0x2770dc=_0x2832c1;for(let _0x516bd1 of _0xb9d5ef){let _0x30387c=_0x552fc8[_0x2770dc(0xd8)](_0x516bd1['id']);if(store&&store['contacts'])store[_0x2770dc(0xd7)][_0x30387c]={'id':_0x30387c,'name':_0x516bd1['notify']};}}),_0x552fc8[_0x2832c1(0x11c)]=(_0x392c22,_0x108e66=![])=>{const _0x44e02f=_0x2832c1;id=_0x552fc8[_0x44e02f(0xd8)](_0x392c22),_0x108e66=_0x552fc8[_0x44e02f(0xd2)]||_0x108e66;let _0x14d60e;if(id[_0x44e02f(0xda)](_0x44e02f(0xd0)))return new Promise(async _0x3c071f=>{const _0x3d77e1=_0x44e02f;_0x14d60e=store[_0x3d77e1(0xd7)][id]||{};if(!(_0x14d60e['name']||_0x14d60e[_0x3d77e1(0xed)]))_0x14d60e=_0x552fc8[_0x3d77e1(0x10b)](id)||{};_0x3c071f(_0x14d60e[_0x3d77e1(0xfe)]||_0x14d60e[_0x3d77e1(0xed)]||PhoneNumber('+'+id[_0x3d77e1(0x12d)](_0x3d77e1(0xcc),''))[_0x3d77e1(0x12e)]('international'));});else _0x14d60e=id===_0x44e02f(0x11f)?{'id':id,'name':_0x44e02f(0xf6)}:id===_0x552fc8[_0x44e02f(0xd8)](_0x552fc8[_0x44e02f(0xec)]['id'])?_0x552fc8[_0x44e02f(0xec)]:store[_0x44e02f(0xd7)][id]||{};return(_0x108e66?'':_0x14d60e['name'])||_0x14d60e[_0x44e02f(0xed)]||_0x14d60e['verifiedName']||PhoneNumber('+'+_0x392c22[_0x44e02f(0x12d)]('@s.whatsapp.net',''))[_0x44e02f(0x12e)](_0x44e02f(0x128));},_0x552fc8[_0x2832c1(0x102)]=(_0x1f3816='')=>{const _0x102b6d=_0x2832c1;return[..._0x1f3816[_0x102b6d(0xc9)](/@([0-9]{5,16}|0)/g)][_0x102b6d(0xc8)](_0x5956e4=>_0x5956e4[0x1]+_0x102b6d(0xcc));},_0x552fc8[_0x2832c1(0x103)]=async(_0x50d830,_0x45d978,_0x342315='',_0x55c430={})=>{const _0x1e873e=_0x2832c1;let _0x446ef4=[];for(let _0x1e5a3c of _0x45d978){_0x446ef4['push']({'displayName':await _0x552fc8[_0x1e873e(0x11c)](_0x1e5a3c+_0x1e873e(0xcc)),'vcard':_0x1e873e(0xce)+await _0x552fc8[_0x1e873e(0x11c)](_0x1e5a3c+_0x1e873e(0xcc))+'\x0a\x0aFN:'+await _0x552fc8[_0x1e873e(0x11c)](_0x1e5a3c+'@s.whatsapp.net')+'\x0a\x0aitem1.TEL;waid='+_0x1e5a3c+':'+_0x1e5a3c+_0x1e873e(0x11a)});}_0x552fc8[_0x1e873e(0xfa)](_0x50d830,{'contacts':{'displayName':_0x446ef4[_0x1e873e(0xf8)]+_0x1e873e(0xdf),'contacts':_0x446ef4},..._0x55c430},{'quoted':_0x342315});},_0x552fc8['setStatus']=_0x48502d=>{const _0x48667e=_0x2832c1;return _0x552fc8[_0x48667e(0x119)]({'tag':'iq','attrs':{'to':_0x48667e(0xcc),'type':_0x48667e(0xc7),'xmlns':_0x48667e(0xdd)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x48667e(0xf2)](_0x48502d,'utf-8')}]}),_0x48502d;},_0x552fc8[_0x2832c1(0xfb)]=async(_0x178687,_0x4d2f20,_0x361c6e=!![])=>{const _0x1af414=_0x2832c1;let _0x48e371=_0x178687['msg']?_0x178687['msg']:_0x178687,_0x31533b=(_0x178687[_0x1af414(0x111)]||_0x178687)[_0x1af414(0xdc)]||'',_0x22dc43=_0x178687[_0x1af414(0xd9)]?_0x178687[_0x1af414(0xd9)][_0x1af414(0x12d)](/Message/gi,''):_0x31533b[_0x1af414(0x101)]('/')[0x0];const _0x577c2a=await downloadContentFromMessage(_0x48e371,_0x22dc43);let _0x5d81f6=Buffer[_0x1af414(0xf2)]([]);for await(const _0x49b520 of _0x577c2a){_0x5d81f6=Buffer[_0x1af414(0xf9)]([_0x5d81f6,_0x49b520]);}let _0x8e4f3f=await FileType[_0x1af414(0x10c)](_0x5d81f6);return trueFileName=_0x361c6e?_0x4d2f20+'.'+_0x8e4f3f[_0x1af414(0x110)]:_0x4d2f20,await fs[_0x1af414(0xe5)](trueFileName,_0x5d81f6),trueFileName;},_0x552fc8[_0x2832c1(0x120)]=async _0x1c1d6a=>{const _0x2c97dd=_0x2832c1;let _0x203fce=(_0x1c1d6a[_0x2c97dd(0x111)]||_0x1c1d6a)[_0x2c97dd(0xdc)]||'',_0x4f9bc0=_0x1c1d6a[_0x2c97dd(0xd9)]?_0x1c1d6a[_0x2c97dd(0xd9)]['replace'](/Message/gi,''):_0x203fce[_0x2c97dd(0x101)]('/')[0x0];const _0x4bdc34=await downloadContentFromMessage(_0x1c1d6a,_0x4f9bc0);let _0x27a6db=Buffer[_0x2c97dd(0xf2)]([]);for await(const _0x2255ad of _0x4bdc34){_0x27a6db=Buffer[_0x2c97dd(0xf9)]([_0x27a6db,_0x2255ad]);}return _0x27a6db;},_0x552fc8['sendText']=(_0x2eb9b3,_0x3f59c2,_0x4cc689='',_0x50635b)=>_0x552fc8[_0x2832c1(0xfa)](_0x2eb9b3,{'text':_0x3f59c2,..._0x50635b},{'quoted':_0x4cc689});}_0xa3f84e();}catch(_0x19fd35){console[_0x58631c(0xcd)](_0x19fd35);}};module['exports']={'jadibot':jadibot,'conns':conns};