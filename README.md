\documentclass[a4paper,11pt]{article}

% Package imports
\usepackage{latexsym}
\usepackage{xcolor}
\usepackage{float}
\usepackage{ragged2e}
\usepackage[empty]{fullpage}
\usepackage{wrapfig}
\usepackage{lipsum}
\usepackage{tabularx}
\usepackage{titlesec}
\usepackage{geometry}
\usepackage{marvosym}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{cfr-lm}
\usepackage[T1]{fontenc}
\usepackage{fontawesome5}

% Color definitions
\definecolor{darkblue}{RGB}{0,0,139}

% Page layout
\setlength{\multicolsep}{0pt} 
\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\setlength{\footskip}{5pt} % Addressing fancyhdr warning

% Hyperlink setup (moved after fancyhdr to address warning)
\usepackage[hidelinks]{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=darkblue,
    filecolor=darkblue,
    urlcolor=darkblue,
}

% Custom box settings
\usepackage[most]{tcolorbox}
\tcbset{
    frame code={},
    center title,
    left=0pt,
    right=0pt,
    top=0pt,
    bottom=0pt,
    colback=gray!20,
    colframe=white,
    width=\dimexpr\textwidth\relax,
    enlarge left by=-2mm,
    boxsep=4pt,
    arc=0pt,outer arc=0pt,
}

% URL style
\urlstyle{same}

% Text alignment
\raggedright
\setlength{\tabcolsep}{0in}

% Section formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-7pt}]

% Custom commands
\newcommand{\resumeItem}[2]{
  \item{
    \textbf{#1}{\hspace{0.5mm}#2 \vspace{-0.5mm}}
  }
}

\newcommand{\resumePOR}[3]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1}\hspace{0.3mm}#2 & \textit{\small{#3}} 
    \end{tabular*}
    \vspace{-2mm}
}

\newcommand{\resumeSubheading}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#4}} \\
        \textit{\footnotesize{#3}} &  \footnotesize{#2}\\
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeProject}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#3}} \\
        \footnotesize{\textit{#2}} & \footnotesize{#4}
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-4pt}}

\renewcommand{\labelitemi}{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand{\labelitemii}{$\vcenter{\hbox{\tiny$\circ$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm]}
\newcommand{\resumeHeadingSkillStart}{\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm,itemsep=0.5mm]}

\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{2mm}}
\newcommand{\resumeHeadingSkillEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\cvsection}[1]{%
\vspace{2mm}
\begin{tcolorbox}
    \textbf{\large #1}
\end{tcolorbox}
    \vspace{-4mm}
}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

% Commands for icon sizing and positioning
\newcommand{\socialicon}[1]{\raisebox{-0.05em}{\resizebox{!}{1em}{#1}}}
\newcommand{\ieeeicon}[1]{\raisebox{-0.3em}{\resizebox{!}{1.3em}{#1}}}

% Font options
\newcommand{\headerfonti}{\fontfamily{phv}\selectfont} % Helvetica-like (similar to Arial/Calibri)
\newcommand{\headerfontii}{\fontfamily{ptm}\selectfont} % Times-like (similar to Times New Roman)
\newcommand{\headerfontiii}{\fontfamily{ppl}\selectfont} % Palatino (elegant serif)
\newcommand{\headerfontiv}{\fontfamily{pbk}\selectfont} % Bookman (readable serif)
\newcommand{\headerfontv}{\fontfamily{pag}\selectfont} % Avant Garde-like (similar to Trebuchet MS)
\newcommand{\headerfontvi}{\fontfamily{cmss}\selectfont} % Computer Modern Sans Serif
\newcommand{\headerfontvii}{\fontfamily{qhv}\selectfont} % Quasi-Helvetica (another Arial/Calibri alternative)
\newcommand{\headerfontviii}{\fontfamily{qpl}\selectfont} % Quasi-Palatino (another elegant serif option)
\newcommand{\headerfontix}{\fontfamily{qtm}\selectfont} % Quasi-Times (another Times New Roman alternative)
\newcommand{\headerfontx}{\fontfamily{bch}\selectfont} % Charter (clean serif font)

\begin{document}
\headerfontiii

% Header
\begin{center}
    {\Huge\textbf{Suhail Roushan}}
\end{center}
\vspace{-4.5mm}

\begin{center}
    \small{
     \href{https://api.whatsapp.com/send?phone=919618211626&text=Hello%20Suhail%20%F0%9F%91%8B}{+91 9618211626} | \href{mailto:suhail@code.in}{suhail@code.in} | 
    \href{https://suhailroushan.com/}{suhailroushan.com}
    }
\end{center}
\vspace{-4.5mm}

\begin{center}
    \small{
    \socialicon{\faLinkedin} \href{https://www.linkedin.com/in/suhailroushan13/}{suhailroushan|} 
    \socialicon{\faGithub} \href{https://github.com/suhailroushan13}{suhailroushan} 
    \socialicon{\faYoutube} \href{https://www.youtube.com/@suhailroushan13}{suhailroushan}   
    \socialicon{\faTwitter} \href{https://twitter.com/0xsuhailroushan}{suhailroushan} 
    \socialicon{\faMedium} \href{https://medium.com/@suhailroushan}{suhailroushan} 

    }
\end{center}
\vspace{-4.5mm}
\begin{center}
    \small{Hyderabad, India}
\end{center}

\vspace{-4mm}

\section{\textbf{Work Experience}}
\vspace{-0.4mm}
  \resumeSubHeadingListStart
  \resumeSubheading
      {Software Engineer}{Hyderabad, India}
      {T-Works}{Aug 2023 - Present}
      \resumeItemListStart
        \resumeItem{Impact:}{Developed full-stack applications, automation tools, and event management systems, enhancing efficiency and managing over 20,000 users.}
      \resumeItemListEnd
      
\resumeSubheading
  {Video Editor}{Hyderabad, India}
  {T-Works}{Aug 2023 - Present}
  \resumeItemListStart
    \resumeItem{Impact:}{Edited and produced high-quality video content for events and promotions, effectively communicating brand messages to over 20,000 viewers and boosting engagement.}
  \resumeItemListEnd

  \resumeSubheading
    {Fellow}{Remote}
    {CS.CODE.IN}{Jan 2022 - Dec 2022}
    \resumeItemListStart
      \resumeItem{Impact:}{Completed an intensive 12-month program in full-stack development, delivering five industrial-grade projects, including a task management system, multi-language compiler, SQL-based blog system, and Node.js MVC framework.}
    \resumeItemListEnd
  
  \resumeSubheading
    {Campus Lead}{Remote}
    {Edventure Park}{Sept 2020 - Aug 2021}
    \resumeItemListStart
      \resumeItem{Impact:}{Collaborated with cross-functional teams to design and deliver 15+ landing pages and 10 interactive prototypes, resulting in a 30 percent increase in startup engagement and growth..}
    \resumeItemListEnd
  \resumeSubheading
    {Intern}{Remote}
    {Supraja Technologies}{Aug 2020 - Sept 2020}
    \resumeItemListStart
      \resumeItem{Impact:}{Engineered a comprehensive training module on defensive strategies against cyber threats, directly benefiting 15 team members; the initiative increased awareness of security protocols and fostered a culture of cybersecurity.}
    \resumeItemListEnd
    \resumeSubheading
  {Graphic Designer}{Remote or [Location]}
  {Company Name}{[Start Month Year] - [End Month Year]}
  \resumeItemListStart
    \resumeItem{Impact:}{Executed a comprehensive branding project that produced over 20 distinct design assets for 10+ clients, resulting in improved brand recognition and a marked increase in client inquiries by 25 percent within three months.}
  \resumeItemListEnd

  \resumeSubHeadingListEnd

\section{\textbf{Education}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
\resumeSubheading
{Osmania University}{Hyderabad, India}
{Bachelor of Technology in Computer Science Engineering}{June 2019 - January 2023}
\resumeSubHeadingListEnd

\section{\textbf{Projects}}
\vspace{-0.6mm}
\resumeSubHeadingListStart

\resumeProject
  {Intern Tracker Application at T-Works}{React, NodeJS, Express, MongoDB}{\href{https://intern.tworks.in}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{Made an Intern Tracker Application to streamline management for over 50 interns at T-Works, increasing productivity by 30 percent.}
  \resumeItemListEnd
\vspace{0.2cm}

\resumeProject
  {Custom Razorpay Payment Integration}{NodeJS, Express, Razorpay API, MongoDB}{\href{https://pay.tworks.in}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{ Integrated a custom Razorpay payment gateway, enabling secure processing of ₹5,00,000 in transactions monthly, with a 20 percent increase in payment speed.
.}
  \resumeItemListEnd
\vspace{0.2cm}

\resumeProject
  {Health Nutrients Checker}{JavaScript, NodeJS, OpenAI API}{\href{https://health.suhail.app/}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{Created a web app used by 500+ users to analyze and display nutritional information of food items, helping users maintain a balanced diet, with a 40 percent increase in user engagement within the first month.}
  \resumeItemListEnd

  \resumeProject
  {Makerfaire 2023 Website + Tickets + Check-In/Out Dashboard}{React, NodeJS, Express, MongoDB}{\href{https://makerfaire.tworks.in}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{Designed and code the official website for Makerfaire 2023, including an integrated ticketing system and a check-in/check-out dashboard, managing over 10,000 attendees and reducing check-in time by 50 percent.}
  \resumeItemListEnd
\vspace{0.2cm}

\resumeProject
  {Bulk Email Sender Automation}{Python, SMTP, MongoDB}{\href{https://email.tworks.in}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{Automated the process of sending bulk emails, facilitating communication with over 5,000 recipients, and reducing manual effort by 70 percent, while improving open rates by 25 percent.}
  \resumeItemListEnd
\vspace{0.2cm}

\resumeProject
  {Social Media Automation Project}{Python, Social Media APIs, MongoDB}{\href{https://socialmedia.tworks.in}{here}}{}
  \resumeItemListStart
    \resumeItem{Impact:}{an automation tool for posting content across social media platforms, increasing brand visibility by 40 percent and saving 10+ hours weekly on manual updates.}
  \resumeItemListEnd


\resumeSubHeadingListEnd

\section{\textbf{Skills}}
\vspace{-0.4mm}
 \resumeHeadingSkillStart
  \resumeSubItem{Programming Language:}
    {JavaScript, Node.js, TypeScript, Bash}
  \resumeSubItem{Web Technologies:}
    {React, Express, HTML, CSS, MongoDB}
  \resumeSubItem{Database Systems:}
    {MySQL, MongoDB}
  \resumeSubItem{DevOps \& Version Control:}
    {Git, GitHub, Docker}
  \resumeSubItem{Cloud Technologies:}
    {AWS, Azure, GCP, Digital Ocean}
  \resumeSubItem{Specialized Area:}
    {Web Development, Cybersecurity, Scripting, Networking}
 \resumeHeadingSkillEnd

\section{\textbf{Certifications}}
\vspace{-0.2mm}
\resumeSubHeadingListStart
\resumePOR{}{\href{https://badgr.com/public/assertions/dSSEx5xCQxetr0k5tsjUXA?identity__email=suhailroushan13@gmail.com}{Postman API Fundamentals Student Expert}}{Feb 2024}

\resumePOR{}{\href{https://drive.google.com/file/d/1pj5V8GOGFikzQcLmPx_OSHgJHCyO1_RM/view?usp=sharing}{Campus Lead - EdVenture Park}}{Nov 2021}

\resumePOR{}{\href{https://drive.google.com/file/d/1fZpZfH7u5GldudvZ0Dbe4vEueNMIAErJ/view?usp=sharing}{Certified Ethical Hacker (CEH) - Supraja Technologies}}{Sept 2020}

\resumePOR{}{\href{https://drive.google.com/file/d/1-Lv2zDLjPeAbkmOEbyE2ksPkp-Mv0Mzh/view?usp=sharing}{Computer Hacking Forensic Investigator (CHFI) - BITS Pilani, Hyderabad Campus}}{Jan 2020}
\resumeSubHeadingListEnd

\end{document}