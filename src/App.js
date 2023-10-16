import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMassage] = useState("");
  const [record, setRecord] = useState([]);

  const handleSubmit = () => {
    axios.post(`https://react-js-8dd21-default-rtdb.firebaseio.com/users.json`, {
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    }).then((res) => {
      alert("Record successfully insert...");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMassage("");
      getRecord();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  const getRecord = () => {
    axios.get(`https://react-js-8dd21-default-rtdb.firebaseio.com/users.json`)
      .then((res) => {
        let data = res.data;
        let record = [];
        for (let i in data) {
          record.unshift({
            ...data[i], id: i
          })
        }
        setRecord(record);
      })
  }

  useEffect(() => {
    getRecord();
  })

  return (
    <div>
      <h1 className='ms-3 mt-2' style={{ color: 'darkred', fontFamily: 'sans-serif', fontWeight: '600' }}>Realtime Firebase</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-5 p-0'>
            <div className='img p-5' style={{ backgroundColor: 'black' }}>
              <img src={'Images/logo.png'} style={{ width: '450px' }}></img>
            </div>
          </div>

          <div className='col-7' style={{ boxShadow: ' 0 0 10px gray' }}>
            <div className='form-company p-4 mt-5'>
              <h3 style={{ color: 'black', fontFamily: 'sans-serif', fontWeight: '600' }}>Email Us</h3>
              <form>
                <div className='row g-3'>
                  <div className='col-6'>
                    <label for='inputName' className='form-label'>Name</label>
                    <input type='text' id='inputName' className='form-control' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                  </div>

                  <div className='col-6'>
                    <label for='inputCompany' className='form-label'>Company</label>
                    <input type='text' id='inputCompany' className='form-control' name='company' onChange={(e) => setCompany(e.target.value)} value={company} />
                  </div>

                  <div className='col-6'>
                    <label for='inputEmail' className='form-label'>Email:</label>
                    <input type='email' id='inputEmail' className='form-control' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>

                  <div className='col-6'>
                    <label for='inputPhone' className='form-label'>Phone</label>
                    <input type='tel' id='inputPhone' className='form-control' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </div>

                  <div className='col-12'>
                    <label for='inputMessage' className='form-label'>Message</label>
                    <textarea id='inputMessage' className='form-control' rows='4' name='message' onChange={(e) => setMassage(e.target.value)} value={message}></textarea>
                  </div>
                  <button type='submit' className='btn btn-danger w-50' style={{ margin: '15px auto' }} onClick={() => handleSubmit()}>Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
