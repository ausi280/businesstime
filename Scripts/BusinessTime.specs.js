describe('Business Time', function(){
	
    const holiday = {
        start: new Date('2019-12-24T21:00:00'),
        end: new Date('2019-12-25T21:00:00')
    };


	//asserts
    it('should be able to return acutalDate more duration when time more duration is minor to holiday.start', function(){
        const expectedDate = new Date('2019-12-01T01:00:00');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60);
        expect(actualDate).toEqual(expectedDate);
    });

    it('should be able to return holiday.end more duration when selected time more duration is greater than holiday.end', function(){
        const expectedDate = new Date('2019-12-25T21:00:01');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1);
        expect(actualDate).toEqual(expectedDate);
    });

    it('should be able to return holiday.start more holiday.end minus holiday.start when time start before or equal holiday.start', function(){
        const expectedDate = new Date('2019-12-25T21:30:00');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60);
        expect(actualDate).toEqual(expectedDate);
    });

    it('should be able to return holiday.end more duration when selected time equal than holiday.end', function(){
        const expectedDate = new Date('2019-12-25T21:00:01');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1);
        expect(actualDate).toEqual(expectedDate);
    });

    it('should be able to return holiday.start minus duration time when selected time is between holiday', function(){
        const expectedDate = new Date('2019-12-24T20:59:59');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1);
        expect(actualDate).toEqual(expectedDate);
    });
	
	it('should be able to return holiday.end date minus duration time when selected time is greater than holiday.end', function(){
        const expectedDate = new Date('2019-12-25T22:59:59');
        let actualDate = addBusinessTime(holiday, new Date('2019-12-25T23:00:00'), -1);
        expect(actualDate).toEqual(expectedDate);
    });
	
	it('should be able to manage exceptions', function(){
		let actualDate = addBusinessTime(null, null, null);
        expect(actualDate).toBeNull(null);
    });

});