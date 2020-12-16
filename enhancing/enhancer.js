module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(name, durability, enhacement) {
  if (enhacement < 20) {
    return enhacement + 1;
  } else if (enhacement === 20) {
    return enhacement;
  }
  return { name, durability, enhacement };
}

function fail(name, durability, enhacement) {
  if (enhacement < 15) {
    return durability - 5;
  } else if (enhacement > 15) {
    return durability - 10;
  } else if (enhacement > 16) {
    return durability - 10, enhacement - 1;
  }
  return { name, durability, enhacement };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
