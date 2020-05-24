class Auth {
    constructor() {
      this.authenticated = false;
    }
    protectedRouting(cb){
      this.authenticated = true;
      cb();
    }
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  