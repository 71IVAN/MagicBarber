import './Agenda.css'
import WOW from 'wow.js'
import 'animate.css'
import { useEffect } from 'react'
export function Agenda() {

  useEffect(function () {
    const wow = new WOW()

  }, [])

  return (


    <>
   
       <div className="banner p-5">
      <form className='my-5'>
      <h3 className='wow animate__animated animate__bounceInDown'>RESERVA TU TURNO</h3>

        <div className="row">
          <div className="col-3 col-md-6 ">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-badge-fill"></i> </span>
              <input type="text" className="form-control" placeholder="Julian Rodriguez" />
            </div>
          </div>
          <div className="col-3 col-md-6">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-fill"></i></span>
              <input type="text" className="form-control" placeholder="jualian88@gmail.com" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 col-md-6">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar2-date-fill"></i></span>
              <input type="date" className="form-control" placeholder="agenda" />
            </div>
          </div>
          <div className="col-3 col-md-6">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="bi bi-clock-history"></i></span>
              <select className="form-select" defaultValue={'DEFAULT'}>
                <option value="DEFAULT">Hora:</option>
                <option value="1">6:30 am</option>
                <option value="2">7:00 am</option>
                <option value="3">7:30 am</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="bi bi-phone-fill"></i></span>
              <input type="text" className="form-control" placeholder="3004509977" />
            </div>

          </div>
        </div>



      </form>
      </div>
    </>
  )
}