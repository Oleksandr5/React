import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-649dd.firebaseio.com/'
})