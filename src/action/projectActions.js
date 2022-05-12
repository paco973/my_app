import axios from 'axios'
import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,

    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,

    PROJECT_UPDATE_REQUEST,
    PROJECT_UPDATE_SUCCESS,
    PROJECT_UPDATE_FAIL,

    PROJECT_CREATE_REVIEW_REQUEST,
    PROJECT_CREATE_REVIEW_SUCCESS,
    PROJECT_CREATE_REVIEW_FAIL,


} from '../constant/projectConstant'


export const listProject = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_LIST_REQUEST })

        const { data } = await axios.get(`http://localhost:8090/projects/all`)

        dispatch({
            type: PROJECT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



export const projectDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_DETAILS_REQUEST })

        const { data } = await axios.get(`http://localhost:8090/projects/project/${id}`)
        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }


}


export const deleteProject = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_DELETE_REQUEST
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
            `http://localhost:8090/projects/project/${id}`,
            config
        )

        dispatch({
            type: PROJECT_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: PROJECT_DELETE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}




export const createProject = (name, description, demo_link, source_link, image) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_CREATE_REQUEST
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
            `http://localhost:8090/projects/`,
            {demo_link:demo_link, source_link:source_link, image:image, title:name, description:description},
            config
        )
        dispatch({
            type: PROJECT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PROJECT_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



export const updateProject = (project) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_UPDATE_REQUEST
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

        const { data } = await axios.put(
            `http://localhost:8090/projects/update/${project.id}`,
            {title:project.title, image:project.image, demo_link:project.demo_link, source_link:project.source_link, description:project.description},
            config
        )
        dispatch({
            type: PROJECT_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PROJECT_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createPojectReview = ( id, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_CREATE_REVIEW_REQUEST
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
            `http://localhost:8090/projects/addreview/${id}`,
            {body:review},
            config
        )

        dispatch({
            type: PROJECT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: PROJECT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}