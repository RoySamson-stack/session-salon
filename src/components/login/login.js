import "./login.css"


function Login(){
  return(
    <div className="login_page">
      <form className="login_form">
        <div>
          <input type="text" className="" placeholder="Username/email"/>
        </div>
        <div>
        <input type="text" className="" placeholder="Password"/>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login