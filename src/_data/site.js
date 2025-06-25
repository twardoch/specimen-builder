module.exports = {
	title: "Specimen Builder", // Edit this with the name of your type specimen

	// This determines the reading direction of the text blocks and glyph table.
	// Options:
	// Left to right: "ltr"
	// Right to left: "rtl"
	// Left to right, top to bottom: "ltrttb"
	// Right to left, top to bottom: "rtlttb"
	direction: "ltr",

	description:
		"A design built on top of Specimen Skeleton, based on research insights into effective digital type specimens.", // The description of your type specimen.

	typeface: "STIX fonts", // The name of the typeface you are building
	link: "https://www.stixfonts.org", // This is the URL used for the button
	about: "Detailed information about this typeface and its design. Replace this with your own description.", // All about the typeface
	designers: "Tiro Typeworks", // And who designed it
	coverage: "Latin, Greek, & Cyrillic", // This populates the link that anchors to the list of languages.
	language: "Supports many languages across Latin, Greek, and Cyrillic scripts. Update this list based on actual font coverage.", // A brief overview of language support

	// More info: https://css-tricks.com/essential-meta-tags-social-media/
	metatags: [
		{
			property: "og:title",
			content: ""
		},
		{
			property: "og:description",
			content: ""
		},
		{
			property: "og:image",
			content: ""
		},
		{
			property: "og:url",
			content: ""
		},
		{
			property: "og:site_name",
			content: ""
		},
		{
			name: "twitter:card",
			content: ""
		},
		{
			name: "twitter:image:alt",
			content: ""
		}
	]
};
