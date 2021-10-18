import { IS_INFO_POP_UP } from "./constrains"

export const showPopUpInfo = (isPopUp) => {
    return {
        type: IS_INFO_POP_UP,
        payload: {
            isPopUp: isPopUp
        }
    }
}

export const userPostFetch = user => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  export const userLoginFetch = user => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })