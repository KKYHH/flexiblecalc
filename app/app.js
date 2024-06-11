const calculate = document.querySelector('.calculate');
const input = document.querySelector('.input');
const result = document.querySelector('.result');

calculate.addEventListener('click', () => {
  const inputValue = parseFloat(input.value);

  if (isNaN(inputValue) || inputValue <= 0) {
    result.textContent = '올바른 숫자를 입력하세요';
    return;
  }

  const lengthInCm = inputValue * 100;
  const stepLength = 90;
  const fullSteps = Math.floor(lengthInCm / stepLength);
  const remainingCm = lengthInCm % stepLength;
  const additionalSteps = (remainingCm / stepLength).toFixed(1);
  const totalSteps = (fullSteps + parseFloat(additionalSteps)).toFixed(1);

  result.textContent = `${lengthInCm}cm 입니다. ${totalSteps}칸을 가야 합니다.`;
});