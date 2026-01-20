import React from 'react'

function Signup() {

    const [formData, setFormData]=useState({
        name:"",
        email:"",
        image:""
    })
    const handleChange=(e)=>{
        e.preventDefault();
         const {name, value}=e.target
        setFormData((prev)=>({...prev, [name]: value}))
    }
  return (
    <div>
        <div>
            <h2>create account</h2>

            <form action="">
                <div>
                    <input type="text" name="name" placeholder='Enter full name'  value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
                </div>
                <div>
                    <input type="email" name="email" placeholder='Enter email'  value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup