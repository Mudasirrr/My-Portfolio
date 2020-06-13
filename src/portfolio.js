/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 1.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Mudasir Hussain",
  nickname: "Zosn",
  subTitle:
		"A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/file/d/16jkoAS0_ZUXrGFTrbzsfKJKaKTKCiWoC/view?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/Mudasirrr",
	linkedin: "https://www.linkedin.com/in/mudasir-hussain-a88804166/",
	gmail: "hmudasir714@gmail.com",
	gitlab: "https://gitlab.com/",
	facebook: "https://web.facebook.com/mudasir.hussain.1671897",
	twitter: "https://twitter.com/",
	instagram: "https://www.instagram.com/"
};

const skills = {
  data: [
    {
      title: "BLockchain Development",
      imagePath: "data_science.svg",
      skills: [
        "⚡ Developing highly scalable products on BLockchain use cases",
        "⚡ Experience of working with  Decentralize Application(DAPPs)",
        "⚡ Devoping ERC20 and ERC721 token"
      ],
      softwareSkills: [
        {
          skillName: "Ethereum BLockchain",
          fontAwesomeClassname: "fa-diamond",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Crypto Currency",
          fontAwesomeClassname: "fa-star",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "Smart Contract",
          fontAwesomeClassname: "fa-dollar",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "web3.js",
          fontAwesomeClassname: "fa-sticky-note-o",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "ERC20/ERC721 TOKEN",
          fontAwesomeClassname: "fa-qrcode",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },




    {
      title: "Full Stack Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡Developing highly scalable products on MERN Stack ",
        "⚡Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express ,MongoDb",
        "⚡ Devoping Portfolios, Static Websites, Dynamic Website "
      ],
      softwareSkills: [

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "fa-try",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Redux.j",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        }
      ]
    },




    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],

      softwareSkills: [{
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },,
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },


    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.svg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Comsats University Islamabad",
      subtitle: "Software Engineering",
      logo_path: "COMSATS.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied  software engineering subjects like C++, Java,Web Engineering, DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Blockchain, and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in University. I have received award from respected director for consistently best performance in academics."
      ],
      website_link: "http://www.comsats.edu.pk/"
    },
    {
      title: "ModernAge Public School & College Abbottabad",
      subtitle: "Matric & ICS",
      logo_path: "maps.jpeg",
      alt_name: "IIITDM Kurnool",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied  Matric & ICS subjects like Computer Science, Mathmatic, Physics,English etc.",
        "⚡ Apart from this, I have done courses on Programming, and done Certification on Chess Game, Squash, Vollybad and Bosket Ball.",
        "⚡ I was selected for Many Academic and Sports Compitation 10% of students in college. I have received award from respected Principle for consistently best performance in academics ,Programming and Sports."
      ],
      website_link: "http://www.maps.edu.pk/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Blockchain Specialization",
			subtitle: "University at Buffalo & The State University of New York",
			logo_path: "block11.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/5LX7TUGH858L",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Full Stack Developement Specialization",
			subtitle: "The Hong Kong University of Science and Technology",
			logo_path: "mern2.jpeg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/D7SUAJRFMNE7",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title:"IBM Blockchain Foundation for Developers",
			subtitle: "- IBM Training",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/PYFAXB29USSL",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Blockchain Basics",
			subtitle: "-University at Buffalo and The StateUniversity of New Yor",
			logo_path: "blockpng.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/K85EJMFJ99GF",
			alt_name: "IBM",
			color_code: "purple"
		},
		{
			title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
			subtitle: "- Hong Kong University of Science & Technology",
			logo_path: "bootstrap.jpg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/YLU6NJVQTMBP",
			alt_name: "Microsoft",
			color_code: "#D83B0199"
		},
		{
			title: "Front-End Web Development with React",
			subtitle: "- Hong Kong University of Science & Technology",
			logo_path: "react.jpg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/VRP2HM8SXCQ7",
			alt_name: "IBM",
			color_code: "black"
		},
		{
			title: "Multiplatform Mobile App Development with React Native",
			subtitle: "- Hong Kong University of Science & Technology",
			logo_path: "reactnative.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/DE6SFANRMJ6F",
			alt_name: "Google",
			color_code: "black"
		},
		{
			title: "Server-side Development with NodeJS, Express and MongoDB",
			subtitle: "- Laurence Moroney",
			logo_path: "mern2.jpeg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/U5TQSNDPTGXX",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "HTML, CSS, and Javascript for Web Developers",
			subtitle: "- Johns Hopkins University",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5XQATDE6RZLU",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		},
		{
			title: "Interactivity with JavaScript",
			subtitle: "- University of Michigan",
			logo_path: "js.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/4SKLS92ER2BC",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Transacting on the Blockchain",
			subtitle: "- `INSEAD` The Business School for the World",
			logo_path: "blockpng.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/JHC27SEPUE49",
			alt_name: "GCP",
			color_code: "red"
		},
		{
			title: "Introduction to the Blockchain",
			subtitle: "-  `INSEAD` The Business School for the World",
			logo_path: "blockpng.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/A4PWMYGNFV2G",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Blockchain Platform",
			subtitle: "-  The State University of New York",
			logo_path: "blockpng.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/ERE4GJU56Y4G",
			alt_name: "GCP",
			color_code: "purple"
		},
		{
			title: "Decentralize Application (DAPP)",
			subtitle: "-  The State University of New York",
			logo_path: "ethereum1.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/6LA7DZRAEXHJ",
			alt_name: "GCP",
			color_code: "pink"
		},
		{
			title: "Smart Contracts",
			subtitle: "-  The State University of New York",
			logo_path: "ethereum1.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/L3Q6J3X3U86M",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Python Data Structures",
			subtitle: "-University of Michigan",
			logo_path: "python.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/THGSSKMQ4UPE",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		},
		{
			title: "Python Basics",
			subtitle: "- University of Michigan",
			logo_path: "python.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/D4MHYJCEQZGM",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Writing Professional Emails in English",
			subtitle: "- Georfia Institute of Technology",
			logo_path: "communication2.png",
			certificate_link:
            "https://www.coursera.org/account/accomplishments/certificate/QNLSE54KJNUP",
          alt_name: "GCP",
          color_code: "#4285F499"
        
		}
    ,
		{
			title: "Academic Listening and Note-Taking",
			subtitle: "- University of California",
			logo_path: "communication2.png",
			certificate_link:
            "https://www.coursera.org/account/accomplishments/verify/TBHABQFKJDKC/",
          alt_name: "GCP",
          color_code: "#4285F499"
        
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Blockchain Certification",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  link: "https://com",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+92-3060205253",
  email_address: "hmudasir714@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
