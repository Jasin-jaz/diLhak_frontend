import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Product() {
  const [selectedCategory, setSelectedCategory] = useState();

  // --------------------Sub-Category-list-view----------------
  const [subcategorys, setSubCategorys] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:8000/auth/subcategory/')
          .then(response => {
              console.log(response.data);
              setSubCategorys(response.data);
          })
          .catch(error => {
              console.error('Error fetching subcategories:', error);
          });
  }, []);
  // ---------------------Sub-Category-Add---------------------
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/auth/category/')
        .then(response => {
          console.log(response.data)
            setCategories(response.data);
        })
        .catch(error => {
            console.error('Error fetching subcategories:', error);
        });
  }, []);

  const[NewSubCategoryData, setNewSubCategoryData] = useState({
    name: "",
    image: "",
    category: "",
  })
  const handleOnChange = (event) => {
    const { name, value } = event.target;
      setNewSubCategoryData({
        ...NewSubCategoryData,
        [name]: value
      });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      for (let key in NewSubCategoryData) {
        formData.append(key, NewSubCategoryData[key]);
      }
      if (image) {
        formData.append('image', image.file); // Append file directly
      }
      let subcategory = await axios.post('http://127.0.0.1:8000/auth/subcategory/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", subcategory);
      // alert('Sub Category added')
      window.location.reload();

    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };
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
                <div className="w-auto sw-md-30">
                  <a href="/admin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-6" id="title">Product Variant List</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

                {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="/addproduct" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <i data-acorn-icon="plus"></i>
                  <span>Add Product Variant</span>
                </a>
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
                      {selectedCategory ? categories.find(cat => cat.id === selectedCategory).name : 'All Product Variants'}
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className={`dropdown-item ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory()}>All  Product Variants</a>
                      {categories.map(category => (
                        <a key={category.id} className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`} onClick={() => setSelectedCategory(category.id)}>{category.name}</a>
                      ))}
                    </div>
                  </div>
                {/* Filter Button End */}
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* <!-- Length Start --> */}
                {/* <div className="dropdown-as-select d-inline-block" data-childSelector="span">
                  <button className="btn p-0 shadow" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,3">
                    <span
                      className="btn btn-foreground-alternate dropdown-toggle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="0"
                      title="Item Count"
                    >
                      10 Items
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <a className="dropdown-item" href="#">5 Items</a>
                    <a className="dropdown-item active" href="#">10 Items</a>
                    <a className="dropdown-item" href="#">20 Items</a>
                  </div>
                </div> */}
                {/* <!-- Length End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          <div className="row g-0">
            <div className="col-12 mb-5">
              {/* <!-- List Items Start --> */}
              <div id="checkboxTable">
                <div className="mb-4 mb-lg-3 bg-transparent no-shadow d-none d-lg-block">
                  <div className="row g-0">
                    <div className="col-auto sw-11 d-none d-lg-flex"></div>
                    <div className="col">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center custom-sort">
                          <div className="col-lg-3 d-flex flex-column mb-lg-0 pe-3 d-flex">
                            <div className="text-muted text-medium cursor-pointer" data-sort="name">NAME</div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="email">CATEGORY</div>
                          </div>
                          <div className="col-lg-1 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="email">STOCK</div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="phone">PRICE</div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="group">STATUS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Items Container Start --> */}

                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/plazzo-salwar-suit.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                          Heavy Georgette Plazzo Salwar
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Salwar</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">10</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹999</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/Banarasi-Cream3.jpg" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                          Woven Design Zari Silk Blend Banarasi Saree
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Saree</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">15</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹1799</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/Punjabi-salwar-suit-4-.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                           Raivat organza Punjabi salwar
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Salwar</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">0</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹899</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-primary group">OUT OF STOCK</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/Banarasi-p3.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                           Woven Design Zari Silk Blend Banarasi Saree
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Saree</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">10</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹1899</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/kurta.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                            Frock Kurti
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Kurti</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">14</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹699</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="/viewproduct" className="col-auto position-relative">
                      <img src="img/product/pant and top.jpg" alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9 " />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="/viewproduct" className="col-11 col-lg-3 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                           Poly Wrinkle Georgette Mix Pant And Top
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">Pant n Top</div>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">0</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">₹1499</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-primary group">OUT OF STOCK</span>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="/updateproduct" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               
               
                {/* <!-- Items Container Start --> */}

                {/* <!-- List Items End --> */}
              </div>
            </div>
            {/* <!-- Items Pagination Start --> */}
            <div className="w-100 d-flex justify-content-center">
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
                    <a className="page-link shadow" href="#">
                      <i data-acorn-icon="chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- Items Pagination End --> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product
