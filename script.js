// ================================ // 
// Temperature Converter 
// ================================
// Get HTML elements
const celsiusInput = document.getElementById("celsiusInput"); 
const fahrenheitInput = document.getElementById("fahrenheitInput");
const celsiusBtn = document.getElementById("celsiusBtn"); 
const fahrenheitBtn = document.getElementById("fahrenheitBtn");
const celsiusResult = document.getElementById("celsiusResult"); 
const fahrenheitResult = document.getElementById("fahrenheitResult");
const resetBtn = document.getElementById("resetBtn");
// ================================ 
// Celsius → Fahrenheit 
// Formula: 
// (C × 9/5) + 32 
// ================================
celsiusBtn.addEventListener("click", function () {
  const celsius = Number(celsiusInput.value);
  if (celsiusInput.value.trim() === "") {
    showError(celsiusResult, "Please enter a Celsius temperature.");
    return;  }
  const fahrenheit = (celsius * 9 / 5) + 32;
  const result = fahrenheit.toFixed(2);
  showSuccess(    
    celsiusResult,    
    `${celsius} °C = ${result} °F`
    );
});
// ================================ 
// Fahrenheit → Celsius 
// Formula: 
// (F - 32) × 5/9 
// ================================
fahrenheitBtn.addEventListener("click", function () {
  const fahrenheit = Number(fahrenheitInput.value);
  if (fahrenheitInput.value.trim() === "") {
    showError(      
      fahrenheitResult,      
      "Please enter a Fahrenheit temperature."
    );
    return;  }
  const celsius = (fahrenheit - 32) * 5 / 9;
  const result = celsius.toFixed(2);
  showSuccess(    
    fahrenheitResult,    
    `${fahrenheit} °F = ${result} °C`  
  );
});
// ================================ 
// Enter key support 
// ================================
celsiusInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") 
    {   
      celsiusBtn.click();  

    }
});
fahrenheitInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") 
    {    
      fahrenheitBtn.click();  
    }
});
// ================================ 
// Reset 
// ================================
resetBtn.addEventListener("click", function () {
  celsiusInput.value = "";  
  fahrenheitInput.value = "";
  celsiusResult.textContent = "Result will appear here";  
  fahrenheitResult.textContent = "Result will appear here";
  celsiusResult.className = "result";  
  fahrenheitResult.className = "result";
});
// ================================ 
// Helper Functions 
// ================================
function showSuccess(element, message) {
  element.textContent = message;
  element.className = "result success";
}
function showError(element, message) {
  element.textContent = message;
  element.className = "result error";
} 