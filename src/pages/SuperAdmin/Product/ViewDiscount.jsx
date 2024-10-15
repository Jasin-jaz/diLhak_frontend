import React from 'react'
import banner from "../../../images/product/Offer.webp"

function ViewDiscount() {
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
                  <a href="/discount" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Combo Offer Details</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-auto d-flex align-items-end justify-content-end">
                <a href="">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-only"
                  data-delay='{"show":"500", "hide":"0"}'
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Update"
                >
                  <i className='fa-solid fa-pen'></i>
                </button>
                </a>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Combo offers Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Combo offers Info</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">NAME</label>
                        <input type="text" className="form-control" value="SUMMER SALE" readOnly/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">TYPE</label>
                        <input type="text" className="form-control" value="Cashback" readOnly/>
                        {/* <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled></option>
                          <option value="Breadstick" disabled>Fixed Amount</option>
                          <option value="Biscotti" selected>Free Shipping</option>
                          <option value="Fougasse" disabled>Percentage</option>
                        </select> */}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">START DATE</label>
                        <input type="text" className="form-control" value="01.06.2021" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">END text</label>
                        <input type="text" className="form-control" value="01.07.2021" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">LIMIT</label>
                        <input type="text" className="form-control" value="3" readOnly/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">STATUS</label>
                        <input type="text" className="form-control" value="Active" readOnly/>
                        {/* <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled></option>
                          <option value="Breadstick" selected>Active</option>
                          <option value="Biscotti" disabled>Inactive</option>
                          <option value="Fougasse" disabled>Expired</option>
                        </select> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Combo offers Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">

              {/* <!-- History Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">History</h2>
                <div className="card">
                  <div className="card-body mb-n3">
                    <div className="mb-3">
                      <div className="text-small text-muted">STATUS</div>
                      <div>Published</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATED BY</div>
                      <div>Vyshnav Venu</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATE DATE</div>
                      <div>12.05.2021 - 13:42</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">URL</div>
                      <div>dilhak.com</div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- History End --> */}

              {/* <!-- Image Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    {/* <form> */}
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" ><img src={banner} alt="banner"/></div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
              {/* <!-- Image End --> */}

              <div className="mb-5 mt-7">
                <h2 className="small-title">Products</h2>
                <div className="card sh-lg-45 scroll">
                  <div className="card-body mb-n3">
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="1" className='form-check-input me-2'/>
                      <label className='form-check-label'>Heavy Georgette Plazzo Salwar</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="2" className='form-check-input me-2'/>
                      <label className='form-check-label'>Raivat organza Punjabi salwar</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="3" className='form-check-input me-2'/>
                      <label className='form-check-label'>Frock Kurti</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Poly Wrinkle Georgette Mix Pant And Top</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Woven Design Zari Silk Blend Banarasi Saree</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Floral Printed Floral Anarkali Kurta</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Tissue Kanjivaram Saree</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Wedding Wear Kanjiviram Silk Saree</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>Floral Printed Floral Anarkali Kurta</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>5</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ViewDiscount
