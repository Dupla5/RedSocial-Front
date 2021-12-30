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
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label" >Email</label>
                <input type="email" className="form-control" name="email" autoComplete="off" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
