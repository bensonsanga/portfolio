import React from 'react';
import Dialog from './Dialog.js';
import Dialog1 from './Dialog1.js';
import { projects } from './projects.js';

const ProjectList = () => {
    const cardComponent = projects.map((project,i )=> {
        return  (<Dialog 
                key= {i} 
                id = {projects[i].id} 
                name={projects[i].name} 
                description={projects[i].description} 
                cover= {projects[i].cover}
                images= {projects[i].images}
                />);
    })
	return(
		<section data-aos="fade-up" class="flex justify-center flex-wrap w-100 h-100 section scrollmenu"  data-aos-delay="400">
                {cardComponent}
              </section>
		)
};

export default ProjectList; 