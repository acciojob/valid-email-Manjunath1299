function validEmail(email) {
  //your JS code here.
	 if (!email) {
         alert("Please enter a vaild email");
      }
    
      // Split the email into local part and domain part
      const [localPart, domainPart] = email.split('@');
    
      // Check if there is a local part and a domain part after the @ symbol
      if (!localPart || !domainPart) {
        alert("Please enter a vaild email");
      }
    
      // Check if there is at least one dot in the domain part
      if (!domainPart.includes('.')) {
        alert("Please enter a vaild email");
      }
    
      // Check if the local part and domain part do not start or end with a dot
      if (localPart.startsWith('.') || localPart.endsWith('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
        alert("Please enter a vaild email");
      }
    
      // Check if there are no consecutive dots in the local part or domain part
      if (localPart.includes('..') || domainPart.includes('..')) {
        alert("Please enter a vaild email");
      }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
