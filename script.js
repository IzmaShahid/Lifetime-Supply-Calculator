document.getElementById('calculate').addEventListener('click', function() {
    const dailyUsage = parseFloat(document.getElementById('dailyUsage').value);
    const years = parseFloat(document.getElementById('years').value);

    if (!isNaN(dailyUsage) && !isNaN(years) && dailyUsage >= 0 && years >= 0) {
        const totalUnits = dailyUsage * 365 * years;
        document.getElementById('result').textContent = `You will need a total of ${totalUnits} units for ${years} years.`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid positive numbers.';
    }
});
