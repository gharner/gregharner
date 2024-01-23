"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateCode = void 0;
class PrivateCode {
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
}
exports.PrivateCode = PrivateCode;
