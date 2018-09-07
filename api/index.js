import axios from 'axios'

export const detectCode = data => axios.post('/_/programming_language_detect', data)
export const detectSpam = data => axios.post('/_/spam_detect', data)
export const tagCompare = data => axios.post('/_/tag_compare', data)
export const autoTagging = data => axios.post('/_/auto_tagging', data)
export const detectLanguage = data => axios.post('/_/language_detect', data)
