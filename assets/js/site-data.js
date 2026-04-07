export const siteData = {
    siteTitle: "Yuhao Chen",
    navigation: [
        { id: "home", label: "Home", href: "/" },
        { id: "publications", label: "Publications", href: "/publications/" },
        { id: "demos", label: "Demos", href: "/demos/" },
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
                shortLabel: "@",
                href: "mailto:yuhao.chen@princeton.edu"
            },
            {
                label: "Google Scholar",
                shortLabel: "GS",
                href: "https://scholar.google.com/citations?user=b7rFzfgAAAAJ&hl=en"
            },
            {
                label: "ORCID",
                shortLabel: "ID",
                href: "https://orcid.org/0009-0008-3853-9825"
            },
            {
                label: "Curriculum Vitae",
                shortLabel: "CV",
                href: "/assets/files/CV_YuhaoChen.pdf"
            }
        ]
    },
    education: [
        {
            name: "Princeton University",
            logo: "/assets/images/badges/Princeton.png",
            position: "Department of Electrical and Computer Engineering<br>Ph.D. Student",
            date: "Sep. 2024 - present"
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
    allAwards: [
        "Excellent Master Dissertation of China Institute of Communications, 2025.",
        "Excellent Master Dissertation of Tsinghua, 2024.",
        "Excellent Graduates of Beijing, 2024.",
        "The National Scholarship, 2023.",
        "The National First Prize of the 17th China Graduate Electronic Design Competition, 2022.",
        "IEEE ICC 2022 Outstanding Demo Award, 2022.",
        "Gold of the 49th International Exhibition of Inventions of Geneva, 2022.",
        "Gold of the 16th Beijing Invention Competition, 2022.",
        "Gold of the 25th National Invention Exhibition, 2021.",
        "The Grand Prize of the 11th \"Challenge Cup\" Technological Innovation Competition of Capital, 2021.",
        "Electronic Engineering \"Stars of Electronic\" Award of Tsinghua University, 2020.",
        "The Tsinghua University Excellent Comprehensive Scholarship, 2020.",
        "Excellent Student Cadre of Tsinghua Students' Union, 2019.",
        "Excellent League Cadre of Department EE, 2019.",
        "The Tsinghua University Excellent Social Work Scholarship, 2019.",
        "The Tsinghua University Excellent Art Scholarship, 2019.",
        "First Prize of the National College Students Physics Competition, 2018.",
        "The Tsinghua University Excellent Comprehensive Scholarship - SK Scholarship, 2018.",
        "The Tsinghua University Excellent Social Practice Scholarship, 2018.",
        "The Tsinghua University Excellent Social Work Scholarship, 2018."
    ],
    homeAwards: [
        { name: "Excellent Master Dissertation of China Institute of Communications", date: "2025" },
        { name: "Excellent Master Dissertation of Tsinghua", date: "2024" },
        { name: "Excellent Graduates of Beijing", date: "2024" },
        { name: "The National Scholarship", date: "2023" },
        { name: "The National First Prize of the 17th China Graduate Electronic Design Competition", date: "2022" },
        { name: "IEEE ICC 2022 Outstanding Demo Award", date: "2022" },
        { name: "Gold of the 49th International Exhibition of Inventions of Geneva", date: "2022" }
    ],
    selectedPublications: [
        {
            title: "Coded beam training for RIS assisted wireless communications",
            authors: "Yuhao Chen, Linglong Dai",
            venue: "IEEE Transactions on Wireless Communications, 2025",
            abstract: "Exploit the idea of channel coding to improve the beam training accuracy in RIS assisted wireless communication systems. Further propose the beam design scheme and encoding scheme according to the hardware limitations of RIS.",
            cover: "/assets/images/covers/CBT.png",
            links: [
                {
                    label: "Paper",
                    href: "/assets/files/Coded_Beam_Training_for_RIS-Assisted_Wireless_Communications.pdf"
                }
            ]
        },
        {
            title: "Non-stationary channel estimation for extremely large-scale MIMO",
            authors: "Yuhao Chen, Linglong Dai",
            venue: "IEEE Transactions on Wireless Communications, 2024",
            abstract: "Inspired by the Alamouti code, propose a group-time-block-code based signal extraction scheme, which artificially creates the time-domain relevance of the non-stationary effect and enables ELAA to recognize it in the space domain.",
            cover: "/assets/images/covers/non-stationary.png",
            links: [
                {
                    label: "Paper",
                    href: "/assets/files/Non-Stationary_Channel_Estimation_for_Extremely_Large-Scale_MIMO.pdf"
                }
            ]
        }
    ],
    publicationSections: [
        {
            title: "Book Chapters",
            items: [
                {
                    html: 'Z. Zhang, <strong>Y. Chen</strong>, Q. Yu, and L. Dai, "IRS Architecture and Hardware Design," in <em>Intelligent Surfaces Empowered 6G Wireless Network</em>, Chapter 2, Wiley-IEEE Press, 2023.',
                    links: [
                        {
                            label: "Book",
                            href: "https://www.wiley.com/en-ie/Intelligent+Surfaces+Empowered+6G+Wireless+Network-p-9781119913092"
                        }
                    ]
                }
            ]
        },
        {
            title: "Journal Papers",
            items: [
                {
                    html: '<strong>Y. Chen</strong> and L. Dai, "Coded beam training for RIS assisted wireless communications," <em>IEEE Transactions on Wireless Communications</em>, vol. 24, no. 5, pp. 3854-3867, May 2025.',
                    links: [{ label: "Paper", href: "/assets/files/Coded_Beam_Training_for_RIS-Assisted_Wireless_Communications.pdf" }]
                },
                {
                    html: '<strong>Y. Chen</strong>, M. Jian, and L. Dai, "Channel estimation for RIS assisted wireless communications: Stationary or non-stationary?," <em>IEEE Transactions on Signal Processing</em>, vol. 72, pp. 3776-3791, Aug. 2024.',
                    links: [{ label: "Paper", href: "/assets/files/Channel_Estimation_for_RIS_Assisted_Wireless_Communications_Stationary_or_Non-Stationary.pdf" }]
                },
                {
                    html: '<strong>Y. Chen</strong> and L. Dai, "Non-stationary channel estimation for extremely large-scale MIMO," <em>IEEE Transactions on Wireless Communications</em>, vol. 23, no. 7, pp. 7683-7697, Jul. 2024.',
                    links: [{ label: "Paper", href: "/assets/files/Non-Stationary_Channel_Estimation_for_Extremely_Large-Scale_MIMO.pdf" }]
                },
                {
                    html: '<strong>Y. Chen</strong> and L. Dai, "Near-field wideband beam training for ELAA with uniform circular array," <em>Science China Information Sciences</em>, vol. 67, no. 6, pp. 162303, May 2024.',
                    links: [{ label: "Paper", href: "/assets/files/Near-field_wideband_beam_training_for_ELAA_with_uniform_circular_array.pdf" }]
                },
                {
                    html: 'M. Cui, H. Jiang, <strong>Y. Chen</strong>, and L. Dai, "Continuous-time channel prediction based on tensor neural ordinary differential equation," <em>China Communications</em>, vol. 21, no. 1, pp. 163-174, Jan. 2024.',
                    links: [{ label: "Paper", href: "/assets/files/Continuous-time_channel_prediction_based_on_tensor_neural_ordinary_differential_equation.pdf" }]
                },
                {
                    html: '<strong>Y. Chen</strong>, J. Tan, M. Hao, R. MacKenzie, and L. Dai, "Accurate beam training for RIS-assisted wideband terahertz communication," <em>IEEE Transactions on Communications</em>, vol. 71, no. 12, pp. 7425-7440, Dec. 2023.',
                    links: [{ label: "Paper", href: "/assets/files/Accurate_Beam_Training_for_RIS-Assisted_Wideband_Terahertz_Communication.pdf" }]
                }
            ]
        },
        {
            title: "Conference Papers",
            items: [
                {
                    html: '<strong>Y. Chen</strong>, J. Tan, and L. Dai, "Analytical beam training for RIS-assisted wideband terahertz communication," in <em>Proceedings of 2023 IEEE Global Communications Conference</em> (<strong><em>IEEE GLOBECOM\'23</em></strong>), Kuala Lumpur, Malaysia, Dec. 2023.',
                    links: [{ label: "Paper", href: "/assets/files/Analytical_Beam_Training_for_RIS-Assisted_Wideband_Terahertz_Communication.pdf" }]
                },
                {
                    html: '<strong>Y. Chen</strong>, Z. Zhang, M. Cui, and L. Dai, "Channel estimation for non-stationary extremely large-scale MIMO," in <em>Proceedings of 2023 IEEE 97th Vehicular Technology Conference</em> (<strong><em>IEEE VTC\'23 Spring</em></strong>), Florence, Italy, Jun. 2023.',
                    links: [{ label: "Paper", href: "/assets/files/Channel_Estimation_for_Non-Stationary_Extremely_Large-Scale_MIMO.pdf" }]
                },
                {
                    html: 'M. Cui, Z. Wu, <strong>Y. Chen</strong>, S. Xu, F. Yang, and L. Dai, "Demo: Low-power communications based on RIS and AI for 6G," in <em>Proceedings of 2022 IEEE International Conference on Communications Workshops</em> (<strong><em>IEEE ICC\'22, Demo Session</em></strong>), Gangnam-gu, Seoul, South Korea, May 2022. <span class="accent-inline">IEEE ICC 2022 Outstanding Demo Award</span>.',
                    links: [{ label: "Paper", href: "/assets/files/Demo_Low-power_Communications_Based_on_RIS_and_AI_for_6G.pdf" }]
                }
            ]
        },
        {
            title: "Others",
            items: [
                {
                    html: 'Z. Zhang, <strong>Y. Chen</strong>, Z. Wu, Y. Lu, Z. Wan, and L. Dai, "Active reconfigurable intelligent surface aided wireless communication prototype," in <em>Proceedings of 2023 IEEE Global Communications Conference</em> (<strong><em>IEEE GLOBECOM\'23, Demo Session</em></strong>), Kuala Lumpur, Malaysia, Dec. 2023.',
                    links: []
                },
                {
                    html: 'Z. Zhang, <strong>Y. Chen</strong>, Z. Peng, and L. Dai, "Active reconfigurable intelligent surface aided wireless communication prototype," in <em>Proceedings of 2022 IEEE Global Communications Conference</em> (<strong><em>IEEE GLOBECOM\'22, Demo Session</em></strong>), Rio de Janeiro, Brazil, Dec. 2022.',
                    links: [{ label: "Slides", href: "/assets/files/Active_reconfigurable_intelligent_surface_aided_wireless_communication_prototype.pdf" }]
                }
            ]
        },
        {
            title: "Patents",
            items: [
                {
                    html: 'L. Dai, <strong>Y. Chen</strong>, J. Li, J. Tan, M. Hao, and R. MacKenzie, "Wireless telecommunications network." PCT Patent, Jan. 2024. (Granted, grant number: WO2024007280A1)',
                    links: []
                },
                {
                    html: 'L. Dai, <strong>Y. Chen</strong>, "Channel estimation for extremely large-scale MIMO." Chinese Patent, Aug. 2023. (Granted, grant number: ZL202310680438.8)',
                    links: []
                }
            ]
        }
    ],
    demos: [
        {
            title: "AI-based Communication Prototype with a 2304-element RIS @ 28 GHz",
            description: "This prototype integrates a 2304-element RIS and an AI-based end-to-end architecture, which operates at 28 GHz. With the directional beam generated by RIS, the signal coverage is extended. In addition, an end-to-end system is trained off-line and deployed on the FPGA, which makes the constellation deviate from the traditional QAM structure.",
            images: [
                { src: "/assets/images/photos/mmWave-prototype.png", desc: "28 GHz RIS with 2304 elements" },
                { src: "/assets/images/photos/mmWave-test.jpg", desc: "Demo test in Tsinghua University, China" },
                { src: "/assets/images/photos/mmWave-RISTA.jpg", desc: "Demo session of RISTA @ Hangzhou, China" }
            ]
        },
        {
            title: "Communication Prototype with a 64-element active RIS @ 3.5 GHz",
            description: "This prototype integrates a 64-element active RIS, which operates at 3.5 GHz. To overcome the \"multiplicative fading\" effect in RIS systems, each element is integrated with an amplifier to simultaneously amplify and reflect the impinging signal.",
            images: [
                { src: "/assets/images/photos/active-proto.jpg", desc: "3.5 GHz active RIS with 64 elements" },
                { src: "/assets/images/photos/active-test.jpg", desc: "Demo test in Tsinghua University, China" },
                { src: "/assets/images/photos/active-VR.jpg", desc: "Demo integrated with real-time VR video transmission" },
                { src: "/assets/images/photos/active-ICCC.jpg", desc: "Demo session of IEEE ICCC 2022 @ Foshan, China" },
                { src: "/assets/images/photos/active-ICCC2.jpg", desc: "Demo session of IEEE ICCC 2022 @ Foshan, China" },
                { src: "/assets/images/photos/active-RISTA.jpg", desc: "Demo session of RISTA @ Hangzhou, China" }
            ]
        }
    ],
    footerHtml: "&copy; Yuhao Chen. Created with Codex."
};
