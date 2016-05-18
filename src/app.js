import { Component } from 'angular2/core';
import {Hello} from './components/hello';

@Component({
	selector: 'my-app',
	templateUrl: 'src/app.html',
	directives: [Hello]
})
export default class App {
	constructor() {
		this.what = "a good time!";
	}
};