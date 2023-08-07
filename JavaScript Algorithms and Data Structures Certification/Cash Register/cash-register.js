function checkCashRegister(price, cash, cid) {
    // create an object with the value of each currency unit multiplied by 100
    const currencyValue = {'PENNY': 1, 'NICKEL': 5, 'DIME': 10, 'QUARTER': 25, 'ONE': 100, 'FIVE': 500, 'TEN': 1000, 'TWENTY': 2000, 'ONE HUNDRED': 10000}
    // multiply price and cash by 100 for precision
    let price100 = price * 100;
    let cash100 = cash * 100;
    //reverse cid and multiply by 100 for precision
    let cidRev = cid.toReversed();
    let cidRev100 = cidRev.map(x => [x[0], x[1] * 100]);
    // calculate change needed (multiplied by 100)
    let change100 = cash100 - price100;
    // calculate the sum of the cash in drawer (multiplied by 100)
    let sumCid = 0;
    cidRev100.forEach(x => sumCid += x[1]);
    
    if(change100 === 0) {
      return {status: 'OPEN', change: []};
    } else if (change100 > sumCid) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    } else if(change100 === sumCid) {
      return {status: 'CLOSED', change: [...cid]};
    } else {
      let changeArray = []
      for(let unity of cidRev100) { 
        let unityValue = currencyValue[unity[0]]
        if (change100 - unityValue >= 0) {
          let x = 0;
          while (change100 - unityValue >= 0 && unity[1] > 0) {
            x += unityValue;
            change100 -= unityValue;
            unity[1] -= unityValue;
          }
          changeArray.push([unity[0], x / 100]);
        }
      }
  
      if (change100 > 0) {
        console.log(change100)
        return {status: 'INSUFFICIENT_FUNDS', change: []};
      } else {
        return {status: 'OPEN', change: changeArray};
      }
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);