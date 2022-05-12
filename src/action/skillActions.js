import axios from 'axios'
import {
    SKILL_LIST_REQUEST,
    SKILL_LIST_SUCCESS,
    SKILL_LIST_FAIL,

    SKILL_DETAILS_REQUEST,
    SKILL_DETAILS_SUCCESS,
    SKILL_DETAILS_FAIL,

    SKILL_DELETE_REQUEST,
    SKILL_DELETE_SUCCESS,
    SKILL_DELETE_FAIL,

    SKILL_CREATE_REQUEST,
    SKILL_CREATE_SUCCESS,
    SKILL_CREATE_FAIL,

    SKILL_UPDATE_REQUEST,
    SKILL_UPDATE_SUCCESS,
    SKILL_UPDATE_FAIL,

    SKILL_CREATE_REVIEW_REQUEST,
    SKILL_CREATE_REVIEW_SUCCESS,
    SKILL_CREATE_REVIEW_FAIL,


    SKILL_TOP_REQUEST,
    SKILL_TOP_SUCCESS,
    SKILL_TOP_FAIL,

} from '../constant/skillConstant'
import {PROJECT_DELETE_FAIL, PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS} from "../constant/projectConstant";


export const listProducts = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: SKILL_LIST_REQUEST })

        const { data } = await axios.get(`/api/products${keyword}`)

        dispatch({
            type: SKILL_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SKILL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SKILL_TOP_REQUEST })

        const { data } = await axios.get(`/api/products/top/`)

        dispatch({
            type: SKILL_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SKILL_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getSkillDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SKILL_DETAILS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.teken}`
            }
        }


        const { data } = await axios.get(`http://localhost:8090/skills/skill/${id}`, config)
        dispatch({
            type: SKILL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SKILL_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteSkillUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SKILL_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.teken}`
            }
        }

        const { data } = await axios.delete(
            `http://localhost:8090/skills/skill/${id}`,
            config
        )

        dispatch({
            type: SKILL_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: SKILL_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createSkill = (name, description) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SKILL_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()



        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.teken}`
            }
        }

        const { data } = await axios.post(
            `http://localhost:8090/skills/`,
            {description:description, name:name},
            config
        )
        dispatch({
            type: SKILL_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: SKILL_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
}



export const updateSkill = (skill) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SKILL_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.teken}`
            }
        }
console.log(userInfo)
        const { data } = await axios.put(
            `http://localhost:8090/skills/update`,
            skill,
            config
        )

        dispatch({
            type: SKILL_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: SKILL_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: SKILL_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SKILL_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/products/${productId}/reviews/`,
            review,
            config
        )
        dispatch({
            type: SKILL_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: SKILL_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}