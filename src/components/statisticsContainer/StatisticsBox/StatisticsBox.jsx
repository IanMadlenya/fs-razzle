import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Symbol, Content } from './styles'

const StatisticsBox = ({ title, value, icon }) => (
  <Box>
    <Symbol>
      <FontAwesomeIcon icon={icon} />
    </Symbol>
    <Content>
      <h4>{value}</h4>
      <h5>{title}</h5>
    </Content>
  </Box>
)

StatisticsBox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
}

export default StatisticsBox
