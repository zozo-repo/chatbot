"use client"

import { createContext, useState, useContext } from "react"

// Create the context
export const ChatbotContext = createContext()

// Custom hook to use the chatbot context
export const useChatbot = () => useContext(ChatbotContext)

// College information database for the chatbot
const collegeInfo = {
  // General information
  general: {
    about:
      "Lyallpur Khalsa College Technical Campus (LKCTC) is a premier technical institution in Punjab, India. Founded over 30 years ago, we are known for excellent placement rates and state-of-the-art facilities.",
    location:
      "LKCTC is located in Jalandhar, Punjab, India. Our full address is Lyallpur Khalsa College Technical Campus, G.T. Road, Jalandhar - 144001, Punjab, India.",
    contact: "You can contact us at +91 1234567890 or email us at info@lkctc.edu.in. Our website is www.lkctc.edu.in.",
    history:
      "Lyallpur Khalsa College Technical Campus was established over 30 years ago with a vision to provide quality technical education in Punjab. The institution has grown from a small engineering college to a comprehensive technical campus offering various programs.",
    timings:
      "The college operates from Monday to Friday, 9:00 AM to 5:00 PM. Administrative offices are open from 9:00 AM to 4:30 PM. The library remains open until 8:00 PM on weekdays and 5:00 PM on Saturdays.",
    campus:
      "Our sprawling campus spans over 25 acres with modern infrastructure, green spaces, and state-of-the-art facilities. The campus is designed to provide an ideal environment for academic and personal growth.",
    recognition:
      "LKCTC is approved by AICTE (All India Council for Technical Education) and affiliated with Punjab Technical University. Our programs are recognized by UGC and other relevant regulatory bodies.",
    ranking:
      "LKCTC consistently ranks among the top 50 engineering colleges in North India according to various education surveys and rankings. We have been awarded an 'A' grade by NAAC.",
    vision:
      "Our vision is to be a center of excellence in technical education, fostering innovation, research, and entrepreneurship to produce globally competitive professionals.",
    mission:
      "Our mission is to provide quality technical education, promote research and innovation, inculcate ethical values, and prepare students for successful careers and lifelong learning.",
  },

  // Programs and courses
  courses: {
    general:
      "We offer various engineering programs including Computer Science, Mechanical, Electrical, Civil, and Electronics & Communication Engineering at both undergraduate (B.Tech) and postgraduate (M.Tech) levels.",
    cse: "Our B.Tech in Computer Science Engineering is a 4-year program focusing on programming, data structures, algorithms, AI, ML, cloud computing, and more. The curriculum is regularly updated to keep pace with industry trends.",
    mechanical:
      "The B.Tech in Mechanical Engineering is a 4-year program covering thermodynamics, mechanics, manufacturing processes, CAD/CAM, robotics, and engineering materials. We have specialized labs for each major subject area.",
    electrical:
      "Our B.Tech in Electrical Engineering is a 4-year program focusing on electrical systems, power generation, distribution, control systems, and renewable energy technologies. Students get hands-on experience with industry-standard equipment.",
    civil:
      "The B.Tech in Civil Engineering is a 4-year program covering structural engineering, construction management, environmental engineering, transportation systems, and surveying. We have well-equipped labs and field study opportunities.",
    ece: "Our B.Tech in Electronics & Communication is a 4-year program focusing on electronic devices, communication systems, signal processing, VLSI design, and embedded systems. The program includes extensive practical training.",
    mtech:
      "We offer M.Tech programs in various specializations including Computer Science, Mechanical Engineering, Electrical Engineering, and Electronics & Communication. These are 2-year programs with a focus on advanced concepts and research.",
    duration:
      "All our B.Tech programs are 4-year undergraduate courses divided into 8 semesters. M.Tech programs are 2-year postgraduate courses divided into 4 semesters.",
    syllabus:
      "Our syllabi are designed in consultation with industry experts and academic leaders to ensure relevance and quality. They are regularly updated to incorporate the latest technological advancements and industry requirements.",
    electives:
      "We offer a wide range of elective courses in each branch to allow students to specialize in their areas of interest. Some popular electives include AI/ML, IoT, Robotics, Renewable Energy, and Smart Infrastructure.",
    projects:
      "Final year projects are a crucial part of our curriculum. Students work on real-world problems, often in collaboration with industry partners. We have dedicated project labs and mentoring support for all students.",
    internships:
      "Internships are integrated into our curriculum. We have tie-ups with over 100 companies for summer internships and industrial training. Our Training & Placement cell facilitates these opportunities.",
    certification:
      "We offer various certification courses in collaboration with industry leaders like Microsoft, Cisco, AWS, and Autodesk to enhance employability and provide specialized skills to our students.",
  },

  // Admissions
  admissions: {
    process:
      "Admissions to our programs are based on merit in entrance exams like JEE/State CET or through management quota. The admission process typically begins after the declaration of entrance exam results.",
    eligibility:
      "To be eligible for our B.Tech programs, you need to have completed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 60% marks (55% for reserved categories). For M.Tech, a B.Tech degree in the relevant discipline with 60% marks is required.",
    documents:
      "Required documents include mark sheets of 10th and 12th, entrance exam scores, ID proof, address proof, category certificate (if applicable), character certificate, migration certificate, and passport-sized photographs.",
    dates:
      "Our admission process typically begins in May-June each year after the declaration of entrance exam results. The academic session starts in August. Specific dates are announced on our website and through advertisements.",
    contact:
      "For admission inquiries, please contact our admission cell at admissions@lkctc.edu.in or call +91 1234567890. You can also visit our campus on working days between 9:00 AM and 4:00 PM.",
    entrance:
      "We accept scores from various entrance exams including JEE Main, State CET, and GATE (for M.Tech). The minimum cutoff varies each year based on the performance of candidates.",
    management:
      "Yes, we have a management quota for admissions. For details about management quota seats and the application process, please contact our admission cell directly.",
    lateral:
      "We offer lateral entry to diploma holders directly into the second year of B.Tech programs. Admission is based on merit in the diploma program and/or a lateral entry entrance test.",
    counseling:
      "Admission counseling sessions are conducted after the declaration of entrance exam results. During counseling, students can choose their preferred branch based on their rank and seat availability.",
    reservation:
      "We follow government norms for reservation of seats for SC, ST, OBC, and other categories. Special provisions are also available for differently-abled students and wards of defense personnel.",
    foreign:
      "We welcome international students. The admission process for international students involves verification of equivalent qualifications and may require additional documentation like visa and passport.",
  },

  // Fees and scholarships
  fees: {
    structure:
      "The annual fees for B.Tech programs range from ₹85,000 to ₹95,000 depending on the branch. For M.Tech programs, the annual fee is approximately ₹75,000. This includes tuition fees, examination fees, and basic amenities.",
    payment:
      "Fees can be paid in installments or in full at the beginning of each academic year. We accept payments through online transfer, demand draft, or at our fee counter. EMI options are also available through tie-ups with select banks.",
    scholarships:
      "We offer scholarships to meritorious students based on their academic performance and entrance exam scores. Up to 100% tuition fee waiver is available for top performers. We also have special scholarships for girl students and economically weaker sections.",
    financial_aid:
      "Financial aid options are available for deserving students. We facilitate education loans through our tie-ups with major banks. Students can apply for various government scholarships through our scholarship cell.",
    refund:
      "Fee refund in case of withdrawal is as per AICTE norms. Full refund is provided if a student withdraws before the commencement of the academic session, with deductions applicable thereafter as per the timeline.",
    hostel:
      "Hostel fees are separate from the academic fees. The annual hostel fee ranges from ₹45,000 to ₹60,000 depending on the type of accommodation (shared or single) and includes room rent, mess charges, and basic amenities.",
    transport:
      "We provide transport facilities from various parts of the city at an additional cost. The transport fee depends on the distance and ranges from ₹15,000 to ₹25,000 per annum.",
    additional:
      "Additional fees may be applicable for specialized workshops, industrial visits, certification courses, and extracurricular activities. These are communicated to students well in advance.",
    comparison:
      "Our fee structure is competitive compared to other technical institutions of similar standing. We strive to provide quality education at affordable costs, with various financial support options for deserving students.",
    increase:
      "Any increase in fees is communicated well in advance and is typically limited to 5-10% per year to account for inflation and enhancement of facilities.",
  },

  // Facilities
  facilities: {
    labs: "We have advanced laboratories for each department equipped with the latest tools and technology. Our labs are regularly upgraded to keep pace with technological advancements and industry requirements.",
    library:
      "Our digital library provides access to over 50,000 books, e-journals, research papers, and an extensive collection of digital resources. The library is equipped with a reading hall, discussion rooms, and computer terminals for digital access.",
    computing:
      "We have state-of-the-art computer centers with high-speed internet (1 Gbps) and modern computing facilities. All computers are equipped with the latest software required for academic and research purposes.",
    hostel:
      "Separate hostels for boys and girls with modern amenities, mess, recreation facilities, gym, and 24/7 security are available. All hostel rooms are well-furnished with attached bathrooms, study tables, and Wi-Fi connectivity.",
    sports:
      "Our campus has excellent sports facilities including cricket ground, football field, basketball court, tennis court, badminton court, table tennis, and indoor games. We have qualified coaches for various sports.",
    cafeteria:
      "The college cafeteria serves nutritious and affordable meals throughout the day. We also have coffee shops and snack corners at various locations within the campus.",
    wifi: "Yes, our entire campus is Wi-Fi enabled with high-speed internet connectivity. Students can access the internet for academic purposes using their college credentials.",
    medical:
      "We have a medical center on campus with a qualified doctor and nursing staff. First aid facilities are available, and we have tie-ups with nearby hospitals for emergency medical care.",
    transport:
      "College buses ply from various parts of the city to the campus. The transport facility is available at an additional cost and routes are designed based on student requirements.",
    auditorium:
      "Our campus has a state-of-the-art auditorium with a seating capacity of 500 and modern audio-visual equipment. We also have multiple seminar halls for conferences, workshops, and cultural events.",
    labs_details:
      "Each department has specialized labs. For example, CSE has labs for programming, networking, AI/ML, and cloud computing. Mechanical has labs for thermodynamics, manufacturing, CAD/CAM, and material testing.",
    security:
      "The campus is under 24/7 CCTV surveillance with trained security personnel at all entry and exit points. We have strict protocols for visitor management and student safety.",
    recreation:
      "Recreational facilities include a student activity center, music room, dance studio, art space, and various clubs for extracurricular activities. We organize cultural and technical festivals annually.",
    banking:
      "An ATM facility is available on campus. We also have a bank extension counter for various banking services including education loans, fee payments, and other financial transactions.",
    maintenance:
      "We have a dedicated maintenance team for infrastructure upkeep. Any issues related to facilities can be reported through our online portal or at the maintenance office.",
  },

  // Placements
  placements: {
    overview:
      "We have an excellent placement record with an 85% placement rate. Our Training & Placement cell has ties with over 100 companies that regularly visit our campus for recruitment. We provide comprehensive placement preparation to all eligible students.",
    companies:
      "Top companies like TCS, Infosys, Wipro, HCL, Tech Mahindra, Amazon, Microsoft, IBM, Capgemini, Accenture, L&T, Godrej, TATA Motors, Maruti Suzuki, and many more visit our campus for recruitment.",
    preparation:
      "We provide comprehensive placement preparation including aptitude training, technical skills enhancement, mock interviews, group discussion practice, resume building workshops, and personality development sessions.",
    internships:
      "We facilitate internships for students in reputed companies to gain practical industry experience. Many of these internships convert into pre-placement offers. We have a dedicated internship coordinator for each department.",
    stats:
      "The average package offered to our students is around 6 LPA, with the highest package reaching up to 12 LPA. The placement percentage varies by branch, with Computer Science and IT having the highest placement rates of over 90%.",
    process:
      "The placement process typically includes pre-placement talks, aptitude tests, technical interviews, HR interviews, and final selection. Our placement cell coordinates the entire process and provides necessary support to students.",
    branch_wise:
      "Branch-wise placement statistics for the last batch: CSE - 92%, ECE - 85%, Mechanical - 80%, Electrical - 82%, Civil - 75%. The average package also varies by branch, with CSE having the highest average of 7 LPA.",
    alumni:
      "Our alumni are working in prestigious organizations across the globe. We have a strong alumni network that actively participates in campus recruitment, mentoring, and other college activities.",
    startups:
      "We also encourage entrepreneurship and startups. Our Entrepreneurship Development Cell provides mentoring, incubation facilities, and seed funding for student startups. Several successful startups have emerged from our campus.",
    off_campus:
      "Apart from campus placements, we also share off-campus job opportunities with our students. Our industry connections help students secure good positions even outside the formal placement process.",
    higher_studies:
      "Many of our students opt for higher studies in India and abroad. We provide guidance for GATE, GRE, TOEFL, and other competitive exams. Our students have secured admissions in prestigious institutions worldwide.",
    career_counseling:
      "We offer career counseling services to help students identify their strengths and choose appropriate career paths. Individual counseling sessions are conducted by experienced career counselors and industry experts.",
  },

  // Faculty
  faculty: {
    quality:
      "We have highly qualified faculty members with PhDs and industry experience across all departments. Many of our professors are renowned in their fields and have significant research contributions.",
    research:
      "Our faculty members are engaged in cutting-edge research and consultancy projects. They regularly publish papers in reputed journals and present their work at international conferences.",
    ratio:
      "We maintain a healthy student-to-faculty ratio of 15:1 to ensure personalized attention to each student. This enables better mentoring and academic support.",
    development:
      "Regular faculty development programs are conducted to keep our teachers updated with the latest developments in their fields. We also encourage faculty to pursue research and higher qualifications.",
    expertise:
      "Our faculty members have expertise in various specialized areas. For example, in CSE, we have experts in AI/ML, cybersecurity, cloud computing, and data science. In Mechanical, we have experts in robotics, CAD/CAM, and thermal engineering.",
    interaction:
      "We encourage open interaction between faculty and students beyond classroom hours. Faculty members are available for doubt clearing, mentoring, and project guidance during designated hours.",
    visiting:
      "We also invite visiting faculty from industry and other academic institutions to provide exposure to different perspectives and practical insights. These sessions complement the regular curriculum.",
    evaluation:
      "Faculty performance is regularly evaluated through student feedback, peer reviews, and academic outcomes. This helps maintain high standards of teaching and continuous improvement.",
    awards:
      "Many of our faculty members have received awards and recognition for their teaching excellence and research contributions at national and international levels.",
    publications:
      "Our faculty has published over 500 research papers in international journals and conferences in the last five years. Several patents have also been filed and granted based on research work done at our institution.",
  },

  // Student Life
  student_life: {
    clubs:
      "We have various student clubs including technical clubs (Coding Club, Robotics Club, IoT Club), cultural clubs (Music, Dance, Drama), literary clubs, and sports clubs. These clubs organize regular activities and events.",
    events:
      "Our annual technical festival 'TechFest' and cultural festival 'Rhythm' are major events that attract participation from colleges across the region. Department-specific technical symposia are also organized regularly.",
    competitions:
      "Students regularly participate in various national and international competitions like Hackathons, Robocon, SAE competitions, coding contests, and cultural competitions, bringing laurels to the institution.",
    community:
      "Community service is an integral part of student life at LKCTC. Our NSS unit organizes various social service activities including blood donation camps, tree plantation drives, and village adoption programs.",
    accommodation:
      "Our hostels provide a comfortable living environment with all necessary amenities. Separate hostels for boys and girls with mess facilities, recreation rooms, gym, and Wi-Fi connectivity are available.",
    mess: "The hostel mess serves nutritious and balanced meals. Special dietary requirements are accommodated upon request. The mess committee, which includes student representatives, oversees the quality and variety of food.",
    transportation:
      "College buses operate on multiple routes covering major parts of the city. The bus schedule is designed to align with college timings. GPS tracking of buses is available through our college app.",
    mentoring:
      "Each student is assigned a faculty mentor who provides academic guidance, career counseling, and personal support throughout their academic journey. Regular mentoring sessions are conducted.",
    grievance:
      "We have a robust grievance redressal system. Students can report any issues through our online portal or directly to the grievance committee. All complaints are addressed promptly and confidentially.",
    anti_ragging:
      "We have a strict anti-ragging policy in line with UGC guidelines. Our campus is ragging-free, and any such incidents are dealt with severely. A dedicated anti-ragging committee is always vigilant.",
    diversity:
      "We celebrate diversity on campus with students from various states and backgrounds. Cultural exchange programs and celebrations of different festivals promote harmony and mutual respect.",
    alumni_network:
      "Our strong alumni network provides mentoring, internship opportunities, and career guidance to current students. Regular alumni meets and interaction sessions are organized.",
  },

  // Research and Innovation
  research: {
    centers:
      "We have dedicated research centers in emerging areas like AI/ML, IoT, Renewable Energy, Advanced Manufacturing, and Structural Engineering. These centers are equipped with state-of-the-art facilities for research work.",
    projects:
      "Our faculty and students are involved in various research projects funded by government agencies like DST, CSIR, and AICTE, as well as industry partners. The total research funding exceeds ₹2 crores annually.",
    publications:
      "Our institution has a strong publication record with over 500 papers published in reputed journals and conferences in the last five years. We also have several patents to our credit.",
    collaborations:
      "We have research collaborations with various national and international universities and research organizations. These collaborations facilitate exchange of knowledge, resources, and expertise.",
    conferences:
      "We regularly organize national and international conferences, workshops, and seminars on emerging technologies and research areas. These events provide a platform for knowledge sharing and networking.",
    journals:
      "We publish our own research journal 'LKCTC Journal of Technology and Research' which features quality research papers from our faculty, students, and external researchers.",
    innovation:
      "Our Innovation Cell promotes a culture of innovation and entrepreneurship among students. Regular ideation workshops, hackathons, and innovation contests are organized to nurture creative thinking.",
    incubation:
      "We have an incubation center that provides support to student startups including mentoring, infrastructure, seed funding, and networking opportunities with industry and investors.",
    patents:
      "We have filed several patents based on the research work done at our institution. We provide support for patent filing and intellectual property rights protection to our researchers.",
    funding:
      "We offer seed funding for promising research projects and startups. We also assist researchers in securing external funding from government agencies and industry partners.",
    phd: "We offer PhD programs in various disciplines in collaboration with affiliated universities. Our faculty members serve as research guides for PhD scholars.",
    labs: "Our research labs are equipped with advanced equipment and software tools. Some of our specialized labs include AI Research Lab, IoT Lab, Renewable Energy Lab, Advanced Manufacturing Lab, and Structural Engineering Lab.",
  },

  // Industry Connections
  industry: {
    partnerships:
      "We have strategic partnerships with over 100 companies across various sectors. These partnerships facilitate internships, placements, industry projects, and knowledge exchange.",
    visits:
      "Regular industrial visits are organized for students to gain practical exposure to industrial processes and technologies. These visits complement theoretical learning with real-world insights.",
    experts:
      "Industry experts regularly visit our campus for guest lectures, workshops, and seminars. These interactions provide students with industry perspectives and awareness of current trends.",
    projects:
      "Students work on industry-sponsored projects that address real-world problems. These projects often lead to innovative solutions and sometimes even patents or startups.",
    training:
      "We offer specialized industry-oriented training programs in collaboration with our industry partners. These programs enhance employability and provide industry-relevant skills.",
    consultancy:
      "Our faculty undertakes consultancy projects for industry, providing expert solutions to technical challenges. This strengthens our industry connections and keeps our faculty updated with industry practices.",
    mou: "We have signed Memorandums of Understanding (MoUs) with various companies for collaborative research, training, internships, and placements. These formal agreements ensure sustained engagement.",
    csr: "We collaborate with companies for their Corporate Social Responsibility (CSR) initiatives, particularly in the areas of education, skill development, and community service.",
    advisory:
      "Our Industry Advisory Board, comprising senior executives from various companies, provides strategic guidance for curriculum development, research focus, and overall institutional growth.",
    alumni:
      "Many of our alumni hold key positions in various companies and serve as a bridge between the institution and industry. They actively participate in campus recruitment and other college-industry interactions.",
  },

  // Infrastructure
  infrastructure: {
    campus:
      "Our sprawling campus spans over 25 acres with modern infrastructure, green spaces, and state-of-the-art facilities. The campus is designed to provide an ideal environment for academic and personal growth.",
    buildings:
      "The campus has separate buildings for each department, administrative block, library, hostels, sports complex, and auditorium. All buildings are designed with modern architecture and amenities.",
    classrooms:
      "Our classrooms are spacious, well-ventilated, and equipped with modern teaching aids including projectors, smart boards, and audio systems. Wi-Fi connectivity is available in all classrooms.",
    labs: "Each department has multiple specialized labs equipped with the latest equipment and software. These labs provide hands-on learning experience and support research activities.",
    library:
      "Our central library is a knowledge hub with a vast collection of books, journals, and digital resources. It has a seating capacity of 300 and remains open from 8:00 AM to 8:00 PM on weekdays.",
    hostels:
      "We have separate hostel blocks for boys and girls with a total capacity of 1000 students. All hostels have modern amenities, mess facilities, recreation areas, and 24/7 security.",
    sports:
      "Our sports infrastructure includes a cricket ground, football field, basketball court, tennis court, badminton court, volleyball court, and indoor games facilities. We also have a well-equipped gymnasium.",
    auditorium:
      "The main auditorium has a seating capacity of 500 and is equipped with modern audio-visual systems. It hosts various college events, conferences, and cultural programs.",
    cafeteria:
      "Our spacious cafeteria can accommodate 200 students at a time and serves a variety of food options at affordable prices. We also have coffee shops and snack corners at various locations.",
    medical:
      "The campus has a medical center with basic medical facilities and a qualified doctor. We have tie-ups with nearby hospitals for emergency medical care.",
    power:
      "The campus has 24/7 power supply with backup generators to ensure uninterrupted academic and administrative activities. We also have solar panels installed as part of our green initiative.",
    water:
      "Clean drinking water is available throughout the campus with water coolers and purifiers installed at various locations. We have a water treatment plant for sustainable water management.",
    security:
      "The entire campus is under CCTV surveillance with security personnel stationed at all entry and exit points. Strict protocols are followed for visitor management and student safety.",
    maintenance:
      "We have a dedicated maintenance team for regular upkeep of infrastructure and prompt addressing of any issues. An online portal is available for reporting maintenance requirements.",
  },

  // Achievements
  achievements: {
    rankings:
      "LKCTC consistently ranks among the top 50 engineering colleges in North India according to various education surveys and rankings. We have been awarded an 'A' grade by NAAC.",
    accreditation:
      "Our institution is accredited by NAAC with an 'A' grade. Several of our programs have also received NBA accreditation, reflecting our commitment to quality education.",
    awards:
      "We have received various awards for academic excellence, research contributions, infrastructure, and placement records. Notable among these is the 'Best Engineering College in Punjab' award for three consecutive years.",
    research:
      "Our faculty and students have published over 500 research papers in reputed journals and conferences in the last five years. We have also filed several patents based on research work done at our institution.",
    competitions:
      "Our students have won numerous awards in national and international competitions including technical contests, hackathons, robotics competitions, cultural events, and sports tournaments.",
    placements:
      "We have achieved remarkable placement records with an average of 85% placement across all branches. Our students are working in prestigious organizations in India and abroad.",
    projects:
      "Several innovative projects by our students have received recognition and funding from government agencies and industry. Some projects have also led to successful startups.",
    social:
      "Our institution has made significant contributions to society through various community service initiatives, technological solutions for social problems, and skill development programs for underprivileged sections.",
    alumni:
      "Our alumni have achieved remarkable success in various fields including corporate leadership, entrepreneurship, research, and civil services. Many alumni have been recognized with prestigious awards and honors.",
    sports:
      "Our sports teams have won numerous championships at university, state, and national levels. Several of our students have represented the state and country in various sports.",
  },

  // Admission FAQs
  admission_faqs: {
    process:
      "The admission process involves online application, document verification, entrance exam (if applicable), counseling, and fee payment. Detailed instructions are provided on our website during the admission season.",
    eligibility:
      "For B.Tech, you need 10+2 with PCM and minimum 60% marks (55% for reserved categories). For M.Tech, a B.Tech degree in the relevant discipline with 60% marks is required.",
    entrance:
      "We accept JEE Main scores for B.Tech admissions and GATE scores for M.Tech. State-level entrance exam scores are also considered. The cutoff varies each year based on the performance of candidates.",
    documents:
      "Required documents include mark sheets, entrance exam scorecard, ID proof, address proof, category certificate (if applicable), character certificate, migration certificate, and photographs.",
    management:
      "Yes, we have management quota seats. For details about the application process and fee structure for management quota, please contact our admission cell directly.",
    lateral:
      "Diploma holders can apply for lateral entry directly into the second year of B.Tech. Admission is based on merit in the diploma program and/or a lateral entry entrance test.",
    nri: "We have a quota for NRI/Foreign students. The admission process involves verification of equivalent qualifications and may require additional documentation like visa and passport.",
    scholarship:
      "Merit scholarships are available based on entrance exam rank or 12th marks. Special scholarships are also available for girl students, economically weaker sections, and sports achievers.",
    hostel:
      "Hostel accommodation is provided on a first-come-first-served basis after admission confirmation. You can apply for hostel accommodation during the admission process.",
    branch_change:
      "Branch change is possible after the first year based on academic performance and seat availability. The specific criteria are announced at the beginning of the second year.",
  },

  // Placement FAQs
  placement_faqs: {
    eligibility:
      "All students who maintain a minimum CGPA of 6.0 (or 60%) throughout their academic program with no history of backlogs are eligible for campus placements.",
    companies:
      "Companies from various sectors including IT, manufacturing, automotive, electronics, construction, and consulting visit our campus. Some top recruiters include TCS, Infosys, Wipro, HCL, Amazon, and Microsoft.",
    package:
      "The average package is around 6 LPA, with the highest package reaching up to 12 LPA. The package varies by branch and company, with IT and Computer Science generally having higher packages.",
    preparation:
      "We provide comprehensive placement preparation including aptitude training, technical skills enhancement, mock interviews, GD practice, resume building, and personality development.",
    internship:
      "Internships are facilitated through our placement cell. Many companies offer pre-placement internships that often convert into full-time job offers upon successful completion.",
    off_campus:
      "We regularly share off-campus job opportunities with eligible students. Our industry connections help students secure good positions even outside the formal placement process.",
    higher_studies:
      "Students planning for higher studies can opt out of the placement process. We provide guidance for GATE, GRE, TOEFL, and other competitive exams for higher studies.",
    startup:
      "Students interested in entrepreneurship can access our incubation center resources. We provide mentoring, infrastructure, and seed funding for promising startup ideas.",
    alumni:
      "Our alumni network plays a crucial role in placements by referring students to their organizations, conducting mock interviews, and providing industry insights.",
    branch_wise:
      "Branch-wise placement statistics for the last batch: CSE - 92%, ECE - 85%, Mechanical - 80%, Electrical - 82%, Civil - 75%. The trend has been consistently positive over the years.",
  },

  // Hostel FAQs
  hostel_faqs: {
    facilities:
      "Our hostels are equipped with furnished rooms, attached bathrooms, study tables, Wi-Fi, recreation areas, gym, TV room, reading room, and 24/7 security. Separate hostels are available for boys and girls.",
    allocation:
      "Hostel rooms are allocated on a first-come-first-served basis after admission confirmation. You can apply for hostel accommodation during the admission process.",
    fees: "The annual hostel fee ranges from ₹45,000 to ₹60,000 depending on the type of accommodation (shared or single) and includes room rent, mess charges, and basic amenities.",
    mess: "The hostel mess serves nutritious and balanced meals three times a day. Special dietary requirements are accommodated upon request. The mess committee, which includes student representatives, oversees the quality and variety of food.",
    rules:
      "Hostel rules include fixed study hours, entry/exit timings, visitor restrictions, and code of conduct. These rules are designed to ensure a conducive environment for academic pursuits and personal growth.",
    security:
      "Hostels have 24/7 security with CCTV surveillance, biometric entry, and regular monitoring. Female hostels have additional security measures including female wardens and staff.",
    medical:
      "Basic medical facilities are available in hostels with first aid kits and regular visits by a doctor. In case of emergencies, students are taken to the nearest hospital with which we have tie-ups.",
    internet:
      "Wi-Fi connectivity is available in all hostels with reasonable data limits for academic purposes. Additional data packs can be purchased if required.",
    laundry:
      "Laundry services are available within the hostel premises at nominal charges. Some hostels also have self-service washing machines for student use.",
    visitors:
      "Parents and guardians can visit students during designated visiting hours. Overnight stay for visitors is not permitted except in special circumstances with prior permission from the warden.",
  },

  // Academic FAQs
  academic_faqs: {
    curriculum:
      "Our curriculum is designed in consultation with industry experts and academic leaders. It includes core subjects, electives, practical sessions, projects, and internships to provide a comprehensive learning experience.",
    evaluation:
      "The evaluation system includes continuous assessment through assignments, quizzes, mid-term exams, and practical evaluations, along with end-semester examinations. The weightage for continuous assessment is typically 40-50%.",
    grading:
      "We follow a relative grading system with grades ranging from A+ to F. The CGPA is calculated on a 10-point scale. A minimum CGPA of 5.0 is required to pass a semester.",
    attendance:
      "A minimum of 75% attendance is mandatory in each subject to be eligible for the end-semester examination. Medical emergencies and participation in college-approved events are considered for attendance relaxation.",
    backlog:
      "Students with backlogs can appear for supplementary examinations conducted shortly after the regular examinations. A maximum of two attempts are allowed to clear a backlog subject.",
    internship:
      "Internships are an integral part of the curriculum, typically scheduled during summer breaks. The duration varies from 4 to 8 weeks depending on the program. Internships can be done at industry partners or research organizations.",
    projects:
      "Final year projects are mandatory for all students. Projects can be individual or group-based and are supervised by faculty members. Industry-sponsored projects are encouraged to address real-world problems.",
    electives:
      "Students can choose electives from a wide range of subjects based on their interests and career goals. The elective options are announced before the beginning of each semester.",
    exchange:
      "We have student exchange programs with several national and international universities. These programs provide exposure to different academic environments and cultural experiences.",
    research:
      "Undergraduate students are encouraged to participate in research activities under faculty guidance. Research scholarships and incentives are provided for quality research work.",
    library:
      "Our library remains open from 8:00 AM to 8:00 PM on weekdays and 9:00 AM to 5:00 PM on Saturdays. Digital resources can be accessed 24/7 through our online portal.",
    mentoring:
      "Each student is assigned a faculty mentor who provides academic guidance, career counseling, and personal support throughout their academic journey.",
  },

  // Campus Life FAQs
  campus_faqs: {
    clubs:
      "We have various student clubs including technical clubs (Coding Club, Robotics Club, IoT Club), cultural clubs (Music, Dance, Drama), literary clubs, and sports clubs. Students are encouraged to join these clubs based on their interests.",
    events:
      "Major events include our annual technical festival 'TechFest', cultural festival 'Rhythm', sports meet 'Zenith', and department-specific technical symposia. These events feature competitions, workshops, talks, and cultural performances.",
    sports:
      "Sports facilities include cricket ground, football field, basketball court, tennis court, badminton court, volleyball court, and indoor games. Regular tournaments and training sessions are conducted under qualified coaches.",
    cultural:
      "Cultural activities are promoted through various clubs and annual cultural festival. Regular workshops, performances, and competitions are organized to nurture artistic talents.",
    cafeteria:
      "Our cafeteria serves a variety of food options at affordable prices. We also have coffee shops and snack corners at various locations within the campus. Food quality is regularly monitored by a designated committee.",
    wifi: "The entire campus is Wi-Fi enabled with high-speed internet connectivity. Students can access the internet for academic purposes using their college credentials.",
    transport:
      "College buses operate on multiple routes covering major parts of the city. The bus schedule is designed to align with college timings. GPS tracking of buses is available through our college app.",
    security:
      "The campus is under 24/7 CCTV surveillance with trained security personnel at all entry and exit points. Strict protocols are followed for visitor management and student safety.",
    medical:
      "We have a medical center on campus with a qualified doctor and nursing staff. First aid facilities are available, and we have tie-ups with nearby hospitals for emergency medical care.",
    grievance:
      "Students can report any issues through our online portal or directly to the grievance committee. All complaints are addressed promptly and confidentially.",
    anti_ragging:
      "We have a strict anti-ragging policy in line with UGC guidelines. Our campus is ragging-free, and any such incidents are dealt with severely. A dedicated anti-ragging committee is always vigilant.",
    counseling:
      "Professional counseling services are available for students facing academic stress, personal issues, or career dilemmas. Counseling sessions are conducted with complete confidentiality.",
  },
}

// Keywords mapping to information categories
const keywordMap = {
  // General keywords
  about: "general.about",
  college: "general.about",
  campus: "general.location",
  lkctc: "general.about",
  where: "general.location",
  location: "general.location",
  address: "general.location",
  contact: "general.contact",
  phone: "general.contact",
  email: "general.contact",
  history: "general.history",
  established: "general.history",
  founded: "general.history",
  timing: "general.timings",
  timings: "general.timings",
  hours: "general.timings",
  recognition: "general.recognition",
  approved: "general.recognition",
  affiliated: "general.recognition",
  ranking: "general.ranking",
  rank: "general.ranking",
  vision: "general.vision",
  mission: "general.mission",

  // Courses keywords
  course: "courses.general",
  courses: "courses.general",
  program: "courses.general",
  programs: "courses.general",
  branch: "courses.general",
  branches: "courses.general",
  engineering: "courses.general",
  computer: "courses.cse",
  cse: "courses.cse",
  it: "courses.cse",
  software: "courses.cse",
  programming: "courses.cse",
  mechanical: "courses.mechanical",
  mech: "courses.mechanical",
  electrical: "courses.electrical",
  eee: "courses.electrical",
  civil: "courses.civil",
  electronics: "courses.ece",
  communication: "courses.ece",
  ece: "courses.ece",
  mtech: "courses.mtech",
  postgraduate: "courses.mtech",
  pg: "courses.mtech",
  duration: "courses.duration",
  years: "courses.duration",
  semester: "courses.duration",
  syllabus: "courses.syllabus",
  curriculum: "courses.syllabus",
  subjects: "courses.syllabus",
  elective: "courses.electives",
  electives: "courses.electives",
  project: "courses.projects",
  projects: "courses.projects",
  internship: "courses.internships",
  internships: "courses.internships",
  certification: "courses.certification",
  certificate: "courses.certification",

  // Admissions keywords
  admission: "admissions.process",
  admissions: "admissions.process",
  apply: "admissions.process",
  "how to apply": "admissions.process",
  entrance: "admissions.entrance",
  exam: "admissions.entrance",
  jee: "admissions.entrance",
  cet: "admissions.entrance",
  gate: "admissions.entrance",
  eligibility: "admissions.eligibility",
  eligible: "admissions.eligibility",
  criteria: "admissions.eligibility",
  documents: "admissions.documents",
  document: "admissions.documents",
  paperwork: "admissions.documents",
  when: "admissions.dates",
  dates: "admissions.dates",
  deadline: "admissions.dates",
  "last date": "admissions.dates",
  management: "admissions.management",
  quota: "admissions.management",
  lateral: "admissions.lateral",
  "lateral entry": "admissions.lateral",
  diploma: "admissions.lateral",
  counseling: "admissions.counseling",
  counselling: "admissions.counseling",
  reservation: "admissions.reservation",
  reserved: "admissions.reservation",
  sc: "admissions.reservation",
  st: "admissions.reservation",
  obc: "admissions.reservation",
  foreign: "admissions.foreign",
  nri: "admissions.foreign",
  international: "admissions.foreign",

  // Fees keywords
  fee: "fees.structure",
  fees: "fees.structure",
  cost: "fees.structure",
  tuition: "fees.structure",
  payment: "fees.payment",
  pay: "fees.payment",
  installment: "fees.payment",
  emi: "fees.payment",
  scholarship: "fees.scholarships",
  scholarships: "fees.scholarships",
  merit: "fees.scholarships",
  "financial aid": "fees.financial_aid",
  loan: "fees.financial_aid",
  refund: "fees.refund",
  "fee refund": "fees.refund",
  withdrawal: "fees.refund",
  "hostel fee": "fees.hostel",
  "hostel fees": "fees.hostel",
  "hostel cost": "fees.hostel",
  "transport fee": "fees.transport",
  "bus fee": "fees.transport",
  additional: "fees.additional",
  "extra fees": "fees.additional",
  comparison: "fees.comparison",
  "fee comparison": "fees.comparison",
  increase: "fees.increase",
  "fee increase": "fees.increase",

  // Facilities keywords
  facility: "facilities.labs",
  facilities: "facilities.labs",
  infrastructure: "facilities.labs",
  lab: "facilities.labs",
  labs: "facilities.labs",
  laboratory: "facilities.labs",
  laboratories: "facilities.labs",
  library: "facilities.library",
  books: "facilities.library",
  "digital library": "facilities.library",
  computer: "facilities.computing",
  internet: "facilities.wifi",
  wifi: "facilities.wifi",
  "wi-fi": "facilities.wifi",
  hostel: "facilities.hostel",
  accommodation: "facilities.hostel",
  stay: "facilities.hostel",
  room: "facilities.hostel",
  sport: "facilities.sports",
  sports: "facilities.sports",
  game: "facilities.sports",
  games: "facilities.sports",
  food: "facilities.cafeteria",
  cafeteria: "facilities.cafeteria",
  canteen: "facilities.cafeteria",
  mess: "facilities.cafeteria",
  medical: "facilities.medical",
  doctor: "facilities.medical",
  health: "facilities.medical",
  transport: "facilities.transport",
  bus: "facilities.transport",
  auditorium: "facilities.auditorium",
  seminar: "facilities.auditorium",
  hall: "facilities.auditorium",
  security: "facilities.security",
  safe: "facilities.security",
  cctv: "facilities.security",
  recreation: "facilities.recreation",
  "student activity": "facilities.recreation",
  banking: "facilities.banking",
  atm: "facilities.banking",
  maintenance: "facilities.maintenance",
  "labs details": "facilities.labs_details",
  "lab details": "facilities.labs_details",

  // Placements keywords
  placement: "placements.overview",
  placements: "placements.overview",
  job: "placements.overview",
  jobs: "placements.overview",
  career: "placements.overview",
  careers: "placements.overview",
  company: "placements.companies",
  companies: "placements.companies",
  recruiter: "placements.companies",
  recruiters: "placements.companies",
  interview: "placements.preparation",
  preparation: "placements.preparation",
  train: "placements.preparation",
  training: "placements.preparation",
  internship: "placements.internships",
  internships: "placements.internships",
  package: "placements.stats",
  salary: "placements.stats",
  lpa: "placements.stats",
  ctc: "placements.stats",
  "placement process": "placements.process",
  "branch wise": "placements.branch_wise",
  "branch-wise": "placements.branch_wise",
  alumni: "placements.alumni",
  startup: "placements.startups",
  startups: "placements.startups",
  entrepreneur: "placements.startups",
  entrepreneurship: "placements.startups",
  "off campus": "placements.off_campus",
  "off-campus": "placements.off_campus",
  "higher studies": "placements.higher_studies",
  "higher education": "placements.higher_studies",
  "career counseling": "placements.career_counseling",
  "career guidance": "placements.career_counseling",

  // Faculty keywords
  faculty: "faculty.quality",
  teacher: "faculty.quality",
  teachers: "faculty.quality",
  professor: "faculty.quality",
  professors: "faculty.quality",
  research: "faculty.research",
  ratio: "faculty.ratio",
  "student to faculty": "faculty.ratio",
  development: "faculty.development",
  expertise: "faculty.expertise",
  expert: "faculty.expertise",
  specialization: "faculty.expertise",
  interaction: "faculty.interaction",
  "faculty interaction": "faculty.interaction",
  visiting: "faculty.visiting",
  "visiting faculty": "faculty.visiting",
  evaluation: "faculty.evaluation",
  "faculty evaluation": "faculty.evaluation",
  awards: "faculty.awards",
  "faculty awards": "faculty.awards",
  publications: "faculty.publications",
  "research papers": "faculty.publications",

  // Student Life keywords
  "student life": "student_life.clubs",
  clubs: "student_life.clubs",
  "student clubs": "student_life.clubs",
  events: "student_life.events",
  festival: "student_life.events",
  fest: "student_life.events",
  competitions: "student_life.competitions",
  contest: "student_life.competitions",
  community: "student_life.community",
  "social service": "student_life.community",
  nss: "student_life.community",
  accommodation: "student_life.accommodation",
  "hostel accommodation": "student_life.accommodation",
  mess: "student_life.mess",
  "hostel mess": "student_life.mess",
  "hostel food": "student_life.mess",
  transportation: "student_life.transportation",
  "college bus": "student_life.transportation",
  mentoring: "student_life.mentoring",
  mentor: "student_life.mentoring",
  grievance: "student_life.grievance",
  complaint: "student_life.grievance",
  "anti ragging": "student_life.anti_ragging",
  ragging: "student_life.anti_ragging",
  diversity: "student_life.diversity",
  "cultural diversity": "student_life.diversity",
  "alumni network": "student_life.alumni_network",

  // Research and Innovation keywords
  "research centers": "research.centers",
  "research centre": "research.centers",
  "research projects": "research.projects",
  "funded projects": "research.projects",
  publications: "research.publications",
  "research papers": "research.publications",
  collaborations: "research.collaborations",
  "research collaborations": "research.collaborations",
  conferences: "research.conferences",
  workshop: "research.conferences",
  seminar: "research.conferences",
  journals: "research.journals",
  "research journal": "research.journals",
  innovation: "research.innovation",
  innovative: "research.innovation",
  incubation: "research.incubation",
  "incubation center": "research.incubation",
  patents: "research.patents",
  patent: "research.patents",
  "intellectual property": "research.patents",
  funding: "research.funding",
  "research funding": "research.funding",
  phd: "research.phd",
  "doctoral program": "research.phd",
  "research labs": "research.labs",
  "research laboratory": "research.labs",

  // Industry Connections keywords
  "industry partnerships": "industry.partnerships",
  "industry partners": "industry.partnerships",
  "industrial visits": "industry.visits",
  "industry visits": "industry.visits",
  "industry experts": "industry.experts",
  "guest lectures": "industry.experts",
  "industry projects": "industry.projects",
  "sponsored projects": "industry.projects",
  "industry training": "industry.training",
  "industrial training": "industry.training",
  consultancy: "industry.consultancy",
  "faculty consultancy": "industry.consultancy",
  mou: "industry.mou",
  "memorandum of understanding": "industry.mou",
  csr: "industry.csr",
  "corporate social responsibility": "industry.csr",
  "industry advisory": "industry.advisory",
  "advisory board": "industry.advisory",
  "industry alumni": "industry.alumni",
  "alumni in industry": "industry.alumni",

  // Infrastructure keywords
  "campus infrastructure": "infrastructure.campus",
  buildings: "infrastructure.buildings",
  "college buildings": "infrastructure.buildings",
  classrooms: "infrastructure.classrooms",
  "smart classrooms": "infrastructure.classrooms",
  "infrastructure labs": "infrastructure.labs",
  "library infrastructure": "infrastructure.library",
  "hostel infrastructure": "infrastructure.hostels",
  "sports infrastructure": "infrastructure.sports",
  "auditorium infrastructure": "infrastructure.auditorium",
  "cafeteria infrastructure": "infrastructure.cafeteria",
  "medical infrastructure": "infrastructure.medical",
  "power supply": "infrastructure.power",
  electricity: "infrastructure.power",
  "water supply": "infrastructure.water",
  "drinking water": "infrastructure.water",
  "security infrastructure": "infrastructure.security",
  "maintenance infrastructure": "infrastructure.maintenance",

  // Achievements keywords
  "college rankings": "achievements.rankings",
  "college ranking": "achievements.rankings",
  accreditation: "achievements.accreditation",
  naac: "achievements.accreditation",
  nba: "achievements.accreditation",
  "college awards": "achievements.awards",
  "research achievements": "achievements.research",
  "competition achievements": "achievements.competitions",
  "placement achievements": "achievements.placements",
  "project achievements": "achievements.projects",
  "social achievements": "achievements.social",
  "alumni achievements": "achievements.alumni",
  "sports achievements": "achievements.sports",

  // Admission FAQs keywords
  "admission process faq": "admission_faqs.process",
  "admission eligibility faq": "admission_faqs.eligibility",
  "entrance exam faq": "admission_faqs.entrance",
  "admission documents faq": "admission_faqs.documents",
  "management quota faq": "admission_faqs.management",
  "lateral entry faq": "admission_faqs.lateral",
  "nri admission faq": "admission_faqs.nri",
  "foreign admission faq": "admission_faqs.nri",
  "scholarship faq": "admission_faqs.scholarship",
  "hostel admission faq": "admission_faqs.hostel",
  "branch change faq": "admission_faqs.branch_change",

  // Placement FAQs keywords
  "placement eligibility": "placement_faqs.eligibility",
  "placement companies": "placement_faqs.companies",
  "placement package": "placement_faqs.package",
  "placement preparation": "placement_faqs.preparation",
  "placement internship": "placement_faqs.internship",
  "off campus placement": "placement_faqs.off_campus",
  "higher studies placement": "placement_faqs.higher_studies",
  "startup placement": "placement_faqs.startup",
  "alumni placement": "placement_faqs.alumni",
  "branch wise placement": "placement_faqs.branch_wise",

  // Hostel FAQs keywords
  "hostel facilities": "hostel_faqs.facilities",
  "hostel allocation": "hostel_faqs.allocation",
  "hostel fees": "hostel_faqs.fees",
  "hostel mess": "hostel_faqs.mess",
  "hostel rules": "hostel_faqs.rules",
  "hostel security": "hostel_faqs.security",
  "hostel medical": "hostel_faqs.medical",
  "hostel internet": "hostel_faqs.internet",
  "hostel laundry": "hostel_faqs.laundry",
  "hostel visitors": "hostel_faqs.visitors",

  // Academic FAQs keywords
  "academic curriculum": "academic_faqs.curriculum",
  "academic evaluation": "academic_faqs.evaluation",
  "academic grading": "academic_faqs.grading",
  "academic attendance": "academic_faqs.attendance",
  "academic backlog": "academic_faqs.backlog",
  "academic internship": "academic_faqs.internship",
  "academic projects": "academic_faqs.projects",
  "academic electives": "academic_faqs.electives",
  "student exchange": "academic_faqs.exchange",
  "academic research": "academic_faqs.research",
  "academic library": "academic_faqs.library",
  "academic mentoring": "academic_faqs.mentoring",

  // Campus Life FAQs keywords
  "campus clubs": "campus_faqs.clubs",
  "campus events": "campus_faqs.events",
  "campus sports": "campus_faqs.sports",
  "campus cultural": "campus_faqs.cultural",
  "campus cafeteria": "campus_faqs.cafeteria",
  "campus wifi": "campus_faqs.wifi",
  "campus transport": "campus_faqs.transport",
  "campus security": "campus_faqs.security",
  "campus medical": "campus_faqs.medical",
  "campus grievance": "campus_faqs.grievance",
  "campus anti ragging": "campus_faqs.anti_ragging",
  "campus counseling": "campus_faqs.counseling",

  // Additional common questions
  "what courses": "courses.general",
  "which courses": "courses.general",
  "what programs": "courses.general",
  "which programs": "courses.general",
  "how to apply": "admissions.process",
  "how to get admission": "admissions.process",
  "how much fee": "fees.structure",
  "how much fees": "fees.structure",
  "fee structure": "fees.structure",
  "what is the fee": "fees.structure",
  "what are the fees": "fees.structure",
  "hostel facility": "facilities.hostel",
  "hostel facilities": "facilities.hostel",
  "placement record": "placements.overview",
  "placement statistics": "placements.stats",
  "which companies": "placements.companies",
  "which companies visit": "placements.companies",
  "faculty qualification": "faculty.quality",
  "faculty experience": "faculty.quality",
  "research facilities": "research.labs",
  "research opportunities": "research.projects",
  "campus life": "student_life.clubs",
  "student activities": "student_life.clubs",
  "admission requirements": "admissions.eligibility",
  "admission criteria": "admissions.eligibility",
  "scholarship options": "fees.scholarships",
  "financial assistance": "fees.financial_aid",
  "campus location": "general.location",
  "college address": "general.location",
  "contact details": "general.contact",
  "contact information": "general.contact",
  "college timings": "general.timings",
  "college hours": "general.timings",
  "anti-ragging": "student_life.anti_ragging",
  "ragging policy": "student_life.anti_ragging",
  "wifi available": "facilities.wifi",
  "internet facility": "facilities.wifi",
  "sports facilities": "facilities.sports",
  "games available": "facilities.sports",
  "library timing": "facilities.library",
  "library hours": "facilities.library",
  "medical facility": "facilities.medical",
  "health center": "facilities.medical",
  "transport facility": "facilities.transport",
  "bus facility": "facilities.transport",
  "cafeteria food": "facilities.cafeteria",
  "food quality": "facilities.cafeteria",
  "average package": "placements.stats",
  "highest package": "placements.stats",
  "placement percentage": "placements.stats",
  "branch change": "admission_faqs.branch_change",
  "change branch": "admission_faqs.branch_change",
}

// Fallback responses when no keywords match
const fallbackResponses = [
  "I'm here to help with information about Lyallpur Khalsa College Technical Campus. Could you please ask about our courses, admissions, fees, facilities, placements, or faculty?",
  "I didn't quite catch that. I can provide information about LKCTC's programs, admission process, fees, campus facilities, placement records, or faculty. What would you like to know?",
  "I'm not sure I understand your question. I can tell you about our engineering programs, admission requirements, fee structure, campus facilities, placement statistics, or faculty members.",
  "Could you please rephrase your question? I'm here to provide information about LKCTC's courses, admission process, fees, facilities, placements, and faculty.",
  "I'm the LKCTC Assistant and can help with details about our programs, admissions, fees, campus facilities, placements, and faculty. How can I assist you today?",
]

// Greeting responses
const greetings = [
  "Hello! I'm the LKCTC Assistant. How can I help you with information about our college?",
  "Hi there! Welcome to Lyallpur Khalsa College Technical Campus. What would you like to know about our institution?",
  "Greetings! I'm here to provide information about LKCTC. How may I assist you today?",
  "Welcome! I'm the virtual assistant for Lyallpur Khalsa College Technical Campus. What information are you looking for?",
  "Hello and welcome! I can help you with information about LKCTC's programs, admissions, facilities, and more. What would you like to know?",
]

// Provider component
export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: greetings[Math.floor(Math.random() * greetings.length)],
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const [showChatAnimation, setShowChatAnimation] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowChatAnimation(false)
      setTimeout(() => setShowChatAnimation(true), 100)
    }
  }

  const toggleMaximize = () => {
    setMaximized(!maximized)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // Function to get information based on keywords
  const getResponseFromKeywords = (userInput) => {
    // Convert to lowercase for case-insensitive matching
    const input = userInput.toLowerCase()

    // Check for greetings
    if (/^(hi|hello|hey|greetings|howdy|hola|namaste)(\s|$)/i.test(input)) {
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // Check for thanks
    if (/thank|thanks|thank you|thankyou/i.test(input)) {
      return "You're welcome! If you have any more questions about LKCTC, feel free to ask."
    }

    // Check for goodbye
    if (/bye|goodbye|see you|farewell/i.test(input)) {
      return "Goodbye! Feel free to chat again if you have more questions about LKCTC."
    }

    // Check for multi-word phrases first
    for (const key of Object.keys(keywordMap)) {
      if (key.includes(" ") && input.includes(key)) {
        const path = keywordMap[key]
        const pathParts = path.split(".")
        let info = collegeInfo

        for (const part of pathParts) {
          info = info[part]
        }

        return info
      }
    }

    // Split input into words and check for keywords
    const words = input.split(/\s+/)
    const matchedPaths = []

    // Check each word against our keyword map
    for (const word of words) {
      if (keywordMap[word]) {
        matchedPaths.push(keywordMap[word])
      }
    }

    // If we have matches, get the information
    if (matchedPaths.length > 0) {
      // Get the most frequent path or the first one
      const pathCounts = {}
      for (const path of matchedPaths) {
        pathCounts[path] = (pathCounts[path] || 0) + 1
      }

      // Find the path with the highest count
      let maxCount = 0
      let bestPath = matchedPaths[0]

      for (const [path, count] of Object.entries(pathCounts)) {
        if (count > maxCount) {
          maxCount = count
          bestPath = path
        }
      }

      // Navigate the object path to get the information
      const pathParts = bestPath.split(".")
      let info = collegeInfo

      for (const part of pathParts) {
        info = info[part]
      }

      return info
    }

    // Special handling for common questions
    if (input.includes("fee") && input.includes("structure")) {
      return collegeInfo.fees.structure
    }

    if (
      (input.includes("how") && input.includes("apply")) ||
      (input.includes("admission") && input.includes("process"))
    ) {
      return collegeInfo.admissions.process
    }

    if (
      input.includes("placement") &&
      (input.includes("record") || input.includes("statistics") || input.includes("percentage"))
    ) {
      return collegeInfo.placements.stats
    }

    if (input.includes("companies") && input.includes("visit")) {
      return collegeInfo.placements.companies
    }

    if (input.includes("hostel") && input.includes("facility")) {
      return collegeInfo.facilities.hostel
    }

    if (input.includes("scholarship") || input.includes("financial aid")) {
      return collegeInfo.fees.scholarships
    }

    if (input.includes("wifi") || input.includes("internet")) {
      return collegeInfo.facilities.wifi
    }

    if (input.includes("anti") && input.includes("ragging")) {
      return collegeInfo.student_life.anti_ragging
    }

    // If no keywords match, return a random fallback response
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
  }

  // Simulate typing delay (between 1 and 3 seconds based on response length)
  const getTypingDelay = (text) => {
    const baseDelay = 1000 // minimum 1 second
    const charsPerSecond = 20 // assume reading/typing 20 chars per second
    const calculatedDelay = (text.length / charsPerSecond) * 1000
    return Math.min(Math.max(baseDelay, calculatedDelay), 3000) // between 1-3 seconds
  }

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault()

    if (inputValue.trim() === "") return

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newUserMessage])
    const userQuery = inputValue
    setInputValue("")
    setIsTyping(true)

    // Get response based on keywords
    const botResponse = getResponseFromKeywords(userQuery)

    // Calculate typing delay based on response length
    const typingDelay = getTypingDelay(botResponse)

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setIsTyping(false)
    }, typingDelay)
  }

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        messages,
        inputValue,
        isTyping,
        maximized,
        showChatAnimation,
        toggleChat,
        toggleMaximize,
        handleInputChange,
        handleSendMessage,
        setMessages,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  )
}
