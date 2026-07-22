const calculateTotalTransactionValue = (transactions = []) => {
  const markupRate = 1.2;

  return transactions
    .filter(transaction => transaction.value > 0)
    .map(transaction => ({
      ...transaction,
      value: transaction.value * markupRate,
    }))
    .reduce((total, transaction) => total + transaction.value, 0);
};