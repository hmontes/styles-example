import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const colors = ({orange, blue, facebook, google}) => {
  if (orange) return '#fb5216'
  else if (blue) return '#0074D9' 
  else if (facebook) return '#3b5998'
  else if (google) return '#ea4335'
  else return '#4CAF50'
}

const StyledButton = styled.button`
  background-color: ${props => colors(props)};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const Group = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = (props) => (
    <StyledButton {...props} />
)

Button.Group = Group

Button.defaultProps = {
  green: true
}

Button.propTypes = {
    /** Sirve para asignar el color naranjo */
    orange: PropTypes.bool,
    /** Sirve para asignar el color azul */
    blue: PropTypes.bool,
    /** Sirve para asignar el color verde */
    green: PropTypes.bool,
    /** Sirve para asignar el color de la red social Facebook */
    facebook: PropTypes.bool,
    /** Sirve para asignar el color de Google */
    google: PropTypes.bool,
    /**
     * @param { SyntheticEvent } event Es el evento de React
     */
    onClick: PropTypes.func
}

export default Button