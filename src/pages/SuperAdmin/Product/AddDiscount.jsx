import React, { useState } from 'react';
// import axios from 'axios';

function AddDiscount() {

  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImage({
          file: file, // Store the file object itself
          url: e.target.result,
          name: file.name,
          size: file.size
        });
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  const handleDelete = () => {
    setImage(null);
  };
  const formatSize = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2) + " MB";
  };

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
                  <h1 className="mb-0 pb-0 display-4" id="title">Combo Offers</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
            {/* <!-- Top Buttons Start --> */}
            <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="/addproduct" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <span>Submit</span>
                </a>
                <div className="dropdown d-inline-block d-lg-none">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only ms-1"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-acorn-icon="sort"></i>
                  </button>
                </div>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Combo offers Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Combo offers info</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">NAME</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">TYPE</label>
                        {/* <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled selected></option>
                          <option value="Breadstick">Fixed Amount</option>
                          <option value="Biscotti">Free Shipping</option>
                          <option value="Fougasse">Percentage</option>
                        </select> */}
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">START DATE</label>
                        <input type="date" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">END DATE</label>
                        <input type="date" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">LIMIT</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">STATUS</label>
                        <select className="form-select select-single-no-search">
                          <option label="--status--" disabled selected></option>
                          <option value="Breadstick">Active</option>
                          <option value="Biscotti">Inactive</option>
                          <option value="Fougasse">Expired</option>
                        </select>
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
              <div className="mb-7">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form className=''>
                      {!image && <input type="file" name="image" className="form-control" onChange={handleFileChange} />}
                      {image && (
                        <div className="mt-3">
                          <img src={image.url} className="mb-3" alt={image.name} style={{ maxWidth: '100%', maxHeight: '200px', justifyContent: 'center' }} />
                          <p>Name: {image.name}</p>
                          <p>Size: {formatSize(image.size)}</p>
                          <center><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></center>
                        </div>
                      )}
                    </form>
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
                      <label className='form-check-label'>1</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="2" className='form-check-input me-2'/>
                      <label className='form-check-label'>2</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="3" className='form-check-input me-2'/>
                      <label className='form-check-label'>3</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
                    </div>
                    <div className="mb-3 d-flex">
                      <input type="checkbox" value="4" className='form-check-input me-2'/>
                      <label className='form-check-label'>4</label>
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

export default AddDiscount
