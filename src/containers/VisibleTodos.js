import { connect } from 'react-redux'
import Home from '../Components/Home'
import {toogleTodo} from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toogleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)