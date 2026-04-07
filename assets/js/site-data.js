import { allAwards, homeAwards } from "/awards/awards-data.js";
import { selectedPublications, publicationSections } from "/publications/publications-data.js";
import { setups } from "/setups/setups-data.js";

export const siteData = {
    siteTitle: "Yuhao Chen",
    navigation: [
        { id: "home", label: "Home", href: "/" },
        { id: "publications", label: "Publications", href: "/publications/" },
        { id: "setups", label: "Setups", href: "/setups/" },
        { id: "awards", label: "Awards", href: "/awards/" }
    ],
    profile: {
        name: "Yuhao Chen",
        portrait: "/assets/images/photos/portrait.jpg",
        positions: [
            {
                logo: "/assets/images/badges/Princeton.png",
                text: "Ph.D. Student, Princeton University"
            }
        ],
        bio: [
            'I am a second year graduate student at Princeton ECE, working at Smart Wireless Agile Networks Lab advised by Prof. <a href="https://ghasempour.princeton.edu/" target="_blank" rel="noreferrer">Yasaman Ghasempour</a>. My research focuses on next-generation wireless networks.',
            'I received my M.E. degree in Electronic and Information Engineering from Tsinghua University in 2024, where I worked with Prof. <a href="https://oa.ee.tsinghua.edu.cn/dailinglong/index.html" target="_blank" rel="noreferrer">Linglong Dai</a>. Prior to that, I received my B.E. degree in Electronic Information Science and Technology from Tsinghua University in 2021.'
        ],
        links: [
            {
                label: "yuhao.chen(at)princeton.edu",
                shortLabel: "\u2709",
                href: "mailto:yuhao.chen@princeton.edu"
            },
            {
                label: "Google Scholar",
                shortLabel: "\ud83c\udf93",
                href: "https://scholar.google.com/citations?user=b7rFzfgAAAAJ&hl=en"
            },
            {
                label: "LinkedIn",
                shortLabel: "\ud83d\udcbc",
                href: "https://www.linkedin.com/in/yuhao-chen-a34786305/"
            },
            {
                label: "ORCID",
                shortLabel: "ID",
                href: "https://orcid.org/0009-0008-3853-9825"
            },
            // {
            //     label: "Curriculum Vitae",
            //     shortLabel: "\ud83d\udcc4",
            //     href: "/assets/files/CV_YuhaoChen.pdf"
            // }
        ]
    },
    education: [
        {
            name: "Princeton University",
            logo: "/assets/images/badges/Princeton.png",
            position: "Ph.D. Student in Department of Electrical and Computer Engineering",
            date: "Sep. 2024 - Present"
        },
        {
            name: "Tsinghua University",
            logo: "/assets/images/badges/Tsinghua.png",
            position: "M.E. in Electronic and Information Engineering",
            date: "Sep. 2021 - Jul. 2024"
        },
        {
            name: "Tsinghua University",
            logo: "/assets/images/badges/Tsinghua.png",
            position: "B.E. in Electronic Information Science and Technology",
            date: "Sep. 2017 - Jul. 2021"
        }
    ],
    selectedPublications,
    publicationSections,
    allAwards,
    homeAwards,
    setups,
    footerHtml: '&copy; Yuhao Chen. Designed with <a href="https://chatgpt.com/codex" target="_blank" rel="noreferrer">Codex</a>.'
};
