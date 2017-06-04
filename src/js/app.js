import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

tl
	.from( $('.logo__u'), 2, {
		y: -30
	} )
	.from( $('.logo__r'), 2,{
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__i'), 2, {
		y: "100%"
	},"-=1.5")
	.from( $('.logo__t-top'), 2, {
		x: "100%"
	},"-=1.5")
	.from( $('.logo__t-bottom'), 2, {
		y: "-100%"
	},"-=1.5")
	.from( $('.logo__y'), 2, {
		y: "100%"
	},"-=2");
