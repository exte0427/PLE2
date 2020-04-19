const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const tool =
    `function Name(codes){
    codes=codes.split("\\n");
    let returnCodes="";
    for(let i of codes){
        let returnCode="";
        let code=codes[i];
        //start
        YourCode
        //end
        returnCodes=returnCodes+returnCode;
    }
    eval(returnCodes);
}`;
let codel = [];
let codes = [];
let codesname = [];
let codesn = [];
client.once('ready', () => {
    console.log("Go!");
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("```")) {
        let msg = message.content.replace("```", "");
        msg = msg.split("\n");
        if (msg[0] == "") {
            if (msg[1].startsWith("make")) {
                if (codel.indexOf(msg[1].split("make ")[1]) == -1) {
                    codel.push(msg[1].split("make ")[1]);
                    codes.push("");
                    codesname.push("");
                    codesn.push("");
                    message.react('✅');
                } else if (msg[1].startsWith("list")) {
                    let msgs = "```css";
                    for (let i of codel) {
                        msgs = msgs + `\n${i+1}. [${codel[i]}]`;
                    }
                    msgs = msgs + "```";
                    message.channel.send(msgs);
                    message.react('✅');
                } else {
                    message.channel.send("```css\n[Error] already defined\n```");
                }
            } else {
                message.channel.send("```css\n[Error] no commend\n```");
            }

        } else {
            if (codel.indexOf(msg[0]) != -1) {
                let myCode = codel.indexOf(msg[0]);
                let Mname = codel[myCode];
                let Mcode = codes[myCode].split(":asd:");
                let Mcodename = codesname[myCode].split(":asd:");
                let Mcoden = codesn[myCode].split(":asd:");
                console.log(codesname[myCode]);

                if (msg[1].startsWith("look")) {
                    if (msg[1].startsWith("look code")) {
                        let codei = "";
                        for (let i = 1; i < msg.length; i++) {
                            codei = codei + msg[i] + "\n";
                        }
                        let coode = "";
                        for (let i = 0; i < Mcode.length; i++) {
                            coode = coode + "//start "+Mcodename[i]+"\n" + Mcode[i] + "\n";
                        }
                        message.channel.send("```js\n" + coode + "\n```");
                    } else {
                        message.react('✅');
                        let codecode = "";
                        for (let i = 0; i < Mcodename.length; i++) {
                            if (Mcodename[i] != "") {
                                codecode = codecode + `[${Mcodename[i]}] ${Mcoden[i]}` + "\n";
                            }
                        }
                        message.channel.send("```css\n" + `#${Mname}\n\n${codecode}` + "\n```");
                    }

                } else if (msg[1].startsWith("add")) {
                    if (Mcodename.indexOf(msg[1].replace("add ", "")) == -1) {
                        message.react('✅');
                        Mcodename.push(msg[1].replace("add ", ""));
                        Mcoden.push(msg[2]);
                        let msss = "";
                        for (let i = 3; i < msg.length - 1; i++) {
                            msss = msss + msg[i] + "\n";
                        }
                        Mcode.push(msss);
                    } else {
                        message.react('✅');
                        let asd = Mcodename.indexOf(msg[1].replace("add ", ""));
                        Mcodename[asd] = msg[1].replace("add ", "");
                        Mcoden[asd] = msg[2];
                        let msss = "";
                        for (let i = 3; i < msg.length - 1; i++) {
                            msss = msss + msg[i] + "\n";
                        }
                        Mcode[asd] = msss;
                    }
                } else {
                    let codei = "";
                    for (let i = 1; i < msg.length - 1; i++) {
                        codei = codei + msg[i] + "\\n";
                    }
                    let coode = "";
                    for (let i = 0; i < Mcode.length; i++) {
                        coode = coode + "        " + Mcode[i] + "\n";
                    }
                    let tools = tool.replace("Name", Mname).replace("YourCode", coode);
                    try {
                        eval(tools + "\n\n" + Mname + `('${codei}')`);
                    } catch (err) {
                        message.channel.send("```css\n[Error] " + err + "\n```");
                    }

                }
                codes[myCode] = base(Mcode);
                codesname[myCode] = base(Mcodename);
                codesn[myCode] = base(Mcoden);

            } else {
                message.channel.send("```css\n[Error] '" + msg[0] + "' is undefined\n```");
            }
        }
    }
});

function base(d) {
    let last = "";
    for (let i = 0; i < d.length; i++) {
        if (i - 1 == d.length) {
            last = last + d[i]
        } else {
            last = last + d[i] + ":asd:";
        }
    }
    return last;
}
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login(`Njk1NTA5NTkxMjgyMTU1NTcw.XpvmOQ.9sfN5jjMzwQieylPZMATXv4LUyU`);
