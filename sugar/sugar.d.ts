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

	interface SugarGeneric<T>{
		valueOf():T;
		raw:T;
	}
	type SugarBoolean = SugarGeneric<boolean>;

	/* ===================
	       Sugar.Array
	 * =================== */
	type ArrayFilter<T> = string|T|RegExp|((el:T,i?:number,arr?:T[])=>boolean);
	type ArrayMapper<T,U> = string|((el:T,i?:number,arr?:T[])=>U);
	interface SugarArray<T>{
		valueOf():T[];
		raw:T[];

		add(item:T,index?:number):SugarArray<T>;
		append(item:T,index?:number):SugarArray<T>;
		at(index:number,loop?:boolean):SugarArray<T>;
		average<U>(map?:(el:T,i:number,arr:T[])=>U):SugarArray<U>;
		clone():SugarArray<T>;
		compact(all?:boolean):SugarArray<T>;
		count(search:ArrayFilter<T>):SugarNumber;
		every(search:ArrayFilter<T>,context?:this):SugarBoolean;
		exclude(search:ArrayFilter<T>):SugarArray<T>;
		filter(search:ArrayFilter<T>,context?:this):SugarArray<T>;
		find(search:ArrayFilter<T>,context?:this):SugarGeneric<T>;
		findIndex(search:ArrayFilter<T>,context?:this):SugarNumber;
		first():SugarGeneric<T>;
		first(num:number):SugarArray<T>;
		flatten(limit?:number):SugarArray<T>;
		flatten<U>(limit?:number):SugarArray<U>;
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
		from(index:number):SugarArray<T>;
		groupBy<U>(map:ArrayMapper<T,U>,fn?:(arr:T[],key?:string,obj?:T)=>any):SugarGeneric<{[key:string]:T[]}>;
		inGroups(num:number,padding?:number):SugarArray<T[]>;
		inGroupsOf(num:number,padding?:any):SugarArray<T[]>;
		includes(search:ArrayFilter<T>,fromIndex?:number ): SugarBoolean;
		indexOf(serch:ArrayFilter<T>,fromIndex?:number): SugarNumber;
		insert(item:T,index?:number):SugarArray<T>;
		intersect(arr:T[]):SugarArray<T>;
		isEmpty():SugarBoolean;
		isEqual(arr:T[]):SugarBoolean;
		last():SugarGeneric<T>;
		last(num:number):SugarArray<T>;
		lastIndexOf(search:ArrayFilter<T>,fromIndex?:number):SugarNumber;
		least():SugarGeneric<T>;
		least<U>(all:boolean,map?:ArrayMapper<T,U>):SugarArray<U>;
		map<U>(map:ArrayMapper<T,U>,context?:this):SugarArray<U>;
		max():SugarGeneric<T>;
		max<U>(map:ArrayMapper<T,U>):SugarGeneric<T>;
		max<U>(all:boolean,map:ArrayMapper<T,U>):SugarArray<T>;
		median():SugarGeneric<T>;
		median<U>(map:ArrayMapper<T,U>):SugarArray<U>;
		min():SugarGeneric<T>;
		min<U>(map:ArrayMapper<T,U>):SugarGeneric<T>;
		min<U>(all:boolean,map:ArrayMapper<T,U>):SugarArray<T>;
		most():SugarNumber;
		most(all:boolean):SugarArray<T>;
		most(map:ArrayFilter<T>):SugarGeneric<T>;
		most(all:boolean,map:ArrayFilter<T>):SugarArray<T>;
		none(search:ArrayFilter<T>,context?:this):SugarBoolean;
		reduce<U>(fn:(acc:T,el:T,idx?:number,arr?:T[])=>U,init?:number):SugarGeneric<U>;
		reduceRight<U>(fn:(acc:T,el:T,idx?:number,arr?:T[])=>U,init?:number):SugarGeneric<U>;
		remove(search:ArrayFilter<T>):SugarArray<T>;
		removeAt(start:number,end?:number):SugarArray<T>;
		sample(remove?:boolean):SugarGeneric<T>;
		sample(num:number,remove?:boolean):SugarArray<T>;
		shuffle():SugarArray<T>;
		some(search:ArrayFilter<T>,context?:this):SugarBoolean;
		sortBy<U>(map?:ArrayMapper<T,U>,desc?:boolean):SugarArray<T>;
		subtract(item:SugarArray<T>):SugarArray<T>;
		sum<U>(map?:ArrayMapper<T,U>):SugarNumber;
		to(index:number):SugarArray<T>;
		union(arr?:SugarArray<T>):SugarArray<T>;
		unique<U>(map?:ArrayMapper<T,U>):SugarArray<T>;
		zip(...arr:T[][]):SugarArray<T[]>;
	}
	export function Array<T>(array:T[]):SugarArray<T>;
	export namespace Array{
		/** @see Sugar.extend */
		function extend();
		/** Aliases one Sugar method to another.
		 @example
		 Sugar.Array.alias('all','every')
		 */
		function alias(toName,fromName);
		function construct<T>(n:number,fn:(n:number)=>T);
		function create<T>(obj?:T,clone?:boolean):T[];
		function from<U,T>(a:any,map?:(el:T,i:number,arr:T[])=>U,context?:any):U[];
		//function isArray(obj:any):SugerGenelic<boolean>; // ES5 use Array.isArray
		function getOption(name:string);
		function setOption(name:string,value);
	}

	/* ===================
	       Sugar.Date
	 * =================== */
	type Dateable = Date|string|number;
	interface SugarDate{
		valueOf():Date;
		addMilliseconds(n:number,reset?:boolean):SugarDate;
		addSeconds(n:number,reset?:boolean):SugarDate;
		addMinutes(n:number,reset?:boolean):SugarDate;
		addHours(n:number,reset?:boolean):SugarDate;
		addDays(n:number,reset?:boolean):SugarDate;
		addWeeks(n:number,reset?:boolean):SugarDate;
		addMonths(n:number,reset?:boolean):SugarDate;
		addYears(n:number,reset?:boolean):SugarDate;
		advance(set:Dateable|{},reset?:boolean):SugarDate;
		beginningOfISOWeek():SugarDate;
		beginningOfDay(locale:string):SugarDate;
		beginningOfWeek(locale:string):SugarDate;
		beginningOfMonth(locale:string):SugarDate;
		beginningOfYear(locale:string):SugarDate;
		clone():SugarDate;
		daysInMonth():SugarNumber;
		endOfISOWeek():SugarDate;
		endOfDay():SugarDate;
		endOfWeek():SugarDate;
		endOfMonth():SugarDate;
		endOfYear():SugarDate;
		format(f?:string,locale?:string):SugarString;
		full(locale?:string):SugarString;
		get(d:Dateable,options?:any):SugarDate;
		getISOWeek():SugarNumber;
		getUTCOffset(iso?:boolean):SugarString;
		getUTCWeekday():SugarNumber;
		getWeekday():SugarNumber;
		is(f:Dateable,margin?:number):SugarBoolean;
		isAfter(d:Dateable,margin?:number):SugarBoolean;
		isBefore(d:Dateable,margin?:number):SugarBoolean;
		isBetween(d1:Dateable,d2:Dateable,margin?:number):SugarBoolean;
		isToday():SugarBoolean;
		isYesterday():SugarBoolean;
		isTomorrow():SugarBoolean;
		isWeekday():SugarBoolean;
		isWeekend():SugarBoolean;
		isSunday():SugarBoolean;
		isMonday():SugarBoolean;
		isTuesday():SugarBoolean;
		isWednesday():SugarBoolean;
		isThursday():SugarBoolean;
		isFriday():SugarBoolean;
		isSaturday():SugarBoolean;
		isFuture():SugarBoolean;
		isLastWeek():SugarBoolean;
		isLastMonth():SugarBoolean;
		isLastYear():SugarBoolean;
		isLeapYear():SugarBoolean;
		isNextWeek():SugarBoolean;
		isNextMonth():SugarBoolean;
		isNextYear():SugarBoolean;
		isPast():SugarBoolean;
		isThisWeek():SugarBoolean;
		isThisMonth():SugarBoolean;
		isThisYear():SugarBoolean;
		isUTC():SugarBoolean;
		isValid():SugarBoolean;
		iso():SugarString;
		long(locale?:string):SugarString;
		medium(locale?:string):SugarString;
		relative(locale?:string,fn?:((num:number,unit?:number,ms?:number,loc?:string)=>string)):SugarString;
		relativeTo(d:Dateable,locale?:string):SugarString;
		reset(unit?:string,localeCode?:Dateable):SugarDate;
		rewind(set:any,reset?:boolean):SugarDate;
		set(set:any,reset?:boolean):SugarDate;
		setISOWeek(num:number):SugarDate;
		setUTC(on?:boolean):SugarDate;
		setWeekday(dow:number):SugarDate;
		short(locale?:string):SugarDate;
		toISOString():SugarString;
		toJSON(key?:any):SugarString;
		millisecondsAgo():SugarNumber;
		secondsAgo():SugarNumber;
		minutesAgo():SugarNumber;
		hoursAgo():SugarNumber;
		daysAgo():SugarNumber;
		weeksAgo():SugarNumber;
		monthsAgo():SugarNumber;
		yearsAgo():SugarNumber;
		millisecondsSince(d?:Dateable,options?:string|{}):SugarNumber;
		secondsSince(d?:Dateable,options?:string|{}):SugarNumber;
		minutesSince(d?:Dateable,options?:string|{}):SugarNumber;
		hoursSince(d?:Dateable,options?:string|{}):SugarNumber;
		daysSince(d?:Dateable,options?:string|{}):SugarNumber;
		weeksSince(d?:Dateable,options?:string|{}):SugarNumber;
		monthsSince(d?:Dateable,options?:string|{}):SugarNumber;
		yearsSince(d?:Dateable,options?:string|{}):SugarNumber;
		millisecondsUntil(d?:Dateable,options?:string|{}):SugarNumber;
		secondsUntil(d?:Dateable,options?:string|{}):SugarNumber;
		minutesUntil(d?:Dateable,options?:string|{}):SugarNumber;
		hoursUntil(d?:Dateable,options?:string|{}):SugarNumber;
		daysUntil(d?:Dateable,options?:string|{}):SugarNumber;
		weeksUntil(d?:Dateable,options?:string|{}):SugarNumber;
		monthsUntil(d?:Dateable,options?:string|{}):SugarNumber;
		yearsUntil(d?:Dateable,options?:string|{}):SugarNumber;
	}
	export function Date(src:Dateable):SugarDate;
	export namespace Date{
		/** @see Sugar.extend */
		function extend();
		function addLocale(code:string,def:{});
		function create(d:Dateable,option:string|{}):Date;
		function getAllLocaleCodes():string[];
		function getAllLocales():string[];
		function getLocale(code?:string);
		//function now():Date;  ES5
		function removeLocle(code:string):boolean;
		function setLocale(code:string);
		function range(start:Dateable,end:Dateable):SugarDateRange;
		function getOption(name:string):any;
		function setOption(name:string,value:any);
	}

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
	export namespace Function{

	}

	/* ===================
	      Sugar.Number
	 * =================== */
	interface SugarNumber{
		abbr(precision?:number):SugarString;
		bytes(precision?:number,binary?:boolean,units?:string):SugarString;
		cap(max?:number):SugarNumber;
		ceil(precision?:number):SugarNumber;
		chr():SugarString;
		clamp(start?:number,end?:number):SugarNumber;
		millisecond():SugarNumber;
		milliseconds():SugarNumber;
		second():SugarNumber;
		seconds():SugarNumber;
		minute():SugarNumber;
		minutes():SugarNumber;
		hour():SugarNumber;
		hours():SugarNumber;
		day():SugarNumber;
		days():SugarNumber;
		week():SugarNumber;
		weeks():SugarNumber;
		month():SugarNumber;
		months():SugarNumber;
		year():SugarNumber;
		years():SugarNumber;
		millisecondAfter(d?:Dateable,options?:string|{}):SugarDate;
		millisecondsAfter(d?:Dateable,options?:string|{}):SugarDate;
		secondAfter(d?:Dateable,options?:string|{}):SugarDate;
		secondsAfter(d?:Dateable,options?:string|{}):SugarDate;
		minuteAfter(d?:Dateable,options?:string|{}):SugarDate;
		minutesAfter(d?:Dateable,options?:string|{}):SugarDate;
		hourAfter(d?:Dateable,options?:string|{}):SugarDate;
		hoursAfter(d?:Dateable,options?:string|{}):SugarDate;
		dayAfter(d?:Dateable,options?:string|{}):SugarDate;
		daysAfter(d?:Dateable,options?:string|{}):SugarDate;
		weekAfter(d?:Dateable,options?:string|{}):SugarDate;
		weeksAfter(d?:Dateable,options?:string|{}):SugarDate;
		monthAfter(d?:Dateable,options?:string|{}):SugarDate;
		monthsAfter(d?:Dateable,options?:string|{}):SugarDate;
		yearAfter(d?:Dateable,options?:string|{}):SugarDate;
		yearsAfter(d?:Dateable,options?:string|{}):SugarDate;
		millisecondAgo():SugarDate;
		millisecondsAgo():SugarDate;
		secondAgo():SugarDate;
		secondsAgo():SugarDate;
		minuteAgo():SugarDate;
		minutesAgo():SugarDate;
		hourAgo():SugarDate;
		hoursAgo():SugarDate;
		dayAgo():SugarDate;
		daysAgo():SugarDate;
		weekAgo():SugarDate;
		weeksAgo():SugarDate;
		monthAgo():SugarDate;
		monthsAgo():SugarDate;
		yearAgo():SugarDate;
		yearsAgo():SugarDate;
		millisecondBefore(d?:Dateable,options?:string|{}):SugarDate;
		millisecondsBefore(d?:Dateable,options?:string|{}):SugarDate;
		secondBefore(d?:Dateable,options?:string|{}):SugarDate;
		secondsBefore(d?:Dateable,options?:string|{}):SugarDate;
		minuteBefore(d?:Dateable,options?:string|{}):SugarDate;
		minutesBefore(d?:Dateable,options?:string|{}):SugarDate;
		hourBefore(d?:Dateable,options?:string|{}):SugarDate;
		hoursBefore(d?:Dateable,options?:string|{}):SugarDate;
		dayBefore(d?:Dateable,options?:string|{}):SugarDate;
		daysBefore(d?:Dateable,options?:string|{}):SugarDate;
		weekBefore(d?:Dateable,options?:string|{}):SugarDate;
		weeksBefore(d?:Dateable,options?:string|{}):SugarDate;
		monthBefore(d?:Dateable,options?:string|{}):SugarDate;
		monthsBefore(d?:Dateable,options?:string|{}):SugarDate;
		yearBefore(d?:Dateable,options?:string|{}):SugarDate;
		yearsBefore(d?:Dateable,options?:string|{}):SugarDate;
		millisecondFromNow():SugarDate;
		millisecondsFromNow():SugarDate;
		secondFromNow():SugarDate;
		secondsFromNow():SugarDate;
		minuteFromNow():SugarDate;
		minutesFromNow():SugarDate;
		hourFromNow():SugarDate;
		hoursFromNow():SugarDate;
		dayFromNow():SugarDate;
		daysFromNow():SugarDate;
		weekFromNow():SugarDate;
		weeksFromNow():SugarDate;
		monthFromNow():SugarDate;
		monthsFromNow():SugarDate;
		yearFromNow():SugarDate;
		yearsFromNow():SugarDate;
		dawnto(n:number,step?:number,fn?:(el:number,i?:number,r?:any)=>any):SugarArray<number>;
		duration(locale:string):SugarString;
		floor(precision?:number):SugarNumber;
		format(place?:number):SugarString;
		hex(pad?:number):SugarString;
		isEven():SugarBoolean;
		isInteger():SugarBoolean;
		isMultipleOf(num:number):SugarBoolean;
		isOdd():SugarBoolean;
		log(base?:number):SugarNumber;
		abs():SugarNumber;
		sin():SugarNumber;
		asin():SugarNumber;
		cos():SugarNumber;
		acos():SugarNumber;
		tan():SugarNumber;
		atan():SugarNumber;
		sqrt():SugarNumber;
		exp():SugarNumber;
		pow():SugarNumber;
		metric(precision?:number,units?:string):SugarString;
		ordinalize():SugarString;
		pad(place?:number,sign?:boolean,base?:number):SugarString;
		round(precision?:number):SugarNumber;
		times<U>(fn:(i:number)=>U):SugarArray<U>;
		toNumber():SugarNumber;
		upto(num:number,step?:number,fn?:(el:number,i?:number,r?:any)=>any):SugarArray<number>;
	}
	export function Number(number:number|string):SugarNumber;
	export namespace Number{
		//function isNaN():SugarBoolean; ES6
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
		count(search:ObjectFilter<T>):SugarNumber;
		defaults(sources:any[],options?:any):SugarObject<any>;
		every(search:ObjectFilter<T>):SugarBoolean;
		exclude(search:ObjectFilter<T>):SugarObject<any>;
		filter(search:ObjectFilter<T>):SugarObject<any>;
		find(search:ObjectFilter<T>):SugarObject<any>;
		forEach(fn:(val:any,key?:string,obj?:T)=>any):SugarObject<T>;
		get(key:string,inherited?:boolean):SugarGeneric<any>;
		has(key:string,inherited?:boolean):SugarBoolean;
		intersect(obj:any):SugarObject<any>;
		invert(multi?:boolean):SugarObject<any>;
		isArguments(obj:any):SugarBoolean;
		isEmpty(obj:any):SugarBoolean;
		isEqual(b:any):SugarBoolean;
		isObject():SugarBoolean;
		isArray():SugarBoolean;
		isBoolean():SugarBoolean;
		isDate():SugarBoolean;
		isError():SugarBoolean;
		isFunction():SugarBoolean;
		isMap():SugarBoolean;
		isNumber():SugarBoolean;
		isRegExp():SugarBoolean;
		isSet():SugarBoolean;
		isString():SugarBoolean;
		keys():SugarArray<string>;
		least<U>(all?:boolean,map?:ObjectMapper<T,U>):SugarObject<U>|SugarArray<U>|any;
		map<U>(map:ObjectMapper<T,U>):SugarObject<{[key:string]:U}>;
	}
	export function Object<T>(obj:T):SugarObject<T>;
	export namespace Object{
		function fromQueryString(str:string,options:{
			deep?:boolean;
			auto?:boolean;
			transform?:(key:string,val:string,obj?:any)=>any;
			separator?:string;
		}):any;
	}

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

	interface SugarDateRange extends SugarRange<Date>{
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
		at(index:number,loop?:boolean):SugarString;
		/** @see valueOf */
		at(index:number[],loop?:boolean):SugarArray<string>;
		/**
		 * Converts underscores and hyphens to camel case.
		 * If upper is true, the string will be UpperCamelCase.
		 * If the inflections module is included, acronyms can also be defined that will be used when camelizing.
		 * @param upper
		 */
		camelize(upper?:boolean):SugarString;
		/**
		 * Capitalizes the first character of the string.
		 * If lower is true, the remainder of the string will be downcased.
		 * If all is true, all words in the string will be capitalized.
		 * @param lower
		 * @param all
		 */
		capitalize(lower?:boolean,all?:boolean):SugarString;
		/**
		 *Runs fn against each character in the string, and returns an array.
		 * @param fn
		 */
		chars(fn?:((char:string,i:number,arr:string[])=>any)):SugarArray<string>;
		/**
		 * Runs callback fn against each character code in the string.
		 * Returns an array of character codes.
		 * @param fn
		 */
		codes(fn?:((code:number,i:number,str:string)=>any)):SugarArray<number>;
		/**
		 * Compacts whitespace in the string to a single space and trims the ends.
		 */
		compact():SugarString;
		/**
		 * Converts underscores and camel casing to hypens.
		 */
		dasherize():SugarString;
		/**
		 * Decodes the string from base64 encoding.
		 * This method wraps native methods when available, and uses a custom implementation when not available.
		 * It can also handle Unicode string encodings.
		 */
		decodeBase64():SugarString;
		/**
		 * Encodes the string into base64 encoding.
		 * This method wraps native methods when available, and uses a custom implementation when not available.
		 * It can also handle Unicode string encodings.
		 */
		encodeBase64():SugarString;
		/**
		 * Returns true if the string ends with substring search.
		 * Search ends at pos, which defaults to the entire string length.
		 * This method is provided as a polyfill.
		 * @param search
		 * @param pos
		 */
		dendsWith(search,pos?:number):SugarString;
		/**
		 * Converts HTML characters to their entity equivalents.
		 */
		escapeHTML():SugarString;
		/**
		 * Escapes characters in a string to make a valid URL.
		 * If param is true, it will also escape valid URL characters.
		 * Use this when the entire string is meant for use in a query string.
		 * @param param
		 */
		escapeURL(param?:boolean):SugarString;
		/**
		 * Returns the first n characters of the string.
		 * @param n
		 */
		first(n?:number):SugarString;
		/**
		 * Runs callback fn against every character in the string, or every every occurence of search if it is provided.
		 * Returns an array of matches. search may be either a string or regex, and defaults to every character in the string.
		 * If fn returns false at any time it will break out of the loop.
		 * @param search
		 * @param fn
		 */
		forEach(search:string|RegExp,fn:((match:string,i:number,arr:string[])=>any)):SugarArray<string>;
		/**
		 * Replaces {} tokens in the string with arguments or properties.
		 * Tokens support deep properties.
		 * If a single object is passed, its properties can be accessed by keywords such as {name}.
		 * If multiple objects or a non-object are passed, they can be accessed by the argument position like {0}.
		 * Literal braces in the string can be escaped by repeating them.
		 * @param obj
		 */
		format(...obj:any[]):SugarString;
		/**
		 * Returns a section of the string starting from index.
		 * @param index
		 */
		from(index?:number):SugarString;
		/**
		 * Converts full-width characters (zenkaku) to half-width (hankaku). mode accepts all, alphabet, numbers, katakana, spaces, punctuation, or any combination of a, n, k, s, p, respectively.
		 * @param mode
		 */
		hankaku(mode?:string):SugarString;
		/**
		 * Returns true if the string contains any characters in that script.
		 */
		hasArabic():SugarString;
		/** @see hasArabic */
		hasCyrillic:SugarString;
		/** @see hasArabic */
		hasGreek:SugarString;
		/** @see hasArabic */
		hasHangul:SugarString;
		/** @see hasArabic */
		hasHan:SugarString;
		/** @see hasArabic */
		hasKanji:SugarString;
		/** @see hasArabic */
		hasHebrew:SugarString;
		/** @see hasArabic */
		hasHiragana:SugarString;
		/** @see hasArabic */
		hasKana:SugarString;
		/** @see hasArabic */
		hasKatakana:SugarString;
		/** @see hasArabic */
		hasLatin:SugarString;
		/** @see hasArabic */
		hasThai:SugarString;
		/** @see hasArabic */
		hasDevanagari:SugarString;
		/**
		 * Converts katakana into hiragana. If all is false, only full-width katakana will be converted.
		 * @param all
		 */
		hiragana(all?:boolean):SugarString;
		/**
		 * Creates a human readable string.
		 * Capitalizes the first word and turns underscores into spaces and strips a trailing '_id', if any. Like titleize, this is meant for creating pretty output.
		 * Rules for special cases can be added using addHuman.
		 */
		humanize():SugarString;
		/**
		 * Returns true if search is contained within the string.
		 * Search begins at pos, which defaults to the beginning of the string.
		 * Sugar enhances this method to allow matching a regex.
		 * This method is provided as a polyfill.
		 * @param search
		 * @param pos
		 */
		includes(search:string,pos?:number):SugarBoolean;
		/**
		 * Adds str at index. Allows negative values.
		 * @param str
		 * @param index
		 */
		insert(str,index?:number):SugarString;
		/**
		 * Returns true if the string has length 0 or contains only whitespace.
		 */
		isBlank():SugarBoolean;
		/**
		 * Returns true if the string has length 0.
		 */
		isEmpty():SugarBoolean;
		/**
		 * Returns true if the string contains only characters in that script. Whitespace is ignored.
		 */
		isArabic():SugarBoolean;
		/** @see isArabic */
		isCyrillic():SugarBoolean;
		/** @see isArabic */
		isGreek():SugarBoolean;
		/** @see isArabic */
		isHangul():SugarBoolean;
		/** @see isArabic */
		isHan():SugarBoolean;
		/** @see isArabic */
		isKanji():SugarBoolean;
		/** @see isArabic */
		isHebrew():SugarBoolean;
		/** @see isArabic */
		isHiragana():SugarBoolean;
		/** @see isArabic */
		isKana():SugarBoolean;
		/** @see isArabic */
		isKatakana():SugarBoolean;
		/** @see isArabic */
		isThai():SugarBoolean;
		/** @see isArabic */
		isDevanagari():SugarBoolean;
		/**
		 * Converts hiragana into katakana.
		 */
		katakana():SugarString;
		/** Returns the last n characters of the string. */
		last(n?:number):SugarString;
		/** Runs fn against each line in the string, and returns an array. */
		lines(fn?:(line:string,i?:number,arr?:string[])=>any):SugarArray<string>;
		/** Pads the string out with padding to be exactly num characters. */
		pad(num?:any,padding?:string):SugarString;
		/** Pads the string out from the left with padding to be exactly num characters. */
		padLeft(num?:any,padding?:string):SugarString;
		/** Pads the string out from the right with padding to be exactly num characters. */
		padRight(num?:any,padding?:string):SugarString;
		/** Replaces special characters in a string so that it may be used as part of a pretty URL. */
		parameterize():SugarString;
		/** Returns the plural form of the last word in the string.
		 * If num is passed, the word will be singularized if equal to 1.
		 * Otherwise it will be pluralized.
		 * Custom pluralization rules can be added using addPlural. */
		pluralize(num?:number):SugarString;
		/** Removes the first occurrence of f in the string.
		 * f can be a either case-sensitive string or a regex.
		 * In either case only the first match will be removed.
		 * To remove multiple occurrences, use removeAll.
		 *  @param f */
		remove(f:string):SugarString;
		/**
		 * Removes any occurences of f in the string.
		 * f can be either a case-sensitive string or a regex.
		 * In either case all matches will be removed.
		 * To remove only a single occurence, use remove.
		 * @param f
		 */
		removeAll(f):SugarString;
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
		removeTags(tag?:string,replace?:string|((tag:string,inner?:string,attr?:string,outer?:string)=>string)):SugarString;
		/**
		 * Returns the string repeated num times. This method is provided as a polyfill.
		 * @param num
		 */
		repeat(num?:number):SugarString;
		/**
		 * Replaces all occurences of f with arguments passed.
		 * This method is intended to be a quick way to perform multiple string replacements quickly when the replacement token differs depending on position.
		 * f can be either a case-sensitive string or a regex.
		 * In either case all matches will be replaced.
		 * @param f
		 * @param str
		 */
		replaceAll(f:string,...str:string[]):SugarString;
		/** Reverses the string. */
		reverse():SugarString;
		/** Shifts each character in the string n places in the character map. */
		shift(n:number):SugarString;
		/** Returns the singular form of the last word in the string. */
		singularize():SugarString;
		/** Converts camelcase, underscores, and hyphens to spaces. */
		spacify():SugarString;
		/** Returns true if the string starts with substring search. Search begins at pos, which defaults to the entire string length. This method is provided as a polyfill. */
		startsWith(search:string,post?:number):SugarString;
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
		titleize():SugarString;
		/** Returns a section of the string ending at index. */
		to(index?:number):SugarString;
		/** Converts the string into a number. Any value with a "." fill be converted to a floating point value, otherwise an integer. */
		toNumber(base?:number):SugarNumber;
		/** Removes leading and trailing whitespace from the string.
		 * Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 spec.
		 * This method is provided as a polyfill. */
		trim():SugarString;
		/** Removes leading whitespace from the string. Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 trim spec. */
		trimLeft():SugarString;
		/** Removes trailing whitespace from the string. Whitespace is defined as line breaks, tabs, and any character in the "Space, Separator" Unicode category, conforming to the the ES5 trim spec. */
		trimRight():SugarString;
		/** Truncates a string. from can be 'right', 'left', or 'middle'. If the string is shorter than length, ellipsis will not be added. */
		truncate(length:number,from?:string,ellipsis?:string):SugarString;
		/** Truncates a string without splitting up words. from can be 'right', 'left', or 'middle'. If the string is shorter than length, ellipsis will not be added. A "word" is defined as any sequence of non-whitespace characters. */
		truncateOnWord(length:number,from?:string,ellipsis?:string):SugarString;
		/** Converts hyphens and camel casing to underscores. */
		underscore():SugarString;
		/** Restores escaped HTML characters. */
		unescapeHTML():SugarString;
		/** Restores escaped characters in a URL escaped string. If partial is true, it will only unescape non-valid URL tokens, and is included here for completeness, but should be rarely needed. */
		unescapeURL(partial?:boolean):SugarString;
		/**Runs fn against each word in the string, and returns an array. A "word" is defined as any sequence of non-whitespace characters. */
		words(fn?:(word:string,i?:number,arr?:string[])=>any):SugarArray<string>;
		/** Converts half-width characters (hankaku) to full-width (zenkaku). mode accepts all, alphabet, numbers, katakana, spaces, punctuation, or any combination of a, n, k, s, or p, respectively. */
		zenkaku(mode?:string):SugarString;
	}
	export function String(string:string):SugarString;
	export namespace String{
		/** @see Sugar.extend */
		function extend();
		/** @see Sugar.Array.alias */
		function alias(toName,fromName);
		/** Creates a new string range between start and end. See ranges for more.  */
		function range(start:string,end:string):SugarRange<string>;
		/**
		 * Adds a new acronym that will be recognized when inflecting strings.
		 * Acronyms are recognized by camelize, underscore, dasherize, titleize, humanize, and spacify. str must be passed as it will appear in a camelized string.
		 * Acronyms may contain lower case letters but must begin with an upper case letter.
		 * Note that to use acronyms in conjuction with pluralize, the pluralized form of the acronym must also be added.
		 * @param str
		 */
		function addAcronym(str:string):void;

		/**
		 * Adds a new humanization rule.
		 * Rules are used by humanize and titleize. str can be either a string or a regular expression, in which case human can contain refences to capturing groups.
		 * @param str
		 * @param human
		 */
		function addHuman(str:string|RegExp,human:string):void;

		/**
		 * Adds a new pluralization rule. Rules are used by pluralize and singularize.
		 * If singular is a string, then the reciprocal will also be added for singularization.
		 * If it is a regular expression, capturing groups are allowed for plural. plural defaults to the same as singular to allow uncountable words.
		 * @param singular
		 * @param plural
		 */
		function addPlural(singular:string|RegExp,plural?:string):void;
	}
//}