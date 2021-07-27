// Solutions in JavaScript

// 7kyu - FIXME: Get Full Name

// https://www.codewars.com/kata/597c684822bc9388f600010

class Dinglemouse{
  constructor(firstName, lastName) {
    this.firstName = firstName.trim()
    this.lastName = lastName.trim()
  }
  getFullName(firstName, lastName){
    let result = `${this.firstName} ${this.lastName}`.trim();
    return result;
  }
}