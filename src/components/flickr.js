import { Component } from 'angular2/core';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import 'rxjs/add/operator/map';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';

@Component({
	selector: 'flickr',
	templateUrl: 'src/components/flickr.html',
	providers: [JSONP_PROVIDERS]
})

export class Flickr {

	static get parameters() {
		return [[Jsonp]];
	}

	constructor(jsonp) {
		console.log(jsonp);
		this.jsonp = jsonp;
		this.images = [];
		jsonp.get(url)
			.map(res => res.json())
			.subscribe(data => {
				this.images = data.items;
				console.log(data)
			});
	}

}
