import React from 'react'
import ContentSoftwareExperienceItem from './ContentSoftwareExperienceItem'

const workExperiences = [
  {
    date: 'May 2019 - Present',
    company: 'F1V Web Consulting',
    title: 'JavaScript Engineer',
    location: 'Waltham, MA',
    tags: ['JavaScript', 'TypeScript', 'React', 'Redux', 'NestJS', 'PHP'],
    descriptions: [
      'Coordinates with multiple developers to rebuild a finance application with modern technologies',
      'Maintains and debugs a legacy finance application',
      'Builds reusable, functional components with unit testing',
      'Assists in content management for multiple WordPress, Drupal, and Bolt websites'
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
