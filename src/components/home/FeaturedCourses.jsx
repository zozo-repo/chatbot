import GlassMorphicContainer from "../common/GlassMorphicContainer"
import Button from "../common/Button"

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      description: "Learn cutting-edge technologies including AI, machine learning, cloud computing, and more.",
      icon: "computer",
      color: "secondary",
    },
    {
      id: 2,
      title: "B.Tech in Mechanical Engineering",
      description: "Master mechanical design, thermodynamics, manufacturing processes, and engineering materials.",
      icon: "cog",
      color: "primary",
    },
    {
      id: 3,
      title: "B.Tech in Electronics & Communication",
      description: "Explore signal processing, embedded systems, communication networks, and circuit design.",
      icon: "chip",
      color: "secondary",
    },
  ]

  // Icons object with SVG paths for each icon
  const icons = {
    computer: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    cog: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    chip: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  }

  return (
    <section className="py-16 bg-darkBg-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Featured Programs</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover our premier academic programs designed to equip students with cutting-edge skills and knowledge for
            the demands of the modern industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <GlassMorphicContainer
              key={course.id}
              className="p-8 flex flex-col h-full"
              glow={course.color === "primary" ? "purple" : "cyan"}
              borderGradient={true}
            >
              <div className={`mb-6 text-${course.color}`}>{icons[course.icon]}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{course.title}</h3>
              <p className="text-gray-300 mb-6 flex-1">{course.description}</p>
              <Button variant={course.color === "primary" ? "primary" : "secondary"} className="mt-auto">
                Explore Program
              </Button>
            </GlassMorphicContainer>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
