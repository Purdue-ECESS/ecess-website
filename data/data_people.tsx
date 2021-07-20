const AMBASSADORS = [
    {
        name: 'Sara Hui',
        picture: '/static/people/sarahui.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        quote: 'I exploded my capacitor in 20007. Sad but true.',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sara-hui-purdue/'},
        ]
    },
    {
        name: 'Altay Atik',
        picture: '/static/people/altayatik.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2023',
        quote: "Brooke Parks taught me to Work Smarter Not Harder.",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/altayaskinatik/'},
            {'name': 'Personal', 'link': 'http://www.altayatik.com/'}
        ]
    },
    {
        name: 'Alyssa Delouise',
        picture: '/static/people/alyssadelouise.jpg',
        major: 'Electrical Engineering',
        graduation: 'December 2022',
        quote: "Came for the starting salary. Stayed for the therapy group.",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/alyssadelouise/'},
        ]
    },
    {
        name: 'Denae Galloway',
        picture: '/static/people/denaegalloway.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/denae-galloway-981185193/'}
        ]
    },
    {
        name: 'Justin Zhang',
        picture: '/static/people/justinzhang.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        quote: 'Hold up. I got to take a picture of this. Someone just exploded a capacitor in 20007.',
        links: [
            {'name': 'Linkedin', 'link': `https://www.linkedin.com/in/justin-zhang-purdue/`},
        ]
    },
    {
        name: 'Matthew Wen',
        picture: '/static/people/matthewwen.jpeg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        quote: 'I spend around like 200 hours a year on Spotify. Such a great rate of return.',
        links: [
            {'name': 'Linkedin', 'link': `https://www.linkedin.com/in/mattwen89/`},
            {'name': 'Personal', 'link': `https://www.matthewwen.com`},
            {'name': 'GitHub', 'link': `https://www.github.com/matthewwen`},
        ]
    },
    {
        name: 'Michael Worthington',
        picture: '/static/people/michaelworthington.jpg',
        major: 'Electrical Engineering',
        graduation: 'December 2023',
        links: [
            {'name': 'linkedin', link: 'https://www.linkedin.com/in/j-michael-worthington/'},
        ]
    },
    {
        name: 'Naveen Vivek',
        picture: '/static/people/naveenvivek.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        quote: "Happiness is having your capacitor never explode in ECE 20007.",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/naveen-vivek/'},
        ]
    },
    {
        name: 'Sam Dlott',
        picture: '/static/people/samdlott.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sdlott/'},
        ]
    },
    {
        name: 'Grace Ulmer',
        picture: '/static/people/graceulmer.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/grace-ulmer-056278179/'},
        ]
    },
    {
        name: 'Heath Lovell',
        picture: '/static/people/heathlovell.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/heath-aaron-lovell/'},
        ]
    },
    {
        name: 'Jason Chamness',
        picture: '/static/people/jasonchamness.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/jason-chamness-447b9516b/'},
        ]
    },
    {
        name: 'Jennifer Gutman',
        picture: '/static/people/jennifergutman.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/jennifer-gutman-34054a17a/'},
        ]
    },
    {
        name: 'Juan Carlos G.',
        picture: '/static/people/juancarlos.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/juan-carlos-g-9a831012b/'},
        ]
    },
    {
        name: 'Kobe Martin',
        picture: '/static/people/kobemartin.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/kobem/'},
        ]
    },
    {
        name: 'Yueting Mary Zhao',
        picture: '/static/people/maryzhao.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/yueting-mary-zhao/'},
        ]
    },
    {
        name: 'Mohamed Ibrahim',
        picture: '/static/people/mohamedibrahim.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/mohamed-ibrahim-934768177/'},
        ]
    },
    {
        name: 'Noah Thoma',
        picture: '/static/people/noahthoma.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/noahthoma/'},
        ]
    },
    {
        name: 'James Donnelly',
        picture: '/static/people/jamesdonnelly.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'http://www.linkedin.com/in/jamesfdonnelly'},
        ]
    },
    {
        name: 'Rylee Benes',
        picture: '/static/people/ryleebenes.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/rylee-benes/'},
        ]
    },
    {
        name: 'Sihun Kim',
        picture: '/static/people/sihunkim.jpg',
        major: 'Electrical Engineering',
        graduation: 'December 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sihun-kim/'},
        ]
    },
    {
        name: 'Warren Xiong',
        quote: 'No one knows you exploded a capacitor in 20007 if you did it online.',
        picture: '/static/people/warrenxiong.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2024',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/warrenjxiong/'},
        ]
    },
    {
        name: 'Vikram Srivastava ',
        picture: '/static/people/vikramsrivastava.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/vikramsrivastava1/'},
        ]
    },
    {
        name: 'Amita Pandey',
        quote: 'Never exploded my capacitor in 20007 and still don\'t know how I didn\'t.',
        picture: '/static/people/amitap.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/amita-pandey/'},
        ]
    },
    {
        name: 'Brady Smith',
        picture: '/static/people/bradysmith.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sihun-kim/'},
        ]
    },
    {
        name: 'Elizabeth Thomas',
        picture: '/static/people/elizabeththomas.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/elizabeth-thomas-768b0b143/'},
        ]
    },
]
export default AMBASSADORS;