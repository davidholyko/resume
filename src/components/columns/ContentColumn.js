import React from 'react'
// import ContentSummary from './content/ContentSummary'
import ContentProjects from './content/ContentProjects'
import ContentWorkHistory from './content/ContentWorkHistory'
import ContentEducation from './content/ContentEducation'
import ContentSoftwareExperience from './content/ContentSoftwareExperience'

const ContentColumn = () => (
  <div id="content-column">
    {/* <ContentSummary /> */}
    <ContentSoftwareExperience />
    <ContentProjects />
    <ContentEducation />
    <ContentWorkHistory />
  </div>
)

export default ContentColumn
