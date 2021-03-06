import React from 'react'
import withDashboard from 'components/withDashboard'
import ArticlesList from 'components/Articles'

const Articles = ({ location }) => <ArticlesList location={location} />

export default withDashboard(Articles)
