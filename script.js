// Progressive enhancement: update the document year automatically.
const year = document.querySelector('.contact-foot span:last-child');
if (year) year.textContent = '© ' + new Date().getFullYear() + ' EDUARDO SOARES CHAVES';
