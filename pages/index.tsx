import Contact from '@/components/Contact';
import FeaturedProject from '../components/FeaturedProject';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import info from '../info';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h2 id='Projects' className='my-4 flex justify-center text-4xl font-bold'>
        Featured Projects
      </h2>

      {info.featuredProjects.map((project, index) => (
        <FeaturedProject
          key={index}
          name={project.name}
          // github={project.github}
          link={project.link}
          image={project.image}
          summary={project.summary}
          technologies={project.technologies}
          index={index}
        />
      ))}
      {/* {info.otherProjects?.length > 0 ? (
        <>
          <h2
            id='Other Projects'
            className='my-4 flex justify-center text-4xl font-bold'
          >
            Other Projects
          </h2>
          <div className='mx-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mx-16 md:grid-cols-2  lg:mx-28 lg:grid-cols-3'>
            {info.otherProjects?.map((project, index) => (
              //need to use bracket instead of dot notation, otherwise TypeScript throws an error.
              <OtherProject
                key={index}
                name={project['name']}
                github={project['github']}
                link={project['link']}
                summary={project['summary']}
                technologies={project['technologies']}
                index={index}
              />
            ))}
          </div>
        </>
      ) : null} */}
      <Contact />
      {/*  <Footer></Footer> */}
    </>
  );
}
