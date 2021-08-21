const SURVEYDATA = [
    {
        name: 'Sara Hui',
        fun_fact: 'From an island, not a good swimmer. iykyk.',
        advice: 'Take your time and don’t rush through classes. It’s more enjoyable if you don’t cram all your core classes in one semester.',
        fav_project: 'Optical Heartbeat Sensor in 20008. I used in infrared sensor for heartbeat detection, a couple of filters to even the signal out, inverters, and comparators to light up an LED for each heartbeat. It was suuper cool!',
        fav_class: 'ECE 440 (Transmission of Information)! In our second lab, we were able to tune into different various radio stations around West Lafayette using USRPs. It actually puts knowledge of 301 (Signals and Systems) and 302 (Probabilistic Methods in Computer Engineering) to actual use, which made me happy that I could see a practical use of the things I learned in previous classes!',
        why_ece: "For me, I like the flexibility of ECE, while studying topics that aren't like your stereotypical engineering. Although this is one of the hardest majors, some of the people I've met around really make it worth it. There's a lot of opportunity in ECE if you're willing to go for it!"
    },
    {
        name: 'Altay Atik',
        fun_fact: 'I moderated the Spark Challenge twice!',
        advice: 'Manage your time wisely, do not just focus on academics, have a balanced life.',
        fav_project: 'ECE 20007 Final Project.',
        fav_class: 'ECE 270 because I like digital systems and how to design them.',
        why_ece: 'Electrical Engineering was always a passion and a dream for me since I was a kid. I attended multiple robotics competitions and project fairs.'
    },
    {
        name: 'Alyssa Delouise',
        fun_fact: 'I love to play guitar!',
        advice: 'Meet lots of your peers and find your study buddies. They make the hard days so much more enjoyable.',
        fav_project: "Okay I'm like a baby in the major so in ECE???? Uh that final proj for 20007 kinda went hard!!!!",
        fav_class: '20007/8 because I am new to breadboarding and am having so much fun learning.',
        why_ece: 'I always knew I wanted to be an engineer, and I found such excitement in the physical aspects of EE and everything I could possibly do at Purdue with EE.'
    },
    {
        name: 'Denae Galloway',
        fun_fact: 'I played clarinet for 7 years.',
        advice: 'Never give up, your hard work pays off in the end.',
    },
    {
        name: 'Justin Zhang',
        fun_fact: 'I can do an ollie 15% of the time.',
        advice: 'Just like practicing your ollies, you can only get good at ECE if you practice. You may not like it, but that is what peak success in ECE looks like.',
    },
    {
        name: 'Matthew Wen',
        advice: 'There are nice people in ECE. Avoid the people with superiority complexes.'
    },
    {
        name: 'Michael Worthington',
        fun_fact: 'I love playing guitar, bass, and piano.',
        advice: 'Take your classes seriously, but make sure to put effort into extracurriculars. What you do outside of class is often more useful and beneficial than what you do in your classes.',
        fav_project: 'Audio Equalizer in ECE 20007',
        fav_class: 'ECE 20001 and 20007 so far because it was interesting to learn the basics of what goes on in electronics and computers.',
        why_ece: 'I chose ECE because of the wide variety of industries and areas that you can work in and the positive future job outlook. I also chose ECE because so many areas of ECE seemed very interesting to me.'
    },
    {
        name: 'Naveen Vivek',
        fun_fact: "I've lived half my life in England and half my life in India.",
        advice: 'Connect with upperclassmen, they can provide you with advice on what classes to choose and industry insight.',
        fav_project: 'Digital Number Lock using SystemVerilog (ECE 27000).',
        fav_class: 'ECE 27000 was my favorite class, because I had never used code to describe actual hardware, and understanding digital logic made me realize I have a passion for the field.',
        why_ece: 'Growing, I always had a passion for Mathematics, and ECE requires a strong understanding of various math-heavy topics and it allows students to innovate and create within the world of numbers without losing touch of reality.'
    },
    {
        name: 'Sam Dlott',
        fun_fact: 'My highest score in a game of bowling is a 246.',
        advice: 'Give ECE your all! Purdue ECE is one of the best electrical and computer engineering programs in the country and you get out what you put in. Take the time to meet your classmates and be willing to step out of your comfort zone.',
        fav_project: '20007 Speaker!',
        fav_class: '20875 I like programming and combining it with data science, it is super cool and very useful.',
        why_ece: 'I’ve always had a passion for technology and ECE combines my love for tech with the engineering process. Being in ECE I continue to learn things that are interesting and applicable to so many things I use everyday.'
    },
    {
        name: 'Grace Ulmer',
    },
    {
        name: 'Heath Lovell',
        fav_project: 'Making a smart mirror with a Raspberry PI.',
        fav_class: 'ECE 26400 because I enjoy developing programs.',
        why_ece: 'I chose Computer Engineering because I love software along with hardware so it is the best of both worlds!'
    },
    {
        name: 'Jason Chamness',
        fun_fact: 'I play electric guitar with Purdue Jazz Bands and Boiler Brass.',
        advice: 'Be social! Working on projects with friends makes learning easier and more enjoyable. Reaching out to professors can help build professional relationships for research opportunities and recommendation letters.',
    },
    {
        name: 'Jennifer Gutman',
    },
    {
        name: 'Juan Carlos G.',
    },
    {
        name: 'Kobe Martin',
        fun_fact: 'I like eggs.',
        advice: 'Enjoy your classes.',
    },
    {
        name: 'Yueting Mary Zhao',
        fun_fact: "I once lived in Florida, but didn't enjoy the beach because I can't swim :(",
        advice: 'If you are not sure about which specific area to study, try joining a club or research, such as taking a VIP course, to find out what you like or not.',
    },
    {
        name: 'Mohamed Ibrahim',
    },
    {
        name: 'Noah Thoma',
        fun_fact: 'I enjoy rock climbing and backpacking.',
        advice: 'Join clubs/organizations that are outside of ECE, networking in other places is always a good idea.',
        fav_project: 'Data Structures final project.',
        fav_class: 'ECE 368. The programming projects were challenging in a way that really made you think. I found the problems fun to work on, and when I would eventually figure them out I felt like a genius.',
        why_ece: "I've always had an attraction to STEM, and engineering was a natural path forward. I love to problem solve, and programming is like a giant, abstract puzzle waiting to be pieced together. Plus, the tech industry is at an all time high, and Purdue is top ranking in ECE."
    },
    {
        name: 'James Donnelly',
        fun_fact: 'I play drums with Purdue Jazz Bands.',
        advice: "Don't stress! Just do your best and don't give up when things don't go well, nobody's perfect.",
        fav_project: 'Made a soccer game for my ECE 362 final project.',
        fav_class: "ECE 368. It was by far the most intensive and in depth programming class I had ever taken, and it was a real eye opener for me in terms of learning what it really meant to write programs that run effectively and efficiently. I also felt like it prepared me for any interview questions that I've received from companies.",
        why_ece: "For me it came down to balance. I was knew I wanted to do software, but I wasn't sure where I fell between Computer Science and Computer Engineering. However, Computer Engineering provided not only a fundamental engineering background, but also a whole other world with the hardware component of computers, and it was one that I wanted to have a grasp on while I was working on software. Knowing both sides of the coin, hardware and software, has made me a much more well rounded problem solver than if I was only familiar with one side."
    },
    {
        name: 'Rylee Benes',
        fun_fact: 'I played softball for 13 years.',
        advice: 'Do not be afraid to fail. All of your wins and losses will help you learn and grow as a student and a person.',
        fav_project: 'ECE 39595J Java Video Game.',
        fav_class: 'ECE 368 because it was both the most challenging, but most rewarding class I have taken at Purdue thus far.',
        why_ece: 'I have always been good at math, I enjoy technology and I love being creative. I also enjoy the challenge of a difficult major, where I have learned so much after coming to Purdue with no coding experience.'
    },
    {
        name: 'Sihun Kim',
        fun_fact: 'The founder/CEO of Robinhood, Vlad Tenev, went to my high school and was the guest speaker at our 2019 graduation ceremony.',
        advice: 'Take initiative and never settle. Take charge of your learning and college experience. Take care of your mental and physical health. Never stop trying to improve, for that is what great people do.',
        fav_project: 'Superposition Lab in ECE 20007.',
        fav_class: 'Only taken two but ECE 20001 because transistors are really cool.',
        why_ece: 'The potential is endless and there are so many applications to society.'
    },
    {
        name: 'Warren Xiong',
        fun_fact: 'My left elbow physically cannot bend as much as my right elbow.',
        advice: "Reach out to your professors and TAs, ECE is hard and confusing, don't be ashamed about getting help.",
    },
    {
        name: 'Vikram Srivastava ',
        fun_fact: 'I can play 2 games of chess at the same time, blindfolded.',
        advice: 'Develop good study and work habits as soon as possible.',
    },
    {
        name: 'Amita Pandey',
        fun_fact: 'I love watching the show Survivor.',
        advice: 'Make sure to stay on top of your work to be able to balance school and have fun!',
        fav_project: 'The speaker project in 20007 was super fun to be able to actually create the fundamentals of a speaker and learn all of what goes in to it because I love music and I love good speakers too so it was cool to see how we were able to make them',
        fav_class: 'Introduction to Computer Security would definitely have to be my favorite class because I think it is super interesting and I am really exciting to learn about hacking.',
        why_ece: 'Ive always loved technology growing up and I naturally just gravitated towards working with computers. I also love solving puzzles so I decided to take a few computer science classes and thats when I feel in love and chose to become a Computer Engineer.'
    },
    {
        name: 'Brady Smith',
        fun_fact: 'I’ve met Buddy from Cake Boss? Is that fun? Idk.',
        advice: 'Try and take summer classes they are super helpful! It’s an easy way to get ahead and lighten your course load.',
        fav_project: "Currently working on my heart rate monitor for my final project in ECE 20008. Not too much other than that but it's definitely cool to use.",
        fav_class: 'Probably ECE 270 or 20007/ 20008. Both are interesting and have cool assignments.',
        why_ece: 'It was definitely not my first choice but after talking to some students in ECE my freshman year, I decided that it would be a good fit. I am not sure what field I want to go into yet but electrical engineers are needed pretty much everywhere.'
    },
    {
        name: 'Elizabeth Thomas',
    },
    {
        name: 'Zach Vander Missen',
        fav_project: 'My ECE362 project, a live audio-synced wireless led light show system.',
        fav_class: 'ECE270-ECE362 series because the vertically integrated view from transistor to computer was fascinating and eye-opening.',
        why_ece: 'Because the problems are interesting and challenging and the hands-on aspects appeal to my interests.'
    },
]
export default SURVEYDATA;
