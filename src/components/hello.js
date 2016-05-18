import { Component } from 'angular2/core';

@Component({
	selector: 'hello',
	templateUrl: 'src/components/hello.html'
})

export class Hello {

	constructor(){
		this.firstName = 'Tom';
		this.lastName = 'Jones';
	}

	sayHello() {
		alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
	}
}