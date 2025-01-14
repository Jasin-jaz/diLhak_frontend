import React, { useState } from 'react'
import product from '../../../images/product/Georgette-And-Satin-Designer-Saree-In-Dark-Pink-Colour-SR1542337-A.webp'

function ViewProduct() {
  const [attributes, setAttributes] = useState([
    {
      id: 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: "", 
      stock: "",
      sku: "",
      gallery: ""
    }
  ]);

  const [variantImages, setVariantImages] = useState([
    [null, null, null, null]  // Initial state for images of each variant
  ]);

  const addAttribute = () => {
    const newAttribute = {
      id: attributes.length + 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: "",
      stock: "",
      sku: "",
      gallery: ""
    };
    setAttributes([...attributes, newAttribute]);

    // Add a new array for images for the new variant
    setVariantImages([...variantImages, [null, null, null, null]]);
  };

  const handleInputChange = (id, field, value) => {
    const updatedAttributes = attributes.map(attribute => {
      if (attribute.id === id) {
        return { ...attribute, [field]: value };
      }
      return attribute;
    });
    setAttributes(updatedAttributes);
  };

  const handleFileDrop = (e, variantIndex, boxIndex) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newVariantImages = [...variantImages];
      newVariantImages[variantIndex][boxIndex] = {
        url: reader.result,
        name: file.name,
        file: file
      };
      setVariantImages(newVariantImages);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e, variantIndex, boxIndex) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newVariantImages = [...variantImages];
      newVariantImages[variantIndex][boxIndex] = {
        url: reader.result,
        name: file.name,
        file: file
      };
      setVariantImages(newVariantImages);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFileInput = (variantIndex, boxIndex) => {
    document.getElementById(`file-input-${variantIndex}-${boxIndex}`).click();
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
                <div className="w-auto sw-md-60">
                  <a href="/products" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product Variant Informations</h1>
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
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Description</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" value="Woven Design Zari Silk Blend Banarasi Saree" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-25" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }} readOnly>
                        {"The saree comes with an unstitched blouse piece. The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.\nSize & Fit\nLength: 5.5 metres plus 0.8 metre blouse piece\nWidth: 1.06 metres (approx.)\nMaterial & Care\nSilk Blend\nDry Clean"}</textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}

              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Category</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product Category</label>
                        <input type="text" className="form-control" value="Saree" readOnly/>
                        {/* <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">SALWAR</option>
                          <option value="Biscotti">SAREE</option>
                          <option value="Fougasse">TOP</option>
                        </select> */}
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product</label>
                        <input type="text" className="form-control" value="Banarasi Saree" readOnly/>
                        {/* <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">PLAZZO SALWAR</option>
                          <option value="Biscotti">KANCHIPURAM SAREE</option>
                          <option value="Fougasse">DENIM TOP</option>
                        </select> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}

              {/* <!-- Inventory Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Inventory</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className='row'>
                        <div className="mb-3 col-sm">
                          <label className="form-label">Quantity</label>
                          <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3 col-sm">
                          <label className="form-label">SKU(Optional)</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* <!-- Inventory End --> */}

              {/* <!-- Selling Start --> */}
              {/* <div className="mb-5">
                <div className="d-flex justify-content-between">
                  <h2 className="small-title">Selling Type</h2>
                  <button className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small" type="button">
                    <span className="align-bottom">Edit Shipping Methods</span>
                    <i data-acorn-icon="chevron-right" className="align-middle" data-acorn-size="12"></i>
                  </button>
                </div>
                <div className="card">
                  <div className="card-body">
                    <form className="mb-n1">
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">In-store selling only</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Online selling only</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Available both in-store and online</span>
                        </span>
                      </label>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* <!-- Selling End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
              {/* <!-- Price Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Price</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Market Price</label>
                        <input type="text" className="form-control mask-currency"/>
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Discount Price</label>
                        <input type="text" className="form-control mask-currency"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* <!-- Price End --> */}

              {/* <!-- Gallery Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Product Images</h2>
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3">
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-4 row-cols-xl-2 border-0 p-0" id="dropzoneProductGallery"></div>
                    </form>
                    <div className="text-center">
                      <button type="button" className="btn btn-foreground hover-outline btn-icon btn-icon-start mt-2" id="dropzoneProductGalleryButton">
                        <i data-acorn-icon="plus"></i>
                        <span>Add Files</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- Gallery End --> */}

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
                      <div>Henry</div>
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

              
            </div>
          </div>
          {attributes.map((attribute, index) => (
          <div className="row">
          <div className="col-xl-8">
            {/* <!-- Attributes Start --> */}
            <div className="mb-5">
                <div className='row mt-4' >
                <h2 className=" col-4 small-title mt-2">Product Variant {attribute.id}</h2>
                </div>
                <div className="card mb-5 mt-3">
                  <div className="card-body">
                      <div key={attribute.id} className="mb-3 pb-3">
                        <div className="row gx-2">
                          <div className="col ">
                            <div className="mb-3">
                              <label className="form-label">Size</label>
                              <input type="text" className="form-control" value="Medium" readOnly/>
                              {/* <select className="form-select" value={attribute.size} onChange={(e) => handleInputChange(attribute.id, "size", e.target.value)}>
                                <option label="--size--"></option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                              </select> */}
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Colour</label>
                              <div>
                                <input type="text" className="form-control" value="Cream-Coloured & Gold-Toned" readOnly/>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input type="text" className="form-control" value="₹3299" onChange={(e) => handleInputChange(attribute.id, "actualPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Discount Price</label>
                              <input type="text" className="form-control" value="₹1799" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Stock</label>
                              <input type="text" className="form-control" value="15" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">SKU (optional)</label>
                              <input type="text" className="form-control" value="BS17905" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes End --> */}
          </div>
          
          <div className="col-xl-4 mb-4 mt-7">
          <div className="card mt-5">
            <div className="card-body">
              <div className="row">
              {[0, 1, 2, 3].map((boxIndex) => (
                    <div key={boxIndex} className="col-md-6 mb-3 mt-3">
                      <form>
                        <div>
                          {!variantImages[index][boxIndex] && (
                              <img src={product} width="100px"/>
                          )}
                        </div>
                      </form>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        ))}
        {attributes.map((attribute, index) => (
          <div className="row">
          <div className="col-xl-8">
            {/* <!-- Attributes Start --> */}
            <div className="mb-5">
                <div className='row mt-4' >
                <h2 className=" col-4 small-title mt-2">Product Variant 2</h2>
                </div>
                <div className="card mb-5 mt-3">
                  <div className="card-body">
                      <div key={attribute.id} className="mb-3 pb-3">
                        <div className="row gx-2">
                          <div className="col ">
                            <div className="mb-3">
                              <label className="form-label">Size</label>
                              <input type="text" className="form-control" value="Large" readOnly/>
                              {/* <select className="form-select" value={attribute.size} onChange={(e) => handleInputChange(attribute.id, "size", e.target.value)}>
                                <option label="--size--"></option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                              </select> */}
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Colour</label>
                              <div>
                                <input type="text" className="form-control" value="Mitera Purple" readOnly/>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input type="text" className="form-control" value="₹3399" onChange={(e) => handleInputChange(attribute.id, "actualPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Discount Price</label>
                              <input type="text" className="form-control" value="₹1899" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Stock</label>
                              <input type="text" className="form-control" value="10" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">SKU (optional)</label>
                              <input type="text" className="form-control" value="BS17910" onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} readOnly/>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes End --> */}
          </div>
          
          <div className="col-xl-4 mb-4 mt-7">
          <div className="card mt-5">
            <div className="card-body">
              <div className="row">
              {[0, 1, 2, 3].map((boxIndex) => (
                    <div key={boxIndex} className="col-md-6 mb-3 mt-3">
                      <form>
                        <div>
                          {!variantImages[index][boxIndex] && (
                              <img src={product} width="100px"/>
                          )}
                        </div>
                      </form>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        ))}
        </div>
      </main>
    </div>
  )
}

export default ViewProduct
