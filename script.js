let capitals={Afghanistan	:'Kabul',
Albania	:'Tirana',
Algeria	:'Algiers',
Andorra	:'Andorra la Vella',
Angola     :'Luanda',
Antigua    :"Saint John's",
Barbuda	:"Saint John's",
Argentina	:'Buenos Aires',
Armenia	:'Yerevan',
Australia	:'Canberra',
Austria	:'Vienna',
Azerbaijan	:'Baku',
Bahamas	:'Nassau',
Bahrain	:'Manama',
Bangladesh	:'Dhaka',
Barbados	:'Bridgetown',
Belarus	:'Minsk',
Belgium	:'Brussels',
Belize	:'Belmopan',
Benin	:'Porto-Novo',
Bhutan	:'Thimphu',
Bolivia	:'Sucre',
Bosnia     :'Sarajevo',
Herzegovina	:'Sarajevo',
Botswana	:'Gaborone',
Brazil	:'Brasilia',
Brunei	:'Bandar Seri Begawan',
Bulgaria	:'Sofia',
'Burkina Faso'	:'Ouagadougou',
Burundi	:'Gitega',
'Cabo Verde'	:'Praia',
Cambodia	:'Phnom Penh',
Cameroon	:'Yaounde',
Canada	:'Ottawa',
'Central African Republic'	:'Bangui',
Chad	:"N'Djamena",
Chile	:'Santiago',
China	:'Beijing',
Colombia	:'Bogota',
Comoros	:'Moroni',
'Costa Rica'	:'San Jose',
Croatia	:'Zagreb',
Cuba	:'Havana',
Cyprus	:'Nicosia',
Czechia	:'Prague',
Denmark	:'Copenhagen',
Djibouti	:'Djibouti',
Dominica	:'Roseau',
'Dominican Republic'	:'Santo Domingo',
Ecuador	:'Quito',
Egypt	:'Cairo',
'El Salvador'	:'San Salvador',
Eritrea	    :'Asmara',
Estonia	:'Tallinn',
Ethiopia	:'Addis Ababa',
Fiji	:'Suva',
Finland	:'Helsinki',
France	:'Paris',
Gabon	:'Libreville',
Gambia	:'Banjul',
Georgia	:'Tbilisi',
Germany	:'Berlin',
Ghana	:'Accra',
Greece	:'Athens',
Grenada	:"Saint George's",
Guatemala	:"Guatemala City",
Guinea	:"Conakry",
'Guinea-Bissau'	:'Bissau',
Guyana	:'Georgetown',
Haiti	:'Port-au-Prince',
Honduras	:'Tegucigalpa',
Hungary	:'Budapest',
Iceland	:'Reykjavik',
India	:'New Delhi',
Indonesia	:'Jakarta',
Iran	:'Tehran',
Iraq	:'Baghdad',
Ireland	:'Dublin',
Israel	:'Jerusalem',
Italy	:'Rome',
Jamaica	:'Kingston',
Japan	:'Tokyo',
Jordan	:'Amman',
Kazakhstan	:'Nur-Sultan',
Kenya	:'Nairobi',
Kiribati	:'Tarawa',
Kosovo	:'Pristina',
Kuwait	:'Kuwait City',
Kyrgyzstan	:'Bishkek',
Laos	:'Vientiane',
Latvia	:'Riga',
Lebanon	:'Beirut',
Lesotho	:'Maseru',
Liberia	:'Monrovia',
Libya	:'Tripoli',
Liechtenstein	:'Vaduz',
Lithuania	:'Vilnius',
Luxembourg	:'Luxembourg',
Madagascar	:'Antananarivo',
Malawi	:'Lilongwe',
Malaysia	:'Kuala Lumpur',
Maldives	:'Male',
Mali	:'Bamako',
Malta	:'Valletta',
'Marshall Islands'	:'Majuro',
Mauritania	:'Nouakchott',
Mauritius	:'Port Louis',
Mexico	:'Mexico City',
Micronesia	:'Palikir',
Moldova	:'Chisinau',
Monaco	:'Monaco',
Mongolia	:'Ulaanbaatar',
Montenegro	:'Podgorica',
Morocco	:'Rabat',
Mozambique	:'Maputo',
Myanmar	:'Naypyidaw',
Namibia	:'Windhoek',
Nepal	:'Kathmandu',
Netherlands	:'Amsterdam',
'New Zealand'	:'Wellington',
Nicaragua	:'Managua',
Niger	:'Niamey',
Nigeria	:'Abuja',
'North Korea'	:'Pyongyang',
'North Macedonia'	:'Skopje',
Norway	:'Oslo',
Oman	:'Muscat',
Pakistan	:'Islamabad',
Palau	:'Ngerulmud',
Palestine	:'Jerusalem',
Panama	:'Panama City',
'Papua New Guinea'	:'Port Moresby',
Paraguay	:'Asunción',
Peru	:'Lima',
Philippines	:'Manila',
Poland	:'Warsaw',
Portugal	:'Lisbon',
Qatar	:'Doha',
Romania	:'Bucharest',
Russia	:'Moscow',
Rwanda	:'Kigali',
'Saint Kitts and Nevis'	:'Basseterre',
'Saint Lucia'	:'Castries',
'Saint Vincent and the Grenadines'	:'Kingstown',
Samoa	:'Apia',
'San Marino'	:'San Marino',
'Saudi Arabia'	:'Riyadh',
Senegal	:'Dakar',
Serbia	:'Belgrade',
Seychelles	:'Victoria',
'Sierra Leone'	:'Freetown',
Singapore	:'Singapore',
Slovakia	:'Bratislava',
Slovenia	:'Ljubljana',
'Solomon Islands'	:'Honiara',
Somalia	:'Mogadishu',
'South Korea'	:'Seoul',
'South Sudan'	:'Juba',
Spain	:'Madrid',
Sudan	:'Khartoum',
Suriname	:'Paramaribo',
Sweden	:'Stockholm',
Switzerland	:'Bern',
Syria	:'Damascus',
Taiwan	:'Taipei',
Tajikistan	:'Dushanbe',
Tanzania	:'Dodoma',
Thailand	:'Bangkok',
'Timor-Leste'	:'Dili',
Tunisia	:'Tunis',
Turkey	:'Ankara',
Turkmenistan	:'Ashgabat',
Tuvalu	:'Funafuti',
Uganda	:'Kampala',
'United Arab Emirates'	:'Abu Dhabi',
'United Kingdom'	:'London',
'United States of America'	:'Washington',
Uruguay	:'Montevideo',
Uzbekistan	:'Tashkent',
Vanuatu	:'Port Vila',
Venezuela	:'Caracas',
Vietnam	:'Hanoi',
Yemen	:"Sana'a",
Zambia	:'Lusaka',
Zimbabwe	:'Harare'};

let wrong=0;
let key="";
let answer="";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guess=[];

function draw(){
    let canvas=document.getElementById('canvas1');
    let ctx=canvas.getContext('2d');
    ctx.beginPath();
    if(wrong===0){
        //robe
        ctx.moveTo(0,0);
        ctx.lineTo(50,0);
        ctx.moveTo(50,0);
        ctx.lineTo(50,30);
    }
    else if(wrong===1){
        ctx.arc(50,60,30,0,2*Math.PI);
    }
    else if(wrong===2){
        //body
        ctx.moveTo(50,90);
        ctx.lineTo(50,200);
    }
    else if(wrong===3){
        //left arm
        ctx.moveTo(50,110);
        ctx.lineTo(25,150);
        //right arm
        ctx.moveTo(50,110);
        ctx.lineTo(75,150);
    }
    else if(wrong===4){
        //left feet
        ctx.moveTo(50,200);
        ctx.lineTo(25,240);
        //right feet
        ctx.moveTo(50,200);
        ctx.lineTo(75,240);
    }
    
    //draw
    ctx.stroke();
}

function start(){
    wrong=0;
    key="";
    answer="";
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    guess=[];
    draw();
    let a=Object.keys(capitals);
    key=a[parseInt(Math.random()*a.length)];
    answer=capitals[key].toLowerCase();
    document.getElementById("start").innerHTML="Capital of "+key;
    printLetters();
    let str='<label>Enter a letter: </label><input type="text" maxlength="1" autocomplete="off" size="1" id="myInput"><button id="btn1" onclick="check()" value="submit" >submit</button>'
    document.getElementById("inputs").innerHTML=str;
    let input=document.getElementById("myInput")
    input.addEventListener("keyup", function(event){
        if(event.key==='Enter'){
            document.getElementById("btn1").click();
        }
    });
    printLines();
}

function printLetters(){
    let print=letters[0];
    for(i=1;i<letters.length;i++){
        print+="&ensp;"+letters[i];
    }
    document.getElementById("letters").innerHTML=print;
}

function printLines(){
    str="";
    for(i=0;i<answer.length;i++){
        if(!letters.includes(answer[i])){
            if(answer[i]===' '){
                str+="&ensp;"
            }
            guess[i]=answer[i];
            str+=answer[i];
        }
        else{
            guess[i]="_ ";
            str+="_ "
        }
        document.getElementById("guess").innerHTML=str;
    }
}

function check(){
    str="";
    letter=document.getElementById("myInput").value.toLowerCase();
    if(letters.includes(letter)){
        for(i=0;i<letters.length;i++){
            if(letters[i]===letter){
                letters.splice(i,1);
                printLetters();
            }
        }
        if(answer.includes(letter)){
            for(i=0;i<answer.length;i++){
                if(answer[i]===letter){
                    guess[i]=letter
                }
                if(answer[i]===' '){
                    str+="&ensp;"
                }else{
                str+=guess[i];
                }
            }
            document.getElementById("guess").innerHTML=str;
            if(guess.join("")===answer){
                str1="You Win<br>"
                document.getElementById("result").innerHTML=str1;
                letters=[];
                playAgain();
            }
        }
        else{
            wrong+=1;
            draw();
            if(wrong===4){
                str1="You Lose<br>The answer is "+answer;
                document.getElementById("result").innerHTML=str1;
                letters=[];
                playAgain()
            }
        }

    }
    document.getElementById("myInput").value="";
}

    function playAgain(){
        str='<br><lable>Do you want to play again?</lable><input type="radio" name="play" value="yes" onclick="play(this.value)">Yes';
        str+='<input type="radio" name="play" value="no" onclick="play(this.value)">No';
        document.getElementById("result").innerHTML+=str;
        a=document.getElementsByName("play");
        
    }

    function play(again){
        a=document.getElementsByTagName("body");
            str='<div id="start" style="text-align:center;"><button onclick="start()" value="start" class="btn">start</button></div><br>'
            str+='<div style="text-align:center;"><canvas id="canvas1" width="100" height="260"></canvas></div>'
            str+='<div id="letters" style="text-align:center;"></div><br><div id="inputs" style="text-align:center;"></div><br>'
            str+='<div style="text-align:center;" id="guess"></div><br><div id="result" style="text-align:center;"></div><br>'
            a[0].innerHTML=str;
        if(again==="yes"){
            start();
        }
        
    }

