import { useDispatch } from "react-redux";
import { startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [formValues,handleInputChange] = useForm();

    const {email,password} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    };


    return (
      
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Fondo"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          
           <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <h2 className="text-uppercase">LOG IN</h2>
             </div>                   
                 <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>

          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">Email address</label>
            <input
             type="email"
             name="email"
              id="form3Example3"
              onChange={handleInputChange}
              className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>


          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example4">Password</label>
            <input 
            type="password"
            name="password"
             id="form3Example4"
             onChange={handleInputChange}
             className="form-control form-control-lg"
            placeholder="Enter password" />
          </div> 
                      
          <div className="text-center text-lg-start mt-4 pt-2">

            <button 
            type="submit"
            className="btn btn-primary btn-lg"
            >
            Login
            </button>

            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
             <a href="register" className="link-danger"> Register</a></p>
          </div>
                  </form>
                </div>           
              </div>
            </div>
          
        
</section>
 
    )
}
