console.log('hi')

let dueDays = 0, dueMoths = 0;
function getMonthsDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
function getOverDue(instollment_date, toDay_date, dayCharge) {
  let monthsDiff = getMonthsDiff(instollment_date, toDay_date);
  dueMoths = monthsDiff;
  console.log('mothsdue', monthsDiff)
  let dayDiff = toDay_date.getDate() - instollment_date.getDate();
  if (dayDiff > 0) {
    dueDays = monthsDiff * 30 - dayDiff;
  }
  else {
    dueDays = monthsDiff * 30 + dayDiff;
  }
  let overDue = dueDays * dayCharge;
  overDue = Math.abs(overDue)
  return overDue;
}
$(document).ready(() => {
  $('.btn').click((e) => {
    console.log('clicked')
    let installment_date = $('#InsDate').val();
    let today_date = $('#date').val();
    let dayCharge = $('[name="dailyCharge"]:checked').val();
    let overDue = getOverDue(new Date(installment_date), new Date(today_date), parseInt(dayCharge));
    window.confirm('Over due amount to paid = ' + overDue + ' Rs only')


  })
})