import PropTypes from "prop-types"

const ShowMyIdentify = ({name, npm, github}) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{npm}</li>
        <li><a href={github} target="_blank" rel="noopener noreferrer">My Github</a></li>
      </ul>
    </div>
  )
}

ShowMyIdentify.propTypes = {
  name: PropTypes.string.isRequired,
  npm: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
}

export default ShowMyIdentify