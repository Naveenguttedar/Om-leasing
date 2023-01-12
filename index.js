console.log('hi')

let dueDays = 0, dueMoths = 0;
function getMonthsDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
function getOverDue(installment_date, toDay_date, dayCharge) {
  let monthsDiff = getMonthsDiff(installment_date, toDay_date);
  dueMoths = monthsDiff;
  console.log('mothsdue', monthsDiff)
  let dayDiff = toDay_date.getDate() - installment_date.getDate();
  if (dayDiff < 0) {
    dueDays = monthsDiff * 30 - Math.abs(dayDiff);
  }
  else {

    console.log('dauDiff', dayDiff)
    dueDays = monthsDiff * 30 + dayDiff;
  }
  let overDue = dueDays * dayCharge;
  overDue = Math.abs(overDue)
  return overDue;
}
function newaddInstallments(amount, dayCharge, leftMonths) {
  let tempAmount = amount;
  for (let i = 1; i < leftMonths; i++) {
    MonthCharge = 30 * dayCharge;
    tempAmount -= MonthCharge;
    amount += tempAmount;
  }
  return amount;
}
$(document).ready(() => {
  $('.btn').click((e) => {
    console.log('clicked')
    let installment_date = $('#InsDate').val();
    let today_date = $('#date').val();
    let dayCharge = $('[name="dailyCharge"]:checked').val();
    let overDue = getOverDue(new Date(installment_date), new Date(today_date), parseInt(dayCharge));
    console.log(overDue)
    let dueInstallments = $('#inputIns').val();
    let grandTotal = newaddInstallments(overDue, parseInt(dayCharge), parseInt(dueInstallments));
    $('#OD').val(grandTotal);
    $('.overDue').removeClass('hidden')

  })
})