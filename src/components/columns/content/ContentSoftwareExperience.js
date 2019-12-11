import React from 'react'
import ContentSoftwareExperienceItem from './ContentSoftwareExperienceItem'

const workExperiences = [
  {
    date: 'May 2019 - Present',
    company: 'F1V',
    title: 'JavaScript Engineer',
    location: 'Waltham, MA',
    tags: ['JavaScript', 'TypeScript', 'React', 'Redux', 'NestJS', 'PHP'],
    descriptions: [
      'Oversees development of rebuilding a finance application using NestJS',
      'Maintains finance application that uses PHP/Java',
      'Built reusable, functional components for client with React',
      'Built feature for internal scrum project JavaScript/PHP'
    ]
  }
]

const ContentSoftwareExperience = () => (
  <div className="content-education-history">
    <h3 className="text-center border-bottom my-3">
      Software Engineering Experience
    </h3>
    {workExperiences.map((workExperience, index) => (
      <ContentSoftwareExperienceItem key={index} work={workExperience} />
    ))}
  </div>
)

export default ContentSoftwareExperience
