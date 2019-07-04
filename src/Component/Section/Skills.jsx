import React from 'react';

const frameworks = importAll(require.context('../../Images/framework/', false, /\.(png)$/));
const framework = Object.values(frameworks);
const frameworkImg = framework.map((number) =>
    <img key={frameworks} className='frameworkImg' src={number} alt= '' />
);

const langworks = importAll(require.context('../../Images/Lang/', false, /\.(png)$/));
const langwork = Object.values(langworks);
const langworkImg = langwork.map((number) =>
    <img key={langworks} className='langImg' src={number} alt= '' />  
);


export default class Skill extends React.Component {
    render() {
        return (
            <section className="container section" id="skill">
               
                    <h3>My Skills</h3>
                
                

                <h4> Frameworks</h4>
                <div className="skillImg">
                {frameworkImg}
                </div>
                <h4>Language</h4>
                <div className="skillImg">
                {langworkImg}
                </div>

            </section>
            
        );
    }
}

function importAll(r)
{
    let images = {};
    r.keys().map((item, index) => {return images[item.replace('./', '')] = r(item); });
    return images;
}