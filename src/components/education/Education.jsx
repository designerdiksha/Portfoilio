import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor Degree' duration='Jun 2017 -Jun 2021' company='Amity University, Noida,Uttar-Pradesh' text="Learned various types of Design including product design and Interior design--CGPA -8.14 " />


                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='High School' duration='Jun 2015 - March 2017' company='CBSE Board ' text="•	Pursued Non -Medical Stream which include subjects Physics ,Chemistry ,Maths ,English " />
            </div>
        </div>
    )
}

export default Education
