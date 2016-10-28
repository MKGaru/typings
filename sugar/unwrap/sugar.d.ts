// Type definitions for Sugar 2.0.0
// Project: http://sugarjs.com/
// Definitions by: MKGaru <https://github.com/mkgaru/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/*
 sugar-2.0.1.d.ts may be freely distributed under the MIT license.
 Copyright (c) 2016 MKGaru
 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */
/* replace
 * remove SugarGeneric
 * remove SugarBoolean type
 * SugarGeneric<T> → T
 * SugarGeneric<U> → U
 * SugarGeneric<{[key:string]:T[]}> → {[key:string]:T[]}
 * SugarGeneric<any> → any
 * SugarBoolean → boolean
 * SugarString　→ string
 * SugarDate　　→ Date
 * SugarNumber  → number
 * SugarArray   → Array
 * SugarObject<any> → any
 * SugarObject<T> → T
 * Array<U> → U[]
 *:Array<T> →:T[]
 */
//declare module 'Sugar' {
	/* ===================
	      Sugar
	 * =================== */
	/**
	 * Extends Sugar defined methods onto natives.
	 * This method can be called on individual namespaces like Sugar.Array or on the Sugar global itself,
	 * in which case options will be forwarded to each extend call.
	 * For more, see extending.
	 */
	export function extend();

	/**
	 * Creates a new Sugar namespace.
	 * This method is for plugin developers who want to define methods to be used with natives that Sugar does not handle by default.
	 * The new namespace will appear on the Sugar global with all the methods of normal namespaces, including the ability to define new methods.
	 * When extended, any defined methods will be mapped to name in the global context.
	 * @param name
	 */
	export function createNamespace(name:string):any;

	/* ===================
	       Sugar.Array
	 * =================== */
	type ArrayFilter<T> = string|T|RegExp|((el:T,i?:number,arr?:T[])=>boolean);
	type ArrayMapper<T,U> = string|((el:T,i?:number,arr?:T[])=>U);
	interface SugarArray<T>{
		valueOf():T[];
		raw:T[];

		add(item:T,index?:number):T[];
		append(item:T,index?:number):T[];
		at(index:number,loop?:boolean):T[];
		average<U>(map?:(el:T,i:number,arr:T[])=>U):U[];
		clone():T[];
		compact(all?:boolean):T[];
		count(search:ArrayFilter<T>):number;
		every(search:ArrayFilter<T>,context?:this):boolean;
		exclude(search:ArrayFilter<T>):T[];
		filter(search:ArrayFilter<T>,context?:this):T[];
		find(search:ArrayFilter<T>,context?:this):T;
		findIndex(search:ArrayFilter<T>,context?:this):number;
		first():T;
		first(num:number):T[];
		flatten(limit?:number):T[];
		flatten<U>(limit?:number):U[];
		mapFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		forEachFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		filterFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		someFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		everyFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		reduceFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		reduceRightFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		findFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		findIndexFromIndex(startIndex:number,arg2?:any,arg3?:any):any;
		forEach(fn:((el:T,i?:number,arr?:T[])=>any),context?:this):void;
		from(index:number):T[];
		groupBy<U>(map:ArrayMapper<T,U>,fn?:(arr:T[],key?:string,obj?:T)=>any):{[key:string]:T[]};
		inGroups(num:number,padding?:number):Array<T[]>;
		inGroupsOf(num:number,padding?:any):Array<T[]>;
		includes(search:ArrayFilter<T>,fromIndex?:number ): boolean;
		indexOf(serch:ArrayFilter<T>,fromIndex?:number): number;
		insert(item:T,index?:number):T[];
		intersect(arr:T[]):T[];
		isEmpty():boolean;
		isEqual(arr:T[]):boolean;
		last():T;
		last(num:number):T[];
		lastIndexOf(search:ArrayFilter<T>,fromIndex?:number):number;
		least():T;
		least<U>(all:boolean,map?:ArrayMapper<T,U>):U[];
		map<U>(map:ArrayMapper<T,U>,context?:this):U[];
		max():T;
		max<U>(map:ArrayMapper<T,U>):T;
		max<U>(all:boolean,map:ArrayMapper<T,U>):T[];
		median():T;
		median<U>(map:ArrayMapper<T,U>):U[];
		min():T;
		min<U>(map:ArrayMapper<T,U>):T;
		min<U>(all:boolean,map:ArrayMapper<T,U>):T[];
		most():number;
		most(all:boolean):T[];
		most(map:ArrayFilter<T>):T;
		most(all:boolean,map:ArrayFilter<T>):T[];
		none(search:ArrayFilter<T>,context?:this):boolean;
		reduce<U>(fn:(acc:T,el:T,idx?:number,arr?:T[])=>U,init?:number):U;
		reduceRight<U>(fn:(acc:T,el:T,idx?:number,arr?:T[])=>U,init?:number):U;
		remove(search:ArrayFilter<T>):T[];
		removeAt(start:number,end?:number):T[];
		sample(remove?:boolean):T;
		sample(num:number,remove?:boolean):T[];
		shuffle():T[];
		some(search:ArrayFilter<T>,context?:this):boolean;
		sortBy<U>(map?:ArrayMapper<T,U>,desc?:boolean):T[];
		subtract(item:T[]):T[];
		sum<U>(map?:ArrayMapper<T,U>):number;
		to(index:number):T[];
		union(arr?:T[]):T[];
		unique<U>(map?:ArrayMapper<T,U>):T[];
		zip(...arr:T[][]):Array<T[]>;
		join(sep?:string):string;
	}
	export function Array<T>(array:T[]):T[];
	// export namespace Array{
	// 	/** @see Sugar.extend */
	// 	function extend();
	// 	/** Aliases one Sugar method to another.
	// 	 @example
	// 	 Sugar.Array.alias('all','every')
	// 	 */
	// 	function alias(toName,fromName);
	// 	function construct<T>(n:number,fn:(n:number)=>T);
	// 	function create<T>(obj?:T,clone?:boolean):T[];
	// 	function from<U,T>(a:any,map?:(el:T,i:number,arr:T[])=>U,context?:any):U[];
	// 	//function isArray(obj:any):SugerGenelic<boolean>; // ES5 use Array.isArray
	// 	function getOption(name:string);
	// 	function setOption(name:string,value);
	// }

	/* ===================
	       Sugar.Date
	 * =================== */
	type Dateable = Date|string|number;
	interface SugarDate{
		valueOf():Date;
		addMilliseconds(n:number,reset?:boolean):Date;
		addSeconds(n:number,reset?:boolean):Date;
		addMinutes(n:number,reset?:boolean):Date;
		addHours(n:number,reset?:boolean):Date;
		addDays(n:number,reset?:boolean):Date;
		addWeeks(n:number,reset?:boolean):Date;
		addMonths(n:number,reset?:boolean):Date;
		addYears(n:number,reset?:boolean):Date;
		advance(set:Dateable|{},reset?:boolean):Date;
		beginningOfISOWeek():Date;
		beginningOfDay(locale:string):Date;
		beginningOfWeek(locale:string):Date;
		beginningOfMonth(locale:string):Date;
		beginningOfYear(locale:string):Date;
		clone():Date;
		daysInMonth():number;
		endOfISOWeek():Date;
		endOfDay():Date;
		endOfWeek():Date;
		endOfMonth():Date;
		endOfYear():Date;
		format(f?:string,locale?:string):string;
		full(locale?:string):string;
		get(d:Dateable,options?:any):Date;
		getISOWeek():number;
		getUTCOffset(iso?:boolean):string;
		getUTCWeekday():number;
		getWeekday():number;
		is(f:Dateable,margin?:number):boolean;
		isAfter(d:Dateable,margin?:number):boolean;
		isBefore(d:Dateable,margin?:number):boolean;
		isBetween(d1:Dateable,d2:Dateable,margin?:number):boolean;
		isToday():boolean;
		isYesterday():boolean;
		isTomorrow():boolean;
		isWeekday():boolean;
		isWeekend():boolean;
		isSunday():boolean;
		isMonday():boolean;
		isTuesday():boolean;
		isWednesday():boolean;
		isThursday():boolean;
		isFriday():boolean;
		isSaturday():boolean;
		isFuture():boolean;
		isLastWeek():boolean;
		isLastMonth():boolean;
		isLastYear():boolean;
		isLeapYear():boolean;
		isNextWeek():boolean;
		isNextMonth():boolean;
		isNextYear():boolean;
		isPast():boolean;
		isThisWeek():boolean;
		isThisMonth():boolean;
		isThisYear():boolean;
		isUTC():boolean;
		isValid():boolean;
		iso():string;
		long(locale?:string):string;
		medium(locale?:string):string;
		relative(locale?:string,fn?:((num:number,unit?:number,ms?:number,loc?:string)=>string)):string;
		relativeTo(d:Dateable,locale?:string):string;
		reset(unit?:string,localeCode?:Dateable):Date;
		rewind(set:any,reset?:boolean):Date;
		set(set:any,reset?:boolean):Date;
		setISOWeek(num:number):Date;
		setUTC(on?:boolean):Date;
		setWeekday(dow:number):Date;
		short(locale?:string):Date;
		toISOString():string;
		toJSON(key?:any):string;
		millisecondsAgo():number;
		secondsAgo():number;
		minutesAgo():number;
		hoursAgo():number;
		daysAgo():number;
		weeksAgo():number;
		monthsAgo():number;
		yearsAgo():number;
		millisecondsSince(d?:Dateable,options?:string|{}):number;
		secondsSince(d?:Dateable,options?:string|{}):number;
		minutesSince(d?:Dateable,options?:string|{}):number;
		hoursSince(d?:Dateable,options?:string|{}):number;
		daysSince(d?:Dateable,options?:string|{}):number;
		weeksSince(d?:Dateable,options?:string|{}):number;
		monthsSince(d?:Dateable,options?:string|{}):number;
		yearsSince(d?:Dateable,options?:string|{}):number;
		millisecondsUntil(d?:Dateable,options?:string|{}):number;
		secondsUntil(d?:Dateable,options?:string|{}):number;
		minutesUntil(d?:Dateable,options?:string|{}):number;
		hoursUntil(d?:Dateable,options?:string|{}):number;
		daysUntil(d?:Dateable,options?:string|{}):number;
		weeksUntil(d?:Dateable,options?:string|{}):number;
		monthsUntil(d?:Dateable,options?:string|{}):number;
		yearsUntil(d?:Dateable,options?:string|{}):number;
	}
	export function Date(src:Dateable):Date;
	// export namespace Date{
	// 	/** @see Sugar.extend */
	// 	function extend();
	// 	function addLocale(code:string,def:{});
	// 	function create(d:Dateable,option:string|{}):Date;
	// 	function getAllLocaleCodes():string[];
	// 	function getAllLocales():string[];
	// 	function getLocale(code?:string);
	// 	//function now():Date;  ES5
	// 	function removeLocle(code:string):boolean;
	// 	function setLocale(code:string);
	// 	function range(start:Dateable,end:Dateable):DateRange;
	// 	function getOption(name:string):any;
	// 	function setOption(name:string,value:any);
	// }

	/* ===================
	     Sugar.Function
	 * =================== */
	interface SugarFunction<T>{
		raw:T;
		valueOf():T;

		after(n:number):SugarFunction<T>;
		bind(context:any,...args:any[]):SugarFunction<T>;
		cancel():SugarFunction<T>;
		debounce(ms?:number):SugarFunction<T>;
		delay(ms?:number,...args:any[]):SugarFunction<T>;
		every(ms?:number,...args:any[]):SugarFunction<T>;
		lazy(ms?:number,immediate?:boolean,limit?:number):SugarFunction<T>;
		lock(n?:number):SugarFunction<T>;
		memoize(hashFn?:any,limit?:number):SugarFunction<T>;
		once():SugarFunction<T>;
		partial(...args:any[]):SugarFunction<T>;
		throttle(ms?:number):SugarFunction<T>;
	}
	export function Function<T>(f:T):SugarFunction<T>;
	// export namespace Function{
    //
	// }

	/* ===================
	      Sugar.Number
	 * =================== */
	interface SugarNumber{
		abbr(precision?:number):string;
		bytes(precision?:number,binary?:boolean,units?:string):string;
		cap(max?:number):number;
		ceil(precision?:number):number;
		chr():string;
		clamp(start?:number,end?:number):number;
		millisecond():number;
		milliseconds():number;
		second():number;
		seconds():number;
		minute():number;
		minutes():number;
		hour():number;
		hours():number;
		day():number;
		days():number;
		week():number;
		weeks():number;
		month():number;
		months():number;
		year():number;
		years():number;
		millisecondAfter(d?:Dateable,options?:string|{}):Date;
		millisecondsAfter(d?:Dateable,options?:string|{}):Date;
		secondAfter(d?:Dateable,options?:string|{}):Date;
		secondsAfter(d?:Dateable,options?:string|{}):Date;
		minuteAfter(d?:Dateable,options?:string|{}):Date;
		minutesAfter(d?:Dateable,options?:string|{}):Date;
		hourAfter(d?:Dateable,options?:string|{}):Date;
		hoursAfter(d?:Dateable,options?:string|{}):Date;
		dayAfter(d?:Dateable,options?:string|{}):Date;
		daysAfter(d?:Dateable,options?:string|{}):Date;
		weekAfter(d?:Dateable,options?:string|{}):Date;
		weeksAfter(d?:Dateable,options?:string|{}):Date;
		monthAfter(d?:Dateable,options?:string|{}):Date;
		monthsAfter(d?:Dateable,options?:string|{}):Date;
		yearAfter(d?:Dateable,options?:string|{}):Date;
		yearsAfter(d?:Dateable,options?:string|{}):Date;
		millisecondAgo():Date;
		millisecondsAgo():Date;
		secondAgo():Date;
		secondsAgo():Date;
		minuteAgo():Date;
		minutesAgo():Date;
		hourAgo():Date;
		hoursAgo():Date;
		dayAgo():Date;
		daysAgo():Date;
		weekAgo():Date;
		weeksAgo():Date;
		monthAgo():Date;
		monthsAgo():Date;
		yearAgo():Date;
		yearsAgo():Date;
		millisecondBefore(d?:Dateable,options?:string|{}):Date;
		millisecondsBefore(d?:Dateable,options?:string|{}):Date;
		secondBefore(d?:Dateable,options?:string|{}):Date;
		secondsBefore(d?:Dateable,options?:string|{}):Date;
		minuteBefore(d?:Dateable,options?:string|{}):Date;
		minutesBefore(d?:Dateable,options?:string|{}):Date;
		hourBefore(d?:Dateable,options?:string|{}):Date;
		hoursBefore(d?:Dateable,options?:string|{}):Date;
		dayBefore(d?:Dateable,options?:string|{}):Date;
		daysBefore(d?:Dateable,options?:string|{}):Date;
		weekBefore(d?:Dateable,options?:string|{}):Date;
		weeksBefore(d?:Dateable,options?:string|{}):Date;
		monthBefore(d?:Dateable,options?:string|{}):Date;
		monthsBefore(d?:Dateable,options?:string|{}):Date;
		yearBefore(d?:Dateable,options?:string|{}):Date;
		yearsBefore(d?:Dateable,options?:string|{}):Date;
		millisecondFromNow():Date;
		millisecondsFromNow():Date;
		secondFromNow():Date;
		secondsFromNow():Date;
		minuteFromNow():Date;
		minutesFromNow():Date;
		hourFromNow():Date;
		hoursFromNow():Date;
		dayFromNow():Date;
		daysFromNow():Date;
		weekFromNow():Date;
		weeksFromNow():Date;
		monthFromNow():Date;
		monthsFromNow():Date;
		yearFromNow():Date;
		yearsFromNow():Date;
		dawnto(n:number,step?:number,fn?:(el:number,i?:number,r?:any)=>any):Array<number>;
		duration(locale:string):string;
		floor(precision?:number):number;
		format(place?:number):string;
		hex(pad?:number):string;
		isEven():boolean;
		isInteger():boolean;
		isMultipleOf(num:number):boolean;
		isOdd():boolean;
		log(base?:number):number;
		abs():number;
		sin():number;
		asin():number;
		cos():number;
		acos():number;
		tan():number;
		atan():number;
		sqrt():number;
		exp():number;
		pow():number;
		metric(precision?:number,units?:string):string;
		ordinalize():string;
		pad(place?:number,sign?:boolean,base?:number):string;
		round(precision?:number):number;
		times<U>(fn:(i:number)=>U):U[];
		toNumber():number;
		upto(num:number,step?:number,fn?:(el:number,i?:number,r?:any)=>any):Array<number>;
	}
	export function Number(number:number|string):number;
	export namespace Number{
		//function isNaN():boolean; ES6
		function random(n1?:number,n2?:number):number;
		function range(start:number,end:number):SugarRange<number>;
		function getOption(name:string):any;
		function setOption(name:string,value:any);
	}

	/* ===================
	      Sugar.Object
	 * =================== */
	type ObjectFilter<T> = string|number|RegExp|((val:any,key?:string,obj?:T)=>boolean);
	type ObjectMapper<T,U> = string|number|RegExp|((val:any,key?:string,obj?:T)=>U);
	interface SugarObject<T>{
		add(obj:any,options:any):any;
		addAll(sources:any[],options:any):any;
		average<U>(obj:any,map?:(val:any,key?:string,obj?:T)=>U):U;
		clone(deep?:boolean):T;
		count(search:ObjectFilter<T>):number;
		defaults(sources:any[],options?:any):any;
		every(search:ObjectFilter<T>):boolean;
		exclude(search:ObjectFilter<T>):any;
		filter(search:ObjectFilter<T>):any;
		find(search:ObjectFilter<T>):any;
		forEach(fn:(val:any,key?:string,obj?:T)=>any):T;
		get(key:string,inherited?:boolean):any;
		has(key:string,inherited?:boolean):boolean;
		intersect(obj:any):any;
		invert(multi?:boolean):any;
		isArguments(obj:any):boolean;
		isEmpty(obj:any):boolean;
		isEqual(b:any):boolean;
		isObject():boolean;
		isArray():boolean;
		isBoolean():boolean;
		isDate():boolean;
		isError():boolean;
		isFunction():boolean;
		isMap():boolean;
		isNumber():boolean;
		isRegExp():boolean;
		isSet():boolean;
		isString():boolean;
		keys():Array<string>;
		least<U>(all?:boolean,map?:ObjectMapper<T,U>):U|U[]|any;
		map<U>(map:ObjectMapper<T,U>):{[key:string]:U};
	}
	export function Object<T>(obj:T):SugarObject<T>;
	// export namespace Object{
	// 	function fromQueryString(str:string,options:{
	// 		deep?:boolean;
	// 		auto?:boolean;
	// 		transform?:(key:string,val:string,obj?:any)=>any;
	// 		separator?:string;
	// 	}):any;
	// }

	/* ===================
	      Sugar.Range
	 * =================== */
	interface SugarRange<T>{
		clamp(limit:T):T;
		clone():SugarRange<T>;
		contains(data:T):boolean;
		milliseconds():number;
		seconds():number;
		minutes():number;
		hours():number;
		days():number;
		weeks():number;
		months():number;
		years():number;
		every(amount?:string|number,fn?:(el:T,i?:number,r?:any)=>any):T[];
		intersect(range:SugarRange<T>|any):SugarRange<T>;
		isValid():boolean;
		span():number;
		toArray():T[];
		toString():string;
		union(range:SugarRange<T>|any):SugarRange<T>;
	}

	interface DateRange extends SugarRange<Date>{
		/** Returns the span of a date range in the given unit. Higher order units ("days" and greater) walk the date to avoid discrepancies with ambiguity. Lower order units simply subtract the start from the end. */
		milliseconds():number;
		/** @see milliseconds */
		seconds():number;
		/** @see milliseconds */
		minutes():number;
		/** @see milliseconds */
		hours():number;
		/** @see milliseconds */
		days():number;
		/** @see milliseconds */
		weeks():number;
		/** @see milliseconds */
		months():number;
		/** @see milliseconds */
		years():number;
	}
	/* ===================
	      Sugar.String
	 * =================== */
	interface SugarString {
		valueOf():string;
		/**
		 * Gets the character(s) at a given index.
		 * When loop is true, overshooting the end of the string will begin counting from the other end. index may be negative.
		 * If index is an array, multiple elements will be returned.
		 * @param index
		 * @param loop
		 */
		at(index:number,loop?:boolean):string;
		/** @see valueOf */
		at(index:number[],loop?:boolean):Array<string>;
		/**
		 * Converts underscores and hyphens to camel case.
		 * If upper is true, the string will be UpperCamelCase.
		 * If the inflections module is included, acronyms can also be defined that will be used when camelizing.
		 * @param upper
		 */
		camelize(upper?:boolean):string;
		/**
		 * Capitalizes the first character of the string.
		 * If lower is true, the remainder of the string will be downcased.
		 * If all is true, all words in the string will be capitalized.
		 * @param lower
		 * @param all
		 */
		capitalize(lower?:boolean,all?:boolean):string;
		/**
		 *Runs fn against each character in the string, and returns an array.
		 * @param fn
		 */
		chars(fn?:((char:string,i:number,arr:string[])=>any)):Array<string>;
		/**
		 * Runs callback fn against each character code in the string.
		 * Returns an array of character codes.
		 * @param fn
		 */
		codes(fn?:((code:number,i:number,str:string)=>any)):Array<number>;
		/**
		 * Compacts whitespace in the string to a single space and trims the ends.
		 */
		compact():string;
		/**
		 * Converts underscores and camel casing to hypens.
		 */
		dasherize():string;
		/**
		 * Decodes the string from base64 encoding.
		 * This method wraps native methods when available, and uses a custom implementation when not available.
		 * It can also handle Unicode string encodings.
		 */
		decodeBase64():string;
		/**
		 * Encodes the string into base64 encoding.
		 * This method wraps native methods when available, and uses a custom implementation when not available.
		 * It can also handle Unicode string encodings.
		 */
		encodeBase64():string;
		/**
		 * Returns true if the string ends with substring search.
		 * Search ends at pos, which defaults to the entire string length.
		 * This method is provided as a polyfill.
		 * @param search
		 * @param pos
		 */
		dendsWith(search,pos?:number):string;
		/**
		 * Converts HTML characters to their entity equivalents.
		 */
		escapeHTML():string;
		/**
		 * Escapes characters in a string to make a valid URL.
		 * If param is true, it will also escape valid URL characters.
		 * Use this when the entire string is meant for use in a query string.
		 * @param param
		 */
		escapeURL(param?:boolean):string;
		/**
		 * Returns the first n characters of the string.
		 * @param n
		 */
		first(n?:number):string;
		/**
		 * Runs callback fn against every character in the string, or every every occurence of search if it is provided.
		 * Returns an array of matches. search may be either a string or regex, and defaults to every character in the string.
		 * If fn returns false at any time it will break out of the loop.
		 * @param search
		 * @param fn
		 */
		forEach(search:string|RegExp,fn:((match:string,i:number,arr:string[])=>any)):Array<string>;
		/**
		 * Replaces {} tokens in the string with arguments or properties.
		 * Tokens support deep properties.
		 * If a single object is passed, its properties can be accessed by keywords such as {name}.
		 * If multiple objects or a non-object are passed, they can be accessed by the argument position like {0}.
		 * Literal braces in the string can be escaped by repeating them.
		 * @param obj
		 */
		format(...obj:any[]):string;
		/**
		 * Returns a section of the string starting from index.
		 * @param index
		 */
		from(index?:number):string;
		/**
		 * Converts full-width characters (zenkaku) to half-width (hankaku). mode accepts all, alphabet, numbers, katakana, spaces, punctuation, or any combination of a, n, k, s, p, respectively.
		 * @param mode
		 */
		hankaku(mode?:string):string;
		/**
		 * Returns true if the string contains any characters in that script.
		 */
		hasArabic():string;
		/** @see hasArabic */
		hasCyrillic:string;
		/** @see hasArabic */
		hasGreek:string;
		/** @see hasArabic */
		hasHangul:string;
		/** @see hasArabic */
		hasHan:string;
		/** @see hasArabic */
		hasKanji:string;
		/** @see hasArabic */
		hasHebrew:string;
		/** @see hasArabic */
		hasHiragana:string;
		/** @see hasArabic */
		hasKana:string;
		/** @see hasArabic */
		hasKatakana:string;
		/** @see hasArabic */
		hasLatin:string;
		/** @see hasArabic */
		hasThai:string;
		/** @see hasArabic */
		hasDevanagari:string;
		/**
		 * Converts katakana into hiragana. If all is false, only full-width katakana will be converted.
		 * @param all
		 */
		hiragana(all?:boolean):string;
		/**
		 * Creates a human readable string.
		 * Capitalizes the first word and turns underscores into spaces and strips a trailing '_id', if any. Like titleize, this is meant for creating pretty output.
		 * Rules for special cases can be added using addHuman.
		 */
		humanize():string;
		/**
		 * Returns true if search is contained within the string.
		 * Search begins at pos, which defaults to the beginning of the string.
		 * Sugar enhances this method to allow matching a regex.
		 * This method is provided as a polyfill.
		 * @param search
		 * @param pos
		 */
		includes(search:string,pos?:number):boolean;
		/**
		 * Adds str at index. Allows negative values.
		 * @param str
		 * @param index
		 */
		insert(str,index?:number):string;
		/**
		 * Returns true if the string has length 0 or contains only whitespace.
		 */
		isBlank():boolean;
		/**
		 * Returns true if the string has length 0.
		 */
		isEmpty():boolean;
		/**
		 * Returns true if the string contains only characters in that script. Whitespace is ignored.
		 */
		isArabic():boolean;
		/** @see isArabic */
		isCyrillic():boolean;
		/** @see isArabic */
		isGreek():boolean;
		/** @see isArabic */
		isHangul():boolean;
		/** @see isArabic */
		isHan():boolean;
		/** @see isArabic */
		isKanji():boolean;
		/** @see isArabic */
		isHebrew():boolean;
		/** @see isArabic */
		isHiragana():boolean;
		/** @see isArabic */
		isKana():boolean;
		/** @see isArabic */
		isKatakana():boolean;
		/** @see isArabic */
		isThai():boolean;
		/** @see isArabic */
		isDevanagari():boolean;
		/**
		 * Converts hiragana into katakana.
		 */
		katakana():string;
		/** Returns the last n characters of the string. */
		last(n?:number):string;
		/** Runs fn against each line in the string, and returns an array. */
		lines(fn?:(line:string,i?:number,arr?:string[])=>any):Array<string>;
		/** Pads the string out with padding to be exactly num characters. */
		pad(num?:any,padding?:string):string;
		/** Pads the string out from the left with padding to be exactly num characters. */
		padLeft(num?:any,padding?:string):string;
		/** Pads the string out from the right with padding to be exactly num characters. */
		padRight(num?:any,padding?:string):string;
		/** Replaces special characters in a string so that it may be used as part of a pretty URL. */
		parameterize():string;
		/** Returns the plural form of the last word in the string.
		 * If num is passed, the word will be singularized if equal to 1.
		 * Otherwise it will be pluralized.
		 * Custom pluralization rules can be added using addPlural. */
		pluralize(num?:number):string;
		/** Removes the first occurrence of f in the string.
		 * f can be a either case-sensitive string or a regex.
		 * In either case only the first match will be removed.
		 * To remove multiple occurrences, use removeAll.
		 *  @param f */
		remove(f:string):string;
		/**
		 * Removes any occurences of f in the string.
		 * f can be either a case-sensitive string or a regex.
		 * In either case all matches will be removed.
		 * To remove only a single occurence, use remove.
		 * @param f
		 */
		removeAll(f):string;
		/**
		 * Removes HTML tags and their contents from the string.
		 * tag may be an array of tags or 'all',
		 * in which case all tags will be removed.
		 * replace will replace what was removed,
		 * and may be a string or a function to handle replacements.
		 * If this function returns a string, then it will be used for the replacement.
		 * If it returns undefined, the tags will be removed normally.
		 * @param tag
		 * @param replace
		 */
		removeTags(tag?:string,replace?:string|((tag:string,inner?:string,attr?:string,outer?:string)=>string)):string;
		/**
		 * Returns the string repeated num times. This method is provided as a polyfill.
		 * @param num
		 */
		repeat(num?:number):string;
		/**
		 * Replaces all occurences of f with arguments passed.
		 * This method is intended to be a quick way to perform multiple string replacements quickly when the replacement token differs depending on position.
		 * f can be either a case-sensitive string or a regex.
		 * In either case all matches will be replaced.
		 * @param f
		 * @param str
		 */
		replaceAll(f:string,...str:string[]):string;
		/** Reverses the string. */
		reverse():string;
		/** Shifts each character in the string n places in the character map. */
		shift(n:number):string;
		/** Returns the singular form of the last word in the string. */
		singularize():string;
		/** Converts camelcase, underscores, and hyphens to spaces. */
		spacify():string;
		/** Returns true if the string starts with substring search. Search begins at pos, which defaults to the entire string length. This method is provided as a polyfill. */
		startsWith(search:string,post?:number):string;
		/**
		 * Strips HTML tags from the string.
		 * tag may be an array of tags or 'all',
		 * in which case all tags will be stripped.
		 * replace will replace what was stripped, and may be a string or a function to handle replacements.
		 * If this function returns a string, then it will be used for the replacement.
		 * If it returns undefined, the tags will be stripped normally.
		 * @param tag
		 * @param replace
		 */
		stripTags(tag?:string,replace?:string|((tag:string,inner?:string,attr?:string,outer?:string)=>string));
		/** Creates a title version of the string. Capitalizes all the words and replaces some characters in the string to create a nicer looking title. String#titleize is meant for creating pretty output. */
		titleize():string;
		/** Returns a section of the string ending at index. */
		to(index?:number):string;
		/** Converts the string into a number. Any value with a "." fill be converted to a floating point value, otherwise an integer. */
		toNumber(base?:number):number;
		/** Removes leading and trailing whitespace from the string.
		 * Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 spec.
		 * This method is provided as a polyfill. */
		trim():string;
		/** Removes leading whitespace from the string. Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 trim spec. */
		trimLeft():string;
		/** Removes trailing whitespace from the string. Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 trim spec. */
		trimRight():string;
		/** Truncates a string. from can be 'right', 'left', or 'middle'. If the string is shorter than length, ellipsis will not be added. */
		truncate(length:number,from?:string,ellipsis?:string):string;
		/** Truncates a string without splitting up words. from can be 'right', 'left', or 'middle'. If the string is shorter than length, ellipsis will not be added. A "word" is defined as any sequence of non-whitespace characters. */
		truncateOnWord(length:number,from?:string,ellipsis?:string):string;
		/** Converts hyphens and camel casing to underscores. */
		underscore():string;
		/** Restores escaped HTML characters. */
		unescapeHTML():string;
		/** Restores escaped characters in a URL escaped string. If partial is true, it will only unescape non-valid URL tokens, and is included here for completeness, but should be rarely needed. */
		unescapeURL(partial?:boolean):string;
		/**Runs fn against each word in the string, and returns an array. A "word" is defined as any sequence of non-whitespace characters. */
		words(fn?:(word:string,i?:number,arr?:string[])=>any):Array<string>;
		/** Converts half-width characters (hankaku) to full-width (zenkaku). mode accepts all, alphabet, numbers, katakana, spaces, punctuation, or any combination of a, n, k, s, or p, respectively. */
		zenkaku(mode?:string):string;
	}
	export function String(string:string):string;
	// export namespace String{
	// 	/** @see Sugar.extend */
	// 	function extend();
	// 	/** @see Sugar.Array.alias */
	// 	function alias(toName,fromName);
	// 	/** Creates a new string range between start and end. See ranges for more.  */
	// 	function range(start:string,end:string):SugarRange<string>;
	// 	/**
	// 	 * Adds a new acronym that will be recognized when inflecting strings.
	// 	 * Acronyms are recognized by camelize, underscore, dasherize, titleize, humanize, and spacify. str must be passed as it will appear in a camelized string.
	// 	 * Acronyms may contain lower case letters but must begin with an upper case letter.
	// 	 * Note that to use acronyms in conjuction with pluralize, the pluralized form of the acronym must also be added.
	// 	 * @param str
	// 	 */
	// 	function addAcronym(str:string):void;
    //
	// 	/**
	// 	 * Adds a new humanization rule.
	// 	 * Rules are used by humanize and titleize. str can be either a string or a regular expression, in which case human can contain refences to capturing groups.
	// 	 * @param str
	// 	 * @param human
	// 	 */
	// 	function addHuman(str:string|RegExp,human:string):void;
    //
	// 	/**
	// 	 * Adds a new pluralization rule. Rules are used by pluralize and singularize.
	// 	 * If singular is a string, then the reciprocal will also be added for singularization.
	// 	 * If it is a regular expression, capturing groups are allowed for plural. plural defaults to the same as singular to allow uncountable words.
	// 	 * @param singular
	// 	 * @param plural
	// 	 */
	// 	function addPlural(singular:string|RegExp,plural?:string):void;
	// }
//}