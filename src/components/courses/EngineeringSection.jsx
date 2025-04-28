"use client"

// src/components/courses/EngineeringSection.jsx
import { useState } from "react"
import GlassMorphicContainer from "../common/GlassMorphicContainer"
import CourseCard from "./CourseCard"

const EngineeringSection = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const engineeringCourses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: "/assets/images/cse.jpg",
      description:
        "Cutting-edge curriculum covering programming, data structures, algorithms, database systems, artificial intelligence, and more.",
      highlights: ["Industry-aligned curriculum", "Advanced Programming Labs", "AI & ML specialization"],
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: "/assets/images/mechanical.jpg",
      description:
        "Comprehensive program covering thermodynamics, mechanics, manufacturing processes, and computer-aided design.",
      highlights: ["CAD/CAM Labs", "Manufacturing Workshop", "Industry Projects"],
    },
    {
      id: 3,
      title: "Electrical Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: "/assets/images/electrical.jpg",
      description:
        "In-depth study of electrical systems, power generation, transmission, distribution, and electrical machines.",
      highlights: ["Power Systems Lab", "Electrical Machines Lab", "Renewable Energy Focus"],
    },
    {
      id: 4,
      title: "Civil Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      image: "/assets/images/civil.jpg",
      description:
        "Study of structural engineering, transportation, environmental engineering, and construction management.",
      highlights: ["Materials Testing Lab", "Structural Analysis", "Environmental Engineering"],
    },
    {
      id: 5,
      title: "Electronics & Communication",
      duration: "4 Years",
      degree: "B.Tech",
      image: "/assets/images/ece.jpg",
      description: "Focus on electronic devices, communication systems, signal processing, and embedded systems.",
      highlights: ["Advanced Electronics Lab", "Communication Systems", "VLSI Design"],
    },
  ]

  const tabContent = {
    overview: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold gradient-text">Engineering Programs at LKCTC</h3>
        <p className="text-gray-300">
          Lyallpur Khalsa College Technical Campus offers world-class engineering education through innovative teaching
          methodologies, state-of-the-art infrastructure, and industry partnerships. Our engineering programs are
          designed to produce industry-ready professionals equipped with technical knowledge and practical skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphic rounded-lg p-4">
            <h4 className="text-lg font-medium text-secondary mb-3">Program Highlights</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                AICTE approved curriculum
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Industry-aligned syllabus with regular updates
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Hands-on practical training in modern laboratories
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Project-based learning methodology
              </li>
            </ul>
          </div>
          <div className="glassmorphic rounded-lg p-4">
            <h4 className="text-lg font-medium text-secondary mb-3">Career Prospects</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dedicated placement cell with industry connections
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Regular campus recruitment drives
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Industry internships and training programs
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Entrepreneurship development initiatives
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    courses: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    ),
    facilities: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold gradient-text">State-of-the-Art Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Advanced Laboratories</h4>
              <p className="text-gray-300 text-sm">
                Fully equipped labs for each department with latest tools and technology for hands-on learning.
              </p>
            </div>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Digital Library</h4>
              <p className="text-gray-300 text-sm">
                Access to digital resources, e-journals, research papers, and extensive collection of books.
              </p>
            </div>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Computer Centers</h4>
              <p className="text-gray-300 text-sm">
                High-speed internet and modern computing facilities with latest software for technical training.
              </p>
            </div>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Training & Placement Cell</h4>
              <p className="text-gray-300 text-sm">
                Dedicated facility for career development, soft skills training, and recruitment activities.
              </p>
            </div>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Seminar Halls</h4>
              <p className="text-gray-300 text-sm">
                Well-equipped auditoriums and seminar halls for workshops, conferences, and cultural events.
              </p>
            </div>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Hostel Facilities</h4>
              <p className="text-gray-300 text-sm">
                Separate hostels for boys and girls with modern amenities, mess, and recreation facilities.
              </p>
            </div>
          </GlassMorphicContainer>
        </div>
      </div>
    ),
    faculty: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold gradient-text">Distinguished Faculty</h3>
        <p className="text-gray-300 mb-6">
          Our engineering departments are led by highly qualified faculty members with extensive academic and industry
          experience. Many faculty members hold doctoral degrees and are engaged in cutting-edge research and
          consultancy projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassMorphicContainer className="p-5">
            <h4 className="text-lg font-medium text-secondary mb-3">Department of Computer Science Engineering</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-white">Dr. Rajinder Singh</span>
                <span className="text-gray-400">PhD, IIT Delhi</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Prof. Manpreet Kaur</span>
                <span className="text-gray-400">M.Tech, PEC Chandigarh</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Dr. Amit Sharma</span>
                <span className="text-gray-400">PhD, NITTR</span>
              </li>
            </ul>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <h4 className="text-lg font-medium text-primary mb-3">Department of Mechanical Engineering</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-white">Dr. Harpreet Singh</span>
                <span className="text-gray-400">PhD, IIT Roorkee</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Prof. Jagdeep Singh</span>
                <span className="text-gray-400">M.Tech, NIT Jalandhar</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Dr. Gurpreet Kaur</span>
                <span className="text-gray-400">PhD, PTU</span>
              </li>
            </ul>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <h4 className="text-lg font-medium text-secondary mb-3">Department of Electrical Engineering</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-white">Dr. Sandeep Kumar</span>
                <span className="text-gray-400">PhD, IIT Bombay</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Prof. Navjot Kaur</span>
                <span className="text-gray-400">M.Tech, TIET Patiala</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Dr. Paramjit Singh</span>
                <span className="text-gray-400">PhD, PTU</span>
              </li>
            </ul>
          </GlassMorphicContainer>

          <GlassMorphicContainer className="p-5">
            <h4 className="text-lg font-medium text-primary mb-3">Department of Electronics & Communication</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-white">Dr. Ramandeep Kaur</span>
                <span className="text-gray-400">PhD, GNDU Amritsar</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Prof. Gurjit Singh</span>
                <span className="text-gray-400">M.Tech, NIT Jalandhar</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">Dr. Amarjit Singh</span>
                <span className="text-gray-400">PhD, DTU Delhi</span>
              </li>
            </ul>
          </GlassMorphicContainer>
        </div>
      </div>
    ),
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Engineering Programs</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our engineering programs blend theoretical knowledge with practical application, preparing students for
            successful careers in the ever-evolving technological landscape.
          </p>
        </div>

        <GlassMorphicContainer className="p-0 overflow-hidden" glow="purple">
          {/* Tabs */}
          <div className="flex border-b border-glassHighlight">
            {["overview", "courses", "facilities", "faculty"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab ? "border-b-2 border-secondary text-white" : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">{tabContent[activeTab]}</div>
        </GlassMorphicContainer>
      </div>
    </section>
  )
}

export default EngineeringSection
