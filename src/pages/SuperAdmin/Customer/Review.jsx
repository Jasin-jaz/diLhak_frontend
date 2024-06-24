import {React, useState} from 'react'
import './Review.css'

function Review() {

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const showReplyPopup = (reviewId) => {
    setSelectedReview(reviewId);
    setShowReplyForm(true);
  };

  const reviewsData = [
    { id: 1, name: 'Pending' },
    { id: 2, name: 'Replied' },
  ];
  const [reviews, setreviews] = useState(reviewsData);

  return (
    <div>
       <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/admin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Reviews</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="col-3 d-flex align-items-end justify-content-end">
  
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          {/* <!-- Controls Start --> */}
          <div className="row mb-2">
            {/* <!-- Search Start --> */}
            <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input className="form-control" placeholder="Search" />
                <span className="search-magnifier-icon">
                  <i data-acorn-icon="search"></i>
                </span>
                <span className="search-delete-icon d-none">
                  <i data-acorn-icon="close"></i>
                </span>
              </div>
            </div>
            {/* <!-- Search End --> */}

            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* Filter Button Start */}
                <div className="dropdown-as-select w-100 w-md-auto">
                    <button
                      className="btn btn btn-outline-primary w-100 w-md-auto dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {selectedReview ? reviews.find(rev => rev.id === selectedReview).name : 'All Status'}
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className={`dropdown-item ${!selectedReview ? 'active' : ''}`} onClick={() => setSelectedReview()}>All Status</a>
                      {reviews.map(review => (
                        <a key={review.id} className={`dropdown-item ${selectedReview === review.id ? 'active' : ''}`} onClick={() => setSelectedReview(review.id)}>{review.name}</a>
                      ))}
                    </div>
                  </div>
                {/* Filter Button End */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          {/* <!-- Customers List Start --> */}
          <div className="row">
            <div className="col-12 mb-5">
              <div className="card mb-2 bg-transparent no-shadow d-none d-lg-block">
                <div className="row g-0 sh-3">
                  <div className="col">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-lg-2 d-flex align-items-center text-muted text-medium">NAME</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-medium">PRODUCT</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-medium">DATE</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-medium">STATUS</div>
                        <div className="col-lg-3 d-flex align-items-center text-muted text-medium">RATING</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" className="text-truncate h-100 d-flex align-items-center">John</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Salwar</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">13-06-2024</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Pending</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="5">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center" onClick={() => showReplyPopup(1)}><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" className="text-truncate h-100 d-flex align-items-center">David</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Salwar</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">13-06-2024</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Replied</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center" onClick={() => showReplyPopup(1)}><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>            
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" className="text-truncate h-100 d-flex align-items-center">Robert</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Salwar</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">13-06-2024</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Replied</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="0">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center" onClick={() => showReplyPopup(1)}><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" className="text-truncate h-100 d-flex align-items-center">Alex</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Salwar</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">13-06-2024</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div className="text-alternate">Pending</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="4">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center" onClick={() => showReplyPopup(1)}><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Customers List End --> */}

        {/* Reply form popup start */}
        {showReplyForm && selectedReview !== null && (
          <div className="popup-container">
            <div className="popup">
              <div className="card mb-2">
                <div className="card-body me-7 ms-7">
                  <form>
                    <div className="mb-1">
                      <a className="form-label d-flex align-items-end justify-content-end" onClick={() => setShowReplyForm(false)}><i className='fa fa-close'></i></a>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label text-primary font-weight-bold">User</label>
                        <input type="text" className="form-control" id="replyText" value="Vaishnav"/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label text-primary font-weight-bold">Product</label>
                        <input type="text" className="form-control" id="replyText" value="Plazzo Salwar"/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="replyTextarea" className="form-label text-primary font-weight-bold">Review</label>
                      <textarea className="form-control" id="replyTextarea" rows="3" value="Excellent product"></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="replyTextarea" className="form-label text-primary font-weight-bold">Reply</label>
                      <textarea className="form-control" id="replyTextarea" rows="3"></textarea>
                    </div>
                    <div className="mt-7 mb-2">
                      <button type="submit" className="btn btn-primary me-7">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Reply form popup end */}

          {/* <!-- Pagination Start --> */}
          <div className="d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link shadow" href="#" tabindex="-1" aria-disabled="true">
                    <i data-acorn-icon="chevron-left"></i>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link shadow" href="#">1</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">2</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i data-acorn-icon="chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- Pagination End --> */}
        </div>
      </main>
    </div>
  )
}

export default Review