/*
  Noor Alshater - Cybersecurity Portfolio
  Sections: 1 translations | 2 projects data | 3 helpers | 4 theme/language/nav |
            5 project gallery + modal | 6 certificate lightbox | 7 contact form | 8 cyber background
*/
"use strict";

/* ---------------------------------------------------------
   1. TRANSLATIONS (static page text; keys match data-i18n)
   --------------------------------------------------------- */
const translations = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.experience": "Experience", "nav.certificates": "Certificates", "nav.hobbies": "Hobbies", "nav.contact": "Contact",
    "ui.theme": "Theme",

    "hero.eyebrow": "Cybersecurity | SOC & Penetration Testing",
    "hero.title1": "SECURE", "hero.title2": "FUTURES",
    "hero.iam": "Focused on",
    "hero.sub": "I investigate security events, test defenses and turn findings into clear remediation steps.",
    "hero.btnProjects": "View Projects", "hero.btnCv": "Download CV",
    "stats.training": "National training", "stats.views": "Content views", "stats.projects": "Projects & reports",
    "card.name": "Noor Eyad Alshater",
    "card.role": "Cybersecurity | SOC & Penetration Testing",
    "card.place": "Amman, Jordan",

    "about.title": "About Me",
    "about.p1": "Cybersecurity professional with hands-on training and technical project experience in identifying security vulnerabilities, investigating suspicious activity, and building practical security lab environments.",
    "about.p2": "I combine analytical problem-solving with technical capabilities across security operations, web and network security, penetration testing, and Linux-based environments.",
    "about.eduK": "Education", "about.eduV": "B.Sc. Cybersecurity, Tafila Technical University (2022 - 2026)",
    "about.gpaK": "GPA", "about.gpaV": "81.07 / 100, Very Good",
    "about.locK": "Location", "about.locV": "Amman, Jordan, open to relocation",
    "about.langK": "Languages", "about.langV": "Arabic (native), English (B2)",

    "skills.title": "Skills",
    "skills.soc": "Security Operations", "skills.frame": "Security Frameworks", "skills.pentest": "Penetration Testing",
    "skills.malware": "Malware & Digital Forensics", "skills.network": "Network Security",
    "skills.systems": "Systems & Scripting", "skills.risk": "Risk & Reporting",

    "projects.title": "Selected Works",
    "projects.intro": "Each project starts with a real security problem. Open a card to go straight to the full project.",
    "projects.all": "All", "projects.fInfra": "Labs & Infrastructure", "projects.fForensics": "Forensics",
    "projects.fRisk": "Risk & Data", "projects.fResearch": "Research", "projects.fWeb": "Web",
    "projects.view": "View project",
    "pm.problem": "The problem", "pm.goal": "The goal", "pm.approach": "What was done", "pm.result": "The result", "pm.tools": "Tools",
    "pm.close": "Close",
    "link.report": "Open full report", "link.paper": "Open full paper", "link.download": "Download", "link.github": "Open on GitHub",
    "pm.tabPreview": "Preview", "pm.tabFile": "Full project file", "pm.noInline": "Your browser cannot display the file here.",

    "exp.title": "Experience", "exp.present": "Present",
    "exp.e0.role": "Cybersecurity Training", "exp.e0.desc": "Ongoing practical training in web application vulnerability identification and analysis, Linux command-line operations and cryptography, alongside web development exercises.",
    "exp.e1.role": "Cisco Networking Instructor",
    "exp.e1.desc": "Deliver the Cisco NetAcad Networking Basics course through structured video lessons aligned with the official curriculum, turning technical networking concepts into clear, practical explanations that support comprehension and exam readiness.",
    "exp.e2.role": "Masar Cybersecurity Training, Ethical Hacking & CTF Track",
    "exp.e2.desc": "200 hours of Splunk SIEM monitoring and log analysis of simulated brute-force, XSS and command-injection activity, alert triage and IOC identification, MITRE ATT&CK threat hunting, penetration testing, malware analysis and structured security reports with severity ratings and remediation advice.",
    "exp.e3.when": "Side project", "exp.e3.role": "AI Content Creation",
    "exp.e3.desc": "Created animated story videos using AI-assisted scripts, images, voice and video editing. Some videos reached over one million views.",
    "exp.e4.role": "Public Relations Officer",
    "exp.e4.desc": "Organized cybersecurity workshops, awareness events and technical sessions, and managed digital content that reached over 1.7M views in under one month.",

    "cert.title": "Certificates",
    "cert.name": "Masar Cybersecurity Training",
    "cert.issuer": "National Cybersecurity Center & IT Security C&T",
    "cert.desc": "Completed 200 hours of continuous training over 6 weeks in 2025, covering ethical hacking and CTF challenges.",
    "cert.hint": "Click the certificate to view it larger.",

    "hob.title": "Hobbies & Interests",
    "hob.h1": "Capture The Flag", "hob.d1": "Solving CTF challenges to sharpen my offensive and investigative thinking.",
    "hob.h2": "Building Home Labs", "hob.d2": "Spinning up virtual machines to test tools and break things safely.",
    "hob.h3": "Content Creation", "hob.d3": "Designing and sharing digital content that makes security approachable.",
    "hob.h4": "Teaching & Events", "hob.d4": "Explaining networking and organizing workshops for my community.",
    "hob.h5": "AI Content Creation", "hob.d5": "I create animated stories using AI tools, from writing scripts to images, voice and editing.",

    "contact.title": "Let's Work Together",
    "contact.sub": "I am open to internships and junior roles in security operations and penetration testing. Send me a message and I will reply soon.",
    "contact.email": "Email", "contact.phone": "Phone", "contact.loc": "Location",
    "form.name": "Name", "form.email": "Email", "form.message": "Message", "form.send": "Send Message",
    "form.errName": "Please enter your name.",
    "form.errEmail": "Please enter a valid email address.",
    "form.errMsg": "Please write a message (at least 10 characters).",
    "form.ok": "Opening your email app with the message ready to send...",
    "footer.rights": "All rights reserved.",

    "alt.formal": "Noor Alshater in a formal black blazer",
    "title": "Noor Alshater | Cybersecurity Portfolio",
    "langBtn": "العربية",
    "roles": ["SOC & Security Monitoring", "Penetration Testing", "Digital Forensics", "Malware Analysis"]
  },

  ar: {
    "nav.home": "الرئيسية", "nav.about": "نبذة عني", "nav.skills": "المهارات", "nav.projects": "المشاريع",
    "nav.experience": "الخبرات", "nav.certificates": "الشهادات", "nav.hobbies": "الهوايات", "nav.contact": "تواصل معي",
    "ui.theme": "الثيم",

    "hero.eyebrow": "الأمن السيبراني | عمليات الأمن واختبار الاختراق",
    "hero.title1": "حماية", "hero.title2": "المستقبل",
    "hero.iam": "أهتم بـ",
    "hero.sub": "أحقّق في الأحداث الأمنية، وأختبر الدفاعات، وأحوّل النتائج إلى خطوات معالجة واضحة.",
    "hero.btnProjects": "شاهد مشاريعي", "hero.btnCv": "تحميل السيرة الذاتية",
    "stats.training": "تدريب وطني", "stats.views": "مشاهدة للمحتوى", "stats.projects": "مشاريع وتقارير",
    "card.name": "نور إياد الشاطر",
    "card.role": "الأمن السيبراني | عمليات الأمن واختبار الاختراق",
    "card.place": "عمّان، الأردن",

    "about.title": "نبذة عني",
    "about.p1": "متخصصة في الأمن السيبراني ولدي تدريب عملي وخبرة في مشاريع تقنية في اكتشاف الثغرات الأمنية والتحقيق في النشاط المشبوه وبناء بيئات مختبرات أمنية عملية.",
    "about.p2": "أجمع بين مهارات حل المشكلات التحليلية والقدرات التقنية في العمليات الأمنية وأمن الويب والشبكات واختبار الاختراق وبيئات Linux.",
    "about.eduK": "التعليم", "about.eduV": "بكالوريوس الأمن السيبراني، جامعة الطفيلة التقنية (2022 - 2026)",
    "about.gpaK": "المعدل", "about.gpaV": "81.07 / 100، جيد جدًا",
    "about.locK": "الموقع", "about.locV": "عمّان، الأردن، وأقبل الانتقال لمكان آخر",
    "about.langK": "اللغات", "about.langV": "العربية (لغة أم)، الإنجليزية (B2)",

    "skills.title": "المهارات",
    "skills.soc": "عمليات الأمن", "skills.frame": "الأُطر الأمنية", "skills.pentest": "اختبار الاختراق",
    "skills.malware": "البرمجيات الخبيثة والأدلة الرقمية", "skills.network": "أمن الشبكات",
    "skills.systems": "الأنظمة والبرمجة النصية", "skills.risk": "المخاطر والتقارير",

    "projects.title": "أعمال مختارة",
    "projects.intro": "كل مشروع ينطلق من مشكلة أمنية حقيقية. افتح البطاقة لتنتقل مباشرة إلى المشروع كاملًا.",
    "projects.all": "الكل", "projects.fInfra": "مختبرات وبنية تحتية", "projects.fForensics": "أدلة رقمية",
    "projects.fRisk": "مخاطر وبيانات", "projects.fResearch": "بحث", "projects.fWeb": "ويب",
    "projects.view": "عرض المشروع",
    "pm.problem": "المشكلة", "pm.goal": "الهدف", "pm.approach": "ما تم تنفيذه", "pm.result": "النتيجة", "pm.tools": "الأدوات",
    "pm.close": "إغلاق",
    "link.report": "فتح التقرير كاملًا", "link.paper": "فتح البحث كاملًا", "link.download": "تحميل", "link.github": "فتح على GitHub",
    "pm.tabPreview": "معاينة", "pm.tabFile": "ملف المشروع كاملًا", "pm.noInline": "المتصفح لا يعرض الملف هنا.",

    "exp.title": "الخبرات", "exp.present": "الآن",
    "exp.e0.role": "تدريب في الأمن السيبراني", "exp.e0.desc": "تدريب عملي مستمر على اكتشاف وتحليل ثغرات تطبيقات الويب، وأوامر سطر أوامر Linux، والتشفير، إلى جانب تمارين تطوير الويب.",
    "exp.e1.role": "مدرّبة شبكات Cisco",
    "exp.e1.desc": "أقدّم مساق Cisco NetAcad Networking Basics عبر دروس مرئية منظمة تتوافق مع المنهج الرسمي، وأحوّل المفاهيم التقنية للشبكات إلى شروحات واضحة وعملية تدعم الفهم والاستعداد للاختبار.",
    "exp.e2.role": "برنامج مسار للتدريب في الأمن السيبراني، مسار الاختراق الأخلاقي وCTF",
    "exp.e2.desc": "200 ساعة تدريب شملت مراقبة SIEM وتحليل السجلات باستخدام Splunk لأنشطة محاكاة (القوة الغاشمة وXSS وحقن الأوامر)، وفرز التنبيهات وتحديد مؤشرات الاختراق، وصيد التهديدات وفق MITRE ATT&CK، واختبار الاختراق، وتحليل البرمجيات الخبيثة، وإعداد تقارير أمنية منظمة بتقييم الخطورة وتوصيات المعالجة.",
    "exp.e3.when": "مشروع جانبي", "exp.e3.role": "صناعة المحتوى بالذكاء الاصطناعي",
    "exp.e3.desc": "أنشأت فيديوهات قصص كرتونية باستخدام الذكاء الاصطناعي في كتابة النصوص والصور والصوت والمونتاج. وصلت بعض الفيديوهات إلى أكثر من مليون مشاهدة.",
    "exp.e4.role": "مسؤولة العلاقات العامة",
    "exp.e4.desc": "نظّمت ورش عمل وفعاليات توعوية وجلسات تقنية في الأمن السيبراني، وأدرت محتوى رقميًا تجاوز 1.7 مليون مشاهدة في أقل من شهر.",

    "cert.title": "الشهادات",
    "cert.name": "تدريب مسار للأمن السيبراني",
    "cert.issuer": "المركز الوطني للأمن السيبراني وشركة IT Security C&T",
    "cert.desc": "أتممت 200 ساعة تدريب متواصل على مدى 6 أسابيع في عام 2025، شملت الاختراق الأخلاقي وتحديات CTF.",
    "cert.hint": "اضغط على الشهادة لعرضها بحجم أكبر.",

    "hob.title": "الهوايات والاهتمامات",
    "hob.h1": "تحديات CTF", "hob.d1": "حل تحديات CTF لتقوية تفكيري الهجومي والتحقيقي.",
    "hob.h2": "بناء مختبرات منزلية", "hob.d2": "تشغيل أجهزة افتراضية لتجربة الأدوات واختبارها بأمان.",
    "hob.h3": "صناعة المحتوى", "hob.d3": "تصميم ومشاركة محتوى رقمي يجعل الأمن السيبراني أقرب للناس.",
    "hob.h4": "التدريس والفعاليات", "hob.d4": "شرح الشبكات وتنظيم ورش العمل لمجتمعي.",
    "hob.h5": "صناعة المحتوى بالذكاء الاصطناعي", "hob.d5": "أصنع قصصًا كرتونية باستخدام أدوات الذكاء الاصطناعي، من كتابة السيناريو إلى الصور والصوت والمونتاج.",

    "contact.title": "لنعمل معاً",
    "contact.sub": "أبحث عن فرص تدريب ووظائف مبتدئة في عمليات الأمن واختبار الاختراق. أرسل لي رسالة وسأرد عليك قريباً.",
    "contact.email": "البريد الإلكتروني", "contact.phone": "الهاتف", "contact.loc": "الموقع",
    "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.message": "الرسالة", "form.send": "إرسال الرسالة",
    "form.errName": "الرجاء إدخال اسمك.",
    "form.errEmail": "الرجاء إدخال بريد إلكتروني صحيح.",
    "form.errMsg": "الرجاء كتابة رسالة (10 أحرف على الأقل).",
    "form.ok": "جاري فتح تطبيق البريد والرسالة جاهزة للإرسال...",
    "footer.rights": "جميع الحقوق محفوظة.",

    "alt.formal": "نور الشاطر ترتدي بدلة سوداء رسمية",
    "title": "نور الشاطر | معرض أعمال الأمن السيبراني",
    "langBtn": "English",
    "roles": ["مراقبة الأمن وSOC", "اختبار الاختراق", "الأدلة الرقمية", "تحليل البرمجيات الخبيثة"]
  }
};

/* ---------------------------------------------------------
   2. PROJECTS DATA (problem, goal, approach, result)
   --------------------------------------------------------- */
const ASSET = "assets/";
const PROJECTS = [
  {
    id: "edukernel", num: "00", cat: "infra", art: "lab", featured: true,
    tools: ["Kali Linux", "Windows 7 / 10", "VirtualBox", "Bash", "Immunity Debugger", "IDA Free"],
    links: [{ k: "github", href: "https://github.com/Dalcots/EduKernel-Suite" }],
    en: {
      title: "EduKernel Suite", tag: "Cybersecurity lab platform | Graduation project",
      sum: "A multi-machine virtual lab that can be deployed and restored quickly for realistic hands-on practice.",
      problem: "Cybersecurity learners need realistic, ready-to-use environments to practice attack, analysis and defense, and building those environments takes time away from learning.",
      goal: "Provide a reproducible multi-machine lab so hands-on exercises can start within minutes.",
      approach: [
        "Built a virtual lab with Kali Linux, Windows 7 and Windows 10 covering penetration testing, malware analysis, digital forensics, reverse engineering, web security and network security.",
        "Prepared a dedicated Windows 7 malware-analysis machine with Immunity Debugger, Mona.py and IDA Free for memory-exploitation and reverse-engineering exercises.",
        "Automated deployment with Bash scripts that include error handling and centralized logging to standardize security-tool provisioning.",
        "Added VirtualBox snapshots and preconfigured environments so the lab can be recovered in one step.",
        "Modernized the LScript Wi-Fi security toolkit (Python 2 to 3 migration, dynamic wireless-interface detection) and its documentation."
      ],
      result: [
        "A standardized lab that deploys consistently and recovers quickly.",
        "Six exercise domains available from a single platform."
      ]
    },
    ar: {
      title: "EduKernel Suite", tag: "منصة مختبرات للأمن السيبراني | مشروع التخرج",
      sum: "مختبر افتراضي متعدد الأجهزة يمكن نشره واستعادته بسرعة لتدريب عملي واقعي.",
      problem: "يحتاج متعلمو الأمن السيبراني إلى بيئات واقعية وجاهزة للتدرب على الهجوم والتحليل والدفاع، وإعداد هذه البيئات يستهلك وقتًا كان يجب أن يُصرف في التعلّم.",
      goal: "توفير مختبر متعدد الأجهزة قابل لإعادة النشر بحيث تبدأ التمارين العملية خلال دقائق.",
      approach: [
        "بناء مختبر افتراضي يضم Kali Linux وWindows 7 وWindows 10 يغطي اختبار الاختراق وتحليل البرمجيات الخبيثة والأدلة الرقمية والهندسة العكسية وأمن الويب وأمن الشبكات.",
        "تجهيز جهاز Windows 7 مخصص لتحليل البرمجيات الخبيثة بأدوات Immunity Debugger وMona.py وIDA Free لتمارين استغلال الذاكرة والهندسة العكسية.",
        "أتمتة النشر بسكربتات Bash مع معالجة الأخطاء وتسجيل مركزي لتوحيد تثبيت أدوات الأمن.",
        "إضافة لقطات VirtualBox وبيئات مهيأة مسبقًا لاستعادة المختبر بخطوة واحدة.",
        "تحديث أداة LScript لأمن الواي فاي (ترحيل Python 2 إلى 3 وكشف ديناميكي لواجهة الشبكة اللاسلكية) مع توثيقها."
      ],
      result: [
        "مختبر موحّد يُنشر بشكل متسق ويُستعاد بسرعة.",
        "ستة مجالات تدريبية في منصة واحدة."
      ]
    }
  },
  {
    id: "matomo", num: "01", cat: "infra", imgs: ["matomo-1", "matomo-2", "matomo-3"], pos: "50% 42%", file: ASSET + "Linux_Matomo_Security_Project.pdf",
    tools: ["Ubuntu Server 24.04", "Apache", "MariaDB", "PHP", "Nmap", "Nikto"],
    links: [{ k: "report", href: ASSET + "Linux_Matomo_Security_Project.pdf" }, { k: "download", href: ASSET + "Linux_Matomo_Security_Project.pdf", dl: true }],
    en: {
      title: "Linux Server Deployment & Security", tag: "Infrastructure & web security | Matomo on Ubuntu",
      sum: "Deployed a web analytics platform on a hardened Linux stack, then tested it for exposure.",
      problem: "Self-hosted web applications are often put online without checking what the server reveals to an attacker.",
      goal: "Deploy Matomo on a secured Ubuntu, Apache and MariaDB stack and assess its security posture without disrupting the service.",
      approach: [
        "Installed and verified Apache, PHP and MariaDB on Ubuntu Server 24.04, with a dedicated database and restricted database user for Matomo.",
        "Hardened MariaDB: removed anonymous users and the test database, disabled remote root login and enabled socket authentication.",
        "Ran a non-intrusive assessment: Nmap SYN scan with service detection, Nikto web scan and manual inspection of sensitive paths."
      ],
      result: [
        "Only TCP port 80 was exposed; no critical vulnerability was found.",
        "Found an exposed Apache server-status page (High), directory listing on /tests (Medium) and path disclosure in robots.txt (Low), plus missing security headers.",
        "Delivered remediation steps for each finding."
      ]
    },
    ar: {
      title: "إعداد وتأمين خادم Linux", tag: "أمن البنية التحتية والويب | Matomo على Ubuntu",
      sum: "نشر منصة تحليلات ويب على بيئة Linux مُحصّنة ثم اختبارها لكشف أي تعرّض.",
      problem: "تُنشر تطبيقات الويب ذاتية الاستضافة كثيرًا دون التحقق مما يكشفه الخادم للمهاجم.",
      goal: "نشر Matomo على بيئة Ubuntu وApache وMariaDB آمنة وتقييم وضعها الأمني دون التأثير على الخدمة.",
      approach: [
        "تثبيت Apache وPHP وMariaDB والتحقق منها على Ubuntu Server 24.04 مع قاعدة بيانات ومستخدم مقيّد مخصصين لـ Matomo.",
        "تحصين MariaDB: إزالة المستخدمين المجهولين وقاعدة الاختبار، وتعطيل دخول root عن بُعد، وتفعيل مصادقة socket.",
        "تنفيذ تقييم غير تدخلي: فحص Nmap SYN مع كشف الخدمات، وفحص Nikto للويب، ومراجعة يدوية للمسارات الحساسة."
      ],
      result: [
        "لم يكن مفتوحًا سوى المنفذ TCP 80 ولم تُكتشف ثغرة حرجة.",
        "اكتُشف تعرّض صفحة server-status في Apache (عالي الخطورة)، وعرض محتويات المجلد /tests (متوسط)، وكشف مسارات في robots.txt (منخفض)، إضافة إلى غياب ترويسات أمنية.",
        "تم تقديم خطوات معالجة لكل ملاحظة."
      ]
    }
  },
  {
    id: "forensics", num: "02", cat: "forensics", imgs: ["forensics-1", "forensics-2", "forensics-3"], pos: "50% 30%", file: ASSET + "Digital_Forensics_Autopsy_Project.pdf",
    tools: ["FTK Imager", "Autopsy", "MD5 / SHA1", "ExifTool"],
    links: [{ k: "report", href: ASSET + "Digital_Forensics_Autopsy_Project.pdf" }, { k: "download", href: ASSET + "Digital_Forensics_Autopsy_Project.pdf", dl: true }],
    en: {
      title: "Digital Forensics with Autopsy", tag: "Digital forensics | Disk image analysis",
      sum: "A complete evidence workflow from acquisition and integrity checks to file and metadata analysis.",
      problem: "Digital evidence is only useful if it is preserved without alteration and can be examined in an organized, verifiable way.",
      goal: "Demonstrate a forensically sound workflow from acquiring a disk image to analyzing its files and metadata.",
      approach: [
        "Prepared a controlled dataset that simulated user activity, including a deleted file.",
        "Acquired a logical forensic image with FTK Imager inside a virtual environment.",
        "Verified integrity by comparing MD5 and SHA1 hashes.",
        "Analyzed the image in Autopsy: file-type classification and metadata review (size, allocation status, location)."
      ],
      result: [
        "Matching MD5 and SHA1 values confirmed the evidence was not altered during acquisition.",
        "Files were organized by type and their metadata extracted into a documented investigation.",
        "Documented the limits of logical-level imaging, such as unavailable timestamps."
      ]
    },
    ar: {
      title: "الأدلة الرقمية باستخدام Autopsy", tag: "الأدلة الرقمية | تحليل صورة القرص",
      sum: "سير عمل متكامل للأدلة من الاستحواذ والتحقق من السلامة إلى تحليل الملفات وبياناتها الوصفية.",
      problem: "لا تكون الأدلة الرقمية مفيدة إلا إذا حُفظت دون تعديل وأمكن فحصها بطريقة منظمة وقابلة للتحقق.",
      goal: "إظهار سير عمل جنائي سليم من الحصول على صورة القرص إلى تحليل ملفاتها وبياناتها الوصفية.",
      approach: [
        "إعداد بيانات اختبار محكومة تحاكي نشاط مستخدم، بما في ذلك ملف محذوف.",
        "الحصول على صورة جنائية منطقية باستخدام FTK Imager داخل بيئة افتراضية.",
        "التحقق من السلامة بمقارنة قيم MD5 وSHA1.",
        "تحليل الصورة في Autopsy: تصنيف الملفات حسب النوع ومراجعة بياناتها الوصفية (الحجم وحالة التخصيص والموقع)."
      ],
      result: [
        "أكدت قيم MD5 وSHA1 المتطابقة أن الأدلة لم تتغير أثناء الاستحواذ.",
        "نُظّمت الملفات حسب النوع واستُخرجت بياناتها الوصفية ضمن تحقيق موثّق.",
        "تم توثيق حدود التصوير المنطقي مثل عدم توفر بعض الطوابع الزمنية."
      ]
    }
  },
  {
    id: "risk", num: "03", cat: "risk", imgs: ["risk-1", "risk-2", "risk-3", "risk-4"], pos: "50% 62%", file: ASSET + "Cybersecurity_Risk_Management_Report.pdf",
    tools: ["Risk Assessment", "CIA Triad", "Python", "Mitigation Planning"],
    links: [{ k: "report", href: ASSET + "Cybersecurity_Risk_Management_Report.pdf" }, { k: "download", href: ASSET + "Cybersecurity_Risk_Management_Report.pdf", dl: true }],
    en: {
      title: "Cybersecurity Risk Management", tag: "Risk assessment | Unencrypted card data",
      sum: "A prioritized risk analysis for a retailer storing credit-card data on an unencrypted server.",
      problem: "A retail company stored customer credit-card data on an unencrypted internal server, exposing it to breaches and compliance failures.",
      goal: "Identify, rate and prioritize the risks so mitigation effort goes where it reduces the most harm.",
      approach: [
        "Analyzed six risks: data breach, identity theft, malware, natural-disaster data loss, regulatory non-compliance and supply-chain attacks.",
        "Assessed each risk qualitatively and quantitatively: impact, likelihood, cost and time to fix.",
        "Visualized the results: probability versus impact, repair cost, time to fix, CIA-triad mapping and severity distribution."
      ],
      result: [
        "About half of the risks rated Critical or High, with data breach and compliance leading.",
        "Produced a prioritized mitigation plan led by strong encryption (AES-256) for stored data."
      ]
    },
    ar: {
      title: "إدارة مخاطر الأمن السيبراني", tag: "تقييم المخاطر | بيانات بطاقات غير مشفّرة",
      sum: "تحليل مخاطر مرتّب بالأولوية لشركة تجزئة تخزّن بيانات البطاقات الائتمانية على خادم غير مشفّر.",
      problem: "كانت شركة تجزئة تخزّن بيانات بطاقات عملائها على خادم داخلي غير مشفّر، ما يعرّضها للاختراق ومخالفات الامتثال.",
      goal: "تحديد المخاطر وتقييمها وترتيبها بالأولوية لتوجيه جهود المعالجة إلى ما يقلّل الضرر أكثر.",
      approach: [
        "تحليل ست مخاطر: اختراق البيانات وسرقة الهوية والبرمجيات الخبيثة وفقدان البيانات بالكوارث الطبيعية وعدم الامتثال التنظيمي وهجمات سلسلة التوريد.",
        "تقييم كل خطر نوعيًا وكميًا: الأثر والاحتمالية وتكلفة المعالجة ومدتها.",
        "عرض النتائج بيانيًا: الاحتمالية مقابل الأثر، وتكلفة الإصلاح، ومدة الإصلاح، وربط المخاطر بثلاثية CIA، وتوزيع مستويات الخطورة."
      ],
      result: [
        "صُنّف نحو نصف المخاطر حرجًا أو عاليًا، وتصدّر اختراق البيانات والامتثال القائمة.",
        "إعداد خطة معالجة مرتّبة بالأولوية يتقدمها تشفير قوي (AES-256) للبيانات المخزّنة."
      ]
    }
  },
  {
    id: "data", num: "04", cat: "risk", imgs: ["data-1", "data-2", "data-3", "data-4"], pos: "50% 45%", file: ASSET + "Cybersecurity_Data_Analysis_Report.pdf",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    links: [{ k: "report", href: ASSET + "Cybersecurity_Data_Analysis_Report.pdf" }, { k: "download", href: ASSET + "Cybersecurity_Data_Analysis_Report.docx", dl: true }],
    en: {
      title: "Cybersecurity Data Analysis", tag: "Data analysis | Global cybersecurity indexes",
      sum: "Cleaned and analyzed four cybersecurity indexes across 192 countries to find what drives exposure.",
      problem: "National cybersecurity indicators come from different sources, contain gaps and are hard to compare directly.",
      goal: "Clean the data and measure how exposure (CEI), commitment (GCI), readiness (NCSI) and digital development (DDL) relate to each other.",
      approach: [
        "Loaded and profiled the dataset with Python and Pandas, then handled missing values (192 rows reduced to 104 complete records) and checked for duplicates.",
        "Detected outliers with IQR and Z-score methods.",
        "Explored the data with a correlation heatmap, scatter and pair plots, regional averages and distribution charts."
      ],
      result: [
        "Exposure falls as readiness and development rise: CEI vs NCSI r = -0.73 and CEI vs DDL r = -0.90.",
        "Commitment and readiness move together: GCI vs NCSI r = 0.83.",
        "Gave a clean, documented dataset and regional comparisons to guide policy discussion."
      ]
    },
    ar: {
      title: "تحليل بيانات الأمن السيبراني", tag: "تحليل البيانات | مؤشرات الأمن السيبراني العالمية",
      sum: "تنظيف وتحليل أربعة مؤشرات للأمن السيبراني في 192 دولة لمعرفة ما يحدّد مستوى التعرّض.",
      problem: "تأتي مؤشرات الأمن السيبراني الوطنية من مصادر مختلفة وفيها فجوات ويصعب مقارنتها مباشرة.",
      goal: "تنظيف البيانات وقياس العلاقة بين التعرّض (CEI) والالتزام (GCI) والجاهزية (NCSI) والتطور الرقمي (DDL).",
      approach: [
        "تحميل البيانات وفحصها بـ Python وPandas ثم معالجة القيم المفقودة (من 192 صفًا إلى 104 سجلات مكتملة) والتحقق من التكرار.",
        "كشف القيم الشاذة بطريقتي IQR وZ-score.",
        "استكشاف البيانات بخريطة حرارية للارتباط ومخططات انتشار ومخططات زوجية ومتوسطات إقليمية ومخططات توزيع."
      ],
      result: [
        "ينخفض التعرّض مع ارتفاع الجاهزية والتطور: CEI مقابل NCSI بارتباط -0.73، وCEI مقابل DDL بارتباط -0.90.",
        "يتحرك الالتزام والجاهزية معًا: GCI مقابل NCSI بارتباط 0.83.",
        "تقديم بيانات نظيفة وموثقة ومقارنات إقليمية تدعم النقاش حول السياسات."
      ]
    }
  },
  {
    id: "iot", num: "05", cat: "research", imgs: ["iot-1", "iot-2", "iot-3"], pos: "50% 28%", file: ASSET + "IoT_HTTP_vs_MQTT_Research_Paper.pdf",
    tools: ["IoT", "HTTP", "MQTT", "Statistical Analysis"],
    links: [{ k: "paper", href: ASSET + "IoT_HTTP_vs_MQTT_Research_Paper.pdf" }, { k: "download", href: ASSET + "IoT_HTTP_vs_MQTT_Research_Paper.pdf", dl: true }],
    en: {
      title: "HTTP vs MQTT for IoT", tag: "Research paper | Protocol performance",
      sum: "An experimental comparison showing which protocol holds up as IoT networks scale.",
      problem: "Choosing the wrong messaging protocol makes an IoT system slow, unreliable or unable to scale.",
      goal: "Compare HTTP and MQTT on latency, scalability, throughput and reliability under packet loss.",
      approach: [
        "Simulated an IoT messaging environment with 10 to 50 clients under controlled conditions.",
        "Measured latency, throughput and message loss on unstable networks.",
        "Applied correlation analysis between client count and latency."
      ],
      result: [
        "HTTP latency rose from 90 ms to 285 ms across 10 to 50 clients, while MQTT only moved from 33 ms to 48 ms.",
        "MQTT averaged 262.3 messages per second against 115.3 for HTTP, and was more reliable under packet loss.",
        "Conclusion: MQTT suits scalable IoT systems, HTTP remains right for traditional web communication."
      ]
    },
    ar: {
      title: "مقارنة HTTP وMQTT لإنترنت الأشياء", tag: "ورقة بحثية | أداء البروتوكولات",
      sum: "مقارنة تجريبية توضح أي بروتوكول يصمد مع توسّع شبكات إنترنت الأشياء.",
      problem: "اختيار بروتوكول مراسلة غير مناسب يجعل نظام إنترنت الأشياء بطيئًا أو غير موثوق أو غير قابل للتوسع.",
      goal: "مقارنة HTTP وMQTT من حيث زمن الاستجابة وقابلية التوسع ومعدل النقل والموثوقية عند فقدان الحزم.",
      approach: [
        "محاكاة بيئة مراسلة لإنترنت الأشياء بعدد عملاء من 10 إلى 50 في ظروف محكومة.",
        "قياس زمن الاستجابة ومعدل النقل وفقدان الرسائل في شبكات غير مستقرة.",
        "تطبيق تحليل الارتباط بين عدد العملاء وزمن الاستجابة."
      ],
      result: [
        "ارتفع زمن استجابة HTTP من 90 إلى 285 مللي ثانية بين 10 و50 عميلًا، بينما تحرك MQTT من 33 إلى 48 فقط.",
        "حقق MQTT متوسط 262.3 رسالة في الثانية مقابل 115.3 لـ HTTP، وكان أكثر موثوقية عند فقدان الحزم.",
        "الخلاصة: MQTT مناسب لأنظمة إنترنت الأشياء القابلة للتوسع، وHTTP يبقى مناسبًا للتواصل التقليدي على الويب."
      ]
    }
  },
  {
    id: "scan", num: "06", cat: "infra", art: "radar",
    tools: ["Nmap", "Nessus", "Network Security"],
    links: [],
    en: {
      title: "Vulnerability Scanning", tag: "Network security | Lab assessment",
      sum: "Mapping a lab network and surfacing the weaknesses an attacker would look for first.",
      problem: "Hosts on a network often expose services and weaknesses that nobody has noticed.",
      goal: "Discover what is running on a lab network and identify potential vulnerabilities.",
      approach: [
        "Used Nmap to discover hosts, open ports and services on the target lab network.",
        "Ran Nessus scans to identify potential vulnerabilities on the discovered services.",
        "Reviewed the findings to understand where hardening is needed."
      ],
      result: [
        "A reviewed list of exposed services and potential vulnerabilities that shows where to harden first."
      ]
    },
    ar: {
      title: "فحص الثغرات", tag: "أمن الشبكات | تقييم مختبر",
      sum: "رسم خريطة لشبكة مختبر وكشف نقاط الضعف التي سيبحث عنها المهاجم أولًا.",
      problem: "كثيرًا ما تكشف الأجهزة في الشبكة خدمات ونقاط ضعف لا ينتبه لها أحد.",
      goal: "اكتشاف ما يعمل على شبكة المختبر وتحديد الثغرات المحتملة.",
      approach: [
        "استخدام Nmap لاكتشاف الأجهزة والمنافذ المفتوحة والخدمات في شبكة المختبر المستهدفة.",
        "تشغيل فحوص Nessus لتحديد الثغرات المحتملة في الخدمات المكتشفة.",
        "مراجعة النتائج لفهم أين يلزم التحصين."
      ],
      result: [
        "قائمة مراجَعة بالخدمات المكشوفة والثغرات المحتملة توضح ما يجب تحصينه أولًا."
      ]
    }
  },
  {
    id: "traffic", num: "07", cat: "infra", art: "packets",
    tools: ["Wireshark", "TCP/IP", "Traffic Analysis"],
    links: [],
    en: {
      title: "Network Traffic Analysis", tag: "Network security | Packet inspection lab",
      sum: "Reading packets to see how protocols really talk, the foundation of network investigation.",
      problem: "Network activity is invisible until traffic is captured and read, and suspicious behavior cannot be investigated without that visibility.",
      goal: "Understand how common protocols communicate and learn to trace a conversation packet by packet.",
      approach: [
        "Captured traffic in a lab environment with Wireshark.",
        "Inspected packet details and protocol information across the TCP/IP stack.",
        "Followed conversations to understand normal protocol behavior."
      ],
      result: [
        "A working baseline of normal protocol behavior, which is what makes abnormal traffic recognizable during an investigation."
      ]
    },
    ar: {
      title: "تحليل حركة الشبكة", tag: "أمن الشبكات | مختبر فحص الحزم",
      sum: "قراءة الحزم لمعرفة كيف تتخاطب البروتوكولات فعلًا، وهي أساس التحقيق في الشبكات.",
      problem: "نشاط الشبكة غير مرئي حتى تُلتقط الحركة وتُقرأ، ولا يمكن التحقيق في السلوك المشبوه دون هذه الرؤية.",
      goal: "فهم كيفية تواصل البروتوكولات الشائعة وتتبّع المحادثة حزمة بحزمة.",
      approach: [
        "التقاط الحركة في بيئة مختبر باستخدام Wireshark.",
        "فحص تفاصيل الحزم ومعلومات البروتوكولات عبر طبقات TCP/IP.",
        "تتبّع المحادثات لفهم السلوك الطبيعي للبروتوكولات."
      ],
      result: [
        "خط أساس عملي للسلوك الطبيعي للبروتوكولات، وهو ما يجعل الحركة غير الطبيعية قابلة للتمييز أثناء التحقيق."
      ]
    }
  },
  {
    id: "web", num: "08", cat: "web", art: "browser",
    tools: ["HTML", "CSS", "JavaScript", "Git"],
    links: [{ k: "github", href: "https://github.com/nooralshater" }],
    en: {
      title: "Web Development Projects", tag: "HTML, CSS and JavaScript | GitHub projects",
      sum: "Responsive, interactive pages that present information clearly and react to the user.",
      problem: "Information only helps people when it is presented clearly, works on every screen size and responds to what the user does.",
      goal: "Build clean, responsive interfaces with interactive behavior, using the same front-end skills behind this portfolio.",
      approach: [
        "Structured pages with semantic HTML and styled them with CSS layouts that adapt to different screen sizes.",
        "Used JavaScript DOM events to update the page after user actions.",
        "Versioned every project with Git and published it on GitHub."
      ],
      result: [
        "Working, responsive web pages published as repositories on my GitHub profile.",
        "Front-end skills that support web-application security testing, since understanding how a page is built is the first step to testing it."
      ]
    },
    ar: {
      title: "مشاريع تطوير الويب", tag: "HTML وCSS وJavaScript | مشاريع على GitHub",
      sum: "صفحات متجاوبة وتفاعلية تعرض المعلومات بوضوح وتستجيب للمستخدم.",
      problem: "لا تفيد المعلومات الناس إلا إذا عُرضت بوضوح وعملت على جميع أحجام الشاشات واستجابت لما يفعله المستخدم.",
      goal: "بناء واجهات نظيفة ومتجاوبة بسلوك تفاعلي، بنفس مهارات الواجهة الأمامية المستخدمة في هذا الموقع.",
      approach: [
        "بناء الصفحات بـ HTML دلالي وتنسيقها بتخطيطات CSS تتكيف مع أحجام الشاشات المختلفة.",
        "استخدام أحداث DOM في JavaScript لتحديث الصفحة بعد تفاعل المستخدم.",
        "إدارة كل مشروع بـ Git ونشره على GitHub."
      ],
      result: [
        "صفحات ويب عاملة ومتجاوبة منشورة كمستودعات على حسابي في GitHub.",
        "مهارات واجهة أمامية تدعم اختبار أمن تطبيقات الويب، لأن فهم طريقة بناء الصفحة هو أول خطوة في اختبارها."
      ]
    }
  }
];

/* Inline, theme-aware cover art for projects without a report image */
const ART = {
  lab: '<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
    '<g class="stroke" stroke-width="1.4" stroke-dasharray="4 4" opacity=".7"><path d="M200 78V125M200 125L90 170M200 125L200 170M200 125L310 170"/></g>' +
    '<rect class="soft" x="150" y="38" width="100" height="40" rx="8"/><text x="200" y="62" text-anchor="middle">HOST + SCRIPTS</text>' +
    '<rect class="soft" x="40" y="170" width="100" height="44" rx="8"/><text x="90" y="196" text-anchor="middle">KALI LINUX</text>' +
    '<rect class="soft" x="150" y="170" width="100" height="44" rx="8"/><text x="200" y="196" text-anchor="middle">WINDOWS 7</text>' +
    '<rect class="soft" x="260" y="170" width="100" height="44" rx="8"/><text x="310" y="196" text-anchor="middle">WINDOWS 10</text>' +
    '<circle class="fill" cx="200" cy="125" r="5"/><circle class="fill" cx="90" cy="170" r="3"/><circle class="fill" cx="310" cy="170" r="3"/>' +
    '<text x="214" y="122" opacity=".8">snapshot</text></svg>',
  radar: '<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
    '<g class="stroke" stroke-width="1" opacity=".6"><circle cx="200" cy="125" r="30"/><circle cx="200" cy="125" r="62"/><circle cx="200" cy="125" r="94"/><path d="M200 20V230M95 125H305"/></g>' +
    '<g class="sweep"><path d="M200 125L200 31A94 94 0 0 1 270 62Z" class="fill" opacity=".22"/><path class="stroke" stroke-width="1.6" d="M200 125L200 31"/></g>' +
    '<circle class="fill" cx="250" cy="90" r="4"/><circle class="fill" cx="156" cy="150" r="4"/><circle class="fill" cx="232" cy="170" r="4"/><circle class="fill" cx="170" cy="82" r="4"/>' +
    '<text x="258" y="88">:443</text><text x="100" y="150">:22</text><text x="240" y="186">:3389</text><text x="176" y="76">:80</text></svg>',
  packets: '<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
    [0, 1, 2, 3, 4, 5, 6].map(function (i) {
      var w = [250, 300, 210, 320, 270, 190, 290][i], y = 36 + i * 26;
      return '<rect class="soft" x="40" y="' + y + '" width="320" height="20" rx="4"/>' +
        '<rect class="fill" x="46" y="' + (y + 6) + '" width="' + (i === 3 ? 10 : 6) + '" height="8" rx="2" opacity="' + (i === 3 ? 1 : .5) + '"/>' +
        '<rect class="fill" x="66" y="' + (y + 8) + '" width="' + (w - 150) + '" height="4" rx="2" opacity=".35"/>' +
        '<text x="' + (w + 40 - 62) + '" y="' + (y + 14) + '" opacity=".8">' + ['TCP', 'TLS', 'DNS', 'HTTP', 'TCP', 'ARP', 'TLS'][i] + '</text>';
    }).join('') + '</svg>',
  browser: '<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
    '<rect class="soft" x="40" y="36" width="320" height="180" rx="10"/><path class="stroke" stroke-width="1" d="M40 62H360"/>' +
    '<circle class="fill" cx="58" cy="49" r="3.5"/><circle class="fill" cx="72" cy="49" r="3.5" opacity=".6"/><circle class="fill" cx="86" cy="49" r="3.5" opacity=".3"/>' +
    '<text x="60" y="88">&lt;section class="card"&gt;</text><text x="76" y="106" opacity=".7">&lt;h2&gt;Responsive&lt;/h2&gt;</text>' +
    '<text x="60" y="124">&lt;/section&gt;</text><text x="60" y="148">button.onclick = update;</text>' +
    '<rect class="fill" x="60" y="164" width="70" height="30" rx="6" opacity=".85"/><rect class="soft" x="140" y="164" width="70" height="30" rx="6"/>' +
    '<rect class="soft" x="220" y="164" width="70" height="30" rx="6"/></svg>'
};

/* ---------------------------------------------------------
   3. HELPERS
   --------------------------------------------------------- */
let currentLanguage = "en";
function t(key) { return (translations[currentLanguage] && translations[currentLanguage][key]) || translations.en[key] || key; }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function store(k, v) { try { if (v === undefined) { return localStorage.getItem(k); } localStorage.setItem(k, v); } catch (e) { /* storage may be blocked */ } return null; }
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   4. THEME / LANGUAGE / NAVIGATION
   --------------------------------------------------------- */
const themes = ["blue", "violet", "emerald", "light"];
const themeButton = document.getElementById("themeBtn");
function setTheme(name) {
  document.body.setAttribute("data-theme", name);
  store("theme", name);
  window.dispatchEvent(new Event("themechange"));
}
themeButton.addEventListener("click", function () {
  const i = themes.indexOf(document.body.getAttribute("data-theme"));
  setTheme(themes[(i + 1) % themes.length]);
});
(function restoreTheme() { const s = store("theme"); if (s && themes.indexOf(s) > -1) { document.body.setAttribute("data-theme", s); } })();

/* rotating role line in the hero */
const roleText = document.getElementById("roleText");
let roleIndex = 0, roleTimer = null;
function showRole(i) { const roles = t("roles"); roleText.textContent = roles[i % roles.length]; }
function startRoles() {
  clearInterval(roleTimer); roleIndex = 0; showRole(0);
  if (reduceMotion) { return; }
  roleTimer = setInterval(function () {
    roleText.classList.add("fade");
    setTimeout(function () { roleIndex++; showRole(roleIndex); roleText.classList.remove("fade"); }, 350);
  }, 2800);
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) { el.textContent = translations[lang][key]; }
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.getAttribute("data-i18n-alt")); });
  document.getElementById("langLabel").textContent = t("langBtn");
  document.title = t("title");
  document.getElementById("pmClose").setAttribute("aria-label", t("pm.close"));
  renderProjects();
  startRoles();
  if (openId) { renderModal(); }
  store("lang", lang);
}
document.getElementById("langBtn").addEventListener("click", function () { applyLanguage(currentLanguage === "en" ? "ar" : "en"); });

/* mobile menu */
const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navLinks");
menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
});
const navigationLinks = Array.prototype.slice.call(navigation.querySelectorAll("a"));
function setActive(id) {
  navigationLinks.forEach(function (link) {
    const on = link.getAttribute("href") === "#" + id;
    link.classList.toggle("is-active", on);
    if (on) { link.setAttribute("aria-current", "location"); } else { link.removeAttribute("aria-current"); }
  });
}
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    setActive(link.getAttribute("href").slice(1));
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.addEventListener("click", function (e) { /* tap outside closes mobile menu */
  if (navigation.classList.contains("open") && !navigation.contains(e.target) && !menuButton.contains(e.target)) {
    navigation.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
  }
});

/* highlight the section currently in view */
const pageSections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
let ticking = false;
function updateActive() {
  ticking = false;
  let current = pageSections[0].id;
  const line = window.scrollY + window.innerHeight * 0.3;
  pageSections.forEach(function (s) { if (s.offsetTop <= line) { current = s.id; } });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) { current = pageSections[pageSections.length - 1].id; }
  setActive(current);
}
window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(updateActive); } }, { passive: true });
window.addEventListener("resize", updateActive);

/* ---------------------------------------------------------
   5. PROJECT GALLERY + MODAL
   --------------------------------------------------------- */
const grid = document.getElementById("projectGrid");
let activeFilter = "all";

function coverHTML(p) {
  if (p.imgs) {
    return '<img src="' + ASSET + "projects/" + p.imgs[0] + '.jpg" alt="" loading="lazy" decoding="async" style="object-position:' + (p.pos || "50% 0") + '">';
  }
  return ART[p.art];
}
/* where "View project" goes: the project file, or its GitHub repository */
function targetOf(p) {
  if (p.file) { return p.file; }
  const g = (p.links || []).filter(function (l) { return l.k === "github"; })[0];
  return g ? g.href : "";
}
function renderProjects() {
  grid.innerHTML = PROJECTS.map(function (p) {
    const tx = p[currentLanguage], href = targetOf(p);
    const open = href
      ? '<a class="pcard' + (p.featured && activeFilter === "all" ? " featured" : "") + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer" data-id="' + p.id + '" data-cat="' + p.cat + '" aria-label="' + esc(tx.title) + '">'
      : '<article class="pcard' + (p.featured && activeFilter === "all" ? " featured" : "") + '" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="' + esc(tx.title) + '">';
    return open +
      '<div class="pc-cover">' + coverHTML(p) + '<span class="pc-scan"></span><span class="pc-num">' + p.num + '</span><span class="pc-open">' + esc(t("projects.view")) + ' &#8599;</span></div>' +
      '<div class="pc-body"><h3>' + esc(tx.title) + '</h3><p class="pc-tag">' + esc(tx.tag) + '</p><p class="pc-sum">' + esc(tx.sum) + '</p>' +
      '<ul class="chips small">' + p.tools.slice(0, 4).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" + (href ? "</a>" : "</article>");
  }).join("");
  applyFilter();
}
function applyFilter() {
  grid.querySelectorAll(".pcard").forEach(function (c) {
    const show = activeFilter === "all" || c.dataset.cat === activeFilter;
    c.classList.toggle("is-hidden", !show);
    c.classList.toggle("featured", activeFilter === "all" && c.dataset.id === "edukernel");
  });
}
document.querySelectorAll(".chip-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    document.querySelectorAll(".chip-btn").forEach(function (x) { x.classList.remove("is-active"); });
    b.classList.add("is-active");
    activeFilter = b.dataset.filter;
    applyFilter();
  });
});
grid.addEventListener("click", function (e) { const c = e.target.closest(".pcard"); if (c && c.tagName !== "A") { openProject(c.dataset.id); } });
grid.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") { const c = e.target.closest(".pcard"); if (c && c.tagName !== "A") { e.preventDefault(); openProject(c.dataset.id); } }
});
/* subtle 3D tilt on pointer devices */
if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
  grid.addEventListener("pointermove", function (e) {
    const c = e.target.closest(".pcard"); if (!c) { return; }
    const r = c.getBoundingClientRect();
    c.style.setProperty("--ry", (((e.clientX - r.left) / r.width - 0.5) * 6).toFixed(2) + "deg");
    c.style.setProperty("--rx", ((0.5 - (e.clientY - r.top) / r.height) * 5).toFixed(2) + "deg");
  });
  grid.addEventListener("pointerout", function (e) {
    const c = e.target.closest(".pcard"); if (c) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); }
  });
}

const modal = document.getElementById("pModal");
const pmStage = document.getElementById("pmStage");
const pmThumbs = document.getElementById("pmThumbs");
const pmBody = document.getElementById("pmBody");
let openId = null, imgIndex = 0, lastFocus = null, viewMode = "file";
const pmTabs = document.getElementById("pmTabs");

function openProject(id) {
  openId = id; imgIndex = 0; viewMode = "file"; lastFocus = document.activeElement;
  modal.hidden = false; document.body.classList.add("modal-open");
  renderModal();
  document.getElementById("pmClose").focus();
}
function closeProject() {
  modal.hidden = true; document.body.classList.remove("modal-open"); openId = null;
  if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
}
function renderStage(p) {
  if (p.file) {
    pmTabs.hidden = false;
    pmTabs.innerHTML = ["file", "img"].map(function (m) {
      return '<button type="button" data-view="' + m + '" class="' + (viewMode === m ? "is-active" : "") + '">' + esc(t(m === "file" ? "pm.tabFile" : "pm.tabPreview")) + "</button>";
    }).join("");
  } else { pmTabs.hidden = true; pmTabs.innerHTML = ""; }

  if (p.file && viewMode === "file") {
    pmStage.classList.add("is-file");
    pmStage.innerHTML = '<object class="pm-file" data="' + p.file + '#view=FitH" type="application/pdf" aria-label="' + esc(p[currentLanguage].title) + '">' +
      '<div class="pm-nofile"><p>' + esc(t("pm.noInline")) + '</p><a class="btn primary" href="' + p.file + '" target="_blank" rel="noopener noreferrer">' + esc(t("link.report")) + "</a></div></object>";
    pmThumbs.innerHTML = "";
    return;
  }
  pmStage.classList.remove("is-file");
  if (p.imgs) {
    pmStage.innerHTML = '<img src="' + ASSET + "projects/" + p.imgs[imgIndex] + '.jpg" alt="' + esc(p[currentLanguage].title) + '">';
    pmStage.scrollTop = 0;
    pmThumbs.innerHTML = p.imgs.length > 1 ? p.imgs.map(function (n, i) {
      return '<button type="button" data-i="' + i + '" class="' + (i === imgIndex ? "is-active" : "") + '" aria-label="' + (i + 1) + '"><img src="' + ASSET + "projects/" + n + '.jpg" alt=""></button>';
    }).join("") : "";
  } else { pmStage.innerHTML = ART[p.art]; pmThumbs.innerHTML = ""; }
}
function renderModal() {
  const p = PROJECTS.filter(function (x) { return x.id === openId; })[0]; if (!p) { return; }
  const tx = p[currentLanguage];
  renderStage(p);
  const links = p.links.map(function (l) {
    if (l.k === "github") { return '<a class="btn primary" href="' + l.href + '" target="_blank" rel="noopener noreferrer">' + esc(t("link.github")) + ' <span class="arrow" aria-hidden="true">&#8599;</span></a>'; }
    if (l.k === "repo") { return '<a class="btn ghost" href="' + l.href + '" target="_blank" rel="noopener noreferrer">GitHub &middot; ' + esc(l.label) + ' &#8599;</a>'; }
    if (l.dl) { return '<a class="btn ghost" href="' + l.href + '" download>' + esc(t("link.download")) + "</a>"; }
    return '<a class="btn primary" href="' + l.href + '" target="_blank" rel="noopener noreferrer">' + esc(t("link." + l.k)) + ' <span class="arrow" aria-hidden="true">&#8599;</span></a>';
  }).join("");
  pmBody.innerHTML = '<span class="pc-num2">' + p.num + '</span><h3 id="pmTitle">' + esc(tx.title) + '</h3><p class="pc-tag">' + esc(tx.tag) + '</p>' +
    '<div class="pm-block"><h4>' + esc(t("pm.problem")) + '</h4><p>' + esc(tx.problem) + '</p></div>' +
    '<div class="pm-block"><h4>' + esc(t("pm.goal")) + '</h4><p>' + esc(tx.goal) + '</p></div>' +
    '<div class="pm-block"><h4>' + esc(t("pm.approach")) + '</h4><ul>' + tx.approach.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div>' +
    '<div class="pm-block pm-result"><h4>' + esc(t("pm.result")) + '</h4><ul>' + tx.result.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div>' +
    '<div class="pm-block"><h4>' + esc(t("pm.tools")) + '</h4><ul class="chips small">' + p.tools.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div>' +
    (links ? '<div class="pm-links">' + links + "</div>" : "");
  pmBody.scrollTop = 0;
}
pmTabs.addEventListener("click", function (e) {
  const b = e.target.closest("button"); if (!b) { return; }
  viewMode = b.dataset.view;
  renderStage(PROJECTS.filter(function (x) { return x.id === openId; })[0]);
});
pmThumbs.addEventListener("click", function (e) {
  const b = e.target.closest("button"); if (!b) { return; }
  imgIndex = +b.dataset.i;
  renderStage(PROJECTS.filter(function (x) { return x.id === openId; })[0]);
});
document.getElementById("pmClose").addEventListener("click", closeProject);
modal.addEventListener("click", function (e) { if (e.target === modal) { closeProject(); } });
document.addEventListener("keydown", function (e) {
  if (modal.hidden) { return; }
  const p = PROJECTS.filter(function (x) { return x.id === openId; })[0];
  if (e.key === "Escape") { closeProject(); }
  else if (p && p.imgs && !(p.file && viewMode === "file") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
    imgIndex = (imgIndex + (e.key === "ArrowRight" ? 1 : -1) + p.imgs.length) % p.imgs.length; renderStage(p);
  } else if (e.key === "Tab") { /* keep focus inside the dialog */
    const f = Array.prototype.slice.call(modal.querySelectorAll("a[href],button"));
    if (!f.length) { return; }
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------------------------------------------------------
   6. CERTIFICATE LIGHTBOX
   --------------------------------------------------------- */
const certThumb = document.getElementById("certThumb");
function openCert() {
  const box = document.createElement("div");
  box.className = "lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="' + esc(t("pm.close")) + '">&times;</button><img src="assets/certificate-masar.png" alt="' + esc(certThumb.querySelector("img").alt) + '">';
  function close() { box.remove(); document.removeEventListener("keydown", onKey); certThumb.focus(); }
  function onKey(e) { if (e.key === "Escape") { close(); } }
  box.addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(box);
  box.querySelector("button").focus();
}
certThumb.addEventListener("click", openCert);
certThumb.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCert(); } });

/* ---------------------------------------------------------
   7. CONTACT FORM (opens the visitor's email app)
   --------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameEl = document.getElementById("fName"), emailEl = document.getElementById("fEmail"), msgEl = document.getElementById("fMsg");
  const name = nameEl.value.trim(), email = emailEl.value.trim(), message = msgEl.value.trim();
  [nameEl, emailEl, msgEl].forEach(function (el) { el.classList.remove("invalid"); });
  let err = "";
  if (name.length < 2) { err = t("form.errName"); nameEl.classList.add("invalid"); }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err = t("form.errEmail"); emailEl.classList.add("invalid"); }
  else if (message.length < 10) { err = t("form.errMsg"); msgEl.classList.add("invalid"); }
  if (err) { formStatus.textContent = err; formStatus.style.color = "#ff6b81"; return; }
  formStatus.style.color = ""; formStatus.textContent = t("form.ok");
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
  window.location.href = "mailto:nooralshate@gmail.com?subject=" + subject + "&body=" + body;
});
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */
(function boot() {
  const saved = store("lang");
  applyLanguage(saved === "ar" ? "ar" : "en");
  updateActive();
})();
