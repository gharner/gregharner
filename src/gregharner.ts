export class GregHarner {
	calculateAge(birthday: string): number {
		const birthDate = new Date(birthday);
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}
	stringyPretty(object: any) {
		let cache: unknown[] = [];

		const data: string = JSON.stringify(object, (key: string, value: unknown) => {
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value as never) !== -1) {
					// Duplicate reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}

			return value;
		});
		cache = [];

		const cleanData = JSON.parse(data);
		const prettyData = JSON.stringify(cleanData, null, '\t');

		return prettyData;
	}
}
