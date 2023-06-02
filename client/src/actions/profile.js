import api from "../utils/api";
import { setAlert } from "./alert";
import { GET_PROFILE,
    GET_PROFILES,
     PROFILE_ERROR,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_REPOS
 } from "./types";

// get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get('/profile/me');
        dispatch({
            type: GET_PROFILE, 
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}

//Get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({type:CLEAR_PROFILE});
    try {
        const res = await api.get('/profile/');
        dispatch({
            type: GET_PROFILES, 
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
};

//Get profile by ID
export const getProfileById = userId => async dispatch => {
   
    try {
        const res = await api.get(`/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE, 
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}

//Get github repos
export const getGithubRepos= username => async dispatch => {
   
    try {
        const res = await api.get(`/profile/github/${username}`);
        dispatch({
            type: GET_REPOS, 
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}

// create or update profile 
export const createProfile = (formData, history, edit = false) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const  res = await api.post('/profile', formData, config);
        dispatch({
            type: GET_PROFILE, 
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Update': 'Profile Created','success'));
        if(!edit){
            history.push('/dashboard')
        }
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}

// Add experience 
export const addExperience = (formData) => async (dispatch) =>{
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const  res = await api.put('/profile/experience', formData, config);
        dispatch({
            type: UPDATE_PROFILE, 
            payload: res.data
        });

        dispatch(setAlert('Experience Added','success'));
        return res.data;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }

}

// Add education 
export const addEducation = (formData) => async (dispatch) =>{
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const  res = await api.put('/profile/education', formData, config);
        dispatch({
            type: UPDATE_PROFILE, 
            payload: res.data
        });

        dispatch(setAlert('Education Added','success'));
        return res.data;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }

}

//Delete Experience 
export const deleteExperience = id => async dispatch =>{
    try {
        const res = await api.delete(`/profile/experience/${id}`);
        
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });

        
        dispatch(setAlert('Experience Deleted','success'));
        return res.data;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}
//Delete Education 
export const deleteEducation = id => async dispatch =>{
    try {
        const res = await api.delete(`/profile/education/${id}`);
        
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });

        
        dispatch(setAlert('Education Deleted','success'));
        return res.data;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                 status: err.response.status
                }
        });
    }
}

// Delete Account and Profile
export const deleteAccount= () => async dispatch =>{
    if(window.confirm('Are you sure? This cannot be undone!')){
       try {
            const res = await api.delete(`/profile`);
            dispatch({
                type:CLEAR_PROFILE

            });
            dispatch({
                type:ACCOUNT_DELETED

            });

            
            dispatch(setAlert('Your account has been permanenty Deleted','success'));
            return res.data;
        } catch (err) {
            const errors = err.response.data.errors;
            if(errors){
                errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                    }
            });
        } 
    }
    
}


