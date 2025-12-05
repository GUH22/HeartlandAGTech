import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Russell Sanders',
    title: 'CTO, Heartland Ag Tech - Operational Excellence, Top Tier Ingredients',
    image: '/Images/Russ%20Photo.jpg',
    background: 'Russ started in industry as a semiconductor Engineer at Honeywell in Plymouth, MN before moving to Thermo King in Bloomington, MN where he was the 13th Master Innovator in the company\'s history. He is credited for over 50 patents and counting. His passion for continuous improvement is supported by his deep understanding of the Lean Six Sigma toolbox. Russ co-founded Heartland Ag Tech in 2019.',
    education: 'B.S. Electrical Engineering – Minnesota State University, Mankato',
    personalLife: 'Wife Nicole of 22 years, one daughter and three sons. Daughter is currently studying to be a Physician\'s Assistant, oldest son just graduated as a computer engineer, Middle son is in trade school studying to be an electrician, and the youngest is a Junior in high school. He has been a volunteer wrestling coach for Minnetonka Highschool since 2012. In his free time he enjoys travelling with his family to remote areas where we can get lost, connect, and hopefully find many fish.',
    specialty: 'Enables rapid integration of new technology into production agriculture by facilitating Lean Six Sigma processes with the on farm subject matter experts, then taking those insights back to technologists to build platforms that support improved agronomic practices.'
  },
  {
    name: 'Alicia Pavelski',
    title: 'Project Manager, Heartland Farms – VP, Top Tier Ingredients, LLC – CEO, Heartland Ag Tech, Inc.',
    image: '/Images/Alicia%20Photo.jpg',
    background: 'Alicia started her career in Milwaukee as an Electrical Engineer specializing in power distribution, low voltage systems, generator systems, photovoltaics and lighting design for mainly healthcare and prisons across the country. Once getting engaged to Jeremie, she moved to Central Wisconsin and started working at Heartland Farms. She fell in love with the farm from the first day and has held many positions within the organization. She also volunteers her time with the Farming for the Future Foundation/Food + Farm Exploration Center, her daughter\'s school PTO and National Potato Council.',
    education: 'BS Architectural Electrical Engineering – Milwaukee School of Engineering',
    personalLife: 'Alicia enjoys spending time with her husband, Jeremie, and their daughter, Charlotte, cooking, photography, reading, travelling, gardening and being outdoors.',
    specialty: 'Alicia works directly with the Customer and PR teams. She is also the public relations coordinator for Heartland Farms and "Farm wife" to keep us all in line.'
  },
  {
    name: 'Jeremie Pavelski',
    title: 'President, Heartland Farms, Inc – Top Tier Ingredients, LLC – Heartland Ag Tech, Inc.',
    image: '/Images/Jeremie%20Photo.jpg',
    background: 'Jeremie is a 5th generation potato and vegetable farmer and entrepreneur. In the early years, Jeremie had a knack for technology and wasn\'t sure if he would remain on the family farm or pursue a career in technology development. After recognizing that Agriculture and Technology were on a head-on collision course, Jeremie chose to have the best of both worlds. Working through the ranks of the farming operation, he eventually earned his way up to President of Heartland Farms in 2010 where he leads a dynamic team enhancing agricultural capabilities. He brings a broad spectrum of knowledge and energy to the organization. Jeremie\'s passion is building teams, continuous improvement, lean principles, inventing new technologies, and pushing the boundaries of what can be done.',
    education: 'Northcentral Technical College – Management Information Systems, Milwaukee School of Engineering – Business Management, Purdue – Lean Six Sigma Green Belt',
    personalLife: 'Jeremie married the love of his life, Alicia, in 2011 and they now have a 7-year-old daughter, Charlotte. He enjoys spending time outdoors with the family, boating, biking, and teaching the next generation about agriculture, sustainability, and technology development.',
    specialty: 'Jeremie works directly with Customers to understand their goals and objectives and leads the Heartland team to accomplish those objectives and strengthen the supply chain.'
  }
];

export default function OurTeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [nextImagePreloaded, setNextImagePreloaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const directionRef = useRef(1);
  const autoRotateIntervalRef = useRef(null);

  // Preload all team member images
  useEffect(() => {
    teamMembers.forEach((member) => {
      const imageLoader = new Image();
      imageLoader.src = member.image;
      imageLoader.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [member.image]: true }));
      };
    });
  }, []);

  // Preload next image when current index changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % teamMembers.length;
    const nextImage = new Image();
    nextImage.src = teamMembers[nextIndex].image;
    nextImage.onload = () => {
      setNextImagePreloaded(true);
    };
  }, [currentIndex]);

  // Auto-rotate slideshow every 8 seconds (pauses on hover)
  useEffect(() => {
    // Clear any existing interval
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }

    // Only start auto-rotation when section is in view and not hovered
    if (inView && !isHovered) {
      autoRotateIntervalRef.current = setInterval(() => {
        directionRef.current = 1;
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1;
          return newIndex;
        });
      }, 8000); // 8 seconds
    }

    // Cleanup interval on unmount or when inView/isHovered changes
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [inView, isHovered]);

  const resetAutoRotate = () => {
    // Clear existing interval
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
    // Restart interval after 8 seconds (only if not hovered)
    if (inView && !isHovered) {
      autoRotateIntervalRef.current = setInterval(() => {
        directionRef.current = 1;
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1;
          return newIndex;
        });
      }, 8000);
    }
  };

  const goToPrevious = () => {
    const newDirection = -1;
    directionRef.current = newDirection;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1;
      return newIndex;
    });
    resetAutoRotate();
  };

  const goToNext = () => {
    const newDirection = 1;
    directionRef.current = newDirection;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
    resetAutoRotate();
  };

  const goToMember = (index) => {
    setCurrentIndex((prevIndex) => {
      const newDirection = index > prevIndex ? 1 : -1;
      directionRef.current = newDirection;
      setDirection(newDirection);
      return index;
    });
    resetAutoRotate();
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Our Team
          </h2>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slideshow Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={directionRef.current}>
              <motion.div
                key={`${currentIndex}-${directionRef.current}`}
                custom={directionRef.current}
                initial={(dir) => ({
                  opacity: 0,
                  x: dir > 0 ? '100%' : '-100%'
                })}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={(dir) => ({
                  opacity: 0,
                  x: dir > 0 ? '-100%' : '100%'
                })}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                    {currentMember.name}
                  </h3>
                  <p className="text-lg text-[#7CB342] mb-6 font-medium">
                    {currentMember.title}
                  </p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Background:</h4>
                      <p>{currentMember.background}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Education:</h4>
                      <p>{currentMember.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Personal Life:</h4>
                      <p>{currentMember.personalLife}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialty:</h4>
                      <p>{currentMember.specialty}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[500px] rounded-lg shadow-xl overflow-hidden bg-gray-200">
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: 'auto',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                    loading="eager"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#7CB342] hover:bg-[#689F38] text-white p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#7CB342] hover:bg-[#689F38] text-white p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMember(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#7CB342] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to ${teamMembers[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

