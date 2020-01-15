const PaToHg = (pressure) => {
  return Math.round((pressure / 133) * 100);
};

export default PaToHg;