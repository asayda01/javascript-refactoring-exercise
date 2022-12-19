function processTransactions(transActions) {

    if(!(transActions)) {
        throw new Error("Undefined collection of transactions")
    };
    
    let txCount = transActions.reduce((transaction, item) =>
     { return transaction[item] ? ++transaction[item] :
         transaction[item] = 1, transaction}, {});

    const sortByAmountThenName =
        Object.keys(txCount).sort(  (itemOne, itemTwo) =>
        {return txCount[itemTwo] - txCount[itemOne] ||
             itemOne > itemTwo || - (itemOne < itemTwo)})
        ;

    return sortByAmountThenName.map((key) => `${key} ${txCount[key]}`);
};

module.exports = processTransactions;