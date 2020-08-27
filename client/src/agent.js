import axios from 'axios'
import { API_ROOT } from './constant/config'

let HTTPstatus = null

// axios.defaults.baseURL = API_ROOT
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.Accept = 'application/json'

const Recruitment = {
	createRecruitment: (body) => {
    return axios.post('/api/addRecruitment', {
      params: body
    })
  }
}

export default {
	Recruitment,
}