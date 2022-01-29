import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError, removeError} from "../../actions/ui";
import { startRegister } from '../../actions/auth';
import { useForm } from "../../hooks/useForm"
import validator from "validator";

 
export const RegisterScreen = () => {

  const initialState= {nombre:"",a_paterno:"",a_materno:"",ciudad:"",pais:"",email:"",password:"",edad:null,password2:""}
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { msgError } = useSelector( state => state.ui );


    const [formValues,handleInputChange] = useForm(initialState);

    const {nombre,a_paterno,a_materno,ciudad,pais,edad,email,password,password2} = formValues;
    const handleRegister = (e)=>{
        e.preventDefault();
      
        if ( isFormValid(nombre,a_paterno,a_materno,ciudad,pais,edad,email,password,password2) ) {
          dispatch( startRegister(nombre,a_paterno,a_materno,ciudad,pais,edad,email,password) );
          setTimeout (()=>{navigate("/login",{replace:true})},3000) 
        }
    };

    const isFormValid = (nombre,a_paterno,a_materno,ciudad,pais,edad,email,password,password2) => {

      
      if ( nombre.trim().length === 0 ) {
        dispatch( setError('Nombre es requerido') )
        return false;
    }  
    
    if ( a_paterno.trim().length === 0 ) {
      dispatch( setError('Apellido paterno es requerido') )
      return false;
  }     
     
  if ( a_materno.trim().length === 0 ) {
    dispatch( setError('Apellido materno es requerido') )
    return false;
}  
  
  if ( edad.trim().length === 0 ) {
    dispatch( setError('Edad es requerido') )
    return false;
  }     
     
  if ( pais.trim().length === 0 ) {
    dispatch( setError('Pais es requerido') )
    return false;
  }  
  
  if ( ciudad.trim().length === 0 ) {
    dispatch( setError('Ciudad es requerido') )
    return false;
  }

  if( !validator.isEmail( email ))  {
    dispatch( setError('Email no es válido') )
    return false;
}
if ( password !== password2) {
  dispatch( setError('Passwords deben coincidir') )
  return false
}
    
dispatch( removeError() );
return true;

    }
  
    return (
      <div className="wrapper">
    <div className="form-left">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
    className="img-fluid" alt="Registro"/>
       </div>
              <form className="form-right" onSubmit={handleRegister}>
      
                      {
                     msgError &&
                      (
                        <div className="alert alert-danger">
                           {msgError}
                           </div>
                      )
                    } 
        <h2 className="text-uppercase">Register form</h2>

        <div className="row">

            <div className="col-sm-6 mb-2">
              <label htmlFor="nombre" >Nombre</label>
               <input
               type="text"
               name="nombre"
               onChange={handleInputChange}
               className="form-control form-control-lg"
               /> </div>

            <div className="col-sm-6 mb-2">
            <label htmlFor='a_paterno'>Apellido Paterno</label>
            <input
             type="text"
             name="a_paterno"
             onChange={handleInputChange}
             className="form-control form-control-lg"
             /> </div>
        </div>

        <div className="row">
            <div className="col-sm-8 mb-2">
            <label htmlFor='a_materno'>Apellido Materno</label>
            <input
            type="text"
            name="a_materno"
            onChange={handleInputChange}
            className="form-control form-control-lg"
            /> </div>

        <div className="col-sm-4 mb-2">
          <label htmlFor='edad' >Edad</label>
          <input
          type="number"
          name="edad"
          onChange={handleInputChange}
          className="form-control form-control-lg"
          /> </div>
        </div>

        <div className="row">
        <div className="col-sm-6 mb-2">
        <label htmlFor='pais'>País</label>
        <input 
        type="text"
        name="pais"
        onChange={handleInputChange}
        className="form-control form-control-lg"
        /> </div>

            
        <div className="col-sm-6 mb-2">
           <label htmlFor='ciudad'>Ciudad</label>
           <input
           type="text"
           name="ciudad"
           onChange={handleInputChange}
           className="form-control form-control-lg"
           /> </div>
        </div>

        <div className="mb-2">
         <label htmlFor="email">Email</label>
         <input
         type="email"
         onChange={handleInputChange}
         className="form-control form-control-lg"
         name="email"
         /> </div>

        <div className="row">

            <div className="col-sm-6 mb-2">
             <label htmlFor="password">Password</label>
             <input
             type="password"
             name="password"
             onChange={handleInputChange}
             className="form-control form-control-lg"
             />              
             </div> 
             

          <div className="col-sm-6 mb-2">
          <label htmlFor="password2">Confirmar Password</label>
          <input
          type="password"
          name="password2"
          onChange={handleInputChange}
          className="form-control form-control-lg"
          /> </div>
        </div>

        <div className="form-field">
           <input
           type="submit"
           className="register"
           value="Registrame"
           /></div>
    </form>
</div>        
  
     )
}
