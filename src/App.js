import React, { useEffect } from 'react';
import './Invoice.css';

const Invoice = () => {
    useEffect(() => {
        const invoiceData = {
            "invoiceHeader": {
                "title": "Tax Invoice",
                "sectionAndRuleReference": "Section 31 of CGST Act,2017 read with Rule 46 of CGST Rule,2017 state GST Act & Rule",
                "originalForRecipient": "Original For Recipient"
            },
            "companyInformation": {
                "companyName": "Sai Cargo Freight Forwarders Pvt. Ltd.",
                "address": {
                    "line1": "REGD. OFF.: HNO. WZ200A TF KHNO. 67/1 12/1, GALI NO. 3",
                    "line2": "SADH NAGAR, PALAM COLONY, NEAR RAM CHOWK"
                },
                "gstin": "07AAUCS1139F1Z6",
                "state": {
                    "name": "Delhi",
                    "code": "07"
                },
                "cinNo": "U63020DL2014PTC263449",
                "email": [
                    "saicargodelhi@gmail.com",
                    "accounts@scfpl.com"
                ]
            },
            "invoiceDetails": {
                "invoiceNo": "12627",
                "consignorInvoiceNo": "HVJ/DN/20/21/002",
                "despatchDetails": {
                    "eWayBillNo": "",
                    "docketNo": "103184"
                },
                "invoiceDate": "31-Aug-2020",
                "consignorInvoiceDate": "31-Aug-2020",
                "mode": "TRAIN"
            },
            "billingInformation": {
                "billTo": {
                    "name": "AGGRESSIVE DIGITAL SYSTEMS PVT. LTD.",
                    "address": "PLOT NO-596,597, SECTOR-8, IMT MANESAR, GURGAON",
                    "state": {
                        "name": "Haryana",
                        "code": "06"
                    },
                    "pinCode": "122050",
                    "mNo": "",
                    "gstNo": "06AANCA7751J1ZA"
                }
            },
            "supplyAndShippingInformation": {
                "placeOfSupply": "HARYANA",
                "origin": "HYDERABAD",
                "totalPkt": "131",
                "dateOfSupply": "31-Aug-2020",
                "destination": "MANESAR",
                "weightKg": "2250",
                
            },
            "consignorInformation": {
                "consignor": {
                    "name": "HOME VU DIGITAL CABLE AND BROADBAND RRNATE LIMITED",
                    "address": "GNR ARCADE 6-2-982, KHAIRATABAD MAIN ROAD, HYDERABAD",
                    "state": "Telangana",
                    "gstNo": "36AAECH7383N1ZX"
                },
                "consignee": {
                    "name": "AGGRESSIVE DIGITAL SYSTEMS PVT. LTD.",
                    "address": "PLOT NO-596,597, SECTOR-3, IMT MANESAR, GURGAON",
                    "state": "Telangana",
                    "gstNo": "36AAECH7383N1ZX"
                }
            },
            "bankDetails": {
                "accountName": "Sai Cargo Freight Forwarder Pvt. Ltd",
                "bankName": "ICICI Bank",
                "accountNumber": "347405000083",
                "address": "Mahipaipur, New Delhi",
                "ifscCode": "ICICI0003474"
            },
            "goodsAndChargesInformation": {
                "items": [
                    {
                        "description": "T - Freight",
                        "sacHsd": "996512",
                        "weight": 2250,
                        "rate": 19,
                        "nonTaxable": null,
                        "taxable": 42750.00
                    },
                    {
                        "description": "T - Docket Charges",
                        "sacHsd": "996512",
                        "weight": null,
                        "rate": null,
                        "nonTaxable": null,
                        "taxable": 200.00
                    },
                    {
                        "description": "T - Pickup Charges",
                        "sacHsd": "996512",
                        "weight": null,
                        "rate": null,
                        "nonTaxable": null,
                        "taxable": 3000.00
                    },
                    {
                        "description": "T - Delivery Charges",
                        "sacHsd": null,
                        "weight": null,
                        "rate": null,
                        "nonTaxable": null,
                        "taxable": 4500.00
                    },
                    {
                        "description": "T - Station Clearance Charges",
                        "sacHsd": "996512",
                        "weight": null,
                        "rate": null,
                        "nonTaxable": null,
                        "taxable": 300.00
                    },
                    {
                      "description": "T - Station Clearance Charges",
                      "sacHsd": "996512",
                      "weight": null,
                      "rate": null,
                      "nonTaxable": null,
                      "taxable": 300.00
                  }
                    
                ]
            },
            "taxInformation": {
                "taxPayableInWords": "Indian Rupees Two Thousand Five Hundred Thirty Seven and Fifty paise Only",
                "igst": 2537.50,
                "netAmountAfterTax": 53287.50
            },
            "hsnSacDetails": {
                "hsnSac": "996512",
                "taxableValue": 50750.50,
                "integratedTax": {
                    "rate": "5%",
                    "amount": 2537.50
                },
                "totalTaxAmount": 2537.50,
                "total": {
                    "taxableValue": 50750.50,
                    "integratedTaxAmount": 2537.50,
                    "totalTaxAmount": 2537.50
                }
            },
            "footerInformation": {
                "totalPayableInWords": "Indian Rupees Fifty Three Thousand Two Hundred Eighty Seven and Fifty paise Only (₹ 53,287.50)",
                "jurisdiction": "All disputes arising under this bill shall be subject to New Delhi jurisdiction.",
                "paymentTerms": "Interest @ 22% per annum will be charged on total bill amount if payments are not made within 15 days of presentation of the bill.",
                "paymentMethod": "Payments by Draft/Account payee cheque only.",
                "discrepancyClause": "Any discrepancy in the bill must be reported back within 5 days. We will not accept any Debit against this bill later on.",
                "panNo": "AAUCS1139F",
                "tanNo": "DELS54477D",
                "gstNo": "07AAUCS1139F1Z6"
            },
            "footerSignature": {
                "companyName": "For Sai Cargo Freight Forwarders Pvt. Ltd",
                "authorizedSignatory": "Authorized Signatory"
            }
        };

        // Populate data into HTML elements using vanilla JavaScript inside useEffect
        document.getElementById('invoiceTitle').innerText = invoiceData.invoiceHeader.title;
        document.getElementById('sectionAndRuleReference').innerText = invoiceData.invoiceHeader.sectionAndRuleReference;

        document.getElementById('companyInformation').innerHTML = `
            <b>${invoiceData.companyInformation.companyName}</b><br>
            ${invoiceData.companyInformation.address.line1}<br>
            ${invoiceData.companyInformation.address.line2}<br>
            GSTIN: ${invoiceData.companyInformation.gstin}<br>
            State Name: ${invoiceData.companyInformation.state.name}, Code: ${invoiceData.companyInformation.state.code}<br>
            CIN No: ${invoiceData.companyInformation.cinNo}<br>
            Email: ${invoiceData.companyInformation.email.join(', ')}
        `;

        document.getElementById('invoiceDetails').innerHTML = `
            Invoice No: <b>${invoiceData.invoiceDetails.invoiceNo}</b><br>
            Consignor Invoice No: <b>${invoiceData.invoiceDetails.consignorInvoiceNo}</b><br>
            E-Way Bill No: <b>${invoiceData.invoiceDetails.despatchDetails.eWayBillNo}</b><br>
            Docket No: <b>${invoiceData.invoiceDetails.despatchDetails.docketNo}</b>
        `;

        document.getElementById('invoiceDates').innerHTML = `
            Invoice Date: <b>${invoiceData.invoiceDetails.invoiceDate}</b><br>
            Consignor Invoice Date: <b>${invoiceData.invoiceDetails.consignorInvoiceDate}</b><br>
            Mode: <b>${invoiceData.invoiceDetails.mode}</b>
        `;

        document.getElementById('billingInformation').innerHTML = `
            Bill To: <b>${invoiceData.billingInformation.billTo.name}</b><br>
            Address: ${invoiceData.billingInformation.billTo.address}<br>
            State: ${invoiceData.billingInformation.billTo.state.name}, Code: ${invoiceData.billingInformation.billTo.state.code}<br>
            Pin Code: ${invoiceData.billingInformation.billTo.pinCode}<br>
            GST No: ${invoiceData.billingInformation.billTo.gstNo}
        `;

        document.getElementById('supplyInformation').innerHTML = `
            Place of Supply: <b>${invoiceData.supplyAndShippingInformation.placeOfSupply}</b><br>
            Origin: <b>${invoiceData.supplyAndShippingInformation.origin}</b><br>
            Total Pkt: <b>${invoiceData.supplyAndShippingInformation.totalPkt}</b>
        `;

        document.getElementById('shippingInformation').innerHTML = `
            Date of Supply: <b>${invoiceData.supplyAndShippingInformation.dateOfSupply}</b><br>
            Destination: <b>${invoiceData.supplyAndShippingInformation.destination}</b><br>
            Weight (Kg): <b>${invoiceData.supplyAndShippingInformation.weightKg}</b>
        `;

        document.getElementById('consignorInformation').innerHTML = `
            Consignor: <b>${invoiceData.consignorInformation.consignor.name}</b><br>
            Address: ${invoiceData.consignorInformation.consignor.address}<br>
            State: ${invoiceData.consignorInformation.consignor.state}<br>
            GST No: ${invoiceData.consignorInformation.consignor.gstNo}
        `;

        document.getElementById('consigneeInformation').innerHTML = `
            Consignee: <b>${invoiceData.consignorInformation.consignee.name}</b><br>
            Address: ${invoiceData.consignorInformation.consignee.address}<br>
            State: ${invoiceData.consignorInformation.consignee.state}<br>
            GST No: ${invoiceData.consignorInformation.consignee.gstNo}
        `;

        document.getElementById('bankDetails').innerHTML = `
            Account Name: <b>${invoiceData.bankDetails.accountName}</b><br>
            Bank Name: <b>${invoiceData.bankDetails.bankName}</b><br>
            Account Number: <b>${invoiceData.bankDetails.accountNumber}</b><br>
            Address: ${invoiceData.bankDetails.address}<br>
            IFSC Code: <b>${invoiceData.bankDetails.ifscCode}</b>
        `;

        // Populate goods and charges information
        const goodsAndCharges = invoiceData.goodsAndChargesInformation.items.map(item => `
            <tr>
                <td>${item.description}</td>
                <td>${item.sacHsd}</td>
                <td>${item.weight ? item.weight : '-'}</td>
                <td>${item.rate ? item.rate : '-'}</td>
                <td>${item.nonTaxable ? item.nonTaxable.toFixed(2) : '-'}</td>
                <td>${item.taxable.toFixed(2)}</td>
            </tr>
        `).join('');

        document.getElementById('goodsAndCharges').innerHTML = goodsAndCharges;

        // Populate tax information
        document.getElementById('taxPayableInWords').innerText = invoiceData.taxInformation.taxPayableInWords;
        document.getElementById('igst').innerText = invoiceData.taxInformation.igst.toFixed(2);
        document.getElementById('netAmountAfterTax').innerText = invoiceData.taxInformation.netAmountAfterTax.toFixed(2);

        // Populate HSN/SAC details
        document.getElementById('hsnSacDetails').innerHTML = `
            <tr>
                <td>${invoiceData.hsnSacDetails.hsnSac}</td>
                <td>${invoiceData.hsnSacDetails.taxableValue.toFixed(2)}</td>
                <td>${invoiceData.hsnSacDetails.integratedTax.rate}</td>
                <td>${invoiceData.hsnSacDetails.integratedTax.amount.toFixed(2)}</td>
                <td>${invoiceData.hsnSacDetails.totalTaxAmount.toFixed(2)}</td>
            </tr>
        `;

        // Populate footer information
        document.getElementById('footerInfo').innerHTML = `
            Total Payable In Words: <b>${invoiceData.footerInformation.totalPayableInWords}</b><br>
            Jurisdiction: ${invoiceData.footerInformation.jurisdiction}<br>
            Payment Terms: ${invoiceData.footerInformation.paymentTerms}<br>
            Payment Method: ${invoiceData.footerInformation.paymentMethod}<br>
            Discrepancy Clause: ${invoiceData.footerInformation.discrepancyClause}<br>
            PAN No: ${invoiceData.footerInformation.panNo}<br>
            TAN No: ${invoiceData.footerInformation.tanNo}<br>
            GST No: ${invoiceData.footerInformation.gstNo}
        `;

        document.getElementById('footerSignature').innerText = invoiceData.footerSignature.companyName;

    }, []);

    return (
        <div className="container">
            <div className="invoice">
                <table className="header-table">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="header">
                                <h2 id="invoiceTitle"><strong>Tax Invoice</strong></h2>
                                <p id="sectionAndRuleReference"><b></b></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="left" id="companyInformation"></td>
                            <td className="middle" id="invoiceDetails"></td>
                            <td className="right" id="invoiceDates"></td>
                        </tr>
                        <tr>
                            <td className="left" id="billingInformation"></td>
                            <td className="middle" id="supplyInformation"></td>
                            <td className="right" id="shippingInformation"></td>
                        </tr>
                    </tbody>
                </table>
                <table className="transport-details">
                    <tbody>
                        <tr>
                            <td id="consignorInformation"></td>
                            <td id="consigneeInformation"></td>
                            <td id="bankDetails"></td>
                        </tr>
                    </tbody>
                </table>
                <table className="goods-table">
                    <thead>
                        <tr>
                            <td>Description of Goods</td>
                            <td>SAC/HSD</td>
                            <td>WT.</td>
                            <td>Rate</td>
                            <td>Non Taxable</td>
                            <td>Taxable</td>
                        </tr>
                    </thead>
                    <tbody id="goodsAndCharges"></tbody>
                </table>
                <table className="total-table">
                    <tbody>
                        <tr>
                            <td>Tax Payable in words: <b id="taxPayableInWords"></b></td>
                            <td>
                                IGST: <b id="igst"></b><br />
                                Net Amount after Tax: <b id="netAmountAfterTax"></b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="goods-table">
                    <thead>
                        <tr>
                            <th>HSN/SAC</th>
                            <th>Taxable value</th>
                            <th colSpan="2">Integrated Tax</th>
                            <th>Total Tax Amount</th>
                        </tr>
                    </thead>
                    <tbody id="hsnSacDetails"></tbody>
                </table>
                <div className="footer">
                    <div className="footer-info" id="footerInfo"></div>
                    <div className="footer-signature">
                        <p id="footerSignature"></p>
                        <p className="signature">Authorized Signatory</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
