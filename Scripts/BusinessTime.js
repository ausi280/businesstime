const holiday = 
{
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

function addBusinessTime(holiday, time, duration) 
{
	try{
		const timeInMiliseconds = time.getTime();
		const timeInMilisecondsPlusDuration = time.setSeconds(duration);
		const holidayStartTime = holiday.start.getTime();
		const holidayEndTime = holiday.end.getTime();
		let startMilisecond = 0;
		let result;
		
		if(timeInMilisecondsPlusDuration <= holidayStartTime || timeInMilisecondsPlusDuration >= holidayEndTime)
		{
			startMilisecond = timeInMiliseconds;
		}
		else if(timeInMiliseconds >= holidayStartTime && timeInMiliseconds <= holidayEndTime)
		{
			duration < 0 ? startMilisecond = holidayStartTime : startMilisecond = holidayEndTime;
		}
		else
		{
			startMilisecond = timeInMiliseconds + holidayEndTime - holidayStartTime;
		}
		
		result = new Date(startMilisecond);
		result.setSeconds(duration);
		console.log(result);
		return result;
	}
	catch(err){
		console.log("There is an error executing addBusinessTime " + err);
		return null;
	}
}

addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59
addBusinessTime(holiday, new Date('2019-12-25T23:00:00'), -1) // returns 2019-12-25T20:59:59
addBusinessTime(null, null, null) // There is an error executing addBusinessTime ..., also we can validate the parameters to avoid exceptions.