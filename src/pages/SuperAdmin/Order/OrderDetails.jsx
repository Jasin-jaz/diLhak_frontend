import {React, useState} from 'react'
import '../../SuperAdmin/Customer/Review.css'

import logo from '../../../images/logo/logo1-black.png'
function OrderDetails() {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const showReplyPopup = (reviewId) => {
    setSelectedReview(reviewId);
    setShowReplyForm(true);
  };


  const handlePrint = () => {
      
  
      // Generate the HTML content for the invoice
      var invoiceContent = `<html>
      <head>
    
        <title>Invoice</title>
    <style>
        /* reset */
    
    *
    {
      border: 0;
      box-sizing: content-box;
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      font-style: inherit;
      font-weight: inherit;
      line-height: inherit;
      list-style: none;
      margin: 0;
      padding: 0;
      text-decoration: none;
      vertical-align: top;
    }
    
    /* content editable
    
    *[contenteditable] { border-radius: 0.25em; min-width: 1em; outline: 0; }
    
    *[contenteditable] { cursor: pointer; }
    
    *[contenteditable]:hover, *[contenteditable]:focus, td:hover *[contenteditable], td:focus *[contenteditable], img.hover { background: #DEF; box-shadow: 0 0 1em 0.5em #DEF; }
    
    span[contenteditable] { display: inline-block; } */
    
    /* heading */
    
    h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }
    
    /* table */
    
    table { font-size: 75%; table-layout: fixed; width: 100%; }
    table { border-collapse: separate; border-spacing: 2px; }
    th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
    /* th, td { border-radius: 0.25em; border-style: solid; } */
    th { background: #EEE; border-color: #BBB; }
    td { border-color: #DDD; }
    
    /* page */
    
    html { font: 16px/1 'Open Sans', sans-serif; overflow: auto; padding: 0.5in; }
    html { background: #999; cursor: default; }
    
    body { box-sizing: border-box; height: 11in; margin: 0 auto; overflow: hidden; padding: 0.5in; width: 8.5in; }
    body { background: #FFF; border-radius: 1px; box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); }
    
    /* header */
    
    header { margin: 0 0 3em; }
    header:after { clear: both; content: ""; display: table; }
    
    header h1 { background: #000; border-radius: 0.25em; color: #FFF; margin: 0 0 1em; padding: 0.5em 0; }
    header address { float: left; font-size: 75%; font-style: normal; line-height: 1.25; margin: 0 1em 1em 0; }
    header address p { margin: 0 0 0.25em; }
    header span, header img { display: block; float: right; }
    header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
    header img { max-height: 100%; max-width: 100%; }
    header input { cursor: pointer; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; height: 100%; left: 0; opacity: 0; position: absolute; top: 0; width: 100%; }
    
    /* article */
    
    article, article address, table.meta, table.inventory { margin: 0 0 3em; }
    article:after { clear: both; content: ""; display: table; }
    article h1 {position: absolute; }
    
    article address { float: left; font-size: 125%; font-weight: bold; }
    
    /* table meta & balance */
    
    table.meta, table.balance { float: right; width: 36%; }
    table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
    
    /* table meta */
    
    table.meta th { width: 40%; }
    table.meta td { width: 60%; }
    
    /* table items */
    
    table.inventory { clear: both; width: 100%; }
    table.inventory th { font-weight: bold; text-align: center; }
    table.inventory td {text-align: center; }
    
    /* table.inventory td:nth-child(1) { width: 26%; }
    table.inventory td:nth-child(2) { width: 38%; }
    table.inventory td:nth-child(3) { text-align: right; width: 12%; }
    table.inventory td:nth-child(4) { text-align: right; width: 12%; }
    table.inventory td:nth-child(5) { text-align: right; width: 12%; } */
    
    /* table balance */
    
    table.balance th, table.balance td { width: 50%; }
    table.balance td { text-align: right; }
    
    /* aside */
    
    aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
    aside h1 { border-color: #999; border-bottom-style: solid; }
    
    /* javascript */
    
    /* .add, .cut
    {
      border-width: 1px;
      display: block;
      font-size: .8rem;
      padding: 0.25em 0.5em;  
      float: left;
      text-align: center;
      width: 0.6em;
    }
    
    .add, .cut
    {
      background: #9AF;
      box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      background-image: -moz-linear-gradient(#00ADEE 5%, #0078A5 100%);
      background-image: -webkit-linear-gradient(#00ADEE 5%, #0078A5 100%);
      border-radius: 0.5em;
      border-color: #0076A3;
      color: #FFF;
      cursor: pointer;
      font-weight: bold;
      text-shadow: 0 -1px 2px rgba(0,0,0,0.333);
    }
    
    .add { margin: -2.5em 0 0; }
    
    .add:hover { background: #00ADEE; }
    
    .cut { opacity: 0; position: absolute; top: 0; left: -1.5em; }
    .cut { -webkit-transition: opacity 100ms ease-in; }
    
    tr:hover .cut { opacity: 1; } */
    
    .print_button, .download_button{
      color: white;
      background-color: rgb(68, 68, 186);
      border-radius: 5px;
      border:3px solid transparent;
      display: flexbox;
      font-size: .8rem;
      padding: 0.25em 0.5em;
      text-align: center;
      cursor: pointer;
      align-items: end;
      /* float: right; */
    }
    .print_button:hover, .download_button:hover{
      border:3px solid lightskyblue;
    }
    
    @media print {
      * { -webkit-print-color-adjust: exact; }
      html { background: none; padding: 0; }
      body { box-shadow: none; margin: 0; }
      span:empty { display: none; }
      .add, .cut { display: none; }
      .print_button, .download_button { display: none; }
    }
    
    @page { margin: 0; }
    td address p { margin: 0 0 0.50em; }
    </style>
    
      </head>
      <body>
        <header>
          <h1>Invoice</h1>
          <address><p contenteditable>Henry</p>
                    <p contenteditable>HAK Collections</p>
                    <p contenteditable>Temple Road, Chalad</p>
                    <p contenteditable>Kannur 670014</p>
            <p contenteditable>+919995173402</p>
          </address>
          <span><img src=${logo} height="10%" width="100%" style="margin-right: 0px;"/></span>
        </header>
        <article>
          <!-- <h1>Recipient</h1>
          <address>
            <p>William<br>c/o Chapmen</p>
          </address> -->
          <table class="meta">
            <tr>
              <th><span>Invoice #</span></th>
              <td><span>101138</span></td>
            </tr>
            <tr>
              <th><span>Date</span></th>
              <td><span id="currentDate" style="color:black"></span></td>
            </tr>
          </table>
          <table class="inventory">
            <thead>
              <tr>
                <th><span>Item</span></th>
                <th><span>Rate</span></th>
                <th><span>Quantity</span></th>
                <th><span>Price</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                            <!-- <a class="cut">-</a> -->
                <td><span>Raivat organza punjabi salwar</span></td>
                <td><span data-prefix>₹</span><span>899.00</span></td>
                <td><span>1</span></td>
                <td><span data-prefix>₹</span><span>899.00</span></td>
              </tr>
              <tr>
                            <!-- <a class="cut">-</a> -->
                <td><span>Heavy georgette plazzo salwar</span></td>
                <td><span data-prefix>₹</span><span>999.00</span></td>
                <td><span>2</span></td>
                <td><span data-prefix>₹</span><span>1998.00</span></td>
              </tr>
              <tr>
                            <!-- <a class="cut">-</a> -->
                <td><span>Woven silkblnd banarasi saree</span></td>
                <td><span data-prefix>₹</span><span>1899.00</span></td>
                <td><span>1</span></td>
                <td><span data-prefix>₹</span><span>1899.00</span></td>
              </tr>
              <tr>
                            <!-- <a class="cut">-</a> -->
                <td><span>Poly wrinkle mix pant n top</span></td>
                <td><span data-prefix>₹</span><span>1499.00</span></td>
                <td><span>1</span></td>
                <td><span data-prefix>₹</span><span>1499.00</span></td>
              </tr>
              <tr>
                            <!-- <a class="cut">-</a> -->
                <td><span>Georgette frock kurti</span></td>
                <td><span data-prefix>₹</span><span>699.00</span></td>
                <td><span>2</span></td>
                <td><span data-prefix>₹</span><span>1398.00</span></td>
              </tr>
            </tbody>
          </table>
          <!-- <a class="add">+</a> -->
          <table class="balance">
            <tr>
              <th><span>Subtotal</span></th>
              <td><span data-prefix>₹</span><span>7,693.00</span></td>
            </tr>
            <tr>
              <th><span>GST 2%</span></th>
              <td><span data-prefix>₹</span><span>76.93</span></td>
            </tr>
            <tr>
              <th><span>Shipping charge</span></th>
              <td><span data-prefix>₹</span><span>100.00</span></td>
            </tr>
            <tr>
              <th><span style="font-weight: bold;">Grand Total</span></th>
              <td><span data-prefix style="font-weight: bold;">₹</span><span style="font-weight: bold;">7,870.00</span></td>
            </tr>
          </table>
        </article>
        <aside>
          <h1><span>Order Information</span></h1>
          <div>
            <table class="inventory">
                        <thead>
                            <tr>
                                <th><span>Shipping Address</span></th>
                                <th><span>Shipping Method</span></th>
                                <th><span>Billing Address</span></th>
                                <th><span>Payment Method</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- <a class="cut">-</a> -->
                                <td>
                                    <address>
                                        <p>
Amelia Earhart</p>
                                        <p>4 Glamis Avenue, Strathmore</p>
                                        <p> Wellington 6022, New Zealand</p>
                                        <p>+6443884455</p>
                                    </address>
                                </td>
                                <td><p>Flat Rate - Fixed</p></td>
                                <td>
                                    <address>
                                        <p>
Amelia Earhart</p>
                                        <p>4 Glamis Avenue, Strathmore</p>
                                        <p> Wellington 6022, New Zealand</p>
                                        <p>+6443884455</p>
                                    </address>
                                </td>
                                <td><p>Credit Card</p><br><p>3452 42** **** 4251</p></td>
                            </tr>
                        </tbody>
                    </table>
          </div>
        </aside>
        <button type='button' class="print_button" onclick="printInvoice()">Print</button>
        <script>
          function printInvoice()
          {
            window.print()
          }

          var currentDate = new Date();
          var options = { year: 'numeric', month: 'short', day: '2-digit'};
          var dateString = currentDate.toLocaleDateString('en-US', options);
          dateString = dateString.replace(/,/g,'');
          document.getElementById("currentDate").innerHTML = dateString;

        </script>
      </body>
    </html>
      `;
      // Open a new window for printing
      var printWindow = window.open('', '_blank');
  
      // Write the HTML content to the new window
      printWindow.document.write(invoiceContent);
  
      // Close the document after writing content
      printWindow.document.close();
  
      // Print the window
      // printWindow.print();
  
  };

  const handleDispatch = () => {
      
  
    // Generate the HTML content for the invoice
    var dispatchContent = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dispatch Note</title>
        <style>
            
            body {
                font-family: Arial, sans-serif;
                background-color:#999;
                margin: 0;
                padding: 20px;
            }
            .dispatch-note {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .dispatch-note h2 {
                text-align: center;
                color: #333;
            }
            .dispatch-info {
                margin-bottom: 20px;
            }
            .dispatch-info label {
                font-weight: bold;
                color: #666;
            }
            .dispatch-info p {
                margin: 5px 0;
                color: #333;
            }
            .dispatch-info ul {
                list-style-type: none;
                padding: 0;
                margin: 5px 0;
            }
            .dispatch-info ul li {
                margin-bottom: 5px;
            }
            .print_button{
                color: white;
                background-color: rgb(68, 68, 186);
                border-radius: 5px;
                border:3px solid transparent;
                display: flexbox;
                font-size: .8rem;
                padding: 0.25em 0.5em;
                text-align: center;
                cursor: pointer;
                align-items: end;
                /* float: right; */
            }
            .print_button:hover{
                border:3px solid lightskyblue;
            }
    
            @media print {
            * { -webkit-print-color-adjust: exact; }
            html { background: none; padding: 0; }
            body { box-shadow: none; margin: 0; }
            span:empty { display: none; }
            .add, .cut { display: none; }
            .print_button, .download_button { display: none; }
        }
        
        @page { margin: 0; }
        td address p { margin: 0 0 0.50em; }
        </style>
    </head>
    <body>
        <div class="dispatch-note">
            <h2>Dispatch Note</h2>
            <div class="dispatch-info">
                <label>Order ID:</label>
                <p>1225</p>
            </div>
            <div class="dispatch-info">
                <label>Date:</label>
                <span id="currentDate" style="color:black"></span>
            </div>
            <div class="dispatch-info">
                <label>Recipient Name:</label>
                <p>Amelia Earhart</p>
            </div>
            <div class="dispatch-info">
                <label>Shipping Address:</label>
                <p>4 Glamis Avenue, Strathmore</p><p>Wellington 6022, New Zealand</p>
            </div>
            <div class="dispatch-info">
                <label>Items:</label>
                <ul>
                    <li>1. Raivat organza punjabi salwar</li>
                    <li>2. Heavy georgette plazzo salwar</li>
                    <li>3. Woven silkblnd banarasi saree</li>
                    <li>4. Poly wrinkle mix pant n top</li>
                    <li>5. Georgette frock kurti</li>
                </ul>
            </div>
            <div class="dispatch-info">
                <label>Notes:</label>
                <p>dispatch notes.</p>
            </div>
            <button type='button' class="print_button" onclick="printDispatch()">Print</button>
        </div>
    
        <script>
            function printDispatch()
          {
            window.print();
          }
          var currentDate = new Date();
          var options = { year: 'numeric', month: 'short', day: '2-digit'};
          var dateString = currentDate.toLocaleDateString('en-US', options);
          dateString = dateString.replace(/,/g,'');
          document.getElementById("currentDate").innerHTML = dateString;
        </script>
    </body>
    </html>
    
    `;
    // Open a new window for printing
    var printWindow = window.open('', '_blank');

    // Write the HTML content to the new window
    printWindow.document.write(dispatchContent);

    // Close the document after writing content
    printWindow.document.close();

    // Print the window
    // printWindow.print();

};

 
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
                  <a href="/orderlist" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4 sw-40" id="title">Order Detail</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
             {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handlePrint}>
                  Invoice
                </button>
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleDispatch}>
                  Dispatch
                </button>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row gx-4 gy-5">
            <div className="col-12 col-xl-8 col-xxl-9 mb-n5">
              {/* <!-- Status Start --> */}
              <h2 className="small-title">Status</h2>
              <div className="mb-5">
                <div className="row g-2">
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="tag" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Order Id</div>
                          <div className="text-primary">1225</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14" >
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="clipboard" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Order Status</div>
                          <div className="text-primary">Confirmed</div>
                        </div>
                        <div class="col-auto ds-flex" data-bs-toggle="modal" data-bs-target="#orderStatusUpdate">
                          <button class="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="calendar" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Delivery Date</div>
                          <div className="text-primary">08.02.2024</div>
                        </div>
                        <div class="col-auto ds-flex" data-bs-toggle="modal" data-bs-target="#deliveryDateUpdate">
                          <button class="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="shipping" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Tracking Code</div>
                          <div className="text-primary">US4244290109</div>
                        </div>
                        <div class="col-auto ds-flex" data-bs-toggle="modal" data-bs-target="#trackCode">
                          <button class="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              {/* <!-- Status End --> */}

              {/* <!-- Cart Start --> */}
              <h2 className="small-title">Cart</h2>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <div className="row g-0 sh-18 mb-3">
                          <div className="col-auto">
                            <img src="img/product/Punjabi-salwar-suit-4-.webp" className="card-img rounded-md h-100 sw-13 sh-18" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Raivat organza Punjabi salwar</div>
                                  <div className="text-muted text-medium">Punjabi Salwar</div>
                                  <div className="text-muted text-medium">SL11983</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>1</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">₹</span>
                                        899.00
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">₹</span>
                                        899.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-18 mb-3">
                          <div className="col-auto">
                            <img src="img/product/Salwar.webp" className="card-img rounded-md h-100 sw-13 sh-18" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Heavy Georgette Plazzo Salwar</div>
                                  <div className="text-muted text-medium">Plazzo Salwar</div>
                                  <div className="text-muted text-medium">SL11928</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>2</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">₹</span>
                                        999.00
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">₹</span>
                                        1998.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-18 mb-3">
                          <div className="col-auto">
                            <img src="img/product/Banarasi-Cream1.jpg" className="card-img rounded-md h-100 sw-13 sh-18" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Woven Design Zari Silk Blend Banarasi Saree</div>
                                  <div className="text-muted text-medium">Banarasi Saree</div>
                                  <div className="text-muted text-medium">SR13567</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>1</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">₹</span>
                                        1899.00
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">₹</span>
                                        1899.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-18 mb-3">
                          <div className="col-auto">
                            <img src="img/product/pant and top.jpg" className="card-img rounded-md h-100 sw-13 sh-18" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Poly Wrinkle Georgette Mix Pant And Top</div>
                                  <div className="text-muted text-medium">Pant n Top</div>
                                  <div className="text-muted text-medium">PT13578</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>1</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">₹</span>
                                        1499.00
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">₹</span>
                                        1499.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-18 mb-3">
                          <div className="col-auto">
                            <img src="img/product/Kurta.webp" className="card-img rounded-md h-100 sw-13 sh-18" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Georgette Frock Kurti</div>
                                  <div className="text-muted text-medium">Frock Kurti</div>
                                  <div className="text-muted text-medium">KT14678</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>2</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">₹</span>
                                        699.00
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">₹</span>
                                        1398.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Total</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">₹</span>
                              7,693.00
                            </span>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">GST 1%</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">₹</span>
                              76.93
                            </span>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Shipping</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">₹</span>
                              100.00
                            </span>
                          </div>
                        </div>
                        {/* <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Sale</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">₹</span>
                              100
                            </span>
                          </div>
                        </div> */}
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Grand Total</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">₹</span>
                              7,870.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Cart End --> */}
            </div>

            {/* <!-- Address Start --> */}
            <div className="col-12 col-xl-4 col-xxl-3">
              <h2 className="small-title">Address</h2>
              <div className="card mb-5">
                <div className="card-body mb-n5">
                  <div className="mb-5">
                    <p className="text-medium text-muted mb-2">CUSTOMER</p>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="user" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate align-middle">
Amelia Earhart</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="email" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">AmeliaEarhart@gmail.com</div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-medium text-muted mb-2">SHIPPING ADDRESS</p>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="user" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate align-middle">
Amelia Earhart</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="pin" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="phone" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">+6443884455</div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-medium text-muted mb-2">BILLING ADDRESS</p>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="user" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate align-middle">
Amelia Earhart</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="pin" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-auto">
                        <div className="sw-3 me-1">
                          <i data-acorn-icon="phone" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">+6443884455</div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div>
                      <p className="text-medium text-muted mb-2">PAYMENT (CREDIT CARD)</p>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="credit-card" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">3452 42** **** 4251</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/* <!-- Activity Start --> */}
              <h2 className="small-title">Activity</h2>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1"></div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">Order Received</a>
                            <div className="text-alternate">05.02.2024</div>
                            <div className="text-muted mt-1">ORDER ID: 1225</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">Confirmed</a>
                            <div className="text-alternate">05.02.2024</div>
                            <div className="text-muted mt-1">ORDER ID: 1225</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading checkbox">Shipped</a>
                            <div className="text-alternate">Expected by 07.02.2024</div>
                            <div className="text-muted mt-1">ORDER ID: 1225</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative"></div>
                    </div>
                    <div className="col">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link pt-0">Delivered</a>
                            <div className="text-alternate">Expected by 08.02.2024</div>
                            <div className="text-muted mt-1">
                              ORDER ID: 1225
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Activity End --> */}
            </div>
            {/* <!-- Address End --> */}
            

          {/* <!-- Order Status Update Modal Start --> */}
          <div className="modal modal-right fade" id="orderStatusUpdate" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Order Status</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                      <label className='form-label'>Select Order Status</label>
                      {/* <div className="form-check form-check-block">
                          <input type="radio" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Pending</label>
                      </div> */}
                      <div className="form-check form-check-block">
                          <input type="checkbox" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Confirmed</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="checkbox" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Shipped</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="checkbox" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Delivered</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="checkbox" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Return</label>
                      </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal">
                    <span>Update</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order Status Update Modal End --> */}

          {/* <!-- Order Date Update Modal Start --> */}
          <div className="modal modal-right fade" id="deliveryDateUpdate" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delivery Date</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                      <div className="mb3">
                        <label className='form-label'>Enter the Date for delivery</label>
                        <input type="date" className="form-control"/>
                      </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal">
                    <span>Update</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order Date Update Modal End --> */}

          {/* <!-- Order trackCode Modal Start --> */}
          <div className="modal modal-right fade" id="trackCode" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Track Code</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                      <div className="mb3">
                        <label className='form-label'>Enter Tracking Code</label>
                        <input type="text" className="form-control"/>
                      </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal">
                    <span>Submit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order Track code Modal End --> */}

          </div>
        </div>
      </main>
    </div>
  )
}

export default OrderDetails

