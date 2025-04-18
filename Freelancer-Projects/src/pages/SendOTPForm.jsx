import TextField from '../ui/TextField';
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit ,isSendingOtp ,register}) {
    // const[phoneNumber , setPhoneNumber] = useState("");

  return (
    <div>
        <form  className="space-y-10" onSubmit={onSubmit}>
       <TextField
       label="shomare Mb"
        name="phoneNumber" 
      register={register}
       />
       <div>
        { isSendingOtp ? (
            <Loading />  
        ) : (
    
            <button type="submit" className="btn btn--primary w-full">
                Ersale Code
                </button>
                 )}
         </div>
        </form>
    </div>
  );
}

export default SendOTPForm;
