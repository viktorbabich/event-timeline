import {Injectable} from "@angular/core";
import {EVENTS} from "./mock-events";
import {Transaction} from "./transaction";
import {News} from "./News";

@Injectable()

export class EventService {
	getEvents() {
		return Promise.resolve(EVENTS);
	}
}