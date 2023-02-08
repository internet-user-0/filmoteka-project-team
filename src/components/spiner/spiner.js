export function showSpinner(spinnerRef, elementRef) {
  spinnerRef.classList.remove('visually-hidden');
  elementRef?.classList.add('visually-hidden');
}

export function hideSpinner(spinnerRef, elementRef) {
  spinnerRef.classList.add('visually-hidden');
  elementRef?.classList.remove('visually-hidden');
}
