const Excel = require('exceljs');
const {jsPDF} = require('jspdf/dist/jspdf.node.min.js');
const fs = require('fs')

// Create an Excel file
const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('My Sheet');
worksheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32 },
  { header: 'Email', key: 'email', width: 32 },
];

worksheet.addRow({ id: 1, name: 'John Doe', email: 'john@example.com' });
worksheet.addRow({ id: 2, name: 'Jane Doe', email: 'jane@example.com' });

// Save the Excel file
workbook.xlsx
  .writeFile('myExcelFile.xlsx')
  .then(() => {
    console.log('Excel file saved.');
    
    // Read the Excel file using exceljs
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile('myExcelFile.xlsx').then(() => {
      const worksheet = workbook.getWorksheet(1);
      const data = worksheet.getSheetValues();

      // Generate a PDF file using jsPDF
      var doc = new jsPDF();
      doc.text('Id', 10, 10);
      doc.text('Name', 40, 10);
      doc.text('Email', 70, 10);
      data.forEach((row, i) => {
        // doc.text(row[0], 10, 20 + i * 10);
        // doc.text(row[1], 40, 20 + i * 10);
        // doc.text(row[2], 70, 20 + i * 10);
      });
      doc.save('myPdfFile.pdf');
      fs.unlink('myExcelFile.xlsx', (error) => {
        if (error) {
          console.error(`Error deleting file: ${error}`);
        } else {
          console.log(`File deleted successfully: ${filePath}`);
        }
      });
    });
  })
  .catch(error => {
    console.error(error);
  });
