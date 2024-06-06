document.addEventListener("DOMContentLoaded", function() {
    const e = document.getElementById("chat-log"),
        t = document.getElementById("user-input"),
        n = document.getElementById("send-button"),
        a = document.getElementById("delete-button"),
        o = 100,
        s = "chatbotMessageLimit";

    function c() {
        const e = localStorage.getItem(s);
        return e ? JSON.parse(e) : { count: 0, date: new Date().toLocaleDateString() }
    }

    function d(e) {
        localStorage.setItem(s, JSON.stringify(e))
    }
    let l = c();
    const i = new Date().toLocaleDateString();
    l.date !== i && (l = { count: 0, date: i }, d(l)), a.addEventListener("click", function() {
        r()
    }), n.addEventListener("click", function() {
        m()
    }), t.addEventListener("keyup", function(e) {
        "Enter" === e.key && m()
    });

    function r() {
        e.innerHTML = ""
    }

    function u(t, n) {
        const a = document.createElement("div");
        a.innerHTML = t.replace(/\n/g, "<br>"), a.classList.add("chat-card"), n ? a.classList.add("user-message") : a.classList.add("bot-message"), e.appendChild(a)
    }

    function m() {
        const e = t.value.trim();
        if ("" === e) return;
        if (l.count >= o) return void u("Maaf, Anda telah mencapai limit pesan harian.", !1);
        if (p(e)) return void u("Gausah toxic, gausah kebanyakan gaya lu toxic mulu, gw banned tau rasa lu", !1);
        const n = e.split(/\s+/);
        for (const e of n) if (p(e)) return void u("Maaf, Anda tidak diizinkan mengirimkan pesan kasar.", !1);
        u(e, !0), l.count++, d(l), setTimeout(function() {
            const t = f(e);
            u(t, !1)
        }, 1e3), t.value = ""
    }

    function f(e) {
        const t = e.toLowerCase();
        if (t.includes("ada") || t.includes("ad") || t.includes("ada dong") || t.includes("ad dong") || t.includes("ada duong") || t.includes("yah ada dong")) return "Emang lu butuh bantuan apaan? sini kasih tau gw, tapi ntar aja pas gw udah di upgrade, soalnya gw nih masih belum pinter, masih harus banyak belajar awoakwowk :)";
        if (t.includes("berapa limit saya") || t.includes("berapa limit gw") || t.includes("woy berapa limit gw") || t.includes("sisa limit") || t.includes(".limit")) return `Sisa limit pesan harian kamu adalah ${o - l.count} pesan.`;
        if (t.includes("lah") || t.includes("lah napa nih") || t.includes("lah ini napa") || t.includes("lah napa lu?") || t.includes("lah lu napa?")) return "Gak semua perintah lu bisa gw jawab kocak, gw juga masih belum sempurna :v gak kayak dia yang udah sempurna :)";
        if (t.includes("hai") || t.includes("halo") || t.includes("hello") || t.includes("hi")) return "Halo!\n\nGw tuh Zenu AI, ada yang bisa gw bantu? kalau gak butuh bantuan gausah spam! ntar limit lu habis malah nangis :v";
        if (t.includes("oke") || t.includes("oukey") || t.includes("oughey") || t.includes("ngoghey") || t.includes("okey") || t.includes("ohh oke") || t.includes("ohh ok") || t.includes("ohh oughey") || t.includes("oh ok") || t.includes("yaudah") || t.includes("ywdh") || "ok" === t) {
            const e = ["yaudah, ada yang bisa gw bantu? kalau gak ada gausah spam! ntar limit lu abis malah nangess awokawok", "Siapp lah, ada yang bisa gw bantu? kalau gak ada gausah spam! ati ati limit lu abis wkwkw :v", "Siap boss!, ada yang bisa gw bantu? kalau gak ada gausah spam! kalo limit lu abis jan salahin gw soalnya lu yang ngespam", "Oke, gw ngerti, ada yang bisa gw bantu? kalau gak ada gausah spam! ntar limit lu abis jan nangis", "oughey, jangan spam yak ntar limit lu habis malah nangis awoakowwoo :v"];
            return e[Math.floor(Math.random() * e.length)]
        }
        if (t.includes("apa itu indonesia?") || t.includes("dimana negara indonesia?") || t.includes("apa itu indo") || t.includes("apasih indonesia itu") || t.includes("apa itu indonesia") || t.includes("siapa itu indonesia") || "apa itu indo" === t) {
            const e = ["jadi indonesia tuh sebuah negara kepualauan bray, nah indoensia tuh terletak di Asia Tenggara dan Oseania. \n\n𝗚𝗲𝗼𝗴𝗿𝗮𝗳𝗶: Indonesia terdiri dari lebih dari 17.000 pulau, dengan pulau-pulau utama termasuk Sumatra, Jawa, Kalimantan (bagian dari Borneo), Sulawesi, dan Papua. Negara ini berbatasan dengan Malaysia, Papua Nugini, dan Timor Leste.\n\n𝗣𝗼𝗽𝘂𝗹𝗮𝘀𝗶: Indonesia adalah negara dengan populasi terbesar keempat di dunia, dengan lebih dari 270 juta penduduk. Mayoritas penduduknya beragama Islam, menjadikannya negara dengan populasi Muslim terbesar di dunia.\n\n𝗜𝗯𝘂𝗸𝗼𝘁𝗮: Jakarta adalah ibukota dari negara indonesia, kota tersebut merupakan kote metropolitan yah bray!\n\nIndonesia dikenal dengan keindahan alamnya, termasuk pantai-pantai yang indah, gunung berapi yang aktif, dan hutan hujan tropis yang lebat, menjadikannya destinasi populer bagi wisatawan dari seluruh dunia. Udah ngerti kan bray? kalau belum yaudah belajar sendiri aja :v"];
            return e[Math.floor(Math.random() * e.length)]
        }
        if (t.includes("siapa yang buat lu?") || t.includes("oukey") || t.includes("siapa yang buat lu") || t.includes("siapa pencipta lu") || t.includes("siapa pencipta lu?") || t.includes("siapa yang punya lu?") || t.includes("owner lu saha?") || t.includes("siapa lu?") || t.includes("siapa lu") || t.includes("saha lu") || t.includes("saha lu?") || "pencipta lu?" === t) {
            const e = ["Gw tuh ZenuAI, gw dibuat sama Weply Studio dan gw bakalan bantuin semua masalah lu, tapi masalah nya yang masuk akal dong, jangan suruh gw buat nyuri piring atau benerin laptop juga :v"];
            return e[Math.floor(Math.random() * e.length)]
        }
        return "Maaf, Zenu AI sedang dalam tahap pengembangan, beberapa perintah belum dapat dijawab otomatis oleh AI!"
    }

    function p(e) {
        const t = ["anjing", "babi", "bangsat", "kontol", "ngentod", "memek", "asu", "chawnimale", "chibay", "cibay", "entod", "sange", "asw", "bangke", "anjay", "anj", "anjrit", "anjir", "bodoh", "goblok", "gblk", "tolol", "pepek", "toket", "tobrut", "kemem", "gblk", "ngtd", "jnck", "bngke", "mmk", "mmek", "memk", "kontl", "kntol", "kntl", "kintil", "bgst", "ppk", "anjr", "cnm", "cby", "ewe", "ew"], n = e.toLowerCase();
        for (const e of t) if (n.includes(e)) return !0;
        return !1
    }
});
