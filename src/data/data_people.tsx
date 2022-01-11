const ECESS_MEMBERS = [
    {
        name: "Ryan Villarreal",
        major: "Computer Engineering",
        hometown: "Oswego, Illinois",
        graduation: "May 2022",
        email: "villar10@purdue.edu",
        picture: 'people/Ryan_Villarreal.jpeg',
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 36200",
                board_position: "President",
                quote: "N/A	The risk I took was calculated, but man, am I bad at math."
            }
        },
        links: [
            {'name': 'Linkedin', link: 'https://www.linkedin.com/in/ryan-villarreal/'},
        ]
    },
    {
        name: 'Sara Hui',
        picture: 'people/sarahui.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        email: "hui12@purdue.edu",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sara-hui-purdue/'},
        ],
        ecess_board_position: "Ambassador",
        ecess_organization: {
            "Ambassadors": {
                quote: 'I exploded my capacitor in 20007. Sad but true.',
                clubs: ["President of ECEA"],
            },
            "wece": undefined,
            "ECESS": {
                board_position: "ECE Ambassador Chair",
                fav_class: "ECE 44000",
                quote: "Roll with the punches!"
            }
        },
    },
    {
        name: 'Altay Atik',
        picture: 'people/altayatik.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2023',
        email: "aatik@purdue.edu",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/altayaskinatik/'},
            {'name': 'Personal', 'link': 'http://www.altayatik.com/'},
        ],
        ecess_board_position: "Spark",
        ecess_organization: {
            "Ambassadors": {
                quote: 'To be, or not to be',
                clubs: ["IEEE", "Purdue MIND", "Purdue ARC"],
            },
            "ECESS": {
                quote: "Simple can be harder than complex.",
                board_position: "Spark Chair",
                fav_class: "ECE 27000"
            },
            "Spark": {
                position: "President"
            }
        },
        ambassador: true
    },
    {
        name: 'Alyssa Delouise',
        email: "adelouis@purdue.edu",
        picture: 'people/alyssadelouise.jpg',
        major: 'Electrical Engineering',
        hometown: "Old Bridge, NJ",
        graduation: 'December 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/alyssadelouise/'},
        ],
        ecess_board_position: "Publicity",
        ecess_organization: {
            "Ambassadors": {
                clubs: ["Phi Sigma Rho" , "Higher Ground Dance Co.", "Purdue Society of Women Engineers"],
                quote: "Came for the starting salary. Stayed for the therapy group.",
            },
            "wece": undefined,
            "ECESS": {
                board_position: "Publicity Chair",
                quote: "Let courage carry you",
                fav_class: "ECE 27000"
            }
        },
    },
    {
        name: 'Denae Galloway',
        picture: 'people/denaegalloway.jpg',
        email: "gallowd@purdue.edu",
        major: 'Electrical Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/denae-galloway-981185193/'}
        ],
        ecess_board_position: "Vice President",
        ecess_organization: {
            "Ambassadors": undefined,
            "wece": undefined,
            "ECESS": {
                board_position: "Vice President",
                quote: "Believe you can and you're halfway there.",
                fav_class: "ECE 27000",
            }
        },
    },
    {
        name: 'Justin Zhang',
        picture: 'people/justinzhang.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        ecess_organization: {"Ambassadors": {
                quote: 'Hold up. I got to take a picture of this. Someone just exploded a capacitor in 20007.',
            }},
        links: [
            {'name': 'Linkedin', 'link': `https://www.linkedin.com/in/justin-zhang-purdue/`},
            {'name': 'Personal', 'link': 'https://www.purdue-ecess.org/justin'}
        ]
    },
    {
        name: 'Matthew Wen',
        picture: 'people/matthewwen.jpeg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        ecess_organization: {
            "Ambassadors": {
                quote: 'I spend around like 200 hours a year on Spotify. Such a great rate of return.',
            },
            "ECESS": {
                board_position: "Software Co-Chair",
                fav_class: "ECE 468",
                quote: "I'm tired all the time!!"
            }
        },
        links: [
            {'name': 'Linkedin', 'link': `https://www.linkedin.com/in/mattwen89/`},
            {'name': 'Personal', 'link': `https://www.matthewwen.com`},
            {'name': 'GitHub', 'link': `https://www.github.com/matthewwen`},
        ]
    },
    {
        name: 'Michael Worthington',
        picture: 'people/michaelworthington.jpg',
        major: 'Electrical Engineering',
        graduation: 'December 2023',
        ecess_organization: {"Ambassadors": undefined},
        links: [
            {'name': 'linkedin', link: 'https://www.linkedin.com/in/j-michael-worthington/'},
        ]
    },
    {
        name: 'Naveen Vivek',
        picture: 'people/naveenvivek.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        hometown: "Chennai, India",
        email: "vivek@purdue.edu",
        clubs: ["Power Engineering Society" , "Boilermaker Consulting Group", "CAM2 Research Group"],
        ecess_organization: {
            "Ambassadors": {
                quote: "Happiness is having your capacitor never explode in ECE 20007.",
            },
            "ECESS": {
                fav_class: "ECE 27000",
                board_position: "Software Co-Chair",
                quote: "Quotes are overrated"
            }
        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/naveen-vivek/'},
        ]
    },
    {
        name: 'Sam Dlott',
        picture: 'people/samdlott.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        clubs: ["Purdue Student Engineering Foundation" , "All-American Marching Band", "Purdue Jazz Bands","3D Printing Club", "Cary Club"],
        ecess_organization: {
            "Ambassadors": {
                quote: "My calendar has too many colors. It's kind of pretty.",
            },
        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sdlott/'},
        ]
    },
    {
        name: 'Grace Ulmer',
        picture: 'people/graceulmer.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        ecess_organization: {"Ambassadors": undefined, "wece": undefined},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/grace-ulmer-056278179/'},
        ]
    },
    {
        name: 'Heath Lovell',
        picture: 'people/heathlovell.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        ecess_organization: {"Ambassadors": {
                clubs: ["Eta Kappa Nu" , "IEEE", "Intramural Soccer", "3D Printing Club"],
            }},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/heath-aaron-lovell/'},
        ]
    },
    {
        name: 'Jason Chamness',
        picture: 'people/jasonchamness.jpg',
        major: 'Computer Engineering',
        ecess_organization: {"Ambassadors": undefined},
        graduation: 'May 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/jason-chamness-447b9516b/'},
        ]
    },
    {
        name: 'Jennifer Gutman',
        picture: 'people/jennifergutman.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/jennifer-gutman-34054a17a/'},
        ]
    },
    {
        name: 'Juan Carlos G.',
        picture: 'people/juancarlos.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/juan-carlos-g-9a831012b/'},
        ]
    },
    {
        name: 'Kobe Martin',
        picture: 'people/kobemartin.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/kobem/'},
        ]
    },
    {
        name: 'Yueting Mary Zhao',
        picture: 'people/maryzhao.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2023',
        clubs: ["Chinese Engineering Student Council" , "Delta Phi Lambda"],
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/yueting-mary-zhao/'},
        ]
    },
    {
        name: 'Mohamed Ibrahim',
        picture: 'people/mohamedibrahim.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        ecess_organization: {"Ambassadors": {
                clubs: ["IEEE"],
                quote: "Have to be totally honest with you, you are awesome!!"
            }},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/mohamed-ibrahim-934768177/'},
        ]
    },
    {
        name: 'Noah Thoma',
        picture: 'people/noahthoma.jpg',
        major: 'Computer Engineering',
        ecess_organization: {"Ambassadors": undefined},
        graduation: 'December 2022',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/noahthoma/'},
        ]
    },
    {
        name: 'James Donnelly',
        picture: 'people/jamesdonnelly.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        ecess_organization: {"Ambassadors": {
                clubs: ["Eta Kappa Nu" , "IEEE" , "Purdue Jazz Bands", "ECEA Web Dev"],
            }},
        links: [
            {'name': 'Linkedin', 'link': 'http://www.linkedin.com/in/jamesfdonnelly'},
        ]
    },
    {
        name: 'Rylee Benes',
        picture: 'people/ryleebenes.jpg',
        major: 'Computer Engineering',
        graduation: 'May 2022',
        ecess_organization: {"Ambassadors": {
                quote: "Also exploded my capacitor in ECE 20007",
                clubs: ["Phi Sigma Rho"],
            }},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/rylee-benes/'},
        ]
    },
    {
        name: 'Sihun Kim',
        picture: 'people/sihunkim.jpg',
        major: 'Electrical Engineering',
        ecess_organization: {"Ambassadors": undefined},
        graduation: 'December 2023',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/sihun-kim/'},
        ]
    },
    {
        name: 'Warren Xiong',
        picture: 'people/warrenxiong.jpg',
        major: 'Computer Engineering',
        ecess_organization: {"Ambassadors": {
                quote: 'No one knows you exploded a capacitor in 20007 if you did it online.',
            }},
        graduation: 'May 2024',
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/warrenjxiong/'},
        ]
    },
    {
        name: 'Vikram Srivastava ',
        picture: 'people/vikramsrivastava.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        ecess_organization: {"Ambassadors": undefined},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/vikramsrivastava1/'},
        ]
    },
    {
        name: 'Amita Pandey',
        quote: 'Never exploded my capacitor in 20007 and still don\'t know how I didn\'t.',
        picture: 'people/amitap.jpg',
        major: 'Computer Engineering',
        graduation: 'December 2021',
        email: "pandey26@purdue.edu",
        hometown: "Fort Collins, CO",
        ecess_organization: {
            "ECESS": {
                board_position: "Community Outreach Chair",
                fav_class: "ECE 40400",
                quote: "I'm not lazy. I prefer to call it selective participation."
            },
            "Ambassadors": {
                retired: true
            }

        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/amita-pandey/'},
        ]
    },
    {
        name: 'Brady Smith',
        picture: 'people/bradysmith2.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2023',
        ecess_organization: {
            "Ambassadors": {
                clubs: ["Purdue Women in ECE"],
            },
            "wece": undefined,
            "Spark": {
                position: "Vice President"
            }
        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/bradyeesmith/'},
        ]
    },
    {
        name: 'Elizabeth Thomas',
        picture: 'people/elizabeththomas.jpg',
        major: 'Electrical Engineering',
        graduation: 'May 2022',
        ecess_organization: {
            "Ambassadors": undefined,
            "wece": undefined
        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/elizabeth-thomas-768b0b143/'},
        ]
    },
    {
        name: 'Zach Vander Missen',
        picture: 'people/zachvandermissen.jpg',
        major: 'Electrical Engineering',
        graduation: 'December 2021',
        ecess_organization: {"Ambassadors": undefined},
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/zach-vander-missen-15711256/'},
        ]
    },
    {
        name: "Andrew Lake",
        email: "lake14@purdue.edu",
        picture: "people/Andrew_Lake.png",
        major: "Electrical Engineering",
        graduation: "May 2022",
        hometown: "Flint, Michigan",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 305",
                board_position: "Faculty Outreach Chair",
                quote: "Don't force it, just get a bigger hammer."
            }
        },
        links: [
            {name: 'Linkedin', link: "https://www.linkedin.com/in/andrewlake2000/"}
        ]
    },
    {
        name: "Alexandra E. Sichterman",
        email: "asichter@purdue.edu",
        picture: "people/Alexandra_Sichterman.jpeg",
        major: "Computer Engineering",
        graduation: "May 2022",
        hometown: "Muscatine, IA",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 36200",
                board_position: "Secretary, Treasurer",
                quote: "There are night owls and there are early birds, but I am a permanently exhausted pigeon."
            }
        },
        links: [
            {name: 'Linkedin', link: 'https://www.linkedin.com/in/asichterman/'}
        ]
    },
    {
        name: "Edmund Leung",
        picture: "people/Edmund_Leung.png",
        email: "leung55@purdue.edu",
        major: "Electrical Engineering",
        graduation: "May 2024",
        hometown: "Olmsted Falls, Ohio",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 270",
                board_position: "Faculty Outreach Co-chair",
                quote: {
                    msg: "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?",
                    author: "Michael Scott"
                }
            }
        },
        links: [
            {name: 'Linkedin', link: 'https://www.linkedin.com/in/edmund-leung-4511191b7/'}
        ]
    },
    {
        name: "Hope Post",
        picture: "people/Hope_Post.png",
        email: "posth@purdue.edu",
        major: "Computer Engineering",
        graduation: "May 2023",
        hometown: "Westford, Massachusetts",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 20875",
                board_position: "WECE Co-Chair",
                quote: {
                    msg: "Ask for what you want and be prepared to get it",
                    author: "Maya Angelou"
                },
            },
            "wece": {
                position: "Chair"
            }
        },
        links: [
            {name: 'Linkedin', link: 'https://www.linkedin.com/in/hope-post/'}
        ]
    },
    {
        name: "Samantha Unger",
        picture: "people/Samantha_Unger.jpeg",
        email: "unger12@purdue.edu",
        major: "Computer Engineering",
        graduation: "May 2022",
        hometown: "Jacksonville, Fl",
        ecess_organization: {
            "ECESS": {
                quote: "Shoot for the moon and if you miss you’ll end up amongst the stars!",
                board_position: "WECE Co-Chair",
                fav_class: "ECE 362"
            },
            "wece": {
                position: "Chair"
            }
        },
        links: [
            {name: 'Linkedin', link: 'https://www.linkedin.com/in/samantha-unger12/'}
        ]
    },
    {
        name: "Claire Poukey",
        email: "cpoukey@purdue.edu",
        picture: "people/Claire_Poukey.jpg",
        major: "Computer Engineering",
        graduation: "December 2023",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 26400",
                board_position: "Multicultural Affairs Chair",
                quote: {
                    msg: "The city is flying, we're fighting an army of robots... and I have a bow and arrow. None of this makes sense.",
                    author: "Clint Barton (MCU)"
                }
            }
        },
        hometown: "Highland Park, IL",
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/clairepoukey/'},
        ]
    },
    {
        name: "Jack Brewer",
        picture: "people/Jack_Brewer.png",
        email: "brewe116@purdue.edu",
        major: "Computer Engineering",
        hometown: "Saint Louis, Missouri",
        graduation: "May 2024",
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 264",
                quote: "Always Max Jump",
                board_position: "Social Chair"
            }
        },
    },
    {
        name: "Akshaj Prasannakumar",
        picture: "people/Akshaj_Prasannakumar.png",
        email: "aprasan@purdue.edu",
        major: "Computer Engineering",
        graduation: "May 2022"	,
        ecess_organization: {
            "ECESS": {
                fav_class: "ECE 337",
                board_position: "Community Outreach Co-Chair",
                quote: {
                    msg: "Do or do not. There is no try.",
                    author: "Yoda"
                }
            }
        },
        links: [
            {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/akshaj-prasannakumar-733704176/'},
        ]
    },
    {
        map_name: "Giselle",
        name: "Giselle Salina-Bender",
        picture: 'people/Giselle_Bender.jpg',
        hometown: "San Juna, PR",
        email: "gsalina@purdue.edu",
        ecess_organization: {
            "ECESS": {
                fav_class: 'ECE 29401',
                board_position: "Advisor",
                quote: {
                    msg: "For there is ALWAYS light, if only we are brave enough to see it, if only we are brave enough to BE it.",
                    author: "Amanda Gorman"
                }
            }
        },
    },
    {
        name: "Leigh Ann",
        picture: 'people/Leigh_Ann.png',
        email: "lpittsfo@purdue.edu",
        hometown: "Middletown, IN",
        ecess_organization: {
            "ECESS": {
                board_position: "Advisor",
                fav_class: "ECE 29401",
                quote: "You change the world when you change your mind"
            }
        },
    },
    {
        name: "Waewta Saw",
        picture: "people/waewtasaw.jpeg",
        graduation: "May 2022",
        ecess_organization: {
            "Spark": {
                position: "270/362 Communications"
            }
        }
    },
    {
        name: "Dhanya Prem",
        ecess_organization: {
            "Spark": {
                position: "Corporate Partner Communications"
            }
        },
        picture: "people/dhanyaprem.jpg",
        graduation: "December 2022"
    },
    {
        name: "Samantha Dreussi",
        ecess_organization: {
            "Spark": {
                position: "Teams Communications"
            }
        },
        graduation: "May 2024",
        picture: "people/samanthadreussi.jpg"
    },
    {
        name: "Raghav Kumar",
        ecess_organization: {
            "Spark": {
                position: "Teams Communications"
            }
        },
        graduation: "May 2024",
        picture: "people/raghavkumar.jpg"
    },
    {
        name: "Roshni Sharma",
        ecess_organization: {
            "Spark": {
                position: "Event Support"
            }
        },
        graduation: "May 2023",
        picture: "people/roshnisharma.jpg"
    },
    {
        name: "Nahush Walvekar ",
        ecess_organization: {
            "Spark": {
                position: "Event Support"
            }
        },
        graduation: "May 2024",
        picture:  "people/nahushwalvekar.jpg"
    },
    {
        name: "Vivek Panchagnula",
        ecess_organization: {
            "Spark": {
                position: "Event Support"
            }
        },
        graduation: "May 2025",
        picture: "people/vivekpanchagnula.jpeg"
    },
]
export let ECESS_MAP = {};
ECESS_MEMBERS.forEach((item) => {
    ECESS_MAP[item.map_name || item.name] = item;
})
export function getPictureUrl(name) {
    const ambassador = ECESS_MAP[name]
    return ambassador ? ambassador.picture: undefined;
}
export function getMembersFromOrganization(organization, retired=false) {
    const response = [];
    ECESS_MEMBERS.forEach((item) => {
        if (item.ecess_organization) {
            if (organization in item.ecess_organization) {
                if ( (organization.retired && retired) || (!retired && organization.retired === undefined)) {
                    response.push(item);
                }
            }
        }
    });
    return response;
}
export default ECESS_MEMBERS;
