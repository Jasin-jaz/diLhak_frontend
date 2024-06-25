import React, { useState } from 'react';

function PAAddProduct() {
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

  const deleteAttribute = (id) => {
    setAttributes(attributes.filter(attribute => attribute.id !== id));
    setVariantImages(variantImages.filter((_, index) => index !== (id - 1))); // Remove images for deleted variant
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

  const handleDelete = (variantIndex, boxIndex) => {
    const newVariantImages = [...variantImages];
    newVariantImages[variantIndex][boxIndex] = null;
    setVariantImages(newVariantImages);
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
                <div className="w-auto sw-md-40">
                  <a href="/productadmin-products" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Add New Product</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <span>Submit</span>
                </a>
                {/* <div className="dropdown d-inline-block d-lg-none">
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
                </div> */}
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
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }}>
                        </textarea>
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
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">SALWAR</option>
                          <option value="Biscotti">SAREE</option>
                          <option value="Fougasse">TOP</option>
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product SubCategory</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">PLAZZO SALWAR</option>
                          <option value="Biscotti">KANCHIPURAM SAREE</option>
                          <option value="Fougasse">DENIM TOP</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}
            </div>
            <div className="col-xl-4 mb-n5"></div>
          </div>
          {attributes.map((attribute, index) => (
          <div className="row">
          <div className="col-xl-8">
            {/* <!-- Attributes Start --> */}
            <div className="mb-5">
                <div className='row mt-4' >
                <h2 className=" col-4 small-title mt-2">Product Variant {attribute.id}</h2>
                <div className="col-8 ">
                    <button className="btn btn-icon btn-icon-only btn-outline-primary" style={{marginLeft:"90%"}} type="button" onClick={() => deleteAttribute(attribute.id)}>
                      <i className='fa-solid fa-trash'></i>
                    </button>
                    </div>
                  </div>
                <div className="card mb-5 mt-3">
                  <div className="card-body">
                      <div key={attribute.id} className="mb-3 pb-3">
                        <div className="row gx-2">
                          <div className="col ">
                            <div className="mb-3">
                              <label className="form-label">Size</label>
                              <select className="form-select" value={attribute.size} onChange={(e) => handleInputChange(attribute.id, "size", e.target.value)}>
                                <option label="--size--"></option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Colour</label>
                              <div>
                                <input type="text" className="form-control"/>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input type="text" className="form-control" value={attribute.actualPrice} onChange={(e) => handleInputChange(attribute.id, "actualPrice", e.target.value)} />
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Discount Price</label>
                              <input type="text" className="form-control" value={attribute.discountPrice} onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} />
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Stock</label>
                              <input type="text" className="form-control" value={attribute.stock} onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} />
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">SKU (optional)</label>
                              <input type="text" className="form-control" value={attribute.sku} onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} />
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
                    <div key={boxIndex} className="col-md-6">
                      <form>
                        <div>
                          {!variantImages[index][boxIndex] && (
                            <div
                            style={{cursor:"pointer"}}
                              className="dropzone mb-5"
                              onClick={() => openFileInput(index, boxIndex)}
                              onDrop={(e) => handleFileDrop(e, index, boxIndex)}
                              onDragOver={handleDragOver}
                            >
                              <input
                                id={`file-input-${index}-${boxIndex}`}
                                type="file"
                                className="form-control d-none"
                                onChange={(e) => handleFileInputChange(e, index, boxIndex)}
                              />
                              <i className="fa-solid fa-upload text-primary mt-3" style={{ marginLeft:"-7px"}}></i>
                              <label className='form-label ms-1 mt-3'  style={{cursor:"pointer"}} onMouseOver={(e)=> e.target.style.color = 'var(--primary)'} onMouseOut={(e)=> e.target.style.color = ''}>Upload Image</label>
                            </div>
                          )}
                          {variantImages[index][boxIndex] && (
                            <div className="mt-3" style={{ position: 'relative' }}>
                              <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
                                <img
                                  src={variantImages[index][boxIndex].url}
                                  className="mb-3"
                                  alt={variantImages[index][boxIndex].name}
                                  style={{ width: '100%', height: 'auto' }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-outline-danger"
                                  onClick={() => handleDelete(index, boxIndex)}
                                  style={{ position: 'absolute', bottom: '15px', right: '0px' }}
                                >
                                  <i className="fa-solid fa-trash" />
                                </button>
                              </div>
                            </div>
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
        <div className="mb-3 pb-3 text-center mt-3">
          <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={addAttribute}>
              <i data-acorn-icon="plus"></i>
              <span>Add Variant</span>
          </button>
        </div>
      </main>
    </div>
  )
}

export default PAAddProduct
