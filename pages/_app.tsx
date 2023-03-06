import { AppProps } from 'next/dist/pages/_app';
import Head from 'next/head';
import React from 'react';
import info from '../info';
import '../styles/globals.css';

export const InfoContext = React.createContext(info);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='robots' content='noindex' />

        <title>Financial Accounting</title>
      </Head>
      <InfoContext.Provider value={info}>
        <Component {...pageProps} />
      </InfoContext.Provider>
    </>
  );
}

// const MyApp = () => {
//   return (
//     <>
//       <InfoContext.Provider value={info}>
//         <Head>
//           <title>Michael Scharf</title>
//           <meta
//             name='viewport'
//             content='initial-scale=1.0, width=device-width'
//           />
//         </Head>
//         <Navbar />

//         <Hero />

//         <h2
//           id='Projects'
//           className='my-4 flex justify-center text-4xl font-bold'
//         >
//           Featured Projects
//         </h2>
//         <div className='mx-12 flex justify-center'>
//           <p>
//             All projects have test credentials of &quot;test123&quot; for
//             username and password.
//           </p>
//         </div>

//         {info.featuredProjects.map((project, index) => (
//           <FeaturedProject
//             key={index}
//             name={project.name}
//             github={project.github}
//             link={project.link}
//             image={project.image}
//             summary={project.summary}
//             technologies={project.technologies}
//             index={index}
//           />
//         ))}

//         {info.otherProjects?.length > 0 ? (
//           <>
//             <h2
//               id='Other Projects'
//               className='my-4 flex justify-center text-4xl font-bold'
//             >
//               Other Projects
//             </h2>
//             {/* <div className="flex justify-center"> */}
//             <div className='mx-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mx-16 md:grid-cols-2  lg:mx-28 lg:grid-cols-3'>
//               {info.otherProjects?.map((project, index) => (
//                 //need to use bracket instead of dot notation, otherwise TypeScript throws an error.
//                 <OtherProject
//                   key={index}
//                   name={project['name']}
//                   github={project['github']}
//                   link={project['link']}
//                   summary={project['summary']}
//                   technologies={project['technologies']}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </>
//         ) : null}
//         <Contact></Contact>
//         <Footer></Footer>
//       </InfoContext.Provider>
//     </>
//   );
// };

// export default MyApp;
