import React from 'react'

const ContentSoftwareExperience = ({ work }) => (
  <div className="content-work-item">
    <div className="d-flex justify-content-between">
      <div>
        <span className="font-weight-bold">{work.company}</span>
        <span> | </span>
        <span className="font-italic">{work.location}</span>
      </div>
      <span className="ml-auto">{work.date}</span>
    </div>
    <p className="m-0 font-weight-bold">{work.title}</p>
    <div className="d-flex flex-wrap mb-1">
      {work.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-dark text-light rounded mr-2 px-2 my-1 skill"
        >
          {tag}
        </span>
      ))}
    </div>
    <ul>
      {work.descriptions.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
    </ul>
  </div>
)

export default ContentSoftwareExperience
