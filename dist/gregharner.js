"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GregHarner = void 0;
class GregHarner {
    calculateAge(birthday) {
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    stringyPretty(object) {
        let cache = [];
        const data = JSON.stringify(object, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
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
exports.GregHarner = GregHarner;
