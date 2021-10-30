document.addEventListener('DOMContentLoaded', () => {
  const phoneInputs = document.querySelectorAll('input[data-tel]');

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
  }

  const onPhonePaste = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  const onPhoneInput = (e) => {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    const selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      return input.value = '';
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
      const firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else if (inputNumbersValue.substr(0, 2) == 38) {
      const firstSymbols = '+38 (0';
      formattedInputValue = input.value = firstSymbols;
      if (inputNumbersValue.length > 3) {
        formattedInputValue += inputNumbersValue.substring(3, 5);
      }
      if (inputNumbersValue.length >= 6) {
        formattedInputValue += ') ' + inputNumbersValue.substring(5, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += ' - ' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += ' - ' + inputNumbersValue.substring(9, 12)
      }
      // console.log(inputNumbersValue)
      // console.log(inputNumbersValue.length)
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  const onPhoneKeyDown = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  }

  const onDeleteKeyDown = (evt) => {
    const inputValue = evt.target.value.replace(/\D/g, '');
    if (evt.key == 'Backspace' && inputValue.length == 3) {
      evt.target.value = '';
    }
  }

  for (const phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('keydown', onDeleteKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
})
