import Swal from 'sweetalert2'
const CheckValidForm = (name,email,password)=>{
    let isNamePass = false;
    let isEmailPass = false;
    let isPasswordPass = false;

   if(name){
    const regex = /^[A-Za-z\s]+$/;
     if(!regex.test(name)){
      isNamePass = false
      return Swal.fire({
        title: 'Error!',
        text: 'Please Enter Valid Name',
        icon: 'error',
      })
     }else{
       isNamePass = true
     }
   }

   if(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(!regex.test(email)){
      isEmailPass = false
      return Swal.fire({
        title: 'Error!',
        text: 'Please Enter Valid Email',
        icon: 'error',
      })
     }else{
      isEmailPass = true
     }
   }

   const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};

   if(getStrength(password) >= 1){
      isPasswordPass = true
   }else{
    isPasswordPass = false
    return Swal.fire({
      title: 'Error!',
      text: 'Please choose a good strength password',
      icon: 'error',
    })
   }

   if(isNamePass && isEmailPass && isPasswordPass){
    return true
   }
  }

  export default CheckValidForm;