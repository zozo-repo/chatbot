import GlassMorphicContainer from "../common/GlassMorphicContainer"
import Button from "../common/Button"

const CourseCard = ({ course }) => {
  const { title, duration, degree, image, description, highlights } = course

  return (
    <GlassMorphicContainer className="overflow-hidden flex flex-col h-full" borderGradient={true}>
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent"></div>
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full">
          {degree}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-secondary text-sm mb-3">Duration: {duration}</p>
        <p className="text-gray-300 text-sm mb-4 flex-1">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-200 mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <svg className="w-3 h-3 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Button variant="outline" className="w-full" glow={true}>
            Learn More
          </Button>
        </div>
      </div>
    </GlassMorphicContainer>
  )
}

export default CourseCard
