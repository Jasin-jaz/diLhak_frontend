import React from 'react'

function OrderAdminProfileView() {
  return (
    <div>
       <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-40">
                  <a href="/orderadmin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">My Account(OA)</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-auto d-flex align-items-end justify-content-end">
              <a href='/orderadmin-update'
                  className="btn btn-outline-primary btn-icon btn-icon-only"
                  data-delay='{"show":"500", "hide":"0"}'
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit"
                >
                <i className='fa-solid fa-pen'></i>
                </a>
              </div>
              <div className="col col-md-auto d-flex align-items-end justify-content-end">
                <div className="btn-group ms-1 w-100 w-md-auto">
                  {/* <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start w-100">
                    <i data-acorn-icon="send"></i>
                    <span>Publish</span>
                  </button> */}
                  {/* <button
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-offset="0,3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button> */}
                  {/* <div className="dropdown-menu dropdown-menu-end">
                    <button className="dropdown-item" type="button">Unpublish</button>
                    <button className="dropdown-item" type="button">Draft</button>
                    <button className="dropdown-item" type="button">Delete</button>
                  </div> */}
                </div>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Super Admin Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Info</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value="Ananya KK" readOnly/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Gender</label>
                        <input type="text" className="form-control" value="Male" readOnly/>

                      </div>
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea  className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY:'scroll',padding:'0px 10px'}} readOnly>
                          Pinarayi, Vijayan Street
                        </textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type='tel' className="form-control" value="+91 5544663377" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type='email' className="form-control" value='ananyakkpinarayi2901@gmail.com' readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type='text' className="form-control" value='pinarayi@123' readOnly/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Super Admin Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
              
              {/* <!-- Image Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" id="dropzoneProductImage"></div>
                    </form>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Image End --> */}

              {/* <!-- History Start --> */}
              <div className="mb-5">
                <h2 className="small-title">History</h2>
                <div className="card">
                  <div className="card-body mb-n3">
                    
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATED BY</div>
                      <div>Lisa Jackson</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATE DATE</div>
                      <div>12.05.2021 - 13:42</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">EMAIL</div>
                      <div>ProductAdmin@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- History End --> */}

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OrderAdminProfileView