class Auth {

  constructor() {
    const auth = localStorage.getItem("ppa_dashboard_token");
    this.validateAuth(auth);
  }

  validateAuth(token) {
    if(token===null){
      window.location.href="/login";
    }
  }

  logOut() {
    localStorage.removeItem("ppa_dashboard_token");
    window.location.href="/login";
  }

}