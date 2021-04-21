// source: https://blog.abelotech.com/posts/number-currency-formatting-javascript/

const thousandSeparator = (num, clearFunc = 'round') => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default thousandSeparator;