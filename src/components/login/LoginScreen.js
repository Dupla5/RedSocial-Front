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
   
        <div className="d-md-flex half">
        <div className="contents">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3>Login</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group first">
                      <label htmlFor="email">Email</label>
                      <input 
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Email"
                        
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                         type="password"
                        onChange={handleInputChange}
                        className="form-control"
                        name="password"
                        placeholder="Password"

                        
                      />
                    </div>
  
                    <div className="d-sm-flex mb-5 align-items-center"></div>
  
                    <button
                      type="submit"
                      className="btn btn-block btn-primary">Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg" style={{ backgroundImage: "url(./bakcgr.jpg)" }}>
        {" "}
      </div>
      </div>
  
    )
}
