class Employee {
    constructor(id, fulName, workShopNumber, profession, discharge, exp) {
        this.id = id;
        this.fullName = fulName;
        this.workShopNumber = workShopNumber;
        this.profession = profession;
        this.discharge = discharge;
        this.exp = exp;
    }

    isExperienced() {
        return this.exp > 10;
    }

    isHasHighDischarge() {
        return this.discharge > 4;
    }
}

export default Employee;