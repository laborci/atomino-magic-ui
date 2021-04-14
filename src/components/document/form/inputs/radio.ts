import Component from "./radio.svelte"
import Input from "../input";
import {SvelteComponent} from "svelte";

export default class RadioInput extends Input {
	static component: typeof SvelteComponent = Component;
	props: { options: Array<{key:string,label:string}>, inline: boolean } = {options: [], inline: false}

	get inline(){
		this.props.inline = true;
		return this;
	}

	options(options: Array<any> | Object): this {
		let opts = [];
		if (options instanceof Array) {
			options.forEach(opt => {
				if (typeof opt === "string") opts.push({value: opt, label: opt});
				else if (typeof opt.label !== 'undefined' && typeof opt.value !== "undefined") {
					opts.push({value: opt.value, label: opt.label});
				} else {
					opts.push({value: Object.keys(opt)[0], label: opt[Object.keys(opt)[0]]});
				}
			})
		} else {
			let keys = Object.keys(options);
			keys.forEach(value => opts.push({value: value, label: options[value]}));
		}
		this.props.options = opts;
		return this;
	}
}























































































































































































































































































































































































































































































































































































































































