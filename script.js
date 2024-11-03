const textInputElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

const showIfTextIsPalindrome = (text) => {
  const cleanText = cleanTextInputData(text);
  if (checkIfInputIsEmpty(cleanText)) {
    return;
  }

  const isCleanTextPalindrome = isPalindrome(cleanText);
  resultElement.innerText = isCleanTextPalindrome
    ? `${text} is a palindrome`
    : `${text} is not a palindrome`;
};

checkButton.addEventListener("click", () => {
  showIfTextIsPalindrome(textInputElement.value);
});

const checkIfInputIsEmpty = (text) => {
  if (text === "") {
    alert("Please input a value");
    textInputElement.value = "";
    return true;
  } else {
    return false;
  }
};

const cleanTextInputData = (str) => {
  const regex = /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g;
  return str.replace(regex, "").toLowerCase();
};

const isPalindrome = (str) => {
  const revertedText = str.split("").reverse().join("");
  return str === revertedText;
};
