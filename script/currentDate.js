// Current Date
function showBangladeshDate(){
    const now = new Date();
    const optionsDate={
        timeZone:'Asia/Dhaka',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }
    // date
    const currentDate= new Intl.DateTimeFormat('en-GB',optionsDate).format(now);
    document.getElementById("current-date").textContent=`
    Date: ${currentDate}
    `;

}
const currentDate= showBangladeshDate();
