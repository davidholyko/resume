import React from 'react'
import InfoTechnologiesItem from './InfoTechnologiesItem'

class InfoTechnologies extends React.Component {
  render () {
    const technologies = [
      {
        icon: 'devicon-github-plain colored',
        value: 'Github'
      },
      {
        icon: 'devicon-heroku-plain colored',
        value: 'Heroku'
      }
      // {
      //   icon: 'devicon-amazonwebservices-original colored',
      //   value: 'Amazon Web Services'
      // },
      // {
      //   icon: 'devicon-vim-plain colored',
      //   value: 'Vim'
      // },
      // {
      //   icon: 'devicon-atom-plain colored',
      //   value: 'Atom'
      // },
      // {
      //   icon: 'devicon-visualstudio-plain colored',
      //   value: 'VSCode'
      // }
    ]

    return (
      <div className="info-section">
        <h3 className="info-category-header">Tools</h3>
        {technologies.map((technology, index) => (
          <InfoTechnologiesItem key={index} technology={technology} />
        ))}
      </div>
    )
  }
}

export default InfoTechnologies
