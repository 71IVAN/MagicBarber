export function Agenda(){

    return(
        <>
              <form >
        <div className="row">
          <div className="col-12">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Nombre Rodriguez</span>
              <input type="text" class="form-control" placeholder="Julian" aria-label="Username" aria-describedby="basic-addon1" />

            </div>
          </div>


        </div>
        <div className="row">
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Correo</span>
              <input type="email" class="form-control" placeholder="julian99@gmail.com" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>

          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Celular</span>
              <input type="number" class="form-control" placeholder="3007890044" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>


        </div>


   
      <div className="row">
      <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Fecha</span>
              <input type="number" class="form-control" placeholder="3007890044" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>

      </div>

      <div className="row">
      <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Hora</span>
              <input type="number" class="form-control" placeholder="3007890044" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>

      </div>

    </form >
        </>
    )
}