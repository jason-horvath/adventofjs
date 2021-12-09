const priceString = (cents) => {
  return '$' + (cents/100).toString();
}

export default priceString;