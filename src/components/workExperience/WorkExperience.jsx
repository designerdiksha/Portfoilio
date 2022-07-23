import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>Work Experience</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Interior Designer and Production Incharge' duration='Jul 2021- Present ' company='Nivasa' text="Designer and production incharge 
Worked on India design 2022 Ht 
exhibition project " />
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Freelancer' duration='2018-Present ' company='Freelance' text="Reinovating offices , Logo Design , Visiting cards , Banner Design and Ui/Ux Design  " />


                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Junior Designer Intern ' duration='May 2021 - Present' company='Decoreve design studio' text="Junior designer {residential and office projects} 
, Mood boards and designing 
, furniture layouts ,elevations 
, reflected ceiling plan, ligting layout _ 
,3ds and detail drawings ." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Junior Designer Intern  ' duration='' company='Ojusvi goyal architects ' text="Worked as a Junior Designer ,made mood boards ,Detailed drawings ,3-D Views " />


            </div>
        </div>
    )
}

export default WorkExperience
