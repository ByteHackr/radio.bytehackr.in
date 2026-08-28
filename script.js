// ============================================================
// SONG DATA — two stations of radio evergreens.
// Add songs: grab the 11-char ID from any youtube.com/watch?v=XXXXXXXXXXX url.
// Prefer official label uploads (Saregama, Shemaroo Filmi Gaane, etc.)
// since they allow embedding. Dead/unembeddable tracks are skipped
// automatically at runtime.
// ============================================================

const STATIONS = {
  bengali: {
    label: "বাংলা • Bengali Retro",
    songs: [
      { id: "Q2aPJT1Ex0k", title: "Purano Sei Diner Katha", artist: "Hemanta Mukhopadhyay", year: "Rabindra Sangeet" },
      { id: "p9ZrKbwNDEg", title: "Ei Meghla Dine Ekla", artist: "Hemanta Mukhopadhyay", year: "Sesh Porjonto \u2022 1963" },
      { id: "t_jpDcwe9XE", title: "Ami Je Jalsaghare", artist: "Manna Dey", year: "Antony Firingee \u2022 1967" },
      { id: "Kc2CgBSMAHg", title: "Ektuku Chhonwa Lage", artist: "Kishore Kumar", year: "Rabindra Sangeet" },
      { id: "m3Yo1S0XYRg", title: "Adho Raate Jodi Ghum Bhenge", artist: "Anup Ghoshal", year: "Hirak Rajar Deshe \u2022 1980" },
      { id: "NZzY0-qx4Bk", title: "Mone Rabe Ki Na Rabe Amare", artist: "Hemanta Mukhopadhyay", year: "Rabindra Sangeet" },
      { id: "70N1LEe4RY4", title: "Na Jeyo Na Rajani Ekhano", artist: "Lata Mangeshkar & Kishore Kumar", year: "Shesh Uttar \u2022 1977" },
      { id: "Vvfg7PI6q_E", title: "Jay Re Jay Re Bela Je Boye", artist: "Asha Bhosle \u2022 R.D. Burman", year: "Bengali Film Song" },
      { id: "b6O3DcMK8YI", title: "", artist: "", year: "" },
      { id: "sf9a_UNd190", title: "", artist: "", year: "" },
      { id: "WY5qawMQLlM", title: "", artist: "", year: "" },
      { id: "pbtQuXJmsOU", title: "", artist: "", year: "" },
      { id: "XlaLrAtunt8", title: "", artist: "", year: "" },
      { id: "1-Sd661cxgA", title: "", artist: "", year: "" },
      { id: "YfkZwVi-Sy0", title: "", artist: "", year: "" },
      { id: "8y3VhNdtOrM", title: "", artist: "", year: "" },
      { id: "Y3fPT-S45Us", title: "", artist: "", year: "" },
      { id: "ujrM3VvXbq8", title: "", artist: "", year: "" },
      { id: "8ctRkkG0DhA", title: "", artist: "", year: "" },
      { id: "ncq_stqEm-E", title: "", artist: "", year: "" },
      { id: "AHd5c1D4KGw", title: "", artist: "", year: "" },
      { id: "uqRPtm0jSgM", title: "", artist: "", year: "" },
      { id: "W1sCG1pohUM", title: "", artist: "", year: "" },
      { id: "_wMrgq8XLig", title: "", artist: "", year: "" },
      { id: "-BPHzhfLeKk", title: "", artist: "", year: "" },
      { id: "uKW3hzB0mCo", title: "", artist: "", year: "" },
      { id: "Zf3Ibe1hz6k", title: "", artist: "", year: "" },
      { id: "XFuXzGmGb7M", title: "", artist: "", year: "" },
      { id: "a-DQxQYFVEE", title: "", artist: "", year: "" },
      { id: "QO2PEQGEAPY", title: "", artist: "", year: "" },
      { id: "uAEEKG8mmsU", title: "", artist: "", year: "" },
      { id: "R6j8-MIXc98", title: "", artist: "", year: "" },
      { id: "z9Int8aCxDs", title: "", artist: "", year: "" },
      { id: "cNLOJSbbu-I", title: "", artist: "", year: "" },
      { id: "2jKTf_hmXOo", title: "", artist: "", year: "" },
      { id: "OFCZA8HdH4M", title: "", artist: "", year: "" },
      { id: "07BadGcIEe4", title: "", artist: "", year: "" },
      { id: "2KbsY4qmG28", title: "", artist: "", year: "" },
      { id: "D9sBQT1Etvg", title: "", artist: "", year: "" },
      { id: "Q0w1WME_8WU", title: "", artist: "", year: "" },
      { id: "BCW5sn9vvtk", title: "", artist: "", year: "" },
      { id: "YmcRLk_Z49o", title: "", artist: "", year: "" },
      { id: "87jtbauufgc", title: "", artist: "", year: "" },
      { id: "l7CCr4nsXaY", title: "", artist: "", year: "" },
      { id: "cEBFKxVm1aM", title: "", artist: "", year: "" },
      { id: "55148ftuI6o", title: "", artist: "", year: "" },
    
      { id: "I_AJl16biUU", title: "", artist: "", year: "" },
      { id: "GTMYAl1fDHQ", title: "", artist: "", year: "" },
      { id: "_Y32Do77sl4", title: "", artist: "", year: "" },
      { id: "9ZIEJb-jfd0", title: "", artist: "", year: "" },
      { id: "p3R1SC_GFuU", title: "", artist: "", year: "" },
      { id: "So2wcxI-S_4", title: "", artist: "", year: "" },
      { id: "fsAFLA0miYI", title: "", artist: "", year: "" },
      { id: "BMgkKCGBBBQ", title: "", artist: "", year: "" },
      { id: "A5BCVJ_Km7w", title: "", artist: "", year: "" },
      { id: "NP_OnVzXNTY", title: "", artist: "", year: "" },
      { id: "kV1rSmObOCs", title: "", artist: "", year: "" },
      { id: "e00-YXycys4", title: "", artist: "", year: "" },
      { id: "r9T6e4gEw3Y", title: "", artist: "", year: "" },
      { id: "IvAzLpQvFgQ", title: "", artist: "", year: "" },
      { id: "O5jI6PN1ZIU", title: "", artist: "", year: "" },
      { id: "6FCrYJyNyL4", title: "", artist: "", year: "" },
      { id: "ShPa-RAE1qM", title: "", artist: "", year: "" },
      { id: "_vbMQwkJRGs", title: "", artist: "", year: "" },
      { id: "0AJT9Mzy9qM", title: "", artist: "", year: "" },
      { id: "XLzJa5etjVg", title: "", artist: "", year: "" },
      { id: "mOWMfdR8Fu4", title: "", artist: "", year: "" },
      { id: "YuzT09cq9ZE", title: "", artist: "", year: "" },
      { id: "V5jvLpMY9cw", title: "", artist: "", year: "" },
      { id: "Lg2Keo-KIbU", title: "", artist: "", year: "" },
      { id: "7TdWUJowpV0", title: "", artist: "", year: "" },
      { id: "0C5UTypTl20", title: "", artist: "", year: "" },
      { id: "A6fAdUZAGIE", title: "", artist: "", year: "" },]
  },
  hindi: {
    label: "हिन्दी • Hindi Retro",
    songs: [
      { id: "seFeZOgyFsc", title: "Chura Liya Hai Tumne Jo Dil Ko", artist: "Asha Bhosle & Mohammed Rafi", year: "Yaadon Ki Baaraat \u2022 1973" },
      { id: "qWRw17tQ8UA", title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", year: "Mere Jeevan Saathi \u2022 1972" },
      { id: "gLKBwutnPwA", title: "Pukarta Chala Hoon Main", artist: "Mohammed Rafi", year: "Mere Sanam \u2022 1965" },
      { id: "07dfqQ0cvl8", title: "Hai Apna Dil To Awara", artist: "Hemant Kumar", year: "Solva Saal \u2022 1958" },
      { id: "w0AkZQUokog", title: "Kahin Door Jab Din Dhal Jaye", artist: "Mukesh", year: "Anand \u2022 1971" },
      { id: "br6C4U3Dyfo", title: "Lag Ja Gale", artist: "Lata Mangeshkar", year: "Woh Kaun Thi \u2022 1964" },
      { id: "Z3WLiQqGu1Y", title: "Yeh Raaten Yeh Mausam", artist: "Kishore Kumar & Asha Bhosle", year: "Dilli Ka Thug \u2022 1958" },
      { id: "Df-JCRpAlFM", title: "Likha Hai Teri Aankhon Mein", artist: "Kishore Kumar & Lata Mangeshkar", year: "Teen Devian \u2022 1965" },
      { id: "6C7R_CUJgHQ", title: "Rimjhim Gire Sawan", artist: "Lata Mangeshkar", year: "Manzil \u2022 1979" },
      { id: "q9aMSJGAkeY", title: "Yeh Reshmi Zulfein", artist: "Mohammed Rafi", year: "Do Raaste \u2022 1969" },
      { id: "VPdgFPHc78w", title: "Suhana Safar Aur Yeh Mausam Haseen", artist: "Mukesh", year: "Madhumati \u2022 1958" },
      { id: "fy7P_Uu3alA", title: "Mera Joota Hai Japani", artist: "Mukesh", year: "Shree 420 \u2022 1955" },
      { id: "-IBL3GMzvuw", title: "Aaj Kal Tere Mere Pyar Ke Charche", artist: "Mohammed Rafi & Asha Bhosle", year: "Brahmachari \u2022 1968" },
      { id: "eM8Mjuq4MwQ", title: "", artist: "", year: "" },
      { id: "q4R2xRnN89A", title: "", artist: "", year: "" },
      { id: "hw_HpTI_Wkw", title: "", artist: "", year: "" },
      { id: "-bNwqXvMuB8", title: "", artist: "", year: "" },
      { id: "7dO_MS9tZ5E", title: "", artist: "", year: "" },
      { id: "lZ2PhyBF3GQ", title: "", artist: "", year: "" },
      { id: "zWPsjhBaRb0", title: "", artist: "", year: "" },
      { id: "HPsxxBhv9kc", title: "", artist: "", year: "" },
      { id: "kzTWRX9Dhrg", title: "", artist: "", year: "" },
      { id: "5txaRiJfQXM", title: "", artist: "", year: "" },
      { id: "u6bk53x2Kno", title: "", artist: "", year: "" },
      { id: "bC7RmYYMqTw", title: "", artist: "", year: "" },
      { id: "bWNkpJdkOj4", title: "", artist: "", year: "" },
      { id: "cNV5hLSa9H8", title: "", artist: "", year: "" },
      { id: "dGZb1kv5zW0", title: "", artist: "", year: "" },
    ]
  },
  relax: {
    label: "💖 Relax Hits",
    songs: [
      { id: "5IY4BNj0-10", title: "Zara Sa", artist: "KK", year: "Jannat \u2022 2008" },
      { id: "fKIJhHUW-G0", title: "Dil Ibaadat", artist: "KK", year: "Tum Mile \u2022 2009" },
      { id: "lrAM_H7v8wM", title: "Kya Mujhe Pyar Hai", artist: "KK", year: "Woh Lamhe \u2022 2006" },
      { id: "284Ov7ysmfA", title: "Channa Mereya", artist: "Arijit Singh", year: "Ae Dil Hai Mushkil \u2022 2016" },
      { id: "WWZxDA81JFk", title: "Tum Hi Ho", artist: "Arijit Singh", year: "Aashiqui 2 \u2022 2013" },
      { id: "HQ4Ox7mLqds", title: "Muskurane", artist: "Arijit Singh", year: "CityLights \u2022 2014" },
      { id: "AgX2II9si7w", title: "Tujhe Kitna Chahne Lage", artist: "Arijit Singh", year: "Kabir Singh \u2022 2019" },
      { id: "xRb8hxwN5zc", title: "Agar Tum Saath Ho", artist: "Arijit Singh & Alka Yagnik", year: "Tamasha \u2022 2015" },
      { id: "zlt38OOqwDc", title: "Raabta", artist: "Arijit Singh", year: "Agent Vinod \u2022 2012" },
      { id: "itdTtu9heSU", title: "Chaddh De", artist: "Master Saleem \u2022 Clinton Cerejo", year: "Coke Studio @ MTV S2" },
      { id: "gxet54MhNQI", title: "Re Mann", artist: "Shreya Ghoshal \u2022 Swanand Kirkire", year: "Coke Studio Bharat" },
      { id: "aB8Wa_SkX1M", title: "Darale Duaarey", artist: "Nandita \u2022 Ishaan", year: "Coke Studio Bangla S2" },
      { id: "UghMf59vDJM", title: "Moha Jadu", artist: "Habib Wahid \u2022 Mehrnigori Rustam", year: "Coke Studio Bangla S3" },
      { id: "tehuE1VuPAs", title: "Room Jhoom", artist: "Hande \u2022 Mustafa \u2022 Mahtim \u2022 Nusrat", year: "Coke Studio Bangla S4" },
      { id: "OUhrP5XtU_4", title: "", artist: "", year: "" },
      { id: "KayWQCbGirU", title: "", artist: "", year: "" },
      { id: "ZiJgkQLunUM", title: "", artist: "", year: "" },
      { id: "EkZGKGolYlI", title: "", artist: "", year: "" },
      { id: "Lrh3kJoGYX0", title: "", artist: "", year: "" },
      { id: "ojHWxuQ0YWs", title: "", artist: "", year: "" },
      { id: "rbP95NoHhvU", title: "", artist: "", year: "" },
      { id: "-7shFTSqU1g", title: "", artist: "", year: "" },
      { id: "sLva5MIY7ZY", title: "", artist: "", year: "" },
      { id: "wzOWggEF0No", title: "", artist: "", year: "" },
      { id: "_FWiJf2uuvM", title: "", artist: "", year: "" },
      { id: "dy4AykZGIWA", title: "", artist: "", year: "" },
      { id: "IWjbBSMsQJg", title: "", artist: "", year: "" },
      { id: "zV7pfxeh5dY", title: "", artist: "", year: "" },
      { id: "MgGMoAHcM18", title: "", artist: "", year: "" },
      { id: "u4m-EPPXqM0", title: "", artist: "", year: "" },
      { id: "2xkx2QNVMM4", title: "", artist: "", year: "" },
      { id: "A1wZUXY--4U", title: "", artist: "", year: "" },
      { id: "9V2ys5u3a5Q", title: "", artist: "", year: "" },
      { id: "YYFxN8j0ixA", title: "", artist: "", year: "" },
      { id: "1kF1gw8Ewjk", title: "", artist: "", year: "" },
      { id: "9ZPY9ZopT0k", title: "", artist: "", year: "" },
      { id: "0XynbuGx4FI", title: "", artist: "", year: "" },
      { id: "V9jCjA5BCV4", title: "", artist: "", year: "" },
      { id: "1nrKhy0z6JI", title: "", artist: "", year: "" },
      { id: "_xQuobKhasg", title: "", artist: "", year: "" },
      { id: "hRInJW8ubYw", title: "", artist: "", year: "" },
      { id: "-R9jQxuZbJk", title: "", artist: "", year: "" },
      { id: "DybAYiAEl3c", title: "", artist: "", year: "" },
      { id: "MNliIHZfnA0", title: "", artist: "", year: "" },
      { id: "7SRoR4sLQAM", title: "", artist: "", year: "" },
      { id: "vTBbi3qIC0s", title: "", artist: "", year: "" },
      { id: "I94fhjQ-U30", title: "", artist: "", year: "" },
      { id: "qYUVDThXXiw", title: "", artist: "", year: "" },
      { id: "d_QDYIJSkB8", title: "", artist: "", year: "" },
      { id: "ZaURV4XxdPI", title: "", artist: "", year: "" },
      { id: "pdZ7x_aaIqs", title: "", artist: "", year: "" },
      { id: "quEm4_4c-Jg", title: "", artist: "", year: "" },
      { id: "AsieVqOTRs0", title: "", artist: "", year: "" },
      { id: "6IdzEmpH4dk", title: "", artist: "", year: "" },
      { id: "3E1NLVzDZ_Y", title: "", artist: "", year: "" },
      { id: "bdS6OoH1W2A", title: "", artist: "", year: "" },
      { id: "khlR5jM2ZrI", title: "", artist: "", year: "" },
      { id: "8PEqEh1lnNE", title: "", artist: "", year: "" },
      { id: "Xz0fMH6ClKY", title: "", artist: "", year: "" },
      { id: "d9r4XZBhKk8", title: "", artist: "", year: "" },
      { id: "cH_9ZwTVnuI", title: "", artist: "", year: "" },
      { id: "D0U7kd6yNaA", title: "", artist: "", year: "" },
      { id: "7EbxUL9bar4", title: "", artist: "", year: "" },
      { id: "DRwVEqejzqE", title: "", artist: "", year: "" },
      { id: "Euv8CPsZcTU", title: "", artist: "", year: "" },
      { id: "AvNyfTsiqBg", title: "", artist: "", year: "" },
      { id: "ar_m3IbjS4c", title: "", artist: "", year: "" },
      { id: "QMSIPuKEvps", title: "", artist: "", year: "" },
      { id: "WF75r0CuQSA", title: "", artist: "", year: "" },
      { id: "8VgEQ1CqYTw", title: "", artist: "", year: "" },
      { id: "m_ydflTttPk", title: "", artist: "", year: "" },
      { id: "1njJoSMLDrg", title: "", artist: "", year: "" },
      { id: "9mNSqnYDpOk", title: "", artist: "", year: "" },
      { id: "NayBRkm8YOg", title: "", artist: "", year: "" },
      { id: "MOFPRs3LFrU", title: "", artist: "", year: "" },
      { id: "kuEj094GWQs", title: "", artist: "", year: "" },
      { id: "z7q1bwWDSHU", title: "", artist: "", year: "" },
      { id: "atXiJ93lM2k", title: "", artist: "", year: "" },
      { id: "GLR3VyQlO8E", title: "", artist: "", year: "" },
      { id: "YmNNudulXlc", title: "", artist: "", year: "" },
      { id: "kp00LrbcRd4", title: "", artist: "", year: "" },
      { id: "o5AbH0bVovs", title: "", artist: "", year: "" },
      { id: "szCjTxg2K1Y", title: "", artist: "", year: "" },
      { id: "R0D7rRmbasg", title: "", artist: "", year: "" },
      { id: "wYqsktWxWBw", title: "", artist: "", year: "" },
      { id: "p4664nVBMxg", title: "", artist: "", year: "" },
      { id: "RC54XdPtQTo", title: "", artist: "", year: "" },
      { id: "3BsFE3WD0kA", title: "", artist: "", year: "" },
      { id: "mFjwkgfLF7I", title: "", artist: "", year: "" },
      { id: "NIUQnGjOIL8", title: "", artist: "", year: "" },
      { id: "uovUU6FiI4E", title: "", artist: "", year: "" },
      { id: "YW25SKnlEi0", title: "", artist: "", year: "" },
      { id: "IE4gZ9smLkk", title: "", artist: "", year: "" },
      { id: "q9a3HjLeSJM", title: "", artist: "", year: "" },
      { id: "W_fU0LNOR40", title: "", artist: "", year: "" },
      { id: "Eun-ukNlQi8", title: "", artist: "", year: "" },
      { id: "Lf54R6xIgKg", title: "", artist: "", year: "" },
      { id: "MzhsLzOTZNA", title: "", artist: "", year: "" },
      { id: "xpuQCX_Jocg", title: "", artist: "", year: "" },
      { id: "1EOv0KOGjLQ", title: "", artist: "", year: "" },
      { id: "ELZYwzTPUw4", title: "", artist: "", year: "" },
      { id: "8m1E-RF3Yz4", title: "", artist: "", year: "" },
      { id: "yqtGt2IjyKg", title: "", artist: "", year: "" },
      { id: "tlZO7G-D0mg", title: "", artist: "", year: "" },
      { id: "lKtUvzlD9L8", title: "", artist: "", year: "" },
      { id: "k9vAlmEnoF4", title: "", artist: "", year: "" },
      { id: "TWHdwAWhcfs", title: "", artist: "", year: "" },
      { id: "DSMneXn238o", title: "", artist: "", year: "" },
      { id: "U8_MuWSnkCg", title: "", artist: "", year: "" },
      { id: "c6cHxi2eLQ4", title: "", artist: "", year: "" },
      { id: "rvnyVvSRAxs", title: "", artist: "", year: "" },
      { id: "L4oNkUQgsVg", title: "", artist: "", year: "" },
      { id: "eWgKYsPl_k8", title: "", artist: "", year: "" },
      { id: "WLZkB9O8XNA", title: "", artist: "", year: "" },
    ]
  },
  durga: {
    label: "🌺 Durga",
    songs: [
      { id: "YQyo8QeoYhc", title: "Mahalaya \u2014 Mahishasura Mardini (Full)", artist: "Birendra Krishna Bhadra", year: "Mahalaya \u2022 All India Radio" },
      { id: "KXH6rKzw8nU", title: "Yao Yao Giri Anite Gouri", artist: "Agomoni Gaan", year: "Durga Puja" },
      { id: "MIzTOQeRjBM", title: "Kobe Jabe Bolo Giriraj", artist: "Agomoni Gaan", year: "Durga Puja" },
      { id: "B9K376MDzPI", title: "Aaj Agamonir Abahane", artist: "Agomoni Gaan", year: "Durga Puja" },
      { id: "mindKh3bLeA", title: "Alor Benu", artist: "Agomoni Gaan", year: "Mahalaya Special" },
      { id: "r9umoXMcJ-g", title: "", artist: "", year: "" },
      { id: "R-sO2Sw8sJs", title: "", artist: "", year: "" },
      { id: "w_iBYrDpMIE", title: "", artist: "", year: "" },
      { id: "jBdOHdj97m8", title: "", artist: "", year: "" },
      { id: "zDlfHnbef0Y", title: "", artist: "", year: "" },
      { id: "kSU5g7H2uas", title: "", artist: "", year: "" },
      { id: "ZhheEmL1W_Q", title: "", artist: "", year: "" },
      { id: "inf7DLu7zSQ", title: "", artist: "", year: "" },
      { id: "YDAPRFwvdTI", title: "", artist: "", year: "" },
      { id: "iHnfKhGfO0M", title: "", artist: "", year: "" },
      { id: "FD7ayXk-IRw", title: "", artist: "", year: "" },
      { id: "ohBq_wA_NC4", title: "", artist: "", year: "" },
      { id: "KW4JXMUWzyw", title: "", artist: "", year: "" },
      { id: "g6xUovXuwPY", title: "", artist: "", year: "" },
      { id: "E2zfQEo7Q_M", title: "", artist: "", year: "" },
      { id: "OjopH641Q3Q", title: "", artist: "", year: "" },
      { id: "id5_3dKvEBg", title: "", artist: "", year: "" },
      { id: "yzEbF55ywtM", title: "", artist: "", year: "" },
      { id: "2U416kTo0as", title: "", artist: "", year: "" },
      { id: "sPuZ0Q3KDWo", title: "", artist: "", year: "" },
      { id: "3E_qefwPA0E", title: "", artist: "", year: "" },
      { id: "hbXuXt7gkFY", title: "", artist: "", year: "" },
      { id: "1OQ0cyM3QKw", title: "", artist: "", year: "" },
      { id: "60tSbJWJCr0", title: "", artist: "", year: "" },
      { id: "80OX5xMvJP4", title: "", artist: "", year: "" },
      { id: "tXXwsHeS_T0", title: "", artist: "", year: "" },
      { id: "_ADd39C-88w", title: "", artist: "", year: "" },
      { id: "ZQlzj4wehCc", title: "", artist: "", year: "" },
      { id: "S1Y3ohrjrsE", title: "", artist: "", year: "" },
      { id: "ayZUGy7816g", title: "", artist: "", year: "" },
      { id: "9OkzYV4R9nc", title: "", artist: "", year: "" },
      { id: "M8k5R4ScRAo", title: "", artist: "", year: "" },
      { id: "MsqpjM09MrY", title: "", artist: "", year: "" },
    ]
  },
  gita: {
    label: "📖 Gita",
    songs: [
      { id: "28sptQICKCk", title: "", artist: "", year: "" },
      { id: "1qhbkOfs280", title: "", artist: "", year: "" },
      { id: "_9Gsy6c-UIA", title: "", artist: "", year: "" },
      { id: "mBjAzqoKJoI", title: "", artist: "", year: "" },
      { id: "g4oEUP4Ztas", title: "", artist: "", year: "" },
      { id: "MogyeLoe9gs", title: "", artist: "", year: "" },
      { id: "E-TECeu7nDw", title: "", artist: "", year: "" },
      { id: "e9cJwVIpPVc", title: "", artist: "", year: "" },
      { id: "4bABPNlueAY", title: "", artist: "", year: "" },
      { id: "MJlzBHbxDSk", title: "", artist: "", year: "" },
      { id: "zsQVLsDvyL0", title: "", artist: "", year: "" },
      { id: "a0FGJEZqdHY", title: "", artist: "", year: "" },
      { id: "eHj0JiiuRaQ", title: "", artist: "", year: "" },
      { id: "mm7QSrjoM5g", title: "", artist: "", year: "" },
      { id: "XqHvlUQ8BG8", title: "", artist: "", year: "" },
      { id: "xU9M2F0iVno", title: "", artist: "", year: "" },
      { id: "b5h2STZX7Ro", title: "", artist: "", year: "" },
      { id: "sosTze3oJMw", title: "", artist: "", year: "" },
      { id: "ag54cHCfJGU", title: "", artist: "", year: "" },
      { id: "tnpjCJnr_Z4", title: "", artist: "", year: "" },
      { id: "9nhsSmDp6Ho", title: "", artist: "", year: "" },
      { id: "YXdI1TQiA98", title: "", artist: "", year: "" },
      { id: "wkIvW86TwYE", title: "", artist: "", year: "" },
      { id: "b21M5L7aIns", title: "", artist: "", year: "" },
      { id: "5EoxcMYxFdA", title: "", artist: "", year: "" },
      { id: "Jq2D6kO_JqE", title: "", artist: "", year: "" },
      { id: "j9ZGb8rJ13c", title: "", artist: "", year: "" },
      { id: "G4T00cYjcQk", title: "", artist: "", year: "" },
      { id: "igGJ2Jyy0z8", title: "", artist: "", year: "" },
      { id: "B5xoI-TJd0A", title: "", artist: "", year: "" },
      { id: "ypxjmZ__OFw", title: "", artist: "", year: "" },
      { id: "P7GsL4uWXxg", title: "", artist: "", year: "" },
      { id: "shMBbwBYj44", title: "", artist: "", year: "" },
      { id: "xFIfynMFtFg", title: "", artist: "", year: "" },
      { id: "77f3w0wBPo8", title: "", artist: "", year: "" },
      { id: "M7_pcpqdO-k", title: "", artist: "", year: "" },
      { id: "sM2A9pLePqc", title: "", artist: "", year: "" },
      { id: "KCgA_Xx960s", title: "", artist: "", year: "" },
      { id: "gHdQcYLHp7E", title: "", artist: "", year: "" },
      { id: "FvDw-CE2lcI", title: "", artist: "", year: "" },
      { id: "l2MU7wveU9c", title: "", artist: "", year: "" },
      { id: "AccoHVPVv8U", title: "", artist: "", year: "" },
      { id: "E5V0wpc027o", title: "", artist: "", year: "" },
      { id: "Eutd8avdBgk", title: "", artist: "", year: "" },
      { id: "ACdZ8Md9OTY", title: "", artist: "", year: "" },
      { id: "Z-oBT2LIIBc", title: "", artist: "", year: "" },
      { id: "sNGWMw_Q0II", title: "", artist: "", year: "" },
      { id: "sfexQ2NR-OM", title: "", artist: "", year: "" },
      { id: "bKHx-3rZjWM", title: "", artist: "", year: "" },
      { id: "cMoXNHh0d8k", title: "", artist: "", year: "" },
      { id: "hlRilNZ-aYE", title: "", artist: "", year: "" },
      { id: "Ogcw1mn-NKQ", title: "", artist: "", year: "" },
      { id: "Q3WJ5w2ZP0E", title: "", artist: "", year: "" },
      { id: "8sKV6RfMNZU", title: "", artist: "", year: "" },
      { id: "4f5kygsQXcc", title: "", artist: "", year: "" },
      { id: "Eygk_Sc0MkU", title: "", artist: "", year: "" },
      { id: "en9bFilpueo", title: "", artist: "", year: "" },
      { id: "Z3Y4we33eSE", title: "", artist: "", year: "" },
      { id: "DOnAu7qT7w8", title: "", artist: "", year: "" },
      { id: "lUqCcV9I9m8", title: "", artist: "", year: "" },
      { id: "s2bbePyJ2_g", title: "", artist: "", year: "" },
      { id: "htc6pnNWmYw", title: "", artist: "", year: "" },
      { id: "2zqWdsNtb9k", title: "", artist: "", year: "" },
      { id: "DZRt6lWb2EQ", title: "", artist: "", year: "" },
      { id: "fo4vmnrB1TI", title: "", artist: "", year: "" },
      { id: "inMp8LNm0uI", title: "", artist: "", year: "" },
      { id: "VZT7VGwoDHo", title: "", artist: "", year: "" },
      { id: "QDmpYtXRXAE", title: "", artist: "", year: "" },
      { id: "9zlc-MEuI0g", title: "", artist: "", year: "" },
      { id: "iEBu-dJ2yRg", title: "", artist: "", year: "" },
      { id: "rZKDP-7gSbI", title: "", artist: "", year: "" },
      { id: "dl-7R9TXvDI", title: "", artist: "", year: "" },
      { id: "EnMxHFzYFs8", title: "", artist: "", year: "" },
      { id: "3t0oyCk8YPQ", title: "", artist: "", year: "" },
      { id: "Ud8TnZBp8Fg", title: "", artist: "", year: "" },
      { id: "Rxb5qXA3qI8", title: "", artist: "", year: "" },
      { id: "spgBIpCUJtg", title: "", artist: "", year: "" },
      { id: "EgWkbzSzqsQ", title: "", artist: "", year: "" },
      { id: "dJOd_cFABps", title: "", artist: "", year: "" },
      { id: "1IXXFNFFxyE", title: "", artist: "", year: "" },
      { id: "X-JUoPp4xjM", title: "", artist: "", year: "" },
      { id: "Jvl4xaGcsO0", title: "", artist: "", year: "" },
      { id: "wO9O3bltHFc", title: "", artist: "", year: "" },
      { id: "7Yx-pMghW4c", title: "", artist: "", year: "" },
      { id: "7RXpwXxI46s", title: "", artist: "", year: "" },
      { id: "WxnZjtdoP3k", title: "", artist: "", year: "" },
      { id: "6dJlbUS0Z74", title: "", artist: "", year: "" },
      { id: "eVop80kD7Lc", title: "", artist: "", year: "" },
      { id: "O9vi8jOlahU", title: "", artist: "", year: "" },
      { id: "-oEZPtR0ayI", title: "", artist: "", year: "" },
      { id: "bFxCoboSZWY", title: "", artist: "", year: "" },
      { id: "vnUyJ6GOHwk", title: "", artist: "", year: "" },
      { id: "hc-33OrJmtI", title: "", artist: "", year: "" },
      { id: "wbqdWP9XlI8", title: "", artist: "", year: "" },
      { id: "ZYnScDdtOaw", title: "", artist: "", year: "" },
      { id: "WyJ-lyH3fXE", title: "", artist: "", year: "" },
      { id: "rTh7zOg_iuQ", title: "", artist: "", year: "" },
      { id: "juCRT87f9Vc", title: "", artist: "", year: "" },
      { id: "gnXsDyBWylQ", title: "", artist: "", year: "" },
      { id: "IhuAsUYS1x0", title: "", artist: "", year: "" },
    ]
  },  hanuman: {
    label: "🚩 Hanuman",
    songs: [
      { id: "AETFvQonfV8", title: "Shree Hanuman Chalisa", artist: "Hariharan", year: "Gulshan Kumar \u2022 T-Series" },
      { id: "sX2bYV6nSy4", title: "Hanuman Chalisa Full", artist: "Shekhar Ravjiani", year: "Zee Music Company" },
      { id: "IYur26JAAqo", title: "Hanuman Chalisa", artist: "M.S. Subbulakshmi", year: "Saregama Carnatic" },
      { id: "gLZO6O9v-IY", title: "Shree Hanuman Chalisa", artist: "Salim Sulaiman & Shreya Ghoshal", year: "Hanuman Jayanti Special" },
      { id: "0DvM8l55GVw", title: "Bajrang Baan", artist: "Lata Mangeshkar", year: "T-Series Bhakti Sagar" },
      { id: "zvbmVdD09PI", title: "Bajrang Baan \u2014 Full Paath", artist: "Shankar Mahadevan", year: "With Lyrics" },
      { id: "3ILN6vn47vc", title: "Hanuman Ashtak \u2014 Sankat Mochan Naam Tiharo", artist: "Shankar Mahadevan", year: "With Lyrics" },
    ]
  },
  shiva: {
    label: "🔱 Shiva",
    songs: [
      { id: "S980-z1qx3g", title: "Shiv Tandav Stotram", artist: "Shankar Mahadevan", year: "Times Music Spiritual" },
      { id: "T0ur0HL6d5M", title: "Shiv Tandav Stotram \u2014 Har Har Shiv Shankar", artist: "Sachet Tandon & Parampara Tandon", year: "T-Series" },
      { id: "2MZ2xZCX1BY", title: "Shiva Tandava Stotram \u2014 All 18 Slokas", artist: "Kuldeep M Pai", year: "Vande Guru Paramparaam" },
      { id: "OV9LXGOXjgs", title: "Maha Mrityunjaya Mantra \u2014 108 Times", artist: "Sounds of Isha", year: "With Lyrics & Meaning" },
      { id: "adyjwFgXRNY", title: "Mahamrityunjay Mantra \u2014 108 Times", artist: "Shankar Sahney", year: "T-Series Bhakti Sagar" },
      { id: "L-y1sr1qUlE", title: "Mahamrityunjay Mantra \u2014 108 Times", artist: "Anuradha Paudwal", year: "T-Series Bhakti Sagar" },
      { id: "ccBcAWE_lIY", title: "Om Namah Shivaya \u2014 108 Times", artist: "Daily Chants", year: "Meditation Chant" },
    
      { id: "dx4Teh-nv3A", title: "", artist: "", year: "" },
      { id: "WibcvWT7KQQ", title: "", artist: "", year: "" },
      { id: "tRScKDcYxlk", title: "", artist: "", year: "" },
      { id: "F0SflZWxv8k", title: "", artist: "", year: "" },
      { id: "ALa5HEWT0RY", title: "", artist: "", year: "" },
      { id: "_0qmP97bQ3U", title: "", artist: "", year: "" },
      { id: "Nv-AMkiavoo", title: "", artist: "", year: "" },
      { id: "XTKzQR6EIqA", title: "", artist: "", year: "" },
      { id: "MfVR_FRiRaM", title: "", artist: "", year: "" },
      { id: "EEEpr4dakC8", title: "", artist: "", year: "" },
      { id: "Za3hWx-RN2Q", title: "", artist: "", year: "" },
      { id: "0Nadnsl6Z3Q", title: "", artist: "", year: "" },
      { id: "Z_-lSJg52NU", title: "", artist: "", year: "" },
      { id: "XqWhGp-2AU4", title: "", artist: "", year: "" },
      { id: "yYQaesMuiaQ", title: "", artist: "", year: "" },
      { id: "jVRc9_OKVw4", title: "", artist: "", year: "" },
      { id: "Z8BB-f2qa0g", title: "", artist: "", year: "" },
      { id: "wXxDAwfx1Ms", title: "", artist: "", year: "" },
      { id: "C7rO81Ko1GI", title: "", artist: "", year: "" },
      { id: "XmRoDhNBrBo", title: "", artist: "", year: "" },
      { id: "az5sZrD2K_k", title: "", artist: "", year: "" },
      { id: "s1j9Z01McSg", title: "", artist: "", year: "" },
      { id: "Xz7Y3niQy-4", title: "", artist: "", year: "" },
      { id: "HFX6AZ5bDDo", title: "", artist: "", year: "" },
      { id: "teKRtX3TArg", title: "", artist: "", year: "" },
      { id: "gNdJnlGoQJs", title: "", artist: "", year: "" },
      { id: "C6vsebZtdpo", title: "", artist: "", year: "" },
      { id: "SdaiEzJNsVo", title: "", artist: "", year: "" },
      { id: "ybDy5fAkAp8", title: "", artist: "", year: "" },
      { id: "Gvp5E4bU3Dk", title: "", artist: "", year: "" },
      { id: "Oxg-jUJNvPo", title: "", artist: "", year: "" },
      { id: "sNjUywye0yo", title: "", artist: "", year: "" },
      { id: "dpQQW8hdSkI", title: "", artist: "", year: "" },
      { id: "0-eT-zn1qkQ", title: "", artist: "", year: "" },
      { id: "MHUyiVGNc6M", title: "", artist: "", year: "" },
      { id: "HqiLWrc22Zs", title: "", artist: "", year: "" },
      { id: "4C93TEvWPI0", title: "", artist: "", year: "" },
      { id: "d2BmIGGf-e8", title: "", artist: "", year: "" },
      { id: "ATLp0u_3OMQ", title: "", artist: "", year: "" },
      { id: "3DYZdSzb_RQ", title: "", artist: "", year: "" },
      { id: "oUKS2k2pTkU", title: "", artist: "", year: "" },
      { id: "eyhIpm8mMLQ", title: "", artist: "", year: "" },
      { id: "gKyEYRfgIn4", title: "", artist: "", year: "" },]
  },
  ganesha: {
    label: "🪔 Ganesha",
    songs: [
      { id: "re88S-5fpmA", title: "Ekadantaya Vakratundaya", artist: "Shankar Mahadevan", year: "Times Music Spiritual" },
      { id: "ym4o5F8ncY0", title: "Ekadantaya Vakratundaya \u2014 With Lyrics", artist: "Suprabha KV", year: "Ganesh Chaturthi Special" },
      { id: "gFr5p5AyuD0", title: "Sukhkarta Dukhharta \u2014 Ganpati Aarti", artist: "Rajshri Soul", year: "Marathi Aarti" },
      { id: "8yv5kMuk31Y", title: "Shendoor Lal Chadhayo \u2014 Ganesh Aarti", artist: "T-Series Bhakti Sagar", year: "From Vaastav" },
      { id: "CAKZlI5UaeQ", title: "Sampoorna Ganesh Aarti", artist: "Rahul Vaidya", year: "6 Aartis Compilation" },
    ]
  },
  english: {
    label: "🎵 English Hits",
    songs: [
      { id: "fHI8X4OXluQ", title: "", artist: "", year: "" },
      { id: "JGwWNGJdvx8", title: "", artist: "", year: "" },
      { id: "GCdwKhTtNNw", title: "", artist: "", year: "" },
      { id: "dMMUH_ZpbB0", title: "", artist: "", year: "" },
      { id: "H5v3kku4y6Q", title: "", artist: "", year: "" },
      { id: "bCuhuePlP8o", title: "", artist: "", year: "" },
      { id: "ApXoWvfEYVU", title: "", artist: "", year: "" },
      { id: "iAbnEUA0wpA", title: "", artist: "", year: "" },
      { id: "2Vv-BfVoq4g", title: "", artist: "", year: "" },
      { id: "kTJczUoc26U", title: "", artist: "", year: "" },
      { id: "7wtfhZwyrcc", title: "", artist: "", year: "" },
      { id: "nyuo9-OjNNg", title: "", artist: "", year: "" },
      { id: "mRD0-GxqHVo", title: "", artist: "", year: "" },
      { id: "V1Pl8CzNzCw", title: "", artist: "", year: "" },
      { id: "yKNxeF4KMsY", title: "", artist: "", year: "" },
      { id: "KtlgYxa6BMU", title: "", artist: "", year: "" },
      { id: "V9PVRfjEBTI", title: "", artist: "", year: "" },
      { id: "PT2_F-1esPk", title: "", artist: "", year: "" },
      { id: "kPa7bsKwL-c", title: "", artist: "", year: "" },
      { id: "uJ_1HMAGb4k", title: "", artist: "", year: "" },
      { id: "FM7MFYoylVs", title: "", artist: "", year: "" },
      { id: "0yW7w8F2TVA", title: "", artist: "", year: "" },
      { id: "MwpMEbgC7DA", title: "", artist: "", year: "" },
      { id: "OMOGaugKpzs", title: "", artist: "", year: "" },
      { id: "hT_nvWreIhg", title: "", artist: "", year: "" },
      { id: "PVjiKRfKpPI", title: "", artist: "", year: "" },
      { id: "q0hyYWKXF0Q", title: "", artist: "", year: "" },
      { id: "nSDgHBxUbVQ", title: "", artist: "", year: "" },
      { id: "UceaB4D0jpo", title: "", artist: "", year: "" },
      { id: "NdYWuo9OFAw", title: "", artist: "", year: "" },
      { id: "ic8j13piAhQ", title: "", artist: "", year: "" },
      { id: "2zNSgSzhBfM", title: "", artist: "", year: "" },
      { id: "dvgZkm1xWPE", title: "", artist: "", year: "" },
      { id: "Pkh8UtuejGw", title: "", artist: "", year: "" },
      { id: "E07s5ZYygMg", title: "", artist: "", year: "" },
      { id: "LjhCEhWiKXk", title: "", artist: "", year: "" },
      { id: "QLCpqdqeoII", title: "", artist: "", year: "" },
      { id: "e-fA-gBCkj0", title: "", artist: "", year: "" },
      { id: "oygrmJFKYZY", title: "", artist: "", year: "" },
      { id: "oyEuk8j8imI", title: "", artist: "", year: "" },
      { id: "PMivT7MJ41M", title: "", artist: "", year: "" },
      { id: "gGdGFtwCNBE", title: "", artist: "", year: "" },
      { id: "eVTXPUF4Oz4", title: "", artist: "", year: "" },
      { id: "wXhTHyIgQ_U", title: "", artist: "", year: "" },
      { id: "fJ9rUzIMcZQ", title: "", artist: "", year: "" },
      { id: "ekzHIouo8Q4", title: "", artist: "", year: "" },
      { id: "Dst9gZkq1a8", title: "", artist: "", year: "" },
      { id: "mzB1VGEGcSU", title: "", artist: "", year: "" },
      { id: "lp-EO5I60KA", title: "", artist: "", year: "" },
      { id: "IcrbM1l_BoI", title: "", artist: "", year: "" },
      { id: "YVkUvmDQ3HY", title: "", artist: "", year: "" },
      { id: "bo_efYhYU2A", title: "", artist: "", year: "" },
      { id: "450p7goxZqg", title: "", artist: "", year: "" },
      { id: "xpVfcZ0ZcFM", title: "", artist: "", year: "" },
      { id: "euCqAq6BRa4", title: "", artist: "", year: "" },
      { id: "yzTuBuRdAyA", title: "", artist: "", year: "" },
      { id: "pXRviuL6vMY", title: "", artist: "", year: "" },
      { id: "mWRsgZuwf_8", title: "", artist: "", year: "" },
      { id: "fKopy74weus", title: "", artist: "", year: "" },
      { id: "JQbjS0_ZfJ0", title: "", artist: "", year: "" },
      { id: "eVli-tstM5E", title: "", artist: "", year: "" },
      { id: "bpOSxM0rNPM", title: "", artist: "", year: "" },
      { id: "QU9c0053UAU", title: "", artist: "", year: "" },
      { id: "Oa_RSwwpPaA", title: "", artist: "", year: "" },
      { id: "TGgcC5xg9YI", title: "", artist: "", year: "" },
      { id: "0EnRK5YvBwU", title: "", artist: "", year: "" },
      { id: "fRh_vgS2dFE", title: "", artist: "", year: "" },
      { id: "DyDfgMOUjCI", title: "", artist: "", year: "" },
      { id: "tvTRZJ-4EyI", title: "", artist: "", year: "" },
      { id: "CTFtOOh47oo", title: "", artist: "", year: "" },
      { id: "_Yhyp-_hX2s", title: "", artist: "", year: "" },
      { id: "hTWKbfoikeg", title: "", artist: "", year: "" },
      { id: "XFkzRNyygfk", title: "", artist: "", year: "" },
      { id: "G7KNmW9a75Y", title: "", artist: "", year: "" },
      { id: "lY2yjAdbvdQ", title: "", artist: "", year: "" },
      { id: "RB-RcX5DS5A", title: "", artist: "", year: "" },
      { id: "ZmDBbnmKpqQ", title: "", artist: "", year: "" },
      { id: "qU9mHegkTc4", title: "", artist: "", year: "" },
      { id: "1k8craCGpgs", title: "", artist: "", year: "" },
      { id: "QYh6mYIJG2Y", title: "", artist: "", year: "" },
      { id: "dT2owtxkU8k", title: "", artist: "", year: "" },
      { id: "RBumgq5yVrA", title: "", artist: "", year: "" },
      { id: "SQnc1QibapQ", title: "", artist: "", year: "" },
      { id: "6hzrDeceEKc", title: "", artist: "", year: "" },
      { id: "Zi_XLOBDo_Y", title: "", artist: "", year: "" },
      { id: "djV11Xbc914", title: "", artist: "", year: "" },
      { id: "kXYiU_JCYtU", title: "", artist: "", year: "" },
      { id: "Y3ywicffOj4", title: "", artist: "", year: "" },
      { id: "XXYlFuWEuKI", title: "", artist: "", year: "" },
      { id: "1w7OgIMMRc4", title: "", artist: "", year: "" },
      { id: "qod03PVTLqk", title: "", artist: "", year: "" },
      { id: "DkeiKbqa02g", title: "", artist: "", year: "" },
      { id: "KRaWnd3LJfs", title: "", artist: "", year: "" },
      { id: "YqeW9_5kURI", title: "", artist: "", year: "" },
      { id: "HgzGwKwLmgM", title: "", artist: "", year: "" },
      { id: "OPf0YbXqDm0", title: "", artist: "", year: "" },
      { id: "gNi_6U5Pm_o", title: "", artist: "", year: "" },
      { id: "Mx92lTYxrJQ", title: "", artist: "", year: "" },
      { id: "xy3AcmW0lrQ", title: "", artist: "", year: "" },
      { id: "FTQbiNvZqaY", title: "", artist: "", year: "" },
    ]
  },
};

// ============================================================
// BACKGROUNDS — the hero photo changes on every song.
// Drop an image in assets/ and add one line here (relative path).
// ============================================================

const BACKGROUNDS = [
  "assets/IMG_20200415_212350.jpg",
  "assets/IMG20241101171750.jpg"
];

// ============================================================
// LIVE RADIO — famous streams looked up via the Radio Browser API
// (https://api.radio-browser.info). uuid is stable; the playable URL
// is resolved at click time. fallbackUrl is used if the API is down.
// ============================================================

const LIVE_RADIOS = {
  livebengali: {
    label: "🎙️ Live • বাংলা",
    streams: [
      {
        uuid: "055076b2-6995-4bb4-97c4-7ec36ab2819b",
        title: "FM Rainbow Kolkata",
        artist: "Akashvani",
        year: "Bengali live",
        fallbackUrl: "https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio058/hlspbaudio05864kbps.m3u8"
      },
      {
        uuid: "7b29b134-7964-4c93-8c48-fd0bd258cd4b",
        title: "Akashvani Maitree",
        artist: "All India Radio • Kolkata",
        year: "Bengali live",
        fallbackUrl: "https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio245/hlspbaudio24564kbps.m3u8"
      },
      {
        uuid: "97715bbd-5cf1-451f-ad2b-6f43f31d7768",
        title: "Akashvani Geetanjali",
        artist: "All India Radio • Kolkata",
        year: "Bengali live",
        fallbackUrl: "https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio055/hlspbaudio05564kbps.m3u8"
      },
      {
        uuid: "f993443f-83c3-49e5-8b1d-7368088ba690",
        title: "FM Gold Kolkata",
        artist: "Akashvani",
        year: "Bengali live",
        fallbackUrl: "https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio057/hlspbaudio05764kbps.m3u8"
      },
      {
        uuid: "29ef51a7-b4ae-4706-8832-c742bc31e466",
        title: "Mixify Bengali Hits",
        artist: "Mixify",
        year: "Bengali live",
        fallbackUrl: "https://server.mixify.in/listen/bangla/radio.mp3"
      },
      {
        uuid: "2c1982bb-cee2-43c2-b5f7-acc09b158af8",
        title: "My 90s Bengali",
        artist: "Zeno",
        year: "Bengali live",
        fallbackUrl: "https://stream.zeno.fm/2k6xfu1pvs8uv"
      }
    ]
  },
  livehindi: {
    label: "🎙️ Live • हिन्दी",
    streams: [
      {
        uuid: "cdd3b5a0-47f6-46d5-8209-b78e8b10ff6e",
        title: "Radio Mirchi",
        artist: "Hindi FM",
        year: "Hindi live",
        fallbackUrl: "https://eu8.fastcast4u.com/proxy/clyedupq/stream"
      },
      {
        uuid: "68d00a44-200c-4c82-b17f-18d777f3b2ee",
        title: "Vividh Bharati",
        artist: "Akashvani",
        year: "Hindi live",
        fallbackUrl: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8"
      },
      {
        uuid: "f493846c-22b0-44fb-a932-ee4e990043ea",
        title: "Fever 104 FM",
        artist: "Mumbai",
        year: "Hindi live",
        fallbackUrl: "https://radio.canstream.co.uk:8115/live.mp3"
      },
      {
        uuid: "9a3e69a5-e772-4286-8827-d4348f336877",
        title: "Ishq FM",
        artist: "104.8 • Bollywood",
        year: "Hindi live",
        fallbackUrl: "https://drive.uber.radio/uber/bollywoodlove/icecast.audio"
      },
      {
        uuid: "a4ffabec-a162-4320-8cf2-049b8055b17a",
        title: "FM Gold Delhi",
        artist: "Akashvani",
        year: "Hindi live",
        fallbackUrl: "https://airhlspush.pc.cdn.bitgravity.com/httppush/hlspbaudio005/hlspbaudio00564kbps.m3u8"
      },
      {
        uuid: "bce9aa64-8fd5-434e-8c9d-3ee67c594a06",
        title: "Red FM 93.5",
        artist: "Hindi FM",
        year: "Hindi live",
        fallbackUrl: "https://stream.zeno.fm/q97eczydqrhvv"
      }
    ]
  },
  liveenglish: {
    label: "🌍 Live • English",
    streams: [
      {
        uuid: "598c4d0e-6b06-43fb-bff4-717c591213a9",
        title: "BBC World Service",
        artist: "BBC",
        year: "English live",
        fallbackUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
      },
      {
        uuid: "038bfc04-cebb-4fc7-ac13-823b83c8a9d9",
        title: "Capital FM",
        artist: "London",
        year: "English live",
        fallbackUrl: "https://media-ssl.musicradio.com/CapitalMP3"
      },
      {
        uuid: "9608ade8-0601-11e8-ae97-52543be04c81",
        title: "Heart London",
        artist: "106.2 FM",
        year: "English live",
        fallbackUrl: "https://media-ssl.musicradio.com/HeartLondonMP3"
      },
      {
        uuid: "96063f25-0601-11e8-ae97-52543be04c81",
        title: "Classic FM",
        artist: "UK",
        year: "English live",
        fallbackUrl: "https://media-ssl.musicradio.com/ClassicFMMP3"
      }
    ]
  }
};

const RB_HOSTS = [
  "de1.api.radio-browser.info",
  "nl1.api.radio-browser.info",
  "at1.api.radio-browser.info"
];
const LIVE_ART =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".92em" font-size="90">📻</text></svg>'
  );

// ============================================================
// GITA SHLOKAS — shown under the title; a new one on every song.
// ============================================================

const SHLOKAS = [
  { sa: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", en: "You have a right to your actions alone, never to their fruits.", ref: "Bhagavad Gita 2.47" },
  { sa: "न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः।", en: "The soul is never born, nor does it ever die; having been, it will never cease to be.", ref: "Bhagavad Gita 2.20" },
  { sa: "आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।", en: "Pleasure and pain come and go — they are impermanent. Endure them bravely.", ref: "Bhagavad Gita 2.14" },
  { sa: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।", en: "Whenever righteousness declines and unrighteousness rises, I manifest myself.", ref: "Bhagavad Gita 4.7" },
  { sa: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।", en: "Lift yourself up by your own self; do not let yourself sink.", ref: "Bhagavad Gita 6.5" },
  { sa: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।", en: "Abandon all supports and take refuge in me alone; I shall free you — do not grieve.", ref: "Bhagavad Gita 18.66" },
  { sa: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।", en: "Better is one's own duty though imperfect, than another's duty well performed.", ref: "Bhagavad Gita 3.35" },
  { sa: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।", en: "Act, established in yoga, casting off attachment — even-minded in success and failure. That evenness is called yoga.", ref: "Bhagavad Gita 2.48" },
  { sa: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।", en: "Nothing in this world purifies like wisdom.", ref: "Bhagavad Gita 4.38" },
  { sa: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धः।", en: "I am mighty Time, the destroyer of worlds.", ref: "Bhagavad Gita 11.32" },
  { sa: "तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।", en: "For those devoted to me constantly, I carry what they lack and preserve what they have.", ref: "Bhagavad Gita 9.22" },
  { sa: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। निर्ममो निरहङ्कारः स शान्तिमधिगच्छति।", en: "One who moves free of longing, possessiveness and ego — that one attains peace.", ref: "Bhagavad Gita 2.71" }
];

// ============================================================

const player = document.getElementById("player");
const artwork = document.getElementById("artwork");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const trackYear = document.getElementById("trackYear");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");

const volumeSlider = document.getElementById("volumeSlider");
const muteBtn = document.getElementById("muteBtn");

const playlistToggle = document.getElementById("playlistToggle");
const navSongs = document.getElementById("navSongs");
const navPlaylists = document.getElementById("navPlaylists");
const closePlaylist = document.getElementById("closePlaylist");
const playlistPanel = document.getElementById("playlistPanel");
const playlistList = document.getElementById("playlistList");
const overlay = document.getElementById("overlay");
const equalizer = document.getElementById("equalizer");
const onAirLabel = document.getElementById("onAirLabel");

const stationSelect = document.getElementById("stationSelect");

let ytPlayer = null;
let currentStation = "bengali";
let panelStation = "bengali"; // which station's list the panel is showing
let progressTimer = null;
let consecutiveErrors = 0;
let started = false;
let shuffleOn = true;
let playOrder = null; // when shuffling: array of song objects in play order
let pendingPlayIndex = null;
let lastTrackKey = null;
let currentBg = null;
let shlokaIndex = -1;
let liveIndex = 0;
let hlsPlayer = null;
let liveToken = 0;

const liveAudio = document.getElementById("liveAudio");

function isLiveKey(key) {
  return Boolean(LIVE_RADIOS[key]);
}

function pickerKeys() {
  return [...Object.keys(LIVE_RADIOS), ...Object.keys(STATIONS)];
}

function stationEntry(key) {
  return LIVE_RADIOS[key] || STATIONS[key] || null;
}

function currentStreams() {
  return isLiveKey(currentStation) ? LIVE_RADIOS[currentStation].streams : [];
}

function currentStream() {
  return currentStreams()[liveIndex] || currentStreams()[0] || null;
}

function currentSongs() {
  if (isLiveKey(currentStation)) return [];
  return STATIONS[currentStation].songs;
}

// song shown at a given position of the (possibly shuffled) play queue
function songAt(index) {
  if (playOrder) return playOrder[index] || null;
  return currentSongs()[index] || null;
}

function shuffledOrder(songs, firstIndex) {
  const rest = songs.filter((_, i) => i !== firstIndex);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return [songs[firstIndex], ...rest];
}

function destroyHls() {
  if (hlsPlayer) {
    try {
      hlsPlayer.destroy();
    } catch (e) {
      /* ignore */
    }
    hlsPlayer = null;
  }
}

function stopLive() {
  liveToken += 1;
  if (player) player.classList.remove("is-live");
  destroyHls();
  if (liveAudio) {
    liveAudio.pause();
    liveAudio.removeAttribute("src");
    liveAudio.load();
  }
}

function stopYouTube() {
  stopProgressTimer();
  if (ytPlayer && ytPlayer.destroy) {
    try {
      ytPlayer.pauseVideo();
    } catch (e) {
      /* ignore */
    }
    try {
      ytPlayer.destroy();
    } catch (e) {
      /* ignore */
    }
  }
  ytPlayer = null;
  const mount = document.getElementById("ytMount");
  if (mount) mount.innerHTML = "";
}

function loadHlsScript() {
  if (window.Hls) return Promise.resolve(window.Hls);
  const sources = [
    "vendor/hls.min.js?v=1.5.18",
    "https://cdn.jsdelivr.net/npm/hls.js@1.5.18/dist/hls.min.js",
    "https://unpkg.com/hls.js@1.5.18/dist/hls.min.js"
  ];
  return (async () => {
    let lastErr;
    for (const src of sources) {
      try {
        return await loadScriptOnce(src);
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error("hls.js failed to load");
  })();
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.dataset.hls = "1";
    s.onload = () => (window.Hls ? resolve(window.Hls) : reject(new Error("hls.js missing")));
    s.onerror = () => reject(new Error("hls.js failed to load"));
    document.head.appendChild(s);
  });
}

function httpsOnly(url) {
  if (!url) return "";
  if (url.startsWith("http://")) return `https://${url.slice("http://".length)}`;
  return url;
}

function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { headers: { Accept: "application/json" }, signal: ctrl.signal }).finally(() => clearTimeout(t));
}

async function radioBrowserUrl(uuid) {
  for (const host of RB_HOSTS) {
    try {
      const res = await fetchWithTimeout(`https://${host}/json/url/${uuid}`, 2500);
      if (!res.ok) continue;
      const data = await res.json();
      if (data && data.url) return httpsOnly(data.url);
    } catch (e) {
      /* try next host */
    }
  }
  return null;
}

function waitForLivePlaying(ms) {
  return new Promise((resolve, reject) => {
    if (liveAudio && !liveAudio.paused && liveAudio.readyState >= 2) return resolve();
    const timer = setTimeout(() => {
      liveAudio.removeEventListener("playing", onPlay);
      liveAudio.removeEventListener("error", onErr);
      reject(new Error("tune timeout"));
    }, ms);
    function onPlay() {
      clearTimeout(timer);
      liveAudio.removeEventListener("error", onErr);
      resolve();
    }
    function onErr() {
      clearTimeout(timer);
      liveAudio.removeEventListener("playing", onPlay);
      reject(new Error("audio error"));
    }
    liveAudio.addEventListener("playing", onPlay, { once: true });
    liveAudio.addEventListener("error", onErr, { once: true });
  });
}

async function attachLiveUrl(url) {
  destroyHls();
  const isHls = /\.m3u8(\?|$)/i.test(url);
  if (isHls) {
    try {
      await loadHlsScript();
    } catch (e) {
      /* Safari can play HLS natively */
    }
    if (window.Hls && window.Hls.isSupported()) {
      hlsPlayer = new window.Hls({ enableWorker: true, lowLatencyMode: false });
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("hls timeout")), 8000);
        hlsPlayer.on(window.Hls.Events.MANIFEST_PARSED, () => {
          clearTimeout(timer);
          resolve();
        });
        hlsPlayer.on(window.Hls.Events.ERROR, (_, data) => {
          if (data && data.fatal) {
            clearTimeout(timer);
            reject(new Error("hls fatal"));
          }
        });
        hlsPlayer.loadSource(url);
        hlsPlayer.attachMedia(liveAudio);
      });
      await liveAudio.play();
      return waitForLivePlaying(8000);
    }
    if (liveAudio.canPlayType("application/vnd.apple.mpegurl")) {
      liveAudio.src = url;
      await liveAudio.play();
      return waitForLivePlaying(8000);
    }
    throw new Error("hls unsupported");
  }
  liveAudio.src = url;
  await liveAudio.play();
  return waitForLivePlaying(8000);
}

function updateLiveNowPlaying() {
  const stream = currentStream();
  if (!stream) return;
  artwork.src = LIVE_ART;
  artwork.alt = stream.title;
  trackTitle.textContent = stream.title;
  trackArtist.textContent = stream.artist || "Live radio";
  const total = currentStreams().length;
  trackYear.textContent =
    total > 1 ? `${stream.year} • ${liveIndex + 1} of ${total}` : stream.year || "Live radio";
  currentTimeEl.textContent = "LIVE";
  durationTimeEl.textContent = "∞";
  progressFill.style.width = "100%";

  onAirLabel.textContent = stream.title;

  const trackKey = `${currentStation}:${stream.uuid}`;
  if (trackKey !== lastTrackKey) {
    lastTrackKey = trackKey;
    nextBackground();
    nextShloka();
  }
  highlightActiveSong(panelStation === currentStation ? liveIndex : -1);
}

async function playLiveIndex(autoplay) {
  const streams = currentStreams();
  if (!streams.length || !liveAudio) return;
  liveIndex = ((liveIndex % streams.length) + streams.length) % streams.length;
  const stream = streams[liveIndex];
  const token = ++liveToken;
  consecutiveErrors = 0;
  updateLiveNowPlaying();
  trackTitle.textContent = autoplay ? `Tuning ${stream.title}…` : stream.title;

  // Play the known HTTPS fallback immediately. Radio Browser can hang or
  // return http:// URLs that a GitHub Pages HTTPS origin will block.
  radioBrowserUrl(stream.uuid).catch(() => {});
  let url = httpsOnly(stream.fallbackUrl);
  if (token !== liveToken) return;
  if (!url) {
    trackTitle.textContent = "Stream unavailable";
    setPlayingUI(false);
    return;
  }
  try {
    liveAudio.volume = Number(volumeSlider.value);
    liveAudio.muted = false;
    muteBtn.textContent = Number(volumeSlider.value) === 0 ? "🔇" : "🔊";
    if (!autoplay) {
      liveAudio.src = url;
      setPlayingUI(false);
      return;
    }
    try {
      await attachLiveUrl(url);
    } catch (first) {
      const resolved = await radioBrowserUrl(stream.uuid);
      const retry = httpsOnly(resolved);
      if (!retry || retry === url) throw first;
      if (token !== liveToken) return;
      await attachLiveUrl(retry);
    }
    if (token !== liveToken) return;
    started = true;
    setPlayingUI(true);
    updateLiveNowPlaying();
  } catch (e) {
    if (token !== liveToken) return;
    consecutiveErrors++;
    if (consecutiveErrors < streams.length) {
      liveIndex = (liveIndex + 1) % streams.length;
      return playLiveIndex(autoplay);
    }
    trackTitle.textContent = "Stream unavailable";
    setPlayingUI(false);
  }
}

function startLive(key, autoplay, startIndex = 0) {
  currentStation = key;
  panelStation = key;
  liveIndex = startIndex;
  playOrder = null;
  pendingPlayIndex = null;
  shuffleOn = false;
  shuffleBtn.classList.remove("on");
  if (player) player.classList.add("is-live");

  stationSelect.value = key;
  syncStationPills(key);
  onAirLabel.textContent = LIVE_RADIOS[key].label;
  const playlistTitleEl = document.getElementById("playlistTitle");
  if (playlistTitleEl) playlistTitleEl.textContent = `${LIVE_RADIOS[key].label}`;
  progressFill.style.width = "100%";
  currentTimeEl.textContent = "LIVE";
  durationTimeEl.textContent = "∞";
  stopProgressTimer();
  renderPlaylist();
  playLiveIndex(autoplay);
}

if (liveAudio) {
  liveAudio.addEventListener("playing", () => {
    if (!isLiveKey(currentStation)) return;
    started = true;
    consecutiveErrors = 0;
    setPlayingUI(true);
    updateLiveNowPlaying();
  });
  liveAudio.addEventListener("pause", () => {
    if (!isLiveKey(currentStation)) return;
    setPlayingUI(false);
  });
  liveAudio.addEventListener("error", () => {
    if (!isLiveKey(currentStation) || !player.classList.contains("is-live")) return;
    if (!liveAudio.getAttribute("src") && !hlsPlayer) return;
    const streams = currentStreams();
    consecutiveErrors++;
    if (consecutiveErrors < streams.length) {
      liveIndex = (liveIndex + 1) % streams.length;
      playLiveIndex(true);
    } else {
      trackTitle.textContent = "Stream unavailable";
      setPlayingUI(false);
    }
  });
}

// The hidden player is rebuilt whenever the station changes, because the
// IFrame API only supports custom video-id queues at creation time.
function buildPlayer(autoplay) {
  if (isLiveKey(currentStation)) return;
  if (ytPlayer && ytPlayer.destroy) {
    ytPlayer.destroy();
    ytPlayer = null;
  }

  const mount = document.getElementById("ytMount");
  mount.innerHTML = "";

  const el = document.createElement("div");
  el.id = "ytPlayer";
  mount.appendChild(el);

  const ids = (playOrder || currentSongs()).map((s) => s.id);
  const start = pendingPlayIndex !== null ? Math.min(pendingPlayIndex, ids.length - 1) : 0;
  pendingPlayIndex = null;

  const playerVars = {
    playlist: ids.join(","),
    playsinline: 1,
    rel: 0,
    modestbranding: 1
  };
  if (window.location.protocol.indexOf("http") === 0) {
    playerVars.origin = window.location.origin;
  }

  ytPlayer = new YT.Player("ytPlayer", {
    height: "1",
    width: "1",
    videoId: ids[start],
    playerVars: playerVars,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });

  ytPlayer._autoplay = autoplay;
}

function onPlayerReady() {
  ytPlayer.setVolume(Number(volumeSlider.value) * 100);
  renderPlaylist();
  updateNowPlaying();
  // station switches are user gestures, so autoplay is allowed
  if (ytPlayer._autoplay) {
    ytPlayer.playVideo();
  }
  if (pendingPlayIndex !== null) {
    ytPlayer.playVideoAt(pendingPlayIndex);
    pendingPlayIndex = null;
  }
}

function onPlayerStateChange(event) {
  const playing = event.data === YT.PlayerState.PLAYING;
  if (playing) {
    started = true;
    consecutiveErrors = 0;
  }
  setPlayingUI(playing);
  playing ? startProgressTimer() : stopProgressTimer();
  updateNowPlaying();
}

// YT error 2=invalid id, 5=html5 error, 100=removed/private, 101/150=embedding disabled by owner
function onPlayerError() {
  consecutiveErrors++;
  if (consecutiveErrors >= currentSongs().length) return; // nothing playable
  ytPlayer.nextVideo();
}

function setPlayingUI(playing) {
  playBtn.textContent = playing ? "⏸" : "▶";
  equalizer.classList.toggle("playing", playing);
}

function updateNowPlaying() {
  if (isLiveKey(currentStation)) {
    updateLiveNowPlaying();
    return;
  }
  const index = ytPlayer && ytPlayer.getPlaylistIndex ? ytPlayer.getPlaylistIndex() : 0;
  const song = songAt(index);
  if (!song) return;

  artwork.src = `https://img.youtube.com/vi/${song.id}/hqdefault.jpg`;

  const meta = trackMetaCache[song.id];
  artwork.alt = meta ? meta.title : (song.title || "Now playing");
  trackTitle.textContent = meta ? meta.title : (song.title || "Loading…");
  trackArtist.textContent = meta ? meta.author : (song.artist || "YouTube");
  const year = song.year || "";
  const total = (playOrder || currentSongs()).length;
  trackYear.textContent = year ? `${year} • Track ${index + 1} of ${total}` : `Track ${index + 1} of ${total}`;

  // lazily fetch the real title/artist for playlist-added tracks
  if (!song.artist && !trackMetaCache[song.id]) {
    loadTrackMeta(song.id).then((m) => {
      if (m && songAt(ytPlayer.getPlaylistIndex()) === song) updateNowPlaying();
    });
  }

  // every new song: rotate the background and the shloka
  const trackKey = `${currentStation}:${song.id}`;
  if (trackKey !== lastTrackKey) {
    lastTrackKey = trackKey;
    nextBackground();
    nextShloka();
  }

  highlightActiveSong(panelStation === currentStation ? index : -1);
}

// ---------- YouTube oEmbed metadata (for playlist-added tracks) ----------

const trackMetaCache = {};

function loadTrackMeta(videoId) {
  if (trackMetaCache[videoId]) return Promise.resolve(trackMetaCache[videoId]);
  const url = `https://www.youtube.com/oembed?url=${encodeURIComponent("https://www.youtube.com/watch?v=" + videoId)}&format=json`;
  return fetch(url)
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (data) {
        trackMetaCache[videoId] = { title: data.title, author: data.author_name };
        return trackMetaCache[videoId];
      }
      return null;
    })
    .catch(() => null);
}

function highlightActiveSong(index) {
  const items = playlistList.querySelectorAll("li");
  items.forEach((item, i) => item.classList.toggle("active", i === index));
}

// ---------- station switching ----------

function switchStation(key, autoplay, startIndex = 0) {
  if (isLiveKey(key)) {
    stopYouTube();
    startLive(key, autoplay, startIndex);
    return;
  }

  stopLive();
  shuffleOn = true;
  shuffleBtn.classList.add("on");
  currentStation = key;
  panelStation = key;

  const songs = STATIONS[key].songs;
  if (shuffleOn) {
    playOrder = shuffledOrder(songs, startIndex);
    pendingPlayIndex = 0;
  } else {
    playOrder = null;
    pendingPlayIndex = startIndex;
  }

  stationSelect.value = key;
  syncStationPills(key);
  onAirLabel.textContent = STATIONS[key].label;
  const playlistTitleEl = document.getElementById("playlistTitle");
  if (playlistTitleEl) {
    playlistTitleEl.textContent = `${STATIONS[key].label} Playlist`;
  }
  trackTitle.textContent = autoplay ? "Loading…" : "Pick a song & press play";
  trackArtist.textContent = "—";
  trackYear.textContent = "—";
  progressFill.style.width = "0%";
  currentTimeEl.textContent = "00:00";
  durationTimeEl.textContent = "00:00";

  if (typeof YT === "undefined" || !YT.Player) {
    renderPlaylist();
    return;
  }
  buildPlayer(autoplay);
  renderPlaylist();
}

function scrollElementTo(el, left) {
  if (!el) return;
  if (typeof el.scrollTo === "function") {
    try {
      el.scrollTo({ left: left, behavior: "smooth" });
      return;
    } catch (e) {
      /* older Safari rejects the options object on element.scrollTo */
    }
  }
  el.scrollLeft = left;
}

function syncStationPills(key) {
  const pills = document.querySelectorAll(".station-pill");
  pills.forEach((p) => {
    const active = p.dataset.value === key;
    p.classList.toggle("active", active);
    if (active && p.parentElement) {
      scrollElementTo(
        p.parentElement,
        p.offsetLeft - p.parentElement.offsetWidth / 2 + p.offsetWidth / 2
      );
    }
  });
}

document.querySelectorAll(".station-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    const val = pill.dataset.value;
    if (val && stationEntry(val)) {
      switchStation(val, true);
    }
  });
});

stationSelect.addEventListener("change", () => {
  if (stationSelect.value && stationEntry(stationSelect.value)) {
    switchStation(stationSelect.value, true);
  }
});

// ---------- Mobile Navigation Drawer ----------
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");

if (mobileMenuBtn && mobileDrawer) {
  const closeMobileDrawer = () => {
    mobileDrawer.classList.remove("open");
    mobileMenuBtn.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
  };

  const openMobileDrawer = () => {
    mobileDrawer.classList.add("open");
    mobileMenuBtn.classList.add("open");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
  };

  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileDrawer.classList.contains("open")) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  document.addEventListener("click", (e) => {
    if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      closeMobileDrawer();
    }
  });

  const mobileNavPlaylists = document.getElementById("mobileNavPlaylists");
  const mobileNavSongs = document.getElementById("mobileNavSongs");
  const mobileNavAbout = document.getElementById("mobileNavAbout");
  const mobileNavGithub = document.getElementById("mobileNavGithub");

  if (mobileNavPlaylists) {
    mobileNavPlaylists.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileDrawer();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (mobileNavSongs) {
    mobileNavSongs.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileDrawer();
      openPlaylistPanel();
    });
  }

  if (mobileNavAbout) {
    mobileNavAbout.addEventListener("click", () => {
      closeMobileDrawer();
    });
  }

  if (mobileNavGithub) {
    mobileNavGithub.addEventListener("click", () => {
      closeMobileDrawer();
    });
  }
}

// ---------- shuffle songs ----------

const shuffleBtn = document.getElementById("shuffleBtn");

function toggleShuffle() {
  if (isLiveKey(currentStation)) return;
  shuffleOn = !shuffleOn;
  shuffleBtn.classList.toggle("on", shuffleOn);

  // keep the currently playing song and rebuild the queue around it
  if (ytPlayer && ytPlayer.getPlaylist) {
    const queueIndex = ytPlayer.getPlaylistIndex() || 0;
    const currentSong = songAt(queueIndex);
    const songs = currentSongs();
    const canonicalIndex = currentSong ? songs.findIndex((s) => s.id === currentSong.id) : 0;

    if (shuffleOn) {
      playOrder = shuffledOrder(songs, Math.max(canonicalIndex, 0));
      pendingPlayIndex = 0;
    } else {
      playOrder = null;
      pendingPlayIndex = Math.max(canonicalIndex, 0);
    }
    buildPlayer(true);
    renderPlaylist();
  }
}

shuffleBtn.addEventListener("click", toggleShuffle);

// ---------- backgrounds (rotate on every song) ----------

const shuffleBgBtn = document.getElementById("shuffleBgBtn");

function applyBackground(path) {
  currentBg = path;
  // preload first so the swap doesn't flash
  const img = new Image();
  img.onload = () => {
    document.documentElement.style.setProperty("--hero-bg", `url('${path}')`);
  };
  img.src = path;
}

function nextBackground() {
  if (BACKGROUNDS.length === 0) return;
  if (BACKGROUNDS.length === 1) return applyBackground(BACKGROUNDS[0]);
  let next;
  do {
    next = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
  } while (next === currentBg);
  applyBackground(next);
}

shuffleBgBtn.addEventListener("click", nextBackground);

// ---------- Gita shlokas (rotate on every song) ----------

const shlokaCard = document.getElementById("shlokaCard");
const shlokaSanskritEl = document.getElementById("shlokaSanskrit");
const shlokaEnglishEl = document.getElementById("shlokaEnglish");
const shlokaRefEl = document.getElementById("shlokaRef");

function nextShloka() {
  shlokaIndex = (shlokaIndex + 1) % SHLOKAS.length;
  const s = SHLOKAS[shlokaIndex];

  shlokaCard.classList.remove("switching");
  void shlokaCard.offsetWidth; // restart the entry animation
  shlokaSanskritEl.textContent = s.sa;
  shlokaEnglishEl.textContent = `“${s.en}”`;
  shlokaRefEl.textContent = `— ${s.ref}`;
  shlokaCard.classList.add("switching");
}

// ---------- youtube api bootstrap ----------

window.onYouTubeIframeAPIReady = () => {
  shuffleBtn.classList.add("on");
  if (isLiveKey(currentStation)) return;
  const songs = currentSongs();
  playOrder = shuffledOrder(songs, 0);
  pendingPlayIndex = 0;
  buildPlayer(false);
};

// first paint: set an initial background and shloka without waiting for
// the player; pre-seed the track key so player-ready doesn't advance them
lastTrackKey = `${currentStation}:${currentSongs()[0].id}`;
nextBackground();
nextShloka();

// preload the remaining photos in the background so song-change swaps are instant
window.addEventListener("load", () => {
  BACKGROUNDS.forEach((src) => {
    if (src !== currentBg) {
      const img = new Image();
      img.src = src;
    }
  });
});

// ---------- transport ----------

function syncCompactPlayer() {
  const playerEl = document.getElementById("player");
  const transport = playerEl && playerEl.querySelector(".transport");
  const compact = window.matchMedia("(max-width: 640px)").matches;
  if (playerEl) playerEl.classList.toggle("is-compact", compact);
  if (!transport) return;
  if (compact) {
    transport.style.cssText =
      "display:grid!important;grid-template-columns:25% 25% 25% 25%!important;align-items:center;justify-items:center;width:100%!important;max-width:100%!important;min-width:0!important;gap:0!important";
    [...transport.children].forEach((el, i) => {
      el.style.cssText =
        `position:static!important;min-width:0!important;max-width:48px!important;grid-column:${i + 1}!important;justify-self:center!important`;
    });
  } else {
    transport.style.cssText = "";
    [...transport.children].forEach((el) => {
      el.style.cssText = "";
    });
  }
}
syncCompactPlayer();
window.addEventListener("resize", syncCompactPlayer);

playBtn.addEventListener("click", () => {
  if (isLiveKey(currentStation)) {
    if (!liveAudio) return;
    if (liveAudio.paused) {
      if (!liveAudio.src && !hlsPlayer) playLiveIndex(true);
      else liveAudio.play().catch(() => playLiveIndex(true));
    } else {
      liveAudio.pause();
    }
    return;
  }
  if (!ytPlayer || !ytPlayer.playVideo) return;
  const state = ytPlayer.getPlayerState();
  state === YT.PlayerState.PLAYING ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
});

prevBtn.addEventListener("click", () => {
  if (isLiveKey(currentStation)) {
    const streams = currentStreams();
    if (streams.length < 2) return;
    liveIndex = (liveIndex - 1 + streams.length) % streams.length;
    playLiveIndex(true);
    return;
  }
  if (ytPlayer && ytPlayer.previousVideo) ytPlayer.previousVideo();
});

nextBtn.addEventListener("click", () => {
  if (isLiveKey(currentStation)) {
    const streams = currentStreams();
    if (streams.length < 2) return;
    liveIndex = (liveIndex + 1) % streams.length;
    playLiveIndex(true);
    return;
  }
  if (ytPlayer && ytPlayer.nextVideo) ytPlayer.nextVideo();
});

// ---------- progress ----------

function startProgressTimer() {
  stopProgressTimer();
  progressTimer = setInterval(updateProgress, 500);
}

function stopProgressTimer() {
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
}

function updateProgress() {
  if (isLiveKey(currentStation)) {
    currentTimeEl.textContent = "LIVE";
    durationTimeEl.textContent = "∞";
    progressFill.style.width = "100%";
    return;
  }
  if (!ytPlayer || !ytPlayer.getDuration) return;
  const duration = ytPlayer.getDuration();
  if (!duration) return;
  const current = ytPlayer.getCurrentTime();
  progressFill.style.width = `${(current / duration) * 100}%`;
  currentTimeEl.textContent = formatTime(current);
  durationTimeEl.textContent = formatTime(duration);
}

function seekFromClientX(clientX) {
  if (isLiveKey(currentStation)) return;
  if (!ytPlayer || !ytPlayer.getDuration) return;
  const duration = ytPlayer.getDuration();
  if (!duration) return;
  const rect = progressBar.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  ytPlayer.seekTo(ratio * duration, true);
}

progressBar.addEventListener("pointerdown", (e) => {
  progressBar.setPointerCapture(e.pointerId);
  seekFromClientX(e.clientX);
});

progressBar.addEventListener("pointermove", (e) => {
  if (progressBar.hasPointerCapture(e.pointerId)) {
    seekFromClientX(e.clientX);
  }
});

function formatTime(seconds) {
  if (!isFinite(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// ---------- volume ----------

volumeSlider.addEventListener("input", () => {
  const vol = Number(volumeSlider.value);
  muteBtn.textContent = vol === 0 ? "🔇" : "🔊";
  if (isLiveKey(currentStation) && liveAudio) {
    liveAudio.muted = vol === 0;
    liveAudio.volume = vol;
    return;
  }
  if (!ytPlayer) return;
  ytPlayer.setVolume(vol * 100);
  ytPlayer.unMute();
});

muteBtn.addEventListener("click", () => {
  if (isLiveKey(currentStation) && liveAudio) {
    liveAudio.muted = !liveAudio.muted;
    muteBtn.textContent = liveAudio.muted || liveAudio.volume === 0 ? "🔇" : "🔊";
    return;
  }
  if (!ytPlayer) return;
  if (ytPlayer.isMuted()) {
    ytPlayer.unMute();
    muteBtn.textContent = "🔊";
  } else {
    ytPlayer.mute();
    muteBtn.textContent = "🔇";
  }
});

// ---------- playlist panel ----------

function renderPlaylist() {
  playlistList.innerHTML = "";

  // station tabs
  let tabs = playlistPanel.querySelector(".playlist-tabs");
  if (!tabs) {
    tabs = document.createElement("div");
    tabs.className = "playlist-tabs";
    playlistPanel.insertBefore(tabs, playlistList);
  }
  tabs.innerHTML = "";

  pickerKeys().forEach((key) => {
    const tab = document.createElement("button");
    tab.className = `playlist-tab${key === panelStation ? " active" : ""}`;
    tab.textContent = stationEntry(key).label;
    tab.addEventListener("click", () => {
      panelStation = key;
      renderPlaylist();
    });
    tabs.appendChild(tab);
  });

  // Keep live radios at the start of the tab strip. Only nudge if the
  // active tab is completely out of view (e.g. a music station further right).
  const activeTab = tabs.querySelector(".playlist-tab.active");
  if (activeTab) {
    requestAnimationFrame(() => {
      const tabLeft = activeTab.offsetLeft;
      const tabRight = tabLeft + activeTab.offsetWidth;
      const viewLeft = tabs.scrollLeft;
      const viewRight = viewLeft + tabs.clientWidth;
      if (tabRight > viewRight) {
        scrollElementTo(tabs, tabLeft - 12);
      } else if (tabLeft < viewLeft) {
        scrollElementTo(tabs, tabLeft - 12);
      }
    });
  }

  if (isLiveKey(panelStation)) {
    LIVE_RADIOS[panelStation].streams.forEach((stream, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="playlist-index">${String(index + 1).padStart(2, "0")}</span>
        <span>
          <span class="playlist-song-title"></span><br>
          <span class="playlist-song-meta"></span>
        </span>
      `;
      li.querySelector(".playlist-song-title").textContent = stream.title;
      li.querySelector(".playlist-song-meta").textContent = `${stream.artist} • ${stream.year}`;
      li.addEventListener("click", () => {
        if (panelStation !== currentStation || liveIndex !== index) {
          switchStation(panelStation, true, index);
        } else if (liveAudio && liveAudio.paused) {
          liveAudio.play().catch(() => playLiveIndex(true));
        }
        closePlaylistPanel();
      });
      playlistList.appendChild(li);
    });
    highlightActiveSong(panelStation === currentStation ? liveIndex : -1);
    return;
  }

  STATIONS[panelStation].songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="playlist-index">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <span class="playlist-song-title"></span><br>
        <span class="playlist-song-meta"></span>
      </span>
    `;
    li.querySelector(".playlist-song-title").textContent = song.title || (trackMetaCache[song.id] ? trackMetaCache[song.id].title : "Loading…");
    li.querySelector(".playlist-song-meta").textContent = song.artist
      ? `${song.artist} • ${song.year}`
      : (trackMetaCache[song.id] ? trackMetaCache[song.id].author : "");

    // lazily fetch real title/artist for playlist-added tracks
    if (!song.artist && !trackMetaCache[song.id]) {
      loadTrackMeta(song.id).then((m) => {
        if (!m) return;
        li.querySelector(".playlist-song-title").textContent = m.title;
        li.querySelector(".playlist-song-meta").textContent = m.author;
      });
    }
    li.addEventListener("click", () => {
      if (panelStation !== currentStation) {
        switchStation(panelStation, true, index);
      } else if (ytPlayer && ytPlayer.playVideoAt) {
        // map the canonical list position to the (possibly shuffled) queue
        const queueIndex = playOrder
          ? playOrder.findIndex((s) => s.id === song.id)
          : index;
        ytPlayer.playVideoAt(Math.max(queueIndex, 0));
      }
      closePlaylistPanel();
    });
    playlistList.appendChild(li);
  });

  highlightActiveSong(panelStation === currentStation && ytPlayer && ytPlayer.getPlaylistIndex ? ytPlayer.getPlaylistIndex() : -1);
}

function setPlaylistOpen(open) {
  playlistPanel.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  playlistPanel.setAttribute("aria-hidden", open ? "false" : "true");
  if ("inert" in playlistPanel) {
    playlistPanel.inert = !open;
  }
  document.body.style.overflow = open ? "hidden" : "";
}

function openPlaylistPanel() {
  panelStation = currentStation;
  renderPlaylist();
  setPlaylistOpen(true);
}

function closePlaylistPanel() {
  setPlaylistOpen(false);
}

playlistToggle.addEventListener("click", openPlaylistPanel);
navSongs.addEventListener("click", (e) => { e.preventDefault(); openPlaylistPanel(); });
navPlaylists.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  if (stationSelect && window.matchMedia("(min-width: 641px)").matches) {
    stationSelect.focus();
  }
});
closePlaylist.addEventListener("click", closePlaylistPanel);
overlay.addEventListener("click", closePlaylistPanel);
if ("inert" in playlistPanel) playlistPanel.inert = true;

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (playlistPanel.classList.contains("open")) {
    closePlaylistPanel();
  }
  if (mobileDrawer && mobileDrawer.classList.contains("open")) {
    mobileDrawer.classList.remove("open");
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
    mobileDrawer.setAttribute("aria-hidden", "true");
  }
});

// ---------- listener counter ----------
// REAL "listening now": every visitor registers once per 5-minute window via
// the free Abacus counter API (abacus.jasoncameron.dev, no key needed), and the
// badge shows the real number of visitors in the last 10 minutes. If the API
// can't be reached, it falls back to a gentle simulated drift so the badge is
// never empty.
const COUNTER_NS = "sarvam-anityam"; // counter namespace (change if you fork)
const BUCKET_MS = 5 * 60 * 1000;     // presence window
const LISTENERS_FALLBACK_MIN = 187;
const LISTENERS_FALLBACK_MAX = 412;

const listenersCountEl = document.getElementById("listenersCount");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let listenerCount = randomInt(LISTENERS_FALLBACK_MIN, LISTENERS_FALLBACK_MAX);

function bucketId(offset = 0) {
  return `presence-${Math.floor(Date.now() / BUCKET_MS) - offset}`;
}

async function abacus(op, key) {
  const res = await fetch(`https://abacus.jasoncameron.dev/${op}/${COUNTER_NS}/${key}`);
  return res.ok ? res.json() : null;
}

// count this visitor once per window (localStorage prevents refresh inflation)
function registerPresence() {
  const current = bucketId(0);
  try {
    if (localStorage.getItem("sa-presence") === current) return;
    localStorage.setItem("sa-presence", current);
  } catch (e) {
    /* storage unavailable (private mode) — hit anyway */
  }
  abacus("hit", current).catch(() => {});
}

async function updateListenerCount() {
  registerPresence();
  try {
    const [cur, prev] = await Promise.all([
      abacus("get", bucketId(0)),
      abacus("get", bucketId(1))
    ]);
    const real = ((cur && cur.value) || 0) + ((prev && prev.value) || 0);
    if (real > 0) {
      listenersCountEl.textContent = real.toLocaleString();
      return;
    }
  } catch (e) {
    /* API unreachable — fall back to drift below */
  }

  const step = randomInt(-12, 12); // drift instead of jump
  listenerCount = Math.min(LISTENERS_FALLBACK_MAX, Math.max(LISTENERS_FALLBACK_MIN, listenerCount + step));
  listenersCountEl.textContent = listenerCount.toLocaleString();
}

updateListenerCount();
setInterval(updateListenerCount, 60 * 1000);

// ---------- IST clock (12-hour format + date, always Asia/Kolkata) ----------

const clockTimeEl = document.getElementById("clockTime");
const clockSecondsEl = document.getElementById("clockSeconds");
const clockAmPmEl = document.getElementById("clockAmPm");
const clockDateEl = document.getElementById("clockDate");

function updateClock() {
  const now = new Date();

  const timeParts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).formatToParts(now);

  const get = (type) => timeParts.find((p) => p.type === type)?.value || "";
  clockTimeEl.textContent = `${get("hour")}:${get("minute")}`;
  if (clockSecondsEl) clockSecondsEl.textContent = `:${get("second")}`;
  clockAmPmEl.textContent = get("dayPeriod").toUpperCase();

  clockDateEl.textContent = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
}

updateClock();
setInterval(updateClock, 1000);
