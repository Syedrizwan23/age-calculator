document.getElementById("dob").addEventListener("input", function () {
    const dob = this.value;
    const result = document.getElementById("result");
  
    if (!dob) {
      result.textContent = "Please select your date of birth.";
      return;
    }
  
    const dobDate = new Date(dob);
    const today = new Date();
  
    if (dobDate > today) {
      result.textContent = "Date of birth cannot be in the future.";
      return;
    }
  
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  });
  