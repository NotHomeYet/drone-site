
export const isAuthenticated = () => {
    const acess_token = getCookie("access_token");
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
    const id_token = getCookie("id_token");
    if (id_token && id_token.email) {
        return id_token.email
    }
    return ""
}

export const login = () => {
    const refresh_token = getCookie("refresh_token");
    if (refresh_token) {
        // Post to the backend to get a token from the refresh token
        fetch("https://altitudedroneworks.auth.us-east-1.amazoncognito.com/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "grant_type": "refresh_token",
                "refresh_token": refresh_token,
                "client_id": import.meta.env.VITE_APP_CLIENT_ID,
                "redirect_uri": "http://localhost:3000",
            })
        })
            .then(response => response.json())
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

export const saveCookie = (name, value) => {
    $cookies.set(name, value)
}

export const getCookie = (name) => {
    const value = $cookies.get(name)
    return value
}

export const parseJwt = (token) => {
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

export const tokenResult = (jsonData => {
    if (jsonData.access_token) {
        saveCookie("access_token", parseJwt(jsonData.access_token))
    }
    if (jsonData.id_token) {
        saveCookie("id_token", parseJwt(jsonData.id_token))
    }
    if (jsonData.refresh_token) {
        saveCookie("refresh_token", jsonData.refresh_token)
    }
    window.location.search = ""; //clear params
});
