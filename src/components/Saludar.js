import { View, Text } from 'react-native'
import PropTypes from 'prop-types'; 

export default function Saludar(props) {
  const {name, age} = props
  
  return (
    <View>
      <Text>Hola {name}!, tu edad es {age}</Text>
    </View>
  )
}

Saludar.defaultProps = {
  name: "Carlos",
  age: 10,
}

Saludar.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}
