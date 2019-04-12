var spanishHymns = [];
var englishHymns = [];
var results = [];
var asc = {spanishHymns: true, englishHymns: true};

// TODO account for special spanish characters like ñ or ó

function searchLibrary(regex, searchList1, searchList2 = undefined) {
    results = [];
    var resultsJ = 0;
    for (var i = 0; i < searchList1.length; i++ ) {
        // if NAME in results, add to results array
        if (regex.test(searchList1[i].name.toLowerCase())) {
            results[resultsJ] = searchList1[i].id;
            resultsJ++;
        }
        // if NUMBER in results, add to results array
        if (regex.test(searchList1[i].number)) {
            // check for duplicates
            var alreadyInResults = results.includes(searchList1[i].id);
            if (!alreadyInResults) {
                results[resultsJ] = searchList1[i].id;
                resultsJ++;
            }
        }
    }  
    if (searchList2 != undefined) {
        for (var i = 0; i < searchList2.length; i++ ) {
            if (regex.test(searchList2[i].name.toLowerCase())) {
                // check for duplicates
                var alreadyInResults = results.includes(searchList1[i].id);
                if (!alreadyInResults) {
                   results[resultsJ] = searchList2[i].id;
                   resultsJ++; 
                }
            }
            if (regex.test(searchList2[i].number)) {
                // check for duplicates
                var alreadyInResults = results.includes(searchList1[i].id);
                if (!alreadyInResults) {
                    results[resultsJ] = searchList2[i].id;
                    resultsJ++;
                }
            }
        } 
    }
}

function buildEnglishList() {
    englishHymns.push({ id: 0, number: "68", name:"A Mighty Fortress Is Our God"});
    englishHymns.push({ id: 1, number: "29", name:"A Poor Wayfaring Man of Grief"});
    englishHymns.push({ id: 2, number: "166", name:"Abide with Me!"});
    englishHymns.push({ id: 3, number: "165", name:"Abide with Me; 'Tis Eventide"});
    englishHymns.push({ id: 4, number: "186", name:"Again We meet Around the Board"});
    englishHymns.push({ id: 5, number: "62", name:"All Creatures of Our God and King"});
    englishHymns.push({ id: 6, number: "69", name:"All Glory, Laud, and Honor"});
    englishHymns.push({ id: 7, number: "13", name:"An Angel from on High"});
    englishHymns.push({ id: 8, number: "203", name:"Angels We Have Heard on High"});
    englishHymns.push({ id: 9, number: "277", name:"As I Search the Holy Scriptures"});
    englishHymns.push({ id: 10, number: "309", name:"As Sisters in Zion"});
    englishHymns.push({ id: 11, number: "149", name:"As the Dew from Heaven Distilling"});
    englishHymns.push({ id: 12, number: "206", name:"Away in a Manger"});
    englishHymns.push({ id: 13, number: "60", name:"Battle Hymn of the Republic"});
    englishHymns.push({ id: 14, number: "124", name:"Be Still, My Soul"});
    englishHymns.push({ id: 15, number: "130", name:"Be Thou Humble"});
    englishHymns.push({ id: 16, number: "44", name:"Beautiful Zion, Built Above"});
    englishHymns.push({ id: 17, number: "219", name:"Because I have been given much"});
    englishHymns.push({ id: 18, number: "158", name:"Before Thee, Lord, I Bow My Head"});
    englishHymns.push({ id: 19, number: "191", name:"Behold the Great Redeemer Die"});
    englishHymns.push({ id: 20, number: "238", name:"Behold thy Sons and Daughters"});
    englishHymns.push({ id: 21, number: "251", name:"Behold! A Royal Army"});
    englishHymns.push({ id: 22, number: "335", name:"Brightly Beams Our Father’s Mercy"});
    englishHymns.push({ id: 23, number: "249", name:"Called to Serve"});
    englishHymns.push({ id: 24, number: "255", name:"Carry on"});
    englishHymns.push({ id: 25, number: "299", name:"Children of Our Heavenly Father"});
    englishHymns.push({ id: 26, number: "239", name:"Choose the Right"});
    englishHymns.push({ id: 27, number: "200", name:"Christ the Lord Is Risen Today"});
    englishHymns.push({ id: 28, number: "65", name:"Come All Ye Saints Who Dwell on Earth"});
    englishHymns.push({ id: 29, number: "276", name:"Come Away to the Sunday School"});
    englishHymns.push({ id: 30, number: "21", name:"Come Listen to a Prophet's Voice"});
    englishHymns.push({ id: 31, number: "117", name:"Come unto Jesus"});
    englishHymns.push({ id: 32, number: "38", name:"Come, All Ye Saints of Zion"});
    englishHymns.push({ id: 33, number: "322", name:"Come, All Ye Sons of God (Men)"});
    englishHymns.push({ id: 34, number: "30", name:"Come, Come, Ye Saints"});
    englishHymns.push({ id: 35, number: "116", name:"Come, Follow Me"});
    englishHymns.push({ id: 36, number: "59", name:"Come, O Thou King of Kings"});
    englishHymns.push({ id: 37, number: "50", name:"Come, Thou Glorious Day of Promise"});

    englishHymns.push({ id: 38, number: "119", name:"Come, We That Love the Lord"});
    englishHymns.push({ id: 39, number: "58", name:"Come, Ye Children of the Lord"});
    englishHymns.push({ id: 40, number: "115", name:"Come, Ye Disconsolate"});
    englishHymns.push({ id: 41, number: "94", name:"Come, Ye Thankful People"});
    englishHymns.push({ id: 42, number: "241", name:"Count Your Blessings"});
    englishHymns.push({ id: 43, number: "221", name:"Dear to the Heart of the Shepherd"});
    englishHymns.push({ id: 44, number: "96", name:"Dearest Children, God Is Near You"});
    englishHymns.push({ id: 45, number: "140", name:"Did You Think to Pray?"});
    englishHymns.push({ id: 46, number: "237", name:"Do What Is Right"});
    englishHymns.push({ id: 47, number: "293", name:"Each Life that Touches Ours for Good"});
    englishHymns.push({ id: 48, number: "300", name:"Families Can be Together Forever"});
    englishHymns.push({ id: 49, number: "212", name:"Far, Far Away on Judea's Plains"});
    englishHymns.push({ id: 50, number: "133", name:"Father in Heaven"});
    englishHymns.push({ id: 51, number: "180", name:"Father in Heaven, We Do Believe"});
    englishHymns.push({ id: 52, number: "213", name:"First Noel"});
    englishHymns.push({ id: 53, number: "82", name:"For all the Saints"});
    englishHymns.push({ id: 54, number: "92", name:"For the Beauty of the Earth"});
    englishHymns.push({ id: 55, number: "35", name:"For the Strength of the Hills"});
    englishHymns.push({ id: 56, number: "297", name:"From Homes of Saints Glad Songs Arise"});
    englishHymns.push({ id: 57, number: "146", name:"Gently Raise the Sacred Strain"});
    englishHymns.push({ id: 58, number: "67", name:"Glory to God on High"});
    englishHymns.push({ id: 59, number: "263", name:"Go Forth with Faith"});
    englishHymns.push({ id: 60, number: "327", name:"Go, Ye Messengers of Heaven"});
    englishHymns.push({ id: 61, number: "152", name:"God Be with You Till We Meet Again"});
    englishHymns.push({ id: 62, number: "24", name:"God Bless our Prophet Dear"});
    englishHymns.push({ id: 63, number: "87", name:"God Is Love"});
    englishHymns.push({ id: 64, number: "187", name:"God Loved Us, So He Sent His Son"});
    englishHymns.push({ id: 65, number: "285", name:"God Moves in a Mysterious Way"});
    englishHymns.push({ id: 66, number: "76", name:"God of Our Fathers, We Come unto Thee"});
    englishHymns.push({ id: 67, number: "78", name:"God of Our Fathers, Whose Almighty Hand"});
    englishHymns.push({ id: 68, number: "106", name:"God Speed the Right"});
    englishHymns.push({ id: 69, number: "170", name:"God, Our Father, Hear Us Pray"});
    englishHymns.push({ id: 70, number: "306", name:"God's Daily Care"});
    englishHymns.push({ id: 71, number: "101", name:"Guide Me to Thee"});
    englishHymns.push({ id: 72, number: "42", name:"Hail to the Brightness of Zion's Glad Morning!"});
    englishHymns.push({ id: 73, number: "209", name:"Hark! The Herald Angels Sing"});
    englishHymns.push({ id: 74, number: "264", name:"Hark, All Ye Nations!"});
    englishHymns.push({ id: 75, number: "223", name:"Have I Done Any Good?"});
    englishHymns.push({ id: 76, number: "192", name:"He Died! The Great Redeemer Died"});
    englishHymns.push({ id: 77, number: "199", name:"He Is Risen!"});
    englishHymns.push({ id: 78, number: "281", name:"Help Me Teach with Inspiration"});

    englishHymns.push({ id: 79, number: "5", name:"High on the Mountain Top"});
    englishHymns.push({ id: 80, number: "289", name:"Holy Temples on Mount Zion"});
    englishHymns.push({ id: 81, number: "298", name:"Home Can Be a Heaven on Earth"});
    englishHymns.push({ id: 82, number: "259", name:"Hope of Israel"});
    englishHymns.push({ id: 83, number: "85", name:"How Firm a Foundation"});
    englishHymns.push({ id: 84, number: "125", name:"How Gentle God's Commands"});
    englishHymns.push({ id: 85, number: "195", name:"How Great the Wisdom and the Love"});
    englishHymns.push({ id: 86, number: "86", name:"How Great Thou Art"});
    englishHymns.push({ id: 87, number: "267", name:"How Wondrous and Great"});
    englishHymns.push({ id: 88, number: "301", name:"I am a Child of God"});
    englishHymns.push({ id: 89, number: "134", name:"I Believe in Christ"});
    englishHymns.push({ id: 90, number: "214", name:"I Heard the Bells on Christmas Day"});
    englishHymns.push({ id: 91, number: "302", name:"I Know My Father Lives"});
    englishHymns.push({ id: 92, number: "136", name:"I Know That My Redeemer Lives"});
    englishHymns.push({ id: 93, number: "98", name:"I Need Thee Every Hour"});
    englishHymns.push({ id: 94, number: "193", name:"I Stand All Amazed"});
    englishHymns.push({ id: 95, number: "270", name:"I'll Go Where You Want Me to Go"});
    englishHymns.push({ id: 96, number: "226", name:"Improve the Shining Moments"});
    englishHymns.push({ id: 97, number: "172", name:"In Humility, Our Savior"});
    englishHymns.push({ id: 98, number: "190", name:"In Memory of the Crucified"});
    englishHymns.push({ id: 99, number: "307", name:"In Our Lovely Deseret"});
    englishHymns.push({ id: 100, number: "183", name:"In Remembrance of Thy Suffering"});
    englishHymns.push({ id: 101, number: "7", name:"Israel, Israel, God Is Calling"});
    englishHymns.push({ id: 102, number: "207", name:"It Came upon the Midnight Clear"});
    englishHymns.push({ id: 103, number: "269", name:"Jehovah, Lord of Heaven and Earth"});
    englishHymns.push({ id: 104, number: "181", name:"Jesus of Nazareth, Savior and King"});
    englishHymns.push({ id: 105, number: "102", name:"Jesus, Lover of My Soul"});
    englishHymns.push({ id: 106, number: "196", name:"Jesus, Once of Humble Birth"});
    englishHymns.push({ id: 107, number: "104", name:"Jesus, Savior, Pilot Me"});
    englishHymns.push({ id: 108, number: "141", name:"Jesus, the Very Thought of Thee"});
    englishHymns.push({ id: 109, number: "26", name:"Joseph Smith's First Prayer"});
    englishHymns.push({ id: 110, number: "201", name:"Joy to the World"});
    englishHymns.push({ id: 111, number: "303", name:"Keep the Commandments"});
    englishHymns.push({ id: 112, number: "240", name:"Know This, That Every Soul is Free"});
    englishHymns.push({ id: 113, number: "45", name:"Lead Me into Life Eternal"});
    englishHymns.push({ id: 114, number: "97", name:"Lead, Kindly Light"});
    englishHymns.push({ id: 115, number: "53", name:"Let Earth’s Inhabitants Rejoice"});
    englishHymns.push({ id: 116, number: "143", name:"Let the Holy Spirit Guide"});
    englishHymns.push({ id: 117, number: "243", name:"Let Us All Press On"});
    englishHymns.push({ id: 118, number: "232", name:"Let Us Oft Speak Kind Words"});
    englishHymns.push({ id: 119, number: "55", name:"Lo, the Mighty God Appearing!"});

    englishHymns.push({ id: 120, number: "236", name:"Lord, Accept into the Kingdom"});
    englishHymns.push({ id: 121, number: "107", name:"Lord, Accept Our True Devotion"});
    englishHymns.push({ id: 122, number: "163", name:"Lord, Dismiss Us with Thy Blessing"});
    englishHymns.push({ id: 123, number: "220", name:"Lord, I would follow Thee"});
    englishHymns.push({ id: 124, number: "153", name:"Lord, We Ask Thee Ere We Part"});
    englishHymns.push({ id: 125, number: "162", name:"Lord, We Come Before Thee Now"});
    englishHymns.push({ id: 126, number: "294", name:"Love at Home"});
    englishHymns.push({ id: 127, number: "308", name:"Love One Another"});
    englishHymns.push({ id: 128, number: "105", name:"Master, the Tempest Is Raging"});
    englishHymns.push({ id: 129, number: "131", name:"More Holiness Give Me"});
    englishHymns.push({ id: 130, number: "135", name:"My Redeemer Lives"});
    englishHymns.push({ id: 131, number: "100", name:"Nearer, My God, to Thee"});
    englishHymns.push({ id: 132, number: "3", name:"Now Let Us Rejoice"});
    englishHymns.push({ id: 133, number: "95", name:"Now Thank We All Our God"});
    englishHymns.push({ id: 134, number: "159", name:"Now the Day Is Over"});
    englishHymns.push({ id: 135, number: "25", name:"Now We’ll Sing with One Accord"});
    englishHymns.push({ id: 136, number: "175", name:"O God, the Eternal Father"});
    englishHymns.push({ id: 137, number: "208", name:"O Little Town of Bethlehem"});
    englishHymns.push({ id: 138, number: "178", name:"O Lord of Hosts"});
    englishHymns.push({ id: 139, number: "295", name:"O Love that Glorifies the Son"});
    englishHymns.push({ id: 140, number: "292", name:"O My Father"});
    englishHymns.push({ id: 141, number: "197", name:"O Savior, Thou Who Wearest a Crown"});
    englishHymns.push({ id: 142, number: "150", name:"O Thou Kind and Gracious Father"});
    englishHymns.push({ id: 143, number: "258", name:"O Thou Rock of Our Salvation"});
    englishHymns.push({ id: 144, number: "34", name:"O Ye Mountains High"});
    englishHymns.push({ id: 145, number: "272", name:"Oh Say, What is Truth?"});

    englishHymns.push({ id: 146, number: "202", name:"Oh, Come, All Ye Faithful?"});
    englishHymns.push({ id: 147, number: "271", name:"Oh, Holy Words of Truth and Love?"});
    englishHymns.push({ id: 148, number: "246", name:"Onward, Christian Soldiers"});
    englishHymns.push({ id: 149, number: "296", name:"Our Father, by Whose Name"});
    englishHymns.push({ id: 150, number: "113", name:"Our Savior's Love"});
    englishHymns.push({ id: 151, number: "242", name:"Praise God, from Whom All Blessings Flow"});
    englishHymns.push({ id: 152, number: "73", name:"Praise the Lord with Heart and Voice"});
    englishHymns.push({ id: 153, number: "72", name:"Praise to the Lord, the Almighty"});
    englishHymns.push({ id: 154, number: "27", name:"Praise to the Man"});
    englishHymns.push({ id: 155, number: "145", name:"Prayer Is the Soul's Sincere Desire"});
    englishHymns.push({ id: 156, number: "93", name:"Prayer of Thanksgiving"});
    englishHymns.push({ id: 157, number: "81", name:"Press Forward, Saints"});
    englishHymns.push({ id: 158, number: "252", name:"Put Your Shoulder to the Wheel"});
    englishHymns.push({ id: 159, number: "6", name:"Redeemer of Israel"});
    englishHymns.push({ id: 160, number: "257", name:"Rejoice! A Glorious Sound is Heard"});
    englishHymns.push({ id: 161, number: "66", name:"Rejoice, the Lord Is King!"});
    englishHymns.push({ id: 162, number: "185", name:"Reverently and Meekly Now"});
    englishHymns.push({ id: 163, number: "215", name:"Ring Out, Wild Bells"});
    englishHymns.push({ id: 164, number: "287", name:"Rise, Ye Saints, and Temples Enter"});
    englishHymns.push({ id: 165, number: "111", name:"Rock of Ages"});
    englishHymns.push({ id: 166, number: "28", name:"Saints, Behold How Great Jehovah"});
    englishHymns.push({ id: 167, number: "230", name:"Scatter Sunshine"});
    englishHymns.push({ id: 168, number: "144", name:"Secret Prayer"});
    englishHymns.push({ id: 169, number: "235", name:"Should You Feel Inclined to Censure"});
    englishHymns.push({ id: 170, number: "204", name:"Silent Night"});
    englishHymns.push({ id: 171, number: "156", name:"Sing We Now at Parting"});
    englishHymns.push({ id: 172, number: "160", name:"Softly Now the Light of Day"});
    englishHymns.push({ id: 173, number: "142", name:"Sweet Hour of Prayer"});
    englishHymns.push({ id: 174, number: "147", name:"Sweet Is the Work"});
    englishHymns.push({ id: 175, number: "304", name:"Teach Me to Walk in the Light"});
    englishHymns.push({ id: 176, number: "137", name:"Testimony"});
    englishHymns.push({ id: 177, number: "52", name:"The Day Dawn Is Breaking"});
    englishHymns.push({ id: 178, number: "283", name:"The Glorious Gospel Light Has Shone"});
    englishHymns.push({ id: 179, number: "32", name:"The Happy Day at Last Has Come"});
    englishHymns.push({ id: 180, number: "274", name:"The Iron Rod"});
    englishHymns.push({ id: 181, number: "305", name:"The Light Divine"});
    englishHymns.push({ id: 182, number: "89", name:"The Lord Is My Light"});
    englishHymns.push({ id: 183, number: "108", name:"The Lord Is My Shepherd"});
    englishHymns.push({ id: 184, number: "109", name:"The Lord My Pasture Will Prepare"});
    englishHymns.push({ id: 185, number: "1", name:"The Morning Breaks"});
    englishHymns.push({ id: 186, number: "2", name:"The Spirit of God"});
    englishHymns.push({ id: 187, number: "266", name:"The Time is Far Spent"});
    englishHymns.push({ id: 188, number: "194", name:"There Is a Green Hill Far Away"});
    englishHymns.push({ id: 189, number: "227", name:"There Is Sunshine in My Soul Today"});
    englishHymns.push({ id: 190, number: "122", name:"Though Deepening Trials"});
    englishHymns.push({ id: 191, number: "279", name:"Thy Holy Word"});
    englishHymns.push({ id: 192, number: "157", name:"Thy Spirit, Lord, Has Stirred Our Souls"});
    englishHymns.push({ id: 193, number: "176", name:"Tis Sweet to Sing the Matchless Love"});
    englishHymns.push({ id: 194, number: "177", name:"Tis Sweet to Sing the Matchless Love"});

    englishHymns.push({ id: 195, number: "229", name:"Today, While the Sun Shines"});
    englishHymns.push({ id: 196, number: "254", name:"True to the Faith"});
    englishHymns.push({ id: 197, number: "273", name:"Truth Reflects Upon Our Senses"});
    englishHymns.push({ id: 198, number: "291", name:"Turn Your Hearts"});
    englishHymns.push({ id: 199, number: "184", name:"Upon the Cross of Calvary"});
    englishHymns.push({ id: 200, number: "250", name:"We Are All Enlisted"});
    englishHymns.push({ id: 201, number: "225", name:"We Are Marching On to Glory"});
    englishHymns.push({ id: 202, number: "216", name:"We Are Sowing"});
    englishHymns.push({ id: 203, number: "23", name:"We Ever Pray for Thee"});
    englishHymns.push({ id: 204, number: "155", name:"We Have Partaken of Thy Love"});
    englishHymns.push({ id: 205, number: "247", name:"We Love Thy House, O God"});
    englishHymns.push({ id: 206, number: "151", name:"We Meet, Dear Lord"});
    englishHymns.push({ id: 207, number: "19", name:"We Thank Thee, O God, for a Prophet"});
    englishHymns.push({ id: 208, number: "47", name:"We Will Sing of Zion"});
    englishHymns.push({ id: 209, number: "57", name:"We’re Not Ashamed to Own Our Own"});
    englishHymns.push({ id: 210, number: "280", name:"Welcome, Welcome, Sabbath Morning"});
    englishHymns.push({ id: 211, number: "182", name:"We'll Sing All Hail to Jesus' Name"});
    englishHymns.push({ id: 212, number: "11", name:"What Was Witnessed in the Heavens?"});
    englishHymns.push({ id: 213, number: "128", name:"When Faith Endures"});
    englishHymns.push({ id: 214, number: "129", name:"Where Can I Turn for Peace?"});
    englishHymns.push({ id: 215, number: "174", name:"While of These Emblems We Partake"});
    englishHymns.push({ id: 216, number: "173", name:"While of These Emblems We Partake"});
    englishHymns.push({ id: 217, number: "260", name:"Who's on the Lord's Side?"});
    englishHymns.push({ id: 218, number: "171", name:"With Humble Heart"});
    englishHymns.push({ id: 219, number: "210", name:"With Wondering Awe"});
    englishHymns.push({ id: 220, number: "319", name:"Ye Elders of Israel"});
    englishHymns.push({ id: 221, number: "321", name:"Ye Who Are Called to Labor"});
    englishHymns.push({ id: 222, number: "228", name:"You Can Make the Pathway Bright"});
    englishHymns.push({ id: 223, number: "43", name:"Zion Stands with Hills Surrounded"});
}

function buildSpanishList() {
    spanishHymns.push({ id: 0, number: "32", name:"Baluarte firme es nuestro Dios"});
    spanishHymns.push({ id: 1, number: "16", name:"Un pobre forastero"});
    spanishHymns.push({ id: 2, number: "99", name:"Acompáñame"});
    spanishHymns.push({ id: 3, number: "98", name:"Conmigo quédate, Señor"});
    spanishHymns.push({ id: 4, number: "113", name:"Ya nos juntamos otra vez"});
    spanishHymns.push({ id: 5, number: "31", name:"Oh, creaciones del Señor"});
    spanishHymns.push({ id: 6, number: "33", name:"Honor, loor y gloria"});
    spanishHymns.push({ id: 7, number: "9", name:"Un ángel del Señor"});
    spanishHymns.push({ id: 8, number: "126", name:"Cantan santos ángeles"});
    spanishHymns.push({ id: 9, number: "180", name:"Al leer las Escrituras"});
    spanishHymns.push({ id: 10, number: "205", name:"Sirvamos unidas"});
    spanishHymns.push({ id: 11, number: "87", name:"Cual rocío, que destila"});
    spanishHymns.push({ id: 12, number: "125", name:"Jesús en pesebre"});
    spanishHymns.push({ id: 13, number: "28", name:"Himno de batalla de la República"});
    spanishHymns.push({ id: 14, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 15, number: "70", name:"Sé humilde"});
    spanishHymns.push({ id: 16, number: "23", name:"Bella Sión"});
    spanishHymns.push({ id: 17, number: "137", name:"Tú me has dado muchas bendiciones, Dios"});
    spanishHymns.push({ id: 18, number: "93", name:"A ti, Señor"});
    spanishHymns.push({ id: 19, number: "114", name:"Cristo, el Redentor, murió"});
    spanishHymns.push({ id: 20, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 21, number: "163", name:"¡Mirad! Reales huestes"});
    spanishHymns.push({ id: 22, number: "208", name:"Brillan rayos de clemencia"});
    spanishHymns.push({ id: 23, number: "161", name:"Llamados a servir"});
    spanishHymns.push({ id: 24, number: "167", name:"A vencer"});
    spanishHymns.push({ id: 25, number: "204", name:"Hijos de nuestro Padre"});
    spanishHymns.push({ id: 26, number: "155", name:"Haz el bien"});
    spanishHymns.push({ id: 27, number: "122", name:"Cristo ha resucitado"});
    spanishHymns.push({ id: 28, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 29, number: "181", name:"Cuando raya el nuevo dia"});
    spanishHymns.push({ id: 30, number: "11", name:"Dios manda a profetas"});
    spanishHymns.push({ id: 31, number: "60", name:"Venid a Cristo"});
    spanishHymns.push({ id: 32, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 33, number: "206", name:"Venid, los que tenéis de Dios el sacerdocio"});
    spanishHymns.push({ id: 34, number: "17", name:"¡Oh, está todo bien!"});
    spanishHymns.push({ id: 35, number: "61", name:"Venid a mi"});
    spanishHymns.push({ id: 36, number: "27", name:"Oh Rey de reyes, ven"});
    spanishHymns.push({ id: 37, number: "29", name:"Ven, oh día prometido"});

    spanishHymns.push({ id: 38, number: "64", name:"Venid, los que a Dios amáis"});
    spanishHymns.push({ id: 39, number: "26", name:"Hijos del Señor, venid"});
    spanishHymns.push({ id: 40, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 41, number: "46", name:"Elevemos nuestros himnos"});
    spanishHymns.push({ id: 42, number: "157", name:"Cuenta tus bendiciones"});
    spanishHymns.push({ id: 43, number: "139", name:"Ama el Pastor las ovejas"});
    spanishHymns.push({ id: 44, number: "47", name:"Caros niños, Dios os ama"});
    spanishHymns.push({ id: 45, number: "81", name:"¿Pensaste orar?"});
    spanishHymns.push({ id: 46, number: "154", name:"Haz tú lo justo"});
    spanishHymns.push({ id: 47, number: "188", name:"Quienes nos brindan su amor"});
    spanishHymns.push({ id: 48, number: "195", name:"Las familias pueden ser eternas"});
    spanishHymns.push({ id: 49, number: "134", name:"En la Judea, en tierra de Dios"});
    spanishHymns.push({ id: 50, number: "82", name:"Padre en los cielos"});
    spanishHymns.push({ id: 51, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 52, number: "132", name:"La primera Navidad"});
    spanishHymns.push({ id: 53, number: "136", name:"Todos los santos"});
    spanishHymns.push({ id: 54, number: "43", name:"Por la belleza terrenal"});
    spanishHymns.push({ id: 55, number: "19", name:"Por tus dones loor cantamos"});
    spanishHymns.push({ id: 56, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 57, number: "83", name:"Entonad sagrado son"});
    spanishHymns.push({ id: 58, number: "37", name:"Glorias cantad a Dios"});
    spanishHymns.push({ id: 59, number: "169", name:"Al mundo ve a predicar"});
    spanishHymns.push({ id: 60, number: "7", name:"Id, vosotros mensajeros"});
    spanishHymns.push({ id: 61, number: "89", name:"Para siempre Dios esté con vos"});
    spanishHymns.push({ id: 62, number: "13", name:"Bendice, Dios, a nuestro Profeta"});
    spanishHymns.push({ id: 63, number: "44", name:"El sublime Creador"});
    spanishHymns.push({ id: 64, number: "112", name:"El Padre tanto nos amó"});
    spanishHymns.push({ id: 65, number: "191", name:"Con maravillas obra Dios"});
    spanishHymns.push({ id: 66, number: "36", name:"Padre bendito, venimos a ti"});
    spanishHymns.push({ id: 67, number: "34", name:"Oh, Santo Dios, omnipotente ser"});
    spanishHymns.push({ id: 68, number: "55", name:"Dios da valor"});
    spanishHymns.push({ id: 69, number: "101", name:"Dios, escúchanos orar"});
    spanishHymns.push({ id: 70, number: "201", name:"Dios cuida a sus hijos"});
    spanishHymns.push({ id: 71, number: "52", name:"Guíame a ti"});
    spanishHymns.push({ id: 72, number: "21", name:"¡Salve, Sión! Es tu día ilustre"});
    spanishHymns.push({ id: 73, number: "130", name:"Escuchad el son triunfal"});
    spanishHymns.push({ id: 74, number: "171", name:"La luz de la verdad"});
    spanishHymns.push({ id: 75, number: "141", name:"¿En el mundo he hecho bien?"});
    spanishHymns.push({ id: 76, number: "117", name:"¡Murió! El Redentor murió"});
    spanishHymns.push({ id: 77, number: "121", name:"Himno de la Pascua de Resurrección"});
    spanishHymns.push({ id: 78, number: "172", name:"Cuando enseñe a Tus hijos"});

    spanishHymns.push({ id: 79, number: "4", name:"Bandera de Sión"});
    spanishHymns.push({ id: 80, number: "183", name:"Santos templos de Sión"});
    spanishHymns.push({ id: 81, number: "193", name:"El hogar es como el cielo"});
    spanishHymns.push({ id: 82, number: "168", name:"Juventud de Israel"});
    spanishHymns.push({ id: 83, number: "40", name:"Qué firmes cimientos"});
    spanishHymns.push({ id: 84, number: "66", name:"Cuán dulce la ley de Dios"});
    spanishHymns.push({ id: 85, number: "116", name:"Jesús, en la corte celestial"});
    spanishHymns.push({ id: 86, number: "41", name:"¡Grande eres tú!"});
    spanishHymns.push({ id: 87, number: "174", name:"Qué maravillosas tus obras"});
    spanishHymns.push({ id: 88, number: "196", name:"Soy un hijo de Dios"});
    spanishHymns.push({ id: 89, number: "72", name:"Creo en Cristo"});
    spanishHymns.push({ id: 90, number: "133", name:"Campanas de Navidad"});
    spanishHymns.push({ id: 91, number: "199", name:"Dios vive"});
    spanishHymns.push({ id: 92, number: "73", name:"Yo sé que vive mi Señor"});
    spanishHymns.push({ id: 93, number: "49", name:"Señor, te necesito"});
    spanishHymns.push({ id: 94, number: "118", name:"Asombro me da"});
    spanishHymns.push({ id: 95, number: "175", name:"A donde me mandes iré"});
    spanishHymns.push({ id: 96, number: "145", name:"La voz, ya, del eterno"});
    spanishHymns.push({ id: 97, number: "102", name:"Hoy con humildad te pido"});
    spanishHymns.push({ id: 98, number: "115", name:"Nos reunimos, Padre, hoy"});
    spanishHymns.push({ id: 99, number: "202", name:"En el pueblo de Sión"});
    spanishHymns.push({ id: 100, number: "110", name:"En memoria de tu muerte"});
    spanishHymns.push({ id: 101, number: "6", name:"Israel, Jesús os llama"});
    spanishHymns.push({ id: 102, number: "128", name:"A medianoche se oyó"});
    spanishHymns.push({ id: 103, number: "156", name:"Señor del cielo, Jehová"});
    spanishHymns.push({ id: 104, number: "105", name:"Jesús de Nazaret"});
    spanishHymns.push({ id: 105, number: "53", name:"¡Oh Jesús, mi gran amor!"});
    spanishHymns.push({ id: 106, number: "120", name:"Tan humilde al nacer"});
    spanishHymns.push({ id: 107, number: "51", name:"Guíame, oh Salvador"});
    spanishHymns.push({ id: 108, number: "76", name:"Tan sólo con pensar en ti"});
    spanishHymns.push({ id: 109, number: "14", name:"La oración del Profeta"});
    spanishHymns.push({ id: 110, number: "123", name:"¡Regocijad! Jesús nació"});
    spanishHymns.push({ id: 111, number: "197", name:"Siempre obedece los mandamientos"});
    spanishHymns.push({ id: 112, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 113, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 114, number: "48", name:"Divina Luz"});
    spanishHymns.push({ id: 115, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 116, number: "77", name:"Deja que el Espíritu te enseñe"});
    spanishHymns.push({ id: 117, number: "158", name:"Trabajemos hoy en la obra"});
    spanishHymns.push({ id: 118, number: "151", name:"Oh, hablemos con tiernos acentos"});
    spanishHymns.push({ id: 119, number: "25", name:"Jehová aparece en Su gloria"});

    spanishHymns.push({ id: 120, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 121, number: "192", name:"¿Por qué somos?"});
    spanishHymns.push({ id: 122, number: "100", name:"Dios, bendícenos"});
    spanishHymns.push({ id: 123, number: "138", name:"Señor, yo te seguiré"});
    spanishHymns.push({ id: 124, number: "90", name:"Padre, antes de partir"});
    spanishHymns.push({ id: 125, number: "97", name:"Ante ti, Señor, tu grey"});
    spanishHymns.push({ id: 126, number: "194", name:"Cuando hay amor"});
    spanishHymns.push({ id: 127, number: "203", name:"Amad a otros"});
    spanishHymns.push({ id: 128, number: "54", name:"Paz, cálmense"});
    spanishHymns.push({ id: 129, number: "71", name:"Más santidad dame"});
    spanishHymns.push({ id: 130, number: "74", name:"Vive mi Señor"});
    spanishHymns.push({ id: 131, number: "50", name:"Más cerca, Dios, de ti"});
    spanishHymns.push({ id: 132, number: "3", name:"Ya regocijemos"});
    spanishHymns.push({ id: 133, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 134, number: "94", name:"Ya termina el día"});
    spanishHymns.push({ id: 135, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 136, number: "104", name:"Oh Dios, Eterno Padre"});
    spanishHymns.push({ id: 137, number: "129", name:"Oh, pueblecito de Belén"});
    spanishHymns.push({ id: 138, number: "107", name:"Pedimos Tu Espíritu"});
    spanishHymns.push({ id: 139, number: "189", name:"Oh Padre, llénanos de amor"});
    spanishHymns.push({ id: 140, number: "187", name:"Oh mi Padre"});
    spanishHymns.push({ id: 141, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 142, number: "86", name:"Nuestro bondadoso Padre"});
    spanishHymns.push({ id: 143, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 144, number: "18", name:"Oh Sión, santuario de libertad"});
    spanishHymns.push({ id: 145, number: "177", name:"¿Qué es la verdad?"});

    spanishHymns.push({ id: 146, number: "124", name:"Venid, adoremos"});
    spanishHymns.push({ id: 147, number: "176", name:"Palabras de amor"});
    spanishHymns.push({ id: 148, number: "159", name:"Con valor marchemos"});
    spanishHymns.push({ id: 149, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 150, number: "57", name:"El amor del Salvador"});
    spanishHymns.push({ id: 151, number: "140", name:"A Dios el Padre y a Jesús"});
    spanishHymns.push({ id: 152, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 153, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 154, number: "15", name:"Loor al Profeta"});
    spanishHymns.push({ id: 155, number: "79", name:"La oración del alma es"});
    spanishHymns.push({ id: 156, number: "45", name:"Oración de gratitud"});
    spanishHymns.push({ id: 157, number: "38", name:"Santos, avanzad"});
    spanishHymns.push({ id: 158, number: "164", name:"Pon tu hombro a la lid"});
    spanishHymns.push({ id: 159, number: "5", name:"Oh Dios de Israel"});
    spanishHymns.push({ id: 160, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 161, number: "30", name:"A Cristo Rey Jesús"});
    spanishHymns.push({ id: 162, number: "108", name:"Mansos, reverentes hoy"});
    spanishHymns.push({ id: 163, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 164, number: "184", name:"Id, oh santos, a los templos"});
    spanishHymns.push({ id: 165, number: "58", name:"Roca de eternidad"});
    spanishHymns.push({ id: 166, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 167, number: "150", name:"Siembra gozo"});
    spanishHymns.push({ id: 168, number: "80", name:"Secreta oración"});
    spanishHymns.push({ id: 169, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 170, number: "127", name:"Noche de luz"});
    spanishHymns.push({ id: 171, number: "91", name:"Al partir cantemos"});
    spanishHymns.push({ id: 172, number: "96", name:"El ocaso viene ya"});
    spanishHymns.push({ id: 173, number: "78", name:"Oh dulce, grata oración"});
    spanishHymns.push({ id: 174, number: "84", name:"Dulce tu obra es, Señor"});
    spanishHymns.push({ id: 175, number: "198", name:"Hazme andar en la luz"});
    spanishHymns.push({ id: 176, number: "75", name:"Testimonio"});
    spanishHymns.push({ id: 177, number: "24", name:"El alba ya rompe"});
    spanishHymns.push({ id: 178, number: "185", name:"En los postreros días"});
    spanishHymns.push({ id: 179, number: "20", name:"Gozoso día llega ya"});
    spanishHymns.push({ id: 180, number: "179", name:"La barra de hierro"});
    spanishHymns.push({ id: 181, number: "200", name:"La luz de Dios"});
    spanishHymns.push({ id: 182, number: "42", name:"Jesús es mi luz"});
    spanishHymns.push({ id: 183, number: "56", name:"Jehová mi Pastor es"});
    spanishHymns.push({ id: 184, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 185, number: "1", name:"Ya rompe el alba"});
    spanishHymns.push({ id: 186, number: "2", name:"El Espíritu de Dios"});
    spanishHymns.push({ id: 187, number: "173", name:"El fin se acerca"});
    spanishHymns.push({ id: 188, number: "119", name:"En un lejano cerro fue"});
    spanishHymns.push({ id: 189, number: "146", name:"Tengo gozo en mi alma hoy"});
    spanishHymns.push({ id: 190, number: "63", name:"Aunque colmados de pesar"});
    spanishHymns.push({ id: 191, number: "165", name:"Tu palabra"});
    spanishHymns.push({ id: 192, number: "95", name:"El fuego del Espíritu"});
    spanishHymns.push({ id: 193, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 194, number: "106", name:"Cuán grato es cantar loor"});

    spanishHymns.push({ id: 195, number: "149", name:"Trabajad con fervor"});
    spanishHymns.push({ id: 196, number: "166", name:"Firmes creced en la fe"});
    spanishHymns.push({ id: 197, number: "178", name:"Nuestra mente se refleja"});
    spanishHymns.push({ id: 198, number: "186", name:"Volved vuestro corazón"});
    spanishHymns.push({ id: 199, number: "111", name:"En el Calvario, en la cruz"});
    spanishHymns.push({ id: 200, number: "162", name:"Somos los soldados"});
    spanishHymns.push({ id: 201, number: "144", name:"A la gloria marcharemos"});
    spanishHymns.push({ id: 202, number: "135", name:"Hoy sembramos la semilla"});
    spanishHymns.push({ id: 203, number: "12", name:"Pedimos hoy por ti"});
    spanishHymns.push({ id: 204, number: "92", name:"Hemos sentido tu amor"});
    spanishHymns.push({ id: 205, number: "160", name:"Tu casa amamos, Dios"});
    spanishHymns.push({ id: 206, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 207, number: "10", name:"Te damos, Señor, nuestras gracias"});
    spanishHymns.push({ id: 208, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 209, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 210, number: "182", name:"Bienvenido, día santo"});
    spanishHymns.push({ id: 211, number: "109", name:"Cantemos todos a Jesús"});
    spanishHymns.push({ id: 212, number: "8", name:"¿Qué es lo que vieron en las alturas?"});
    spanishHymns.push({ id: 213, number: "68", name:"La fe"});
    spanishHymns.push({ id: 214, number: "69", name:"¿Dónde hallo el solaz?"});
    spanishHymns.push({ id: 215, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 216, number: "103", name:"La Santa Cena"});
    spanishHymns.push({ id: 217, number: "170", name:"¿Quién sigue al Señor?"});
    spanishHymns.push({ id: 218, number: "∅", name:"Not-Available"});
    spanishHymns.push({ id: 219, number: "131", name:"Asombro dio a los magos"});
    spanishHymns.push({ id: 220, number: "209", name:"Oh elders de Israel"});
    spanishHymns.push({ id: 221, number: "207", name:"Oh vos que sois llamados"});
    spanishHymns.push({ id: 222, number: "148", name:"Si hay gozo en tu corazón"});
    spanishHymns.push({ id: 223, number: "22", name:"En las cumbres de los montes"});
}

function initialize() {
    buildEnglishList();
    buildSpanishList(); 
}

function sortList(list,type) {
   if (asc.list)
      asc.list = false;
   else 
      asc.list = true;
   if (type == "name")
      results.sort(function(a, b) {
          if (list[a].name == "Not-Available") {
              return 1;
          }
          if (list[b].name == "Not-Available") {
            return -1;
        }
          if (list[a].name < list[b].name)
             if (asc.list)
                return -1;
             else   
                return 1;
          else if (list[b].name < list[a].name)
             if (asc.list)
                return 1;
             else 
                return -1;
          return 0;
      });
      if (type == "number")
      results.sort(function(a, b) {
         if (asc.list)
         {
            if (list[a].number == "∅")
               return 10000;
            if (list[b].number == "∅")
               return -10000;
            return Number(list[a].number) - Number(list[b].number)
         }
         else
         {
            if (list[a].number == "∅")
               return 10000;
            if (list[b].number == "∅")
               return -10000;
            return Number(list[b].number) - Number(list[a].number)
         }
      });
      outputResults("results");
}

function outputResults(outPutID) {
    var numResults = results.length;
    var resultsTable = "<table><tr><th onclick=\"sortList(englishHymns,'number')\">#</th><th onclick=\"sortList(englishHymns,'name')\">English</th><th onclick=\"sortList(spanishHymns,'number')\">#</th><th onclick=\"sortList(spanishHymns,'name')\">Español</th></tr>";
    for (var i = 0; i < results.length; i++) {
        var id = results[i];
        resultsTable
            += "<tr><td>"
            + englishHymns[results[i]].number
            + "</td><td>"
            + englishHymns[results[i]].name
            + "</td><td>"
            + spanishHymns[results[i]].number
            + "</td><td> "
            + spanishHymns[results[i]].name
            + "</td></tr>";
    }
    resultsTable += "</table>";
    var outputString = "<p>" + numResults + " results" + resultsTable;
    document.getElementById("results").innerHTML = outputString; 

}

function main() {        
    var search = document.getElementById("search");
    if (search != null &&
        search != undefined &&
        search.value != "") {
        var searchValue = "";
        if (!isNaN(search.value))
           searchValue += "^";
        searchValue += search.value;
        var regex = new RegExp(searchValue.toLowerCase());
        searchLibrary(regex, englishHymns, spanishHymns);
        if (results.length > 0)
            outputResults("results");
    }
    else
        document.getElementById("results").innerHTML = ""; 
    
    if (results.length == 0)
    {
        document.getElementById("results").innerHTML = "";
    }
}