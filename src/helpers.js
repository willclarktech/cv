const { REACT_APP_STRIP_PRIVATE_DATA: STRIP_PRIVATE_DATA } = process.env;

export const redact = (info) => (STRIP_PRIVATE_DATA ? "[redacted]" : info);

export const obfuscateEmail = (email) =>
	STRIP_PRIVATE_DATA
		? email.replace(/@/, " [at] ").replace(/\./, " [dot] ")
		: email;

export const blah = (n) => Array(n).fill("blah").join(" ");
