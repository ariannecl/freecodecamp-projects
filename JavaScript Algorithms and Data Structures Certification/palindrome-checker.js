function palindrome(str) {
    let filtered = str.toLowerCase().replace(/[\W_]/g, '');
    let firstHalf = filtered.slice(0, Math.floor(filtered.length / 2));
    let secondHalf = filtered.slice(Math.ceil(filtered.length / 2)).split('').reverse().join('');
    
    return firstHalf == secondHalf;
  }
  
  palindrome("eye");
  palindrome("arianne");