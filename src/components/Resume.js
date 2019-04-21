import React from 'react'

import './css/Resume.scss'
import InfoColumn from './InfoColumn'
import ContentColumn from './ContentColumn'

const Resume = () => (
  <div className="resume">
    <InfoColumn/>
    <ContentColumn/>
  </div>
)

export default Resume
