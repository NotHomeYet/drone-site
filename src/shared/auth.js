
export const isAuthenticated = () => {
    const acess_token = parseJwt(accessToken());
    if (acess_token) {
        if (Date.now() >= acess_token.exp * 1000) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

export const userEmail = () => {
    const id_token = parseJwt(idToken());
    if (id_token && id_token.email) {
        return id_token.email
    }
    return ""
}

export const fetchToken = (code) => {
    // Login with the (simplified) auth flow
    fetch("https://altitudedroneworks.auth.us-east-1.amazoncognito.com/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            code,
            "grant_type": "authorization_code",
            "client_id": import.meta.env.VITE_APP_CLIENT_ID,
            "redirect_uri": import.meta.env.VITE_APP_REDIRECT,
        })
    })
        .then(res => res.json())
        .then(tokenResult);
}

export const login = () => {
    // Check if we can use the refresh token
    const refresh_token = getCookie("refresh_token");
    if (refresh_token) {
        fetch("https://altitudedroneworks.auth.us-east-1.amazoncognito.com/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "refresh_token": refresh_token,
                "grant_type": "refresh_token",
                "client_id": import.meta.env.VITE_APP_CLIENT_ID,
                "redirect_uri": import.meta.env.VITE_APP_REDIRECT,
            })
        })
            .then(res => res.json())
            .then(tokenResult);
    } else {
        window.location.href = "https://altitudedroneworks.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&state=TODO&client_id=" + import.meta.env.VITE_APP_CLIENT_ID + "&redirect_uri=" + import.meta.env.VITE_APP_REDIRECT
    }
}

export const logout = () => {
    $cookies.remove("access_token")
    $cookies.remove("id_token")
    $cookies.remove("refresh_token")
    window.location.href = "https://altitudedroneworks.auth.us-east-1.amazoncognito.com/logout?client_id=" + import.meta.env.VITE_APP_CLIENT_ID + "&logout_uri=" + import.meta.env.VITE_APP_REDIRECT
}

export const accessToken = () => {
    return getCookie("access_token")
}

export const idToken = () => {
    return getCookie("id_token")
}

const saveCookie = (name, value) => {
    $cookies.set(name, value)
}

const getCookie = (name) => {
    const value = $cookies.get(name)
    return value
}

const parseJwt = (token) => {
    if (!token) {
        return null
    }
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

const tokenResult = (jsonData => {
    if (jsonData.access_token) {
        saveCookie("access_token", jsonData.access_token)
    }
    if (jsonData.id_token) {
        saveCookie("id_token", jsonData.id_token)
    }
    if (jsonData.refresh_token) {
        saveCookie("refresh_token", jsonData.refresh_token)
    }
    window.location.search = ""; //clear params
});
