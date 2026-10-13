/* MAHANDIA Bookstore setup
   Replace GOOGLE_FORM_URL with your published Google Form URL.
   Replace FORM_BOOK_FIELD_ENTRY with the entry ID of the prefilled book-title field.
*/
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform";
const FORM_BOOK_FIELD_ENTRY = "entry.000000000000";

document.querySelectorAll('.order-button').forEach((button) => {
  button.addEventListener('click', () => {
    const bookTitle = button.dataset.book;
    if (GOOGLE_FORM_URL.includes('REPLACE_WITH_YOUR_FORM_ID') || FORM_BOOK_FIELD_ENTRY === 'entry.000000000000') {
      alert('Tombol pemesanan sudah berfungsi. Untuk mengaktifkan Google Form, atur GOOGLE_FORM_URL dan FORM_BOOK_FIELD_ENTRY pada file bookstore.js sesuai form MAHANDIA.\n\nBuku dipilih: ' + bookTitle);
      return;
    }
    const separator = GOOGLE_FORM_URL.includes('?') ? '&' : '?';
    const target = GOOGLE_FORM_URL + separator + encodeURIComponent(FORM_BOOK_FIELD_ENTRY) + '=' + encodeURIComponent(bookTitle);
    window.location.href = target;
  });
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
