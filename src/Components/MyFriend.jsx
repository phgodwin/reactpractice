import PropTypes from 'prop-types'

function MyFriend(props) {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Hair: {props.hair}</p>
            <p>Home: {props.home} </p>
        </div>)
}

MyFriend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hair: PropTypes.string,
    home: PropTypes.string


}

export default MyFriend

